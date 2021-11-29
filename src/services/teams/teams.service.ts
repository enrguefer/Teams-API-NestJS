import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {

    static team1  = {'_id': 10001, 'name': 'Sevilla Blanco Rojo', 'since': new Date("1980-01-26"), 'stadium': 'sánchez-pizjuán'};
    static team2  = {'_id': 10002, 'name': 'Cadiz Amarillo', 'since': new Date("1910-09-10"), 'stadium': 'nuevo mirandilla'};
    static team3  = {'_id': 10003, 'name': 'Valencia Azulgrana', 'since': new Date("1909-09-09"), 'stadium': 'valencia ciudad'};
    static team4  = {'_id': 10004, 'name': 'Valencia Blanco', 'since': new Date("1919-03-18"), 'stadium': 'mestalla ciudad'};
    static team5  = {'_id': 10005, 'name': 'Deportivo de Acoruña', 'since': new Date("1906-03-02"), 'stadium': 'riazor estadio'};

    static teams = [ TeamsService.team1, TeamsService.team2, TeamsService.team3, TeamsService.team4, TeamsService.team5];

    getTeams() : any {
        return TeamsService.teams;
    }

    getTeam( id : number ) : any {
        return TeamsService.teams.find(i => i._id = id);
    }

}