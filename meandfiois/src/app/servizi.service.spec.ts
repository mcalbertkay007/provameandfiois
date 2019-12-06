import { TestBed } from '@angular/core/testing';

import { ServiziService } from './servizi.service';

describe('ServiziService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiziService = TestBed.get(ServiziService);
    expect(service).toBeTruthy();
  });
});
