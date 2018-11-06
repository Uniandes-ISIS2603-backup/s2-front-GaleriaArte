import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {ExtraServiceListComponent} from './extraService-list/extraService-list.component';
import {ExtraServiceService} from './extraService.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [ExtraServiceListComponent],
    providers: [ExtraServiceService],
    exports: [ExtraServiceListComponent]
})
export class ExtraServiceModule {}



