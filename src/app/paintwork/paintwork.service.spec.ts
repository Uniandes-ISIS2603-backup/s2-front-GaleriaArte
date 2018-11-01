import { TestBed, inject } from '@angular/core/testing';

import { PaintworkService } from './paintwork.service';

describe('PaintworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaintworkService]
    });
  });

  it('should be created', inject([PaintworkService], (service: PaintworkService) => {
    expect(service).toBeTruthy();
  }));
});
