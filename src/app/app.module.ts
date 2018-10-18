import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeedbackModule} from "./feedback/feedback.module";
import {BuyerModule} from './buyer/buyer.module';

import { AppComponent } from './app.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackListComponent
  ],
  imports: [
    BrowserModule,
    FeedbackModule,
    BuyerModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

