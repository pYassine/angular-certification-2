import { NbaTeam } from "./../../types/NbaTeam.interface";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { NbaApiService } from "../../services/nba-api.service";
import { NbaTeamResults } from "../../types";

@Component({
  selector: "app-teams-stats-page",
  templateUrl: "./teams-stats-page.component.html",
  styleUrls: ["./teams-stats-page.component.scss"],
})
export class TeamsStatsPageComponent implements OnInit, OnDestroy {
  public subscription = new Subscription();
  public selectedTeamsIds: string[];
  public teams: NbaTeam[];
  public selectedTeam!: number;

  constructor(private readonly nbaApiService: NbaApiService) {
    const savedTeams = localStorage.getItem("teams");
    this.selectedTeamsIds = savedTeams ? JSON.parse(savedTeams) : [];
    this.teams = [];
  }

  public addTeam(teamId: number): void {
    if (this.selectedTeamsIds.indexOf(teamId.toString()) === -1) {
      this.selectedTeamsIds.push(teamId.toString());
      localStorage.setItem("teams", JSON.stringify(this.selectedTeamsIds));
    }
  }

  public removeTeam(teamId: string): void {
    const index = this.selectedTeamsIds.indexOf(teamId);
    if (index !== -1) {
      this.selectedTeamsIds.splice(index, 1);
      localStorage.setItem("teams", JSON.stringify(this.selectedTeamsIds));
    }
  }

  ngOnInit(): void {
    this.subscription.add(
      this.nbaApiService.getTeams().subscribe({
        next: (teams: NbaTeamResults) => {
          this.teams = teams.data;
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
