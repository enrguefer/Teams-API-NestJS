import { ArgumentMetadata, Injectable, PipeTransform, HttpStatus, HttpException } from "@nestjs/common";
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

        let res = await MongoIdPipe.mongodb.ObjectID.isValid(value);
        
        if(!res) 
            throw new ConflictException("Invalid mongo _id: " + value);
        else    
            return value;
    }

}