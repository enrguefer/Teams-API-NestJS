import { Controller, Get, Param } from '@nestjs/common';
import { TeamsService } from 'src/services/teams/teams.service';


@Controller()
export class TeamsController {

    constructor(private readonly teamsService: TeamsService){}

    @Get('/api/v1/teams')
    getTeams() : Object {
        return this.teamsService.getTeams();
    }

    @Get('/api/v1/team/:id')
    getTeam(@Param() params) : Object {
        return this.teamsService.getTeam(params.id);
    }

}