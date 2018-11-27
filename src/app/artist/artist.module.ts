import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
//import {NgxPermissionsModule} from 'ngx-permissions';

import {ArtistService} from './artist.service';
import {ArtistListComponent} from './artist-list/artist-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ArtistDetailComponent} from './artist-detail/artist-detail.component';
import {ArtistCreateComponent} from './artist-create/artist-create.component';
import {ArtistEditComponent} from './artist-edit/artist-edit.component';
//import {BookModule} from '../book/book.module';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        //NgxPermissionsModule,
        FormsModule,
        //BookModule,
        NgbModule
    ],
    declarations: [
        ArtistListComponent, ArtistDetailComponent, ArtistCreateComponent, ArtistEditComponent
    ],
    providers: [ArtistService]
})
export class ArtistModule {}