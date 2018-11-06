import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MedioPagoService } from '../medioPago.service';
import {MedioPagoDetail} from '../medioPago-detail';

import { MedioPago } from '../medioPago';


@Component({
    selector: 'app-medioPago-detail',
    templateUrl: './medioPago-detail.component.html',
    styleUrls: ['./medioPago-detail.component.css']
})
export class MedioPagoDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the medioPago to be shown
    * @param medioPagoService The  medioPago's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private medioPagoService: MedioPagoService 
    ) { }

    /**
    * El medio de pago
    */
    medioPagoDetail: MedioPagoDetail;

    /**
    * El id del medio de Pago que viene en el path get .../medioPago/medioPago_id
    */
    medioPago_id: number;
    /**
    * The method which obtains el medio de Pago whose details we want to show
    */
    getMedioPagoDetail(): void 
        {
        this.medioPagoService.getMedioPagoDetail(this.medioPago_id)
            .subscribe(medioPagoDetail => {
                this.medioPagoDetail = medioPagoDetail
            });
    }

   
    /**
    * The method which initializes the component.
    * We need to create el medio de pago so it is never considered as undefined
    */
    ngOnInit() 
        {
        this.medioPago_id = +this.route.snapshot.paramMap.get('id');
        this.medioPagoDetail = new MedioPagoDetail();
        this.getMedioPagoDetail();
    }
}



