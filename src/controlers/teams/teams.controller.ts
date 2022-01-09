import { Body, Controller, Get, Param, Post, HttpCode, Put, Delete, UseInterceptors } from '@nestjs/common';
import { MapInterceptor, MapPipe } from '@automapper/nestjs';
import { TeamDTO } from 'src/models/teams/dto/teams.dto.model';
import { TeamEntity } from 'src/models/teams/entity/teams.entity.model';
import { MongoIdPipe } from 'src/pipes/mongo.id.pipe';
import { TeamsService } from 'src/services/teams/teams.service';
import { LOGGER } from 'src/app.module';


@Controller()
export class TeamsController {

    constructor(private readonly teamsService: TeamsService){}

    @Get('/api/v1/teams')
    @UseInterceptors( MapInterceptor(TeamDTO, TeamEntity, {isArray: true}) )
    async getTeams() : Promise<TeamDTO[]> {

        LOGGER.trace("IN: TeamsController::getTeams:");
        let res : TeamDTO[] = await this.teamsService.findAll();

        LOGGER.trace("OUT: TeamsController::getTeams: "+res);
        return res;
    }

    @Get('/api/v1/team/:id')
    @UseInterceptors( MapInterceptor(TeamDTO, TeamEntity) )
    async getTeam( 
        @Param('id', new MongoIdPipe() ) id : string 
    ) : Promise<TeamDTO> {
        
        LOGGER.trace("IN: TeamsController::getTeam: _id: ", id);
        let res : TeamDTO = await this.teamsService.findOne(id);

        LOGGER.trace("OUT: TeamsController::getTeam: _id: ", id, res);
        return res;
    }

    @Post('/api/v1/teams')
    @HttpCode(201)
    @UseInterceptors( MapInterceptor(TeamDTO, TeamEntity) )
    async postTeam( 
        @Body( MapPipe(TeamEntity, TeamDTO) ) team : TeamEntity 
    ) : Promise<TeamDTO> {

        LOGGER.trace("IN: TeamsController::postTeam: team: ", team);
        let res : TeamDTO = await this.teamsService.createOne(team);

        LOGGER.trace("OUT: TeamsController::postTeam: team: ", team);
        return res;
    }

    @Put('/api/v1/team/:id')
    @UseInterceptors( MapInterceptor(TeamDTO, TeamEntity) )
    async putTeam( 
        @Param('id', new MongoIdPipe() ) id : string, 
        @Body( MapPipe(TeamEntity, TeamDTO) ) team : TeamEntity 
    ) : Promise<TeamDTO> {

        LOGGER.trace("IN: TeamsController::putTeam: _id: ", id, team);
        let res : TeamDTO = await this.teamsService.updateOne( id, team);

        LOGGER.trace("OUT: TeamsController::putTeam: _id: ", id, team);
        return res;
    }

    @HttpCode(204)
    @Delete('/api/v1/team/:id')
    async deleteTeam( @Param ('id', new MongoIdPipe() ) id : string ) : Promise<void> {

        LOGGER.trace("IN: TeamsController::deleteTeam _id:", id);
        await this.teamsService.deleteOne(id);

        LOGGER.trace("OUT: TeamsController::deleteTeam _id: ", id);
    }

}
