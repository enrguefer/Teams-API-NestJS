import { Body, Controller, Get, Param, Post, HttpCode, ParseUUIDPipe, HttpStatus, Put, Delete } from '@nestjs/common';
import { Team } from 'src/models/teams/teams.model';
import { TeamsService } from 'src/services/teams/teams.service';


@Controller()
export class TeamsController {

    constructor(private readonly teamsService: TeamsService){}

    @Get('/api/v1/teams')
    getTeams() : Promise<Team[]> {
        return this.teamsService.findAll();
    }

    //new ParseUUIDPipe({version: '4', errorHttpStatusCode : HttpStatus.NOT_ACCEPTABLE})

    @Get('/api/v1/team/:id')
    getTeam( 
        @Param('id') id : string 
    ) : Promise<Team> {
        return this.teamsService.findOne(id);
    }

    @Post('/api/v1/teams')
    @HttpCode(201)
    postTeam( 
        @Body() team : Team 
    ) : Promise<Team> {
        return this.teamsService.createOne(team);
    }

    @Put('/api/v1/team/:id')
    putTeam( 
        @Param('id') id : string,
        @Body() team : Team 
    ) : Promise<Team> {
        return this.teamsService.updateOne( id, team)
    }

    @HttpCode(204)
    @Delete('/api/v1/team/:id')
    deleteTeam( 
        @Param ('id') id : string
    ) : void {
        this.teamsService.deleteOne(id);
    }

}