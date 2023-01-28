import { GameResultsPageComponent } from "./components/game-results-page/game-results-page.component";
import { TeamsStatsPageComponent } from "./components/teams-stats-page/teams-stats-page.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: TeamsStatsPageComponent,
  },
  {
    path: "results/:teamCode",
    component: GameResultsPageComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
  {
    path: "404",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
