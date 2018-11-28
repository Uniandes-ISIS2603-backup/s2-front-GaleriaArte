import {Component, OnInit,ViewContainerRef} from '@angular/core';
import {ExtraService} from '../extraService';
import {ExtraServiceService} from '../extraService.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-extraService-list',
    templateUrl: './extraService-list.component.html',
    styleUrls: ['./extraService-list.component.css']
})
export class ExtraServiceListComponent implements OnInit 
    {

    constructor(private extraServiceService: ExtraServiceService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) {}

   
    extraServices: ExtraService[];

    /**
     * Asks the service to update the list of extra services
     */
    getExtraServices(): void 
        {
        this.extraServiceService.getExtraServices().subscribe(extraServices => this.extraServices = extraServices);
    }
    deleteExtraService(Id): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an extraService',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this sale ?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.extraServiceService.deleteExtraService(Id).subscribe(() => {
                            this.toastrService.error("The extraService was successfully deleted", "extraService deleted");
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
     * This will initialize the component by retrieving the list of extraService from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getExtraServices();
    }
}