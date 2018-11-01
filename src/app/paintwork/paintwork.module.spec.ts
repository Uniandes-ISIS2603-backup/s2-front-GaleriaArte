import { PaintworkModule } from './paintwork.module';

describe('PaintworkModule', () => {
  let paintworkModule: PaintworkModule;

  beforeEach(() => {
    paintworkModule = new PaintworkModule();
  });

  it('should create an instance', () => {
    expect(paintworkModule).toBeTruthy();
  });
});
