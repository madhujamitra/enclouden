import { TestBed } from '@angular/core/testing';

import { DatadisplayService } from './datadisplay.service';

describe('DatadisplayService', () => {
  let service: DatadisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatadisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
