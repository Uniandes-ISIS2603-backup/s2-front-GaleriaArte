import {Component, OnInit} from '@angular/core';
import {MedioPago} from '../medioPago';
import {MedioPagoService} from '../medioPago.service';


@Component({
    selector: 'app-medioPago',
    templateUrl: './medioPago-list.component.html',
    styleUrls: ['./medioPago-list.component.css']
})
export class MedioPagoListComponent implements OnInit 
    {

    /**
     * Constructor for the component
     * @param medioPagoService  services provider
     */
    constructor(private medioPagoService: MedioPagoService) {}

   
    medioPagos: MedioPago[];

    /**
     * Asks the service to update the list of medios de pago
     */
    getMedioPagos(): void {
      //  this.medioPagoService.getMedioPagos()
      //      .subscribe(medioPagos => this.medioPagos = medioPagos);
    }

    /**
     * This will initialize the component by retrieving the list of mediosPago from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
       // this.getMedioPagos();
    }
}
