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
});
