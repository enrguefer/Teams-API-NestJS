import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseId, BaseIdDocument } from '../base.id';

/**
 * Modelo de datos base con auditoría para los objetos persitentes en BBDD
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
export class BaseEntity<T> extends BaseId<T> {

    @Prop()
    createdBy : String;

    @Prop()
    createdAt : Date;

    @Prop()
    modifiedBy : String;

    @Prop()
    modifiedAt : Date;
}

export type BaseEntityDocument<T> = BaseEntity<T> & BaseIdDocument<T>;