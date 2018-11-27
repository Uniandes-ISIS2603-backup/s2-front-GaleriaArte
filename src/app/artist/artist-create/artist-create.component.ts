import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

//import { ToastrService } from 'ngx-toastr';

import { ArtistService } from '../artist.service';

import { Artist } from '../artist';

@Component({
    selector: 'app-artist-create',
    templateUrl: './artist-create.component.html',
    styleUrls: ['./artist-create.component.css'],
    providers : [DatePipe]
})
export class ArtistCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param artistService The artist's services provider
    * //param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp : DatePipe,
        private artistService: ArtistService,
       // private toastrService: ToastrService
    ) { }

    /**
    * The new artist
    */
    artist: Artist;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an artist
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new artist
    */
    @Output() create = new EventEmitter();

    
    /**
    * Creates an artist
    */
   createArtist(): Artist {

    //let dateB: Date = new Date(this.artist.birthDate.year, this.artist.birthDate.month-1, this.artist.birthDate.day);
    let dateB: Date = new Date('2015-05-18');
       
    this.artist.birthDate = this.dp.transform(dateB, 'dd/MM/yyyy');
    console.log(this.artist);
    this.artistService.createArtist(this.artist)
        .subscribe((artist) => {
            this.artist = artist;
            this.create.emit();
            //this.toastrService.success("The artist was created", "Artist creation");

        });
    return this.artist;
}

/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an user
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.artist = new Artist();
}
}