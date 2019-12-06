import { TestBed } from '@angular/core/testing';

import { ServizioAlphaService } from './servizio-alpha.service';

describe('ServizioAlphaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServizioAlphaService = TestBed.get(ServizioAlphaService);
    expect(service).toBeTruthy();
  });
});
