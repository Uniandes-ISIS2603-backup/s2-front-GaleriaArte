import { Buyer } from '../buyer';
import {BuyerService} from '../buyer.service';
import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

  
  constructor(private buyerService: BuyerService
   private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) { }

  
  buyers:Buyer[];
  
  getFeedbacks():void
  {
      this.buyerService.getBuyers().subscribe(buyers => {this.buyers=buyers;});
  }
  ngOnInit() {
      this.getFeedbacks();
  }

   deleteBuyer(buyerId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete a Buyer',
        childComponent: SimpleModalComponent,
        data: {text: 'Are you sure your want to delete this buyer ?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.buyerService.deleteBuyer(buyerId).subscribe(() => {
                        this.toastrService.error("The buyer was successfully deleted", "Buyer deleted");
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

}
