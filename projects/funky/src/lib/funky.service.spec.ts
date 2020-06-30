import { TestBed } from '@angular/core/testing';

import { FunkyService } from './funky.service';

describe('FunkyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunkyService = TestBed.get(FunkyService);
    expect(service).toBeTruthy();
  });
});
