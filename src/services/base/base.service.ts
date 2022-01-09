import {HydratedDocument, Model} from 'mongoose';
import { UpdateResult, DeleteResult,  } from 'mongodb'
import { Injectable } from "@nestjs/common";
import { NotFoundException } from 'src/exceptions/types/not.found.exception';
import { ServiceUnavailableException } from 'src/exceptions/types/service.unavailable.exception';
import { BaseEntity } from 'src/models/base/entity/base.entity.model';
import { LOGGER } from 'src/app.module';

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

        LOGGER.trace("IN: BaseService::findAll: ");
        let res : Entity[];

        try {

            res = await this.baseModel.find().exec();

        } catch ( Error ) {
            LOGGER.error("ERROR: BaseService::findAll: ", Error);
            throw new ServiceUnavailableException();
        }

        LOGGER.trace("OUT: BaseService::findAll: " + res);
        return res;
    }


    async findOne( id : T ) : Promise<Entity> {

        LOGGER.trace("IN: BaseService::findOne: _id: ", id);
        let entity : any;

        try {

            entity = await this.baseModel.findById(id).exec();

        } catch ( Error ) {
            LOGGER.error("ERROR: BaseService::findOne: _id: ", id, Error);
            throw new ServiceUnavailableException();
        }

        if ( entity===null ) {
            LOGGER.error("ERROR: BaseService::findOne: Not found entity _id:", id);
            throw new NotFoundException("Not found entity _id: " + id);
        }
        

        LOGGER.trace("OUT: BaseService::findOne: _id: ", id, entity);
        return entity._doc;
    }


    async createOne( newEntity : Entity ) : Promise<Entity> {

        LOGGER.trace("IN: BaseService::createOne: newEntity:", newEntity);
        let entity : any;
        
        try {

            let createdEntity : HydratedDocument<Entity> = new this.baseModel(newEntity);
            entity = await createdEntity.save();

        } catch ( Error ) {
            LOGGER.error("ERROR: BaseService::createOne: ", Error);
            throw new ServiceUnavailableException();
        }

        LOGGER.trace("OUT: BaseService::createOne: newEntity:", entity);
        return entity._doc;
    }


    async updateOne( id : T, entity : Entity ) : Promise<Entity> {

        LOGGER.trace("IN: BaseService::updateOne: _id: ", id, entity);
        let res : UpdateResult;

        try {

            res = await this.baseModel.updateOne({_id : id},  entity).exec();

        } catch ( Error ) {
            LOGGER.error("ERROR: BaseService::updateOne: _id: ", id);
            throw new ServiceUnavailableException();
        }

        if ( res.matchedCount===0 ) {
            LOGGER.error("ERROR: BaseService::updateOne: Not found entity _id:", id);
            throw new NotFoundException("Not found entity _id: " + id);
        }

        LOGGER.trace("OUT: BaseService::updateOne: _id: ", id, entity);
        return this.findOne(id);
    }


    async deleteOne( id : T ) : Promise<void> {

        LOGGER.trace("IN: BaseService::deleteOne: _id: ", id);
        let res : DeleteResult;

        try {

            res = await this.baseModel.deleteOne({_id: id}).exec();

        } catch ( Error ) {
            LOGGER.error("ERROR: BaseService::deleteOne: _id: ", id);
            throw new ServiceUnavailableException();
        }

        if ( res.deletedCount===0 ) {
            LOGGER.error("ERROR: BaseService::deleteOne: Not found entity _id:", id);
            throw new NotFoundException("Not found entity _id: " + id);
        }
        LOGGER.trace("OUT: BaseService::deleteOne: _id: ", id);
    }

}