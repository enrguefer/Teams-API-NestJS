import * as mongoose from 'mongoose';
import { Injectable } from "@nestjs/common";
import { Base, BaseDocument } from "src/models/base/base.model";

/**
 * Servicio base de la aplicación que implementa las operaciones CRUD contra BBDD
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
@Injectable()
export class BaseService < EntityDocument extends BaseDocument> {

    constructor ( private baseModel : mongoose.Model<EntityDocument> ){ }

    async findAll() : Promise<EntityDocument[]> {
        return this.baseModel.find().exec();
    }

    async findOne( id : any ) : Promise<EntityDocument> {
        return this.baseModel.findById(id).exec();
    }

    async createOne( entityDTO : any ) : Promise<EntityDocument> {
        const createdEntity = new this.baseModel(entityDTO);
        return createdEntity.save();
    }

    async updateOne( id : any, entityDTO : any ) : Promise<EntityDocument> {
        this.baseModel.updateOne({_id : id},  entityDTO).exec();
        return this.findOne(id);
    }

    async deleteOne( id : any) : Promise<void> {
        this.baseModel.deleteOne({_id: id}).exec();
    }

}