import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NbaApiInterceptor } from "./interceptors/nba-api.interceptor";

import { DisplayTeamComponent } from "./components/display-team/display-team.component";
import { GameResultsPageComponent } from "./components/game-results-page/game-results-page.component";
import { TeamsStatsPageComponent } from "./components/teams-stats-page/teams-stats-page.component";
import { FormsModule } from "@angular/forms";
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTeamComponent,
    GameResultsPageComponent,
    TeamsStatsPageComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NbaApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
