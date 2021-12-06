import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Base } from "../base/base.model";

@Schema()
export class Team extends Base {

    @Prop({ required : true})
    name : string;

    @Prop()
    since : Date;

    @Prop()
    stadium : string;

}

export const TeamsSchema = SchemaFactory.createForClass(Team);