import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team, TeamDocument } from 'src/models/teams/teams.model';
import { BaseService } from '../base/base.service';

@Injectable()
export class TeamsService extends BaseService <TeamDocument> {

    constructor( @InjectModel(Team.name) private teamModel : Model<TeamDocument> ){
        super(teamModel);
    }

}