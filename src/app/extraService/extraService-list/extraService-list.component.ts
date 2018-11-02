import {Component, OnInit} from '@angular/core';
import {ExtraService} from '../extraService';
import {ExtraServiceService} from '../extraService.service';


@Component({
    selector: 'app-extraService-list',
    templateUrl: './extraService-list.component.html',
    styleUrls: ['./extraService-list.component.css']
})
export class ExtraServiceListComponent implements OnInit 
    {

    constructor(private extraServiceService: ExtraServiceService) {}

   
    extraServices: ExtraService[];

    /**
     * Asks the service to update the list of extra services
     */
    getExtraServices(): void 
        {
        this.extraServiceService.getExtraServices().subscribe(extraServices => this.extraServices = extraServices);
    }

    /**
     * This will initialize the component by retrieving the list of extraService from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getExtraServices();
    }
}