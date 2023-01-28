import { ApiPagination } from "./ApiPagination.interface";
import { NbaTeam } from "./NbaTeam.interface";

export interface NbaTeamResults {
  data: NbaTeam[];
  meta: ApiPagination;
}
