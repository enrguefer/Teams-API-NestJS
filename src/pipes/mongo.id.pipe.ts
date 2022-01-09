import { ArgumentMetadata, Injectable, PipeTransform, HttpStatus, HttpException } from "@nestjs/common";
import { LOGGER } from "src/app.module";
import { ConflictException } from "src/exceptions/types/conflict.exception";

/**
 * Validador para comprobar que el parámetro es un ObjectId válido de Mongo.
 * 
 * @param {HttpStatus} [HttpStatus.CONFLICT]
 * 
 * @author Enrique Guerrero Fernández
 */

@Injectable()
export class MongoIdPipe implements PipeTransform {

    static mongodb = require("mongodb");

    async transform(value: any, metadata: ArgumentMetadata) {

        LOGGER.trace("IN: MongoIdPipe::transform: isValidId: ", value);

        let res = await MongoIdPipe.mongodb.ObjectID.isValid(value);
        
        if(!res) {
            LOGGER.error("ERROR: MongoIdPipe::transform: Invalid mongo _id: ", value);
            throw new ConflictException("Invalid mongo _id: " + value);
            
        } else {
            LOGGER.trace("OUT: MongoIdPipe::transform: isValidId: ", value);
            return value;
        }
    }

}