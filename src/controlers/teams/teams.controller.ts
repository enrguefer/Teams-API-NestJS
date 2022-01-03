import { Body, Controller, Get, Param, Post, HttpCode, ParseUUIDPipe, HttpStatus, Put, Delete } from '@nestjs/common';
import { TeamEntity } from 'src/models/teams/entity/teams.entity.model';
import { MongoIdPipe } from 'src/pipes/mongo.id.pipe';
import { TeamsService } from 'src/services/teams/teams.service';


@Controller()
export class TeamsController {

    constructor(private readonly teamsService: TeamsService){}

    @Get('/api/v1/teams')
    getTeams() : Promise<TeamEntity[]> {
        return this.teamsService.findAll();
    }

    @Get('/api/v1/team/:id')
    getTeam( 
        @Param('id', new MongoIdPipe() ) id : string 
    ) : Promise<TeamEntity> {
        return this.teamsService.findOne(id);
    }

    @Post('/api/v1/teams')
    @HttpCode(201)
    postTeam( 
        @Body() team : TeamEntity 
    ) : Promise<TeamEntity> {
        return this.teamsService.createOne(team);
    }

    @Put('/api/v1/team/:id')
    putTeam( 
        @Param('id', new MongoIdPipe() ) id : string,
        @Body() team : TeamEntity 
    ) : Promise<TeamEntity> {
        return this.teamsService.updateOne( id, team)
    }

    @HttpCode(204)
    @Delete('/api/v1/team/:id')
    deleteTeam( 
        @Param ('id', new MongoIdPipe() ) id : string
    ) : void {
        this.teamsService.deleteOne(id);
    }

}