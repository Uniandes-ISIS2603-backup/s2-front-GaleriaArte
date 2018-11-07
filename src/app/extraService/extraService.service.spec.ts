import { TestBed, inject } from '@angular/core/testing';

import { ExtraServiceService } from './extraService.service';

describe('ExtraServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtraServiceService]
    });
  });

  it('should be created', inject([ExtraServiceService], (service: ExtraServiceService) => {
    expect(service).toBeTruthy();
  }));
});
