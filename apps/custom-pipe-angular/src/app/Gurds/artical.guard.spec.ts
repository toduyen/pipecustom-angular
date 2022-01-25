import { TestBed } from '@angular/core/testing';

import { ArticalGuard } from './artical.guard';

describe('ArticalGuard', () => {
  let guard: ArticalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ArticalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
