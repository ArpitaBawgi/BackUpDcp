import { TestBed } from '@angular/core/testing';

import { ForUserService } from './for-user.service';

describe('ForUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForUserService = TestBed.get(ForUserService);
    expect(service).toBeTruthy();
  });
});
