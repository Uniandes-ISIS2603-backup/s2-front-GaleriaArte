import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {MedioPagoListComponent} from './medioPago-list/medioPago-list.component';
import {MedioPagoService} from './medioPago.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {MedioPagoCreateComponent} from './medioPago-add/medioPago-add.component';
import {MedioPagoDetailComponent} from './medioPago-detail/medioPago-detail.component';
import {MedioPagoEditComponent} from './medio-pago-edit/medio-pago-edit.component';
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [MedioPagoListComponent, MedioPagoDetailComponent, MedioPagoCreateComponent, MedioPagoEditComponent]
})
export class MedioPagoModule {}
