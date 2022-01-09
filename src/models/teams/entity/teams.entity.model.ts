import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity, BaseEntityDocument } from "src/models/base/entity/base.entity.model";

/**
 * Modelo de datos de persistencia en BBDD de Teams
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
@Schema( {collection : 'teams'})
export class TeamEntity extends BaseEntity<String> {

    @Prop({ required : true})
    name : String;

    @Prop()
    since : Date;

    @Prop()
    stadium : string;

}

export type TeamEntityDocument = TeamEntity & BaseEntityDocument<String>;

export const TeamEntitySchema = SchemaFactory.createForClass(TeamEntity);