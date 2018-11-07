import { NgModule             } from '@angular/core';
import { CommonModule         } from '@angular/common';
import { ArtistListComponent  } from './artist-list/artist-list.component';
import { ArtistService        } from './artist.service';
import { ArtistDetailComponent} from './artist-detail/artist-detail.component';
import { ArtistCreateComponent } from './artist-create/artist-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[ArtistListComponent, ArtistDetailComponent, ArtistCreateComponent ],
  providers   :[ArtistService       ],
  exports     :[ArtistListComponent ]
})
export class ArtistModule { }
