import { Prop } from "@nestjs/mongoose";
import { BaseDTO } from "src/models/base/dto/base.dto.model";

export class TeamDTO extends BaseDTO<String> {

    @Prop({ required : true})
    name : String;

    @Prop()
    since : Date;

    @Prop()
    stadium : string;

}