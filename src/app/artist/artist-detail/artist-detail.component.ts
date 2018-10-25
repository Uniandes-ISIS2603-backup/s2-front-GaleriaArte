import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute) { }

    artist_id: number;

  ngOnInit() {
    this.artist_id = +this.route.snapshot.paramMap.get('id');
  }

}
