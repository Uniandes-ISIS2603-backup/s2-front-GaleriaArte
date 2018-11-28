import {Component, OnInit,ViewContainerRef} from '@angular/core';
import {MedioPago} from '../medioPago';
import {MedioPagoService} from '../medioPago.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

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
    constructor(private medioPagoService: MedioPagoService,
        private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}

   
    medioPagos: MedioPago[];

    /**
     * Asks the service to update the list of medios de pago
     */
    getMedioPagos(): void {
        this.medioPagoService.getMedioPagos()
            .subscribe(medioPagos => this.medioPagos = medioPagos);
    }
    deleteMedioPago(medioId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an medioPago',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this medioPago ?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.medioPagoService.deleteMedioPago(medioId).subscribe(() => {
                            this.toastrService.error("The medioPago was successfully deleted", "medioPago deleted");
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
     * This will initialize the component by retrieving the list of mediosPago from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getMedioPagos();
    }
}
