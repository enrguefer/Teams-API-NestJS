import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from '../base/base.service';
import { TeamEntity, TeamEntityDocument } from 'src/models/teams/entity/teams.entity.model';

@Injectable()
export class TeamsService extends BaseService <TeamEntityDocument, String> {

    constructor( @InjectModel(TeamEntity.name) private teamModel : Model<TeamEntityDocument> ){
        super(teamModel);
    }

}