import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import {ExtraServiceListComponent} from './extraService-list/extraService-list.component';
import {ExtraServiceService} from './extraService.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ExtraServiceCreateComponent } from './extraService-add/extraService-add.component';
import { ExtraServiceDetail } from './extraService-detail';
import {ExtraServiceEditComponent} from './extra-service-edit/extra-service-edit.component';
import { ExtraServiceDetailComponent } from './extraService-detail/extraService-detail.component';
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        NgxPermissionsModule,
        FormsModule
    ],
    declarations: [ExtraServiceListComponent, ExtraServiceCreateComponent, ExtraServiceDetailComponent, ExtraServiceEditComponent]
})
export class ExtraServiceModule {}



