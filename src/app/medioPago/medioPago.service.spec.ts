import { TestBed, inject } from '@angular/core/testing';

import { MedioPagoService } from './medioPago.service';

describe('MedioPagoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedioPagoService]
    });
  });

  it('should be created', inject([MedioPagoService], (service: MedioPagoService) => {
    expect(service).toBeTruthy();
  }));
});
