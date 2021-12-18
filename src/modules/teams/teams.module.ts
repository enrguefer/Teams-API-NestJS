import { Module } from "@nestjs/common";
import { TeamsController } from "src/controlers/teams/teams.controller";
import { TeamsService } from "src/services/teams/teams.service";
import { Team, TeamSchema } from 'src/models/teams/teams.model';
import { MongooseModule } from "@nestjs/mongoose";


@Module({
    imports : [MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema}])],
    controllers : [TeamsController],
    providers : [TeamsService]
})
export class TeamsModule { }