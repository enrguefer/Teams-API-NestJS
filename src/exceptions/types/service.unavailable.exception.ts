import { HttpException, HttpStatus } from "@nestjs/common";
import { ApiException } from "./api.exception";

/**
 * Excepción para errores controlados producidos en la aplicación
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
export class ServiceUnavailableException extends ApiException {

    constructor( message : string = 'Service Unavailable') {
        super( message, HttpStatus.SERVICE_UNAVAILABLE );
    }
}