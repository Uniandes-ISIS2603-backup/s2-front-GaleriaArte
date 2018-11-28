import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';

import { BuyerListComponent  } from './buyer-list/buyer-list.component';
import { BuyerService        } from './buyer.service';
import { BuyerDetail         } from './buyer-detail';
import { BuyerDetailComponent} from './buyer-detail/buyer-detail.component';
import { BuyerCreateComponent} from './buyer-create/buyer-create.component';
import { BuyerEditComponent } from './buyer-edit/buyer-edit.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
    ],
  declarations:[BuyerListComponent, BuyerDetailComponent,BuyerCreateComponent, BuyerEditComponent ],
  providers   :[BuyerService       ],
  exports     :[BuyerListComponent ]
})
export class BuyerModule { }
