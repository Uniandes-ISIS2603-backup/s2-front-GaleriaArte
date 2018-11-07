import { MedioPagoModule } from '../medioPago.module';

describe('MedioPagoModule', () => {
  let medioPagoModule: medioPagoModule;

  beforeEach(() => {
    medioPagoModule = new MedioPagoModule();
  });

  it('should create an instance', () => {
    expect(medioPagoModule).toBeTruthy();
  });
});
