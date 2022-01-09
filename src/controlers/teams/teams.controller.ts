import { Body, Controller, Get, Param, Post, HttpCode, Put, Delete, UseInterceptors } from '@nestjs/common';
import { MapInterceptor, MapPipe } from '@automapper/nestjs';
import { TeamDTO } from 'src/models/teams/dto/teams.dto.model';
import { TeamEntity } from 'src/models/teams/entity/teams.entity.model';
import { MongoIdPipe } from 'src/pipes/mongo.id.pipe';
import { TeamsService } from 'src/services/teams/teams.service';


@Controller()
export class TeamsController {

    constructor(private readonly teamsService: TeamsService){}

    @Get('/api/v1/teams')
    @UseInterceptors( MapInterceptor(TeamDTO, TeamEntity, {isArray: true}) )
    async getTeams() : Promise<TeamDTO[]> {
        return this.teamsService.findAll();
    }

    @Get('/api/v1/team/:id')
    @UseInterceptors( MapInterceptor(TeamDTO, TeamEntity) )
    async getTeam( 
        @Param('id', new MongoIdPipe() ) id : string 
    ) : Promise<TeamDTO> {
        return this.teamsService.findOne(id);
    }

    @Post('/api/v1/teams')
    @HttpCode(201)
    @UseInterceptors( MapInterceptor(TeamDTO, TeamEntity) )
    postTeam( 
        @Body( MapPipe(TeamEntity, TeamDTO) ) team : TeamEntity 
    ) : Promise<TeamDTO> {
        return this.teamsService.createOne(team);
    }

    @Put('/api/v1/team/:id')
    @UseInterceptors( MapInterceptor(TeamDTO, TeamEntity) )
    putTeam( 
        @Param('id', new MongoIdPipe() ) id : string, 
        @Body( MapPipe(TeamEntity, TeamDTO) ) team : TeamEntity 
    ) : Promise<TeamDTO> {
        return this.teamsService.updateOne( id, team)
    }

    @HttpCode(204)
    @Delete('/api/v1/team/:id')
    deleteTeam( @Param ('id', new MongoIdPipe() ) id : string ) : void {
        this.teamsService.deleteOne(id);
    }

}
