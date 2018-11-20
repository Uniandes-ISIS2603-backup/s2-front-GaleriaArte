import { Component, OnInit, ViewContainerRef } from '@angular/core';
//import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
//import { ToastrService } from 'ngx-toastr';

import { ArtistService } from '../artist.service';
import { Artist } from '../artist';
import { ArtistDetail } from '../artist-detail';

/**
* The artist's list component
*/
@Component({
    selector: 'app-artist',
    templateUrl: './artist-list.component.html',
    styleUrls: ['./artist-list.component.css']
})
@Component({
    selector: 'app-artist-list',
    templateUrl: './artist-list.component.html',
    // styleUrls: [ './artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param artistService The artist's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private artistService: ArtistService) { }

    /**
    * The list of artists which belong to the BookStore
    */
    artists: Artist[];

    /**
    * Shows or hides the artist-create-component
    */
    showCreate: boolean;

    /**
    * The id of the artist that the user wants to view
    */
    artist_id: number;

    /**
     * the artist that the user views.
     */
    selectedArtist: Artist;


    /**
    * Shows the artist
    */
    onSelected(artist_id: number): void {
        this.showCreate = false;
        this.artist_id = artist_id;
        this.selectedArtist = new ArtistDetail();
        this.getArtistDetail();
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedArtist) {
            this.selectedArtist = undefined;
            this.artist_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

    /**
    * Asks the service to update the list of artists
    */
    getArtists(): void {
        this.artistService.getArtists()
            .subscribe(artists => {
                this.artists = artists;
            });
    }

    getArtistDetail(): void {
        this.artistService.getArtistDetail(this.artist_id)
            .subscribe(selectedArtist => {
                this.selectedArtist = selectedArtist
            });
    }
    /**
    * This will initialize the component by retrieving the list of artists from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.selectedArtist = undefined;
        this.artist_id = undefined;
        this.getArtists();
    }
}
