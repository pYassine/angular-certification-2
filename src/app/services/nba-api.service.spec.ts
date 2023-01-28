import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { NbaApiService } from "./nba-api.service";

describe("NbaApiService", () => {
  let service: NbaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(NbaApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
