import { Prop } from "@nestjs/mongoose";
import { BaseDTO } from "src/models/base/dto/base.dto.model";

/**
 * Modelo de datos DTO para los objetos de tipo Teams servidos a través de la API
 * 
 * @author Enrique Guerrero Fernández
 * @version 1
 */
export class TeamDTO extends BaseDTO<String> {

    @Prop({ required : true})
    name : String;

    @Prop()
    since : Date;

    @Prop()
    stadium : string;

}