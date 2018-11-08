import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerListComponent  } from './buyer-list/buyer-list.component';
import { BuyerService        } from './buyer.service';
import { BuyerDetail         } from './buyer-detail';
import { BuyerDetailComponent} from './buyer-detail/buyer-detail.component';
import { BuyerCreateComponent} from './buyer-create/buyer-create.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[BuyerListComponent, BuyerDetailComponent,BuyerCreateComponent ],
  providers   :[BuyerService       ],
  exports     :[BuyerListComponent ]
})
export class BuyerModule { }
