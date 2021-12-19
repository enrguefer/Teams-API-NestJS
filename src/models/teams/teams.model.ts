import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Base, BaseDocument } from "../base/base.model";

export type TeamDocument = Team & BaseDocument;

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