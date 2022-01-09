import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from '../base/base.service';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { TeamEntity } from 'src/models/teams/entity/teams.entity.model';

@Injectable()
export class TeamsService extends BaseService <TeamEntity, String> {

    constructor( 
        @InjectModel(TeamEntity.name) private teamModel : Model<TeamEntity>,
        @InjectMapper() private readonly mapper: Mapper ){
        super(teamModel);
    }

}