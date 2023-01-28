import { MOCK_GAME_RESULTS } from "./../../mocks/GAME_RESULTS.mock";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DisplayTeamComponent } from "./display-team.component";

describe("DisplayTeamComponent", () => {
  let component: DisplayTeamComponent;
  let fixture: ComponentFixture<DisplayTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayTeamComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("get avg scores", () => {
    component.teamId = "10";
    component.countResults(MOCK_GAME_RESULTS);
    expect(component.avgTeam).toEqual(122);
    expect(component.avgOpponent).toEqual(118);
    expect(component).toBeTruthy();
  });
});
