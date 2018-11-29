import {Component, OnInit,ViewContainerRef} from '@angular/core';
import {ExtraService} from '../extraService';
import {ExtraServiceService} from '../extraService.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { ExtraServiceDetail } from '../extraService-detail';

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
    extra_id:number;

    showCreate: boolean;

   
    showView: boolean;

  
    showEdit: boolean;

    selectedExtraService: ExtraService;

    onSelected(extra_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.extra_id = extra_id;
        this.selectedExtraService = new ExtraServiceDetail();
        this.getExtraServiceDetail();
    }

    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    showHideEdit(extra_id: number): void {
        if (!this.showEdit || (this.showEdit && extra_id != this.selectedExtraService.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.extra_id = extra_id;
            this.selectedExtraService = new ExtraServiceDetail();
            this.getExtraServiceDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
    }

    getExtraServices(): void 
        {
        this.extraServiceService.getExtraServices().subscribe(extraServices => this.extraServices = extraServices);
    }
    getExtraServiceDetail(): void {
        this.extraServiceService.getExtraServiceDetail(this.extra_id)
            .subscribe(selectedExtraService => {
                this.selectedExtraService = selectedExtraService
            });
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
        this.showCreate = false;
        this.showView = false;
        this.showEdit = false;
        this.selectedExtraService = undefined;
        this.extra_id = undefined;
        this.getExtraServices();
    }
}