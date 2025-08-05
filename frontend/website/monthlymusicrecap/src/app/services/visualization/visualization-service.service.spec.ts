import { TestBed } from '@angular/core/testing';

import { VisualizationServiceService } from './visualization-service.service';

describe('VisualizationServiceService', () => {
  let service: VisualizationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualizationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
