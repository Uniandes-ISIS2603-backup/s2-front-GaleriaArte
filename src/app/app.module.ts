import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeedbackModule} from "./feedback/feedback.module";
import {BuyerModule} from './buyer/buyer.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FeedbackModule,
    AppRoutingModule,
    BuyerModule,
    NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

