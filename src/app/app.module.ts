import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeedbackModule} from "./feedback/feedback.module";
import {BuyerModule} from './buyer/buyer.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FeedbackModule,
    BuyerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

