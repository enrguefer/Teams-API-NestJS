import { Module } from "@nestjs/common";
import { TeamsController } from "src/controlers/teams/teams.controller";
import { TeamsService } from "src/services/teams/teams.service";

@Module({
    controllers : [TeamsController],
    providers : [TeamsService]
})
export class TeamsModule{ }