import { ArgumentMetadata, Injectable, PipeTransform, HttpStatus, HttpException } from "@nestjs/common";



@Injectable()
export class MongoIdPipe implements PipeTransform {

    mongodb = require("mongodb");
    errorCode : HttpStatus; 
    
    /**
     * Validador para comprobar que el parámetro es un ObjectId válido de Mongo.
     * 
     * @param {HttpStatus} [HttpStatus.CONFLICT]
     * 
     * @author Enrique Guerrero Fernández
     */
    constructor( errorHttpStatusCode : HttpStatus = HttpStatus.CONFLICT ){
        this.errorCode = errorHttpStatusCode;
    }

    async transform(value: any, metadata: ArgumentMetadata) {

        let res = await this.mongodb.ObjectID.isValid(value);
        
        if(!res) 
            throw new HttpException("Invalid mongo ObjectId()", this.errorCode);
        else    
            return value;
    }

}