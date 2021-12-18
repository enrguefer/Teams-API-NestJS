import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team, TeamDocument } from 'src/models/teams/teams.model';
import { BaseService } from '../base/base.service';
import { utilsService } from '../utils/utils.service';

@Injectable()
export class TeamsService extends BaseService<Team> {

    constructor( @InjectModel(Team.name) private teamModel : Model<TeamDocument> ){
        super();
    }

    async findAll() : Promise<Team[]> {
        return this.teamModel.find().exec();
    }

    async findOne( id : string ) : Promise<Team> {
        return this.teamModel.findById(id).exec();
    }

    async createOne( teamDto : Team) : Promise<Team> {
        const createdTeam = new this.teamModel(teamDto);
        return createdTeam.save();
    }

    async updateOne( id: string, teamDto: Team ) : Promise<Team> {
        teamDto._id = id;
        const updatedTeam = new this.teamModel(teamDto);
        return updatedTeam.update();
    }

    async deleteOne( id : string) : Promise<void> {
        this.deleteOne(id);
    }

}