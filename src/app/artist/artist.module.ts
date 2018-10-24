import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import {ArtistService} from './artist.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArtistListComponent],
  providers:[ArtistService],
  exports:[ArtistListComponent]
})
export class ArtistModule { }
