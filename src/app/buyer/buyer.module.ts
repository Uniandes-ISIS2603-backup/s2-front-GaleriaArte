import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerListComponent } from './buyer-list/buyer-list.component';

import {BuyerService} from './buyer.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BuyerListComponent],
  providers:[BuyerService],
  exports:[BuyerListComponent]
})
export class BuyerModule { }
