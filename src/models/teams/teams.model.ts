import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Team {

    @Prop()
    _id : number;

    @Prop({ required : true})
    name : string;

    @Prop()
    since : Date;

    @Prop()
    stadium : string;

}

export const TeamsSchema = SchemaFactory.createForClass(Team);