import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExtraServiceService } from '../extraService.service';

import { ExtraService } from '../extraService';
import { ExtraServiceDetail } from '../extraService-detail';


@Component({
    selector: 'app-extraService-detail',
    templateUrl: './extraService-detail.component.html',
    styleUrls: ['./extraService-detail.component.css']
})
export class ExtraServiceDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the extraService to be shown
    * @param extraServiceService The  extraService's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private extraServiceService: ExtraServiceService 
    ) { }

    /**
    * El servicio extra
    */
    extraServiceDetail: ExtraServiceDetail;

    /**
    * El id del servicio extra que viene en el path get .../extraService/extraService_id
    */
    extraService_id: number;
    /**
    * The method which obtains el medio de Pago whose details we want to show
    */
    getExtraServiceDetail(): void 
        {
        this.extraServiceService.getExtraServiceDetail(this.extraService_id)
            .subscribe(extraServiceDetail => {
                this.extraServiceDetail = extraServiceDetail
            });
    }

   
    /**
    * The method which initializes the component.
    * We need to create el servicio extra so it is never considered as undefined
    */
    ngOnInit() 
        {
        this.extraService_id = +this.route.snapshot.paramMap.get('id');
        this.extraServiceDetail = new ExtraServiceDetail();
        this.getExtraServiceDetail();
    }
}



