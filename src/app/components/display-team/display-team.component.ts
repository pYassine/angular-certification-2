import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { NbaApiService } from "../../services/nba-api.service";
import { NbaGame, NbaGamesResults, NbaTeam } from "../../types";

@Component({
  selector: "app-display-team",
  templateUrl: "./display-team.component.html",
  styleUrls: ["./display-team.component.scss"],
})
export class DisplayTeamComponent implements OnInit, OnDestroy {
  @Input() public teamId!: string;
  @Output() public remove = new EventEmitter<string>();

  public team!: NbaTeam;
  public subscription = new Subscription();

  public results: boolean[];

  public avgTeam: number;
  public avgOpponent: number;

  constructor(private readonly nbaApiService: NbaApiService) {
    this.results = [];
    this.avgOpponent = 0;
    this.avgTeam = 0;
  }

  ngOnInit(): void {
    this.subscription.add(
      this.nbaApiService.getTeam(this.teamId).subscribe({
        next: (team: NbaTeam) => {
          this.team = team;
        },
      })
    );

    this.subscription.add(
      this.nbaApiService.getGames(this.teamId).subscribe({
        next: (games: NbaGamesResults) => {
          this.countResults(games);
        },
      })
    );
  }

  private countResults(games: NbaGamesResults): void {
    let totalScore = 0;
    let totalOpponentScore = 0;

    games.data.forEach((game: NbaGame) => {
      let teamScore = 0;
      let opponentScore = 0;

      if (game.home_team.id.toString() === this.teamId) {
        teamScore = game.home_team_score;
        opponentScore = game.visitor_team_score;
      } else {
        teamScore = game.visitor_team_score;
        opponentScore = game.home_team_score;
      }

      totalScore += teamScore;
      totalOpponentScore += opponentScore;
      const victory = teamScore > opponentScore;
      this.results.push(victory);
    });

    this.avgOpponent = Math.round(totalOpponentScore / this.results.length);
    this.avgTeam = Math.round(totalScore / this.results.length);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public removeItem(): void {
    this.remove.emit(this.teamId);
  }
}
