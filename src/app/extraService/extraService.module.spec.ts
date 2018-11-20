import { ExtraServiceModule } from '../extraService.module';

describe('ExtraServiceModule', () => {
  let extraServiceModule: ExtraServiceModule;

  beforeEach(() => {
    extraServiceModule = new ExtraServiceModule();
  });

  it('should create an instance', () => {
    expect(extraServiceModule).toBeTruthy();
  });
});
