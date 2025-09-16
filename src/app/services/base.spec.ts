import { TestBed } from '@angular/core/testing';

import { GetterClient } from './base';

describe('Base', () => {
  let service: GetterClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetterClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
