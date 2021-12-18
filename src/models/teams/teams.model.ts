import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Base } from "../base/base.model";
import { Document } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema()
export class Team extends Base {

    @Prop({ required : true})
    name : string;

    @Prop()
    since : Date;

    @Prop()
    stadium : string;

}

export const TeamSchema = SchemaFactory.createForClass(Team);