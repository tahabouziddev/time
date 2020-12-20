import { TestBed } from '@angular/core/testing';

import { YesService } from './yes.service';

describe('YesService', () => {
  let service: YesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
