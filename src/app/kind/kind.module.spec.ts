import { KindModule } from './kind.module';

describe('KindModule', () => {
  let kindModule: KindModule;

  beforeEach(() => {
    kindModule = new KindModule();
  });

  it('should create an instance', () => {
    expect(kindModule).toBeTruthy();
  });
});
