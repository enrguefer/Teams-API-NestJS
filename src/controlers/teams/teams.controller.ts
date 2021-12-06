import { Body, Controller, Get, Param, Post, HttpCode, ParseIntPipe, HttpStatus, Put, Delete } from '@nestjs/common';
import { Team } from 'src/models/teams/teams.model';
import { TeamsService } from 'src/services/teams/teams.service';


@Controller()
export class TeamsController {

    constructor(private readonly teamsService: TeamsService){}

    @Get('/api/v1/teams')
    getTeams() : Array<Team> {
        return this.teamsService.findAll();
    }

    @Get('/api/v1/team/:id')
    getTeam( 
        @Param('id',  new ParseIntPipe({ errorHttpStatusCode : HttpStatus.NOT_ACCEPTABLE}) ) id : number 
    ) : Team {
        return this.teamsService.findOne(id);
    }

    @Post('/api/v1/teams')
    @HttpCode(201)
    postTeam( 
        @Body() team : Team 
    ) : Team {
        return this.teamsService.createOne(team);
    }

    @Put('/api/v1/team/:id')
    putTeam( 
        @Param('id', new ParseIntPipe({errorHttpStatusCode : HttpStatus.NOT_ACCEPTABLE})) id : number,
        @Body() team : Team 
    ) : Team {
        return this.teamsService.updateOne( id, team)
    }

    @HttpCode(204)
    @Delete('/api/v1/team/:id')
    deleteTeam( 
        @Param ('id', new ParseIntPipe({errorHttpStatusCode : HttpStatus.NOT_ACCEPTABLE}) ) id : number
    ) : void {
        this.teamsService.deleteOne(id);
    }

}