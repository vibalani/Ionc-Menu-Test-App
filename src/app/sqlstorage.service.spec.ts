import { TestBed } from '@angular/core/testing';

import { SqlstorageService } from './sqlstorage.service';

describe('SqlstorageService', () => {
  let service: SqlstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
