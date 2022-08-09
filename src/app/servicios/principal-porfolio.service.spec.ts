import { TestBed } from '@angular/core/testing';

import { PrincipalPorfolioService } from './principal-porfolio.service';

describe('PrincipalPorfolioService', () => {
  let service: PrincipalPorfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipalPorfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
