import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

/**
 * Modelo de datos base con auditoría para los modelos de datos de la aplicación
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */

 export type BaseDocument = Base & Document;

@Schema()
export class Base {

    @Prop({ 
        type: mongoose.Schema.Types.ObjectId,
        auto: true })
    _id : string;

    @Prop()
    createdAt : Date;

    @Prop()
    modifiedAt : Date;
}

export const BaseSchema = SchemaFactory.createForClass(Base);