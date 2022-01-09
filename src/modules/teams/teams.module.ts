import { Module } from "@nestjs/common";
import { TeamsController } from "src/controlers/teams/teams.controller";
import { TeamsService } from "src/services/teams/teams.service";
import { MongooseModule } from "@nestjs/mongoose";
import { TeamEntity, TeamEntitySchema } from "src/models/teams/entity/teams.entity.model";
import { BaseMapper } from "src/models/base/mapper/base.mapper";
import { TeamMapper } from "src/models/teams/mapper/teams.mapper";


@Module({
    imports : [ MongooseModule.forFeature([{ name: TeamEntity.name, schema: TeamEntitySchema}]) ],
    controllers : [TeamsController],
    providers : [TeamsService, BaseMapper, TeamMapper ]
})
export class TeamsModule { }