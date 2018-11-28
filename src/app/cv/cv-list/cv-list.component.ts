import { Component, OnInit } from '@angular/core';
import {Cv} from '../cv';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent implements OnInit {
/**
     * Constructor for the component
     * @param cvService  services provider
     */
    constructor(private cvService: CvService) {}

   
    cvs: Cv[];

    /**
     * Asks the service to update the list of medios de pago
     */
    getCvs(): void {
        this.cvService.getCvs()
            .subscribe(cvs => this.cvs = cvs);
    }

    /**
     * This will initialize the component by retrieving the list of mediosPago from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getCvs();
    }
}
