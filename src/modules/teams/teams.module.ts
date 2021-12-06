import { Module } from "@nestjs/common";
import { TeamsController } from "src/controlers/teams/teams.controller";
import { TeamsService } from "src/services/teams/teams.service";
import { Team } from 'src/models/teams/teams.model';


@Module({
    controllers : [TeamsController],
    providers : [TeamsService],
    imports : [Team]
})
export class TeamsModule { }