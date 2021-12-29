import { HttpStatus } from "@nestjs/common";
import { ApiException } from "./api.exception";

/**
 * Excepción para errores no controlados producidos en la aplicación
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
export class InternalServerErrorException extends ApiException {

    constructor( message : string = "Internal Server Error" ) {
        super( message, HttpStatus.INTERNAL_SERVER_ERROR );
    }
}