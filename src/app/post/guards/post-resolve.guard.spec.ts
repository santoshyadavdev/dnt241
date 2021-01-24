import { TestBed } from '@angular/core/testing';

import { PostResolveGuard } from './post-resolve.guard';

describe('PostResolveGuard', () => {
  let guard: PostResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostResolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
