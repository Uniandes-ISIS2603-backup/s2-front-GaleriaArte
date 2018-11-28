import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MedioPagoService } from '../medioPago.service';
import {MedioPagoDetail} from '../medioPago-detail';

import { MedioPago } from '../medioPago';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

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
        private medioPagoService: MedioPagoService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService,
        private router:Router 
    ) { }

    /**
    * El medio de pago
    */
    @Input() medioPagoDetail: MedioPagoDetail;

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
    deleteMedioPago(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a MedioPago',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this MedioPago?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.medioPagoService.deleteMedioPago(this.medioPago_id).subscribe(sale => {
                            this.toastrService.success("The MedioPago  ", "MedioPago deleted");
                            this.router.navigate(['medioPagos/list']);
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



