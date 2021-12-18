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

    async findAll() : Promise<T[]> {
        return null;
    }

    async findOne( id : string ) : Promise<T> {
        return null;
    }

    async createOne( T : object ) : Promise<T> {
        return null;
    }

    async updateOne( id : string, T : object ) : Promise<T> {
        return null;
    }

    async deleteOne( id : string) : Promise<void> {
        return null;
    }

}