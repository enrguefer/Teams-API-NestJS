import { Injectable } from "@nestjs/common";
import { Base } from "src/models/base/base.model";

/**
 * Servicio base de la aplicación que implementa las operaciones CRUD contra BBDD
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
@Injectable()
export class BaseService <T extends Base> {

    findAll() : Array<T> {
        return null;
    }

    findOne( id : number ) : T {
        return null;
    }

    createOne( T : object ) : T {
        return null;
    }

    updateOne( id : number, T : object ) : T {
        return null;
    }

    deleteOne( id : number) : void {
        return null;
    }

}