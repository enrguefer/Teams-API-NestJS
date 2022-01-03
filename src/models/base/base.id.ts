import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

/**
 * Modelo de datos base con auditoría para los modelos de datos de la aplicación
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */

export type BaseIdDocument<T> = BaseId<T> & Document;

export class BaseId<T> {

    @Prop({ 
        type: mongoose.Schema.Types.ObjectId,
        auto: true })
    _id : T;
}