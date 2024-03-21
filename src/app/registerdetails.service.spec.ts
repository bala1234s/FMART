import { TestBed } from '@angular/core/testing';

import { RegisterdetailsService } from './registerdetails.service';

describe('RegisterdetailsService', () => {
  let service: RegisterdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
