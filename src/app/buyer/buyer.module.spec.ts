<<<<<<< HEAD
timport { BuyerModule } from './buyer.module';
=======
import { BuyerModule } from './buyer.module';
>>>>>>> 9854783ba9e8bb0b11b11f854305909b0faab445

describe('BuyerModule', () => {
  let buyerModule: BuyerModule;

  beforeEach(() => {
    buyerModule = new BuyerModule();
  });

  it('should create an instance', () => {
    expect(buyerModule).toBeTruthy();
  });
});
