import { Component, OnInit, ViewContainerRef } from '@angular/core';
//import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

import { ArtistService } from '../artist.service';
import { Artist } from '../artist';
import { ArtistDetail } from '../artist-detail';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

/**
* The artist's list component
*/
@Component({
    selector: 'app-artist',
    templateUrl: './artist-list.component.html',
    styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param artistService The artist's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private artistService: ArtistService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) {}

    /**
    * The list of artists
    */
    artists: Artist[];

    /**
    * The id of the artist that the user wants to view
    */
    artist_id: number;

    /**
    * Shows or hides the artist-create-component
    */
    showCreate: boolean;

    /**
     * Shows or hides the detail of an artist
     */
    showView: boolean;

    /**
    * Shows or hides the edition of an artist
    */
    showEdit: boolean;

    /**
     * the artist that the user views.
     */
    selectedArtist: Artist;


    /**
    * Shows the artist
    */
    onSelected(artist_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.artist_id = artist_id;
        this.selectedArtist = new ArtistDetail();
        this.getArtistDetail();
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(artist_id: number): void {
        if (!this.showEdit || (this.showEdit && artist_id != this.selectedArtist.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.artist_id = artist_id;
            this.selectedArtist = new ArtistDetail();
            this.getArtistDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
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

    updateArtist(): void {
        this.showEdit = false;
        this.showView = true;
    }

    /**
    * Deletes an artist
    */
   deleteArtist(artistId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete an artist',
        childComponent: SimpleModalComponent,
        data: {text: 'Are you sure your want to delete this artist?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.artistService.deleteArtist(artistId).subscribe(() => {
                        this.toastrService.error("The artist was successfully deleted", "Artist deleted");
                        this.ngOnInit();
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                    return true;
                }
            },
            {text: 'No', onAction: () => true}
        ]
    });
}

    /**
    * This will initialize the component by retrieving the list of artists from the service
    * This method will be called when the component is created
    */
   ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.showEdit = false;
    this.selectedArtist = undefined;
    this.artist_id = undefined;
    this.getArtists();
}
}
