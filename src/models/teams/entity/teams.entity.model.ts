import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity, BaseEntityDocument } from "src/models/base/entity/base.entity.model";

export type TeamEntityDocument = TeamEntity & BaseEntityDocument<String>;

@Schema( {collection : 'teams'})
export class TeamEntity extends BaseEntity<String> {

    @Prop({ required : true})
    name : String;

    @Prop()
    since : Date;

    @Prop()
    stadium : string;

}

export const TeamEntitySchema = SchemaFactory.createForClass(TeamEntity);