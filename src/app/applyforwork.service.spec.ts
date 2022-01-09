import { TestBed } from '@angular/core/testing';

import { ApplyforworkService } from './applyforwork.service';

describe('ApplyforworkService', () => {
  let service: ApplyforworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyforworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
