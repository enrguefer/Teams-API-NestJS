import { Injectable } from '@nestjs/common';
import { Team } from 'src/models/teams/teams.model';
import { utilsService } from '../utils/utils.service';

@Injectable()
export class TeamsService {

    static team1 : Team = {'_id': 10001, 'name': 'Sevilla Blanco Rojo', 'since': new Date("1890-01-25"), 'stadium': 'sánchez-pizjuán'};
    static team2 : Team = {'_id': 10002, 'name': 'Cadiz Amarillo', 'since': new Date("1910-09-10"), 'stadium': 'nuevo mirandilla'};
    static team3 : Team = {'_id': 10003, 'name': 'Valencia Azulgrana', 'since': new Date("1909-09-09"), 'stadium': 'valencia ciudad'};
    static team4 : Team = {'_id': 10004, 'name': 'Valencia Blanco', 'since': new Date("1919-03-18"), 'stadium': 'mestalla ciudad'};
    static team5 : Team = {'_id': 10005, 'name': 'Deportivo de Acoruña', 'since': new Date("1906-03-02"), 'stadium': 'riazor estadio'};

    static teams : Array<Team> = [ TeamsService.team1, TeamsService.team2, TeamsService.team3, TeamsService.team4, TeamsService.team5];


    findAll() : Array<Team> {
        return TeamsService.teams;
    }

    findOne( id : number ) : Team {
        return TeamsService.teams.find(i => i._id === id);
    }

    createOne( team : Team) : Team {
        team._id = utilsService.randomNumberBetween(20000, 99999);
        TeamsService.teams.push(team);
        return team;
    }

    updateOne( id: number, updatedTeam: Team ) : Team {

        updatedTeam._id = id;
        let index = TeamsService.teams.findIndex( i => i._id = id);
        
        TeamsService.teams[index] = updatedTeam;
        return updatedTeam;
    }

    deleteOne( id : number) : void {
        let index = TeamsService.teams.findIndex( i => i._id === id);
        if(index != -1) TeamsService.teams.splice(index, 1);
    }

}