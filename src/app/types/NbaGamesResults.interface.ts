import { ApiPagination } from "./ApiPagination.interface";
import { NbaGame } from "./NbaGame.interface";

export interface NbaGamesResults {
  data: NbaGame[];
  meta: ApiPagination;
}
