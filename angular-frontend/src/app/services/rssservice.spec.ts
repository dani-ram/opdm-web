import { TestBed } from '@angular/core/testing';

import { Rssservice } from './rssservice';

describe('Rssservice', () => {
  let service: Rssservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rssservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
