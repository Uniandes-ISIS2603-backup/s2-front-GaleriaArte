import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {ArtistService} from '../artist.service';
import {ArtistDetail} from '../artist-detail';
//import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-artist-edit',
    templateUrl: './artist-edit.component.html',
    styleUrls: ['./artist-edit.component.css'],
    providers: [DatePipe]
})
export class ArtistEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param artistService The artists' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private artistService: ArtistService,
        //private toastrService: ToastrService,
    ) {}

    /**
    * The artist id as received from the parent component
    */
    @Input() artist: ArtistDetail;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an artist
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new artist
    */
    @Output() update = new EventEmitter();

    /**
    * Updates the information of the artist
    */
    editArtist(): void {
        let dateB: Date = new Date(this.artist.birthDate.year, this.artist.birthDate.month - 1, this.artist.birthDate.day);
        this.artist.birthDate = this.dp.transform(dateB, 'yyyy-MM-dd');
        this.artistService.updateArtist(this.artist)
            .subscribe(() => {
                //this.toastrService.success("The artist's information was updated", "Artist edition");
            });
        this.update.emit();
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
        if (this.artist && this.artist.birthDate) {
            this.artist.birthDate = this.artist.birthDate.substring(0, 10);
            var date = {
                day: + this.artist.birthDate.split('-')[2],
                month: + this.artist.birthDate.split('-')[1],
                year: + this.artist.birthDate.split('-')[0]
            };
            this.artist.birthDate = date;
        }
    }

    /**
    * This function will be called when the user chooses another artist to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}