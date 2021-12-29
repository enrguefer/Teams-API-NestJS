import { HttpStatus } from "@nestjs/common";
import { ApiException } from "./api.exception";

/**
 * Excepción para peticiones de usuarios sin permisos suficientes
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
export class ForbiddenException extends ApiException {

    constructor( message : string = 'Invalid Grants' ){
        super( message, HttpStatus.FORBIDDEN );
    }
}