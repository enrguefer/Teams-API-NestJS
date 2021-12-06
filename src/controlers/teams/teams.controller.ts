import { Body, Controller, Get, Param, Post, HttpCode, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { TeamsService } from 'src/services/teams/teams.service';


@Controller()
export class TeamsController {

    constructor(private readonly teamsService: TeamsService){}

    @Get('/api/v1/teams')
    getTeams() : Array<any> {
        return this.teamsService.findAll();
    }

    @Get('/api/v1/team/:id')
    getTeam( @Param('id',  new ParseIntPipe({ errorHttpStatusCode : HttpStatus.NOT_ACCEPTABLE}) ) id : number ) : any {
        return this.teamsService.findOne(id);
    }

    @Post('/api/v1/teams')
    @HttpCode(201)
    postTeam( @Body() team : any ) : any {
        return this.teamsService.createOne(team);
    }

}