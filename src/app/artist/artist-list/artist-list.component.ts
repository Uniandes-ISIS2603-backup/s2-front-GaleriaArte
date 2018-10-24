import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import {Artist} from '../artist';
@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  constructor(private artistService: ArtistService) { }



  artist:Artist[];
  
  getArtists():void
  {
      this.artistService.getArtists().subscribe(artists=>{this.artist=artists;})
  }
  ngOnInit() {
      this.getArtists();
  }
}
