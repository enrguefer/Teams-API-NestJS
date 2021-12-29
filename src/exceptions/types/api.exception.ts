import { HttpException, HttpStatus } from "@nestjs/common";

/**
 * Excepción genérica de la aplicación
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
export class ApiException extends HttpException {

    constructor( message : string, errorCode : HttpStatus ) {
        super(message, errorCode );
    }

}