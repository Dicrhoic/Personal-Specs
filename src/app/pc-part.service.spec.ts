import { TestBed } from '@angular/core/testing';

import { PcPartService } from './pc-part.service';

describe('PcPartService', () => {
  let service: PcPartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcPartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
