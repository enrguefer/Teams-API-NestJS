import * as mongoose from 'mongoose';
import { Prop } from '@nestjs/mongoose';

/**
 * Modelo de datos base con _id para los objetos persitentes en BBDD
 * 
 * @param T
 * @author Enrique Guerrero Fernández
 * @version 1
 */
export class BaseId<T> {

    @Prop({ 
        type: mongoose.Schema.Types.ObjectId,
        auto: true })
    _id : T;
}

export type BaseIdDocument<T> = BaseId<T> & Document;
