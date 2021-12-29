import { HttpStatus } from "@nestjs/common";
import { ApiException } from "./api.exception";

/**
 * Excepción para peticiónes recibidas no válidas
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
export class BadRequestException extends ApiException {

    constructor( message : string = 'Invalid Request' ){
        super( message, HttpStatus.BAD_REQUEST );
    }
}