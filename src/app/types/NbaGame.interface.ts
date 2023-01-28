import { NbaTeam } from "./NbaTeam.interface";

export interface NbaGame {
  id: number;
  date: Date;
  home_team: NbaTeam;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: NbaTeam;
  visitor_team_score: number;
}
