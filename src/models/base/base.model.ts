import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

/**
 * Modelo de datos base con auditoría para los modelos de datos de la aplicación
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */

@Schema()
export class Base {

    @Prop()
    _id : number;

    @Prop()
    createdAt : Date;

    @Prop()
    modifiedAt : Date;
}

export const BaseSchema = SchemaFactory.createForClass(Base);