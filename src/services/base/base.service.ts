import * as mongoose from 'mongoose';
import { UpdateResult, DeleteResult } from 'mongodb'
import { Injectable } from "@nestjs/common";
import { BaseDocument } from "src/models/base/base.model";
import { NotFoundException } from 'src/exceptions/types/not.found.exception';
import { ServiceUnavailableException } from 'src/exceptions/types/service.unavailable.exception';

/**
 * Servicio base de la aplicación que implementa las operaciones CRUD contra BBDD
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
@Injectable()
export class BaseService <EntityDocument extends BaseDocument> {

    constructor ( private baseModel : mongoose.Model<EntityDocument> ){ }


    async findAll() : Promise<EntityDocument[]> {
        try {

            return await this.baseModel.find().exec();

        } catch ( Error ) {
            throw new ServiceUnavailableException();
        }
    }


    async findOne( id : any ) : Promise<EntityDocument> {
        
        let res : EntityDocument;

        try {

            res = await this.baseModel.findById(id).exec();

        } catch ( Error ) {
            throw new ServiceUnavailableException();
        }

        if ( res===null ) 
            throw new NotFoundException("Not found entity _id: " + id);

        return res;
    }


    async createOne( entityDTO : any ) : Promise<EntityDocument> {
        try {

            let createdEntity = new this.baseModel(entityDTO);
            return await createdEntity.save();

        } catch ( Error ) {
            throw new ServiceUnavailableException();
        }
    }


    async updateOne( id : any, entityDTO : any ) : Promise<EntityDocument> {

        let res : UpdateResult;

        try {

            res = await this.baseModel.updateOne({_id : id},  entityDTO).exec();

        } catch ( Error ) {
            throw new ServiceUnavailableException();
        }

        if ( res.matchedCount===0 )
            throw new NotFoundException("Not found entity _id: " + id);

        return this.findOne(id);
    }


    async deleteOne( id : any ) : Promise<void> {

        let res : DeleteResult;

        try {

            res = await this.baseModel.deleteOne({_id: id}).exec();

        } catch ( Error ) {
            throw new ServiceUnavailableException();
        }

        if ( res.deletedCount===0 )
            throw new NotFoundException("Not found entity _id: " + id);
    }

}