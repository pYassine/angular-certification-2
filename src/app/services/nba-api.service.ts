import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { subDays, format } from "date-fns";
import { Observable } from "rxjs";
import { NbaGamesResults, NbaTeam, NbaTeamResults } from "../types";

@Injectable({
  providedIn: "root",
})
export class NbaApiService {
  constructor(public http: HttpClient) {}

  public getTeams(): Observable<NbaTeamResults> {
    return this.http.get<NbaTeamResults>(
      "https://free-nba.p.rapidapi.com/teams"
    );
  }

  public getTeam(teamId: string): Observable<NbaTeam> {
    return this.http.get<NbaTeam>(
      "https://free-nba.p.rapidapi.com/teams/" + teamId
    );
  }

  public getGames(teamId: string): Observable<NbaGamesResults> {
    let dates = "";
    for (let i = 1; i <= 12; i++) {
      dates =
        dates + "&dates[]=" + format(subDays(new Date(), i), "yyyy-MM-dd");
    }
    return this.http.get<NbaGamesResults>(
      "https://free-nba.p.rapidapi.com/games?page=0" +
        dates +
        "&per_page=12&team_ids[]=" +
        teamId
    );
  }
}
