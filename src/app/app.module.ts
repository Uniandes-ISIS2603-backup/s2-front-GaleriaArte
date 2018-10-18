import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BuyerModule} from './buyer/buyer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BuyerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

