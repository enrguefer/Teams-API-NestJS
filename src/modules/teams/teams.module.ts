import { Module } from "@nestjs/common";
import { TeamsController } from "src/controlers/teams/teams.controller";
import { TeamsService } from "src/services/teams/teams.service";
import { MongooseModule } from "@nestjs/mongoose";
import { TeamEntity, TeamEntitySchema } from "src/models/teams/entity/teams.entity.model";


@Module({
    imports : [ MongooseModule.forFeature([{ name: TeamEntity.name, schema: TeamEntitySchema}]) ],
    controllers : [TeamsController],
    providers : [TeamsService]
})
export class TeamsModule { }