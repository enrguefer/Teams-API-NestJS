import { HttpStatus } from "@nestjs/common";
import { ApiException } from "./api.exception";

/**
 * Excepción para peticiónes entrantes en conflicto con el estado recurso
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
export class ConflictException extends ApiException {

    constructor( message : string = 'Conflict' ){
        super( message, HttpStatus.CONFLICT );
    }
}