import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { NbaApiService } from "../../services/nba-api.service";
import { NbaGame, NbaGamesResults, NbaTeam } from "../../types";

@Component({
  selector: "app-game-results-page",
  templateUrl: "./game-results-page.component.html",
  styleUrls: ["./game-results-page.component.scss"],
})
export class GameResultsPageComponent implements OnInit, OnDestroy {
  public error: boolean;
  public subscription = new Subscription();

  public teamCode: string | null;
  public games: NbaGame[];

  public team!: NbaTeam;

  constructor(
    private readonly nbaApiService: NbaApiService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.teamCode = null;
    this.games = [];
    this.error = false;
  }

  private getGames(teamCode: string) {
    this.subscription.add(
      this.nbaApiService.getGames(teamCode).subscribe({
        next: (games: NbaGamesResults) => {
          this.games = games.data;
          this.setTeam();
        },
        error: () => {
          this.router.navigate(["404"]);
          return;
        },
      })
    );
  }

  private setTeam() {
    const test = this.games.find(
      (nbaGame: NbaGame) => nbaGame.home_team.id.toString() === this.teamCode
    );
    if (!test) {
      this.router.navigate(["404"]);
      return;
    }
    this.team = test.home_team;
  }

  ngOnInit(): void {
    if (this.route.snapshot.params["teamCode"]) {
      const teamCode = this.route.snapshot.params["teamCode"];
      this.teamCode = teamCode;
      this.getGames(teamCode);
    } else {
      this.error = true;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
