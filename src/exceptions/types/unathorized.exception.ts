import { HttpStatus } from "@nestjs/common";
import { ApiException } from "./api.exception";

/**
 * Excepción para peticiones sin credenciales
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
export class UnauthorizedException extends ApiException {

    constructor( message : string = 'Unathorized' ){
        super( message, HttpStatus.UNAUTHORIZED );
    }
}