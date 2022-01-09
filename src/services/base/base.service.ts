import {HydratedDocument, Model} from 'mongoose';
import { UpdateResult, DeleteResult,  } from 'mongodb'
import { Injectable } from "@nestjs/common";
import { NotFoundException } from 'src/exceptions/types/not.found.exception';
import { ServiceUnavailableException } from 'src/exceptions/types/service.unavailable.exception';
import { BaseEntity } from 'src/models/base/entity/base.entity.model';

/**
 * Servicio base de la aplicación que implementa las operaciones CRUD contra BBDD
 * 
 * @param Entity
 * @param T
 */
@Injectable()
export class BaseService <Entity extends BaseEntity<T>, T> {


    constructor ( private baseModel : Model<Entity> ){ }


    async findAll() : Promise<Entity[]> {
        try {
            return await this.baseModel.find().exec();

        } catch ( Error ) {
            console.log(Error)
            throw new ServiceUnavailableException();
        }
    }


    async findOne( id : T ) : Promise<Entity> {
        
        let entity : any;

        try {

            entity = await this.baseModel.findById(id).exec();

        } catch ( Error ) {
            console.log(Error)
            throw new ServiceUnavailableException();
        }

        if ( entity===null ) 
            throw new NotFoundException("Not found entity _id: " + id);

        return entity._doc;
    }


    async createOne( newEntity : Entity ) : Promise<Entity> {

        let entity : any;
        
        try {

            let createdEntity : HydratedDocument<Entity> = new this.baseModel(newEntity);
            entity = await createdEntity.save();

        } catch ( Error ) {
            console.log(Error)
            throw new ServiceUnavailableException();
        }

        return entity._doc;
    }


    async updateOne( id : T, entity : Entity ) : Promise<Entity> {

        let res : UpdateResult;

        try {

            res = await this.baseModel.updateOne({_id : id},  entity).exec();

        } catch ( Error ) {
            console.log(Error)
            throw new ServiceUnavailableException();
        }

        if ( res.matchedCount===0 )
            throw new NotFoundException("Not found entity _id: " + id);

        return this.findOne(id);
    }


    async deleteOne( id : T ) : Promise<void> {

        let res : DeleteResult;

        try {

            res = await this.baseModel.deleteOne({_id: id}).exec();

        } catch ( Error ) {
            console.log(Error)
            throw new ServiceUnavailableException();
        }

        if ( res.deletedCount===0 )
            throw new NotFoundException("Not found entity _id: " + id);
    }

}