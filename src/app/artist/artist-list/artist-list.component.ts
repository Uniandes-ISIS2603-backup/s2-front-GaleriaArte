import { Component, OnInit  } from '@angular/core'    ;
import { ArtistService      } from '../artist.service';
import { Artist             } from '../artist'        ;
@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html'//,
 // styleUrls: [ './artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  artists:Artist[];
  
  getArtists():void {
      this.artistService.getArtists().subscribe(artist=>{this.artists=artist;})
  }
  
  ngOnInit() {
      this.getArtists();
  }
}
