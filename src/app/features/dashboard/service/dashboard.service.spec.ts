import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { MockProvider } from 'ng-mocks';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockProvider(HttpBaseService)
      ]
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
