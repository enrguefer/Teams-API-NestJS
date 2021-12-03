import { Body, Controller, Get, Param, Post, HttpCode, ParseIntPipe } from '@nestjs/common';
import { TeamsService } from 'src/services/teams/teams.service';


@Controller()
export class TeamsController {

    constructor(private readonly teamsService: TeamsService){}

    @Get('/api/v1/teams')
    getTeams() : Array<any> {
        return this.teamsService.findAll();
    }

    @Get('/api/v1/team/:id')
    getTeam( @Param('id',  new ParseIntPipe() ) id : number ) : any {
        return this.teamsService.findOne(id);
    }

}