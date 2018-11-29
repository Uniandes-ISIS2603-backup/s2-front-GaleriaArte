

import { ExtraServiceService } from '../extraService.service';

import { ExtraService } from '../extraService';
import { ExtraServiceDetail } from '../extraService-detail';
import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

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
        private extraServiceService: ExtraServiceService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService,
        private router:Router 
    ) { }

    /**
    * El servicio extra
    */
    @Input() extraServiceDetail: ExtraServiceDetail;

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
     deleteExtraService(): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete a ExtraService',
        childComponent: SimpleModalComponent,
        data: {text: 'Are you sure your want to delete this ExtraService?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.extraServiceService.deleteExtraService(this.extraService_id).subscribe(extra => {
                        this.toastrService.success("The ExtraService  ", "ExtraService deleted");
                        this.router.navigate(['sales/list']);
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
}



