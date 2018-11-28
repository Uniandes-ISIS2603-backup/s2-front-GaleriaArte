import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {NgxPermissionsModule} from 'ngx-permissions';

import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { SaleListListasComponent } from './sale-list-listas/sale-list-listas.component';
import { SaleCreateComponent } from './sale-create/sale-create.component';
import { SaleEditComponent } from './sale-edit/sale-edit.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule,
    NgbModule
  ],
  declarations: [SaleListComponent, SaleDetailComponent, SaleListListasComponent, SaleCreateComponent, SaleEditComponent]
})
export class SaleModule { }
