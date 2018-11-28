import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtistService } from '../artist.service';

import { ArtistDetail } from '../artist-detail';


@Component({
    selector: 'app-artist-detail',
    templateUrl: './artist-detail.component.html',
    styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  
    /**
    * The artist
    */
   @Input() artistDetail: ArtistDetail;
   /**
   * Constructor for the component
   * @param route The route which helps to retrieves the id of the book to be shown
   * @param artistService The artist's services provider
   * @param toastrService The toastr to show messages to the user
   */
   constructor(
       private route: ActivatedRoute,
       private artistService: ArtistService 
   ) { }

   /**
   * El id del artist que viene en el path get .../artists/artist_id
   */
   artist_id: number;
   /**
   * The method which obtains the artist whose details we want to show
   */
   getArtistDetail(): void {
       this.artistService.getArtistDetail(this.artist_id)
           .subscribe(artistDetail => {
               this.artistDetail = artistDetail
           });
   }

  
   /**
   * The method which initializes the component.
   * We need to create the artist so it is never considered as undefined
   */
   ngOnInit() {
       this.artist_id = +this.route.snapshot.paramMap.get('id');
       if (this.artist_id){
       this.artistDetail = new ArtistDetail();
       this.getArtistDetail();
       }
   }
  }
