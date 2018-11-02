import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {MedioPagoListComponent} from './medioPago-list/medioPago-list.component';
import {MedioPagoService} from './medioPago.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [MedioPagoListComponent],
    providers: [MedioPagoService],
     exports :[MedioPagoListComponent ]
})
export class MedioPagoModule {}
