import { HttpStatus } from "@nestjs/common";
import { ApiException } from "./api.exception";

/**
 * Excepción para registros no encontrados en la aplicación
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
export class NotFoundException extends ApiException {

    constructor( message : string = 'Not Found' ){
        super( message, HttpStatus.NOT_FOUND );
    }

}