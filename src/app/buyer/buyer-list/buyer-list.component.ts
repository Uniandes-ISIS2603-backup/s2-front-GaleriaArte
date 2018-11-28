import { Buyer } from '../buyer';
import {BuyerService} from '../buyer.service';
import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { BuyerDetail } from '../buyer-detail';
@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

  
  constructor(private buyerService: BuyerService,
   private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) { }

  
  buyers:Buyer[];
    buyer_id:number;

    showCreate:boolean;

    showView:boolean;

    showEdit:boolean;

    selectedBuyer:Buyer;
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    showHideEdit(buyerId: number): void {
        if (!this.showEdit || (this.showEdit && buyerId != this.selectedBuyer.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.buyer_id = buyerId;
            this.selectedBuyer = new BuyerDetail();
            this.getBuyerDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
    }
    onSelected(buyer_id:number):void{
        this.showCreate=false;
        this.showEdit= false;
        this.showView=true;
        this.buyer_id=buyer_id;
        this.selectedBuyer= new BuyerDetail();
        this.getBuyerDetail();
    }
  getFeedbacks():void
  {
      this.buyerService.getBuyers().subscribe(buyers => {this.buyers=buyers;});
  }
 
  getBuyerDetail(): void {
    this.buyerService.getBuyerDetail(this.buyer_id)
        .subscribe(selectedAuthor => {
            this.selectedBuyer = selectedAuthor
        });
}

    updateBuyer():void{
        this.showEdit=false;
        this.showView=true;
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
ngOnInit() {
     this.showCreate=false;
     this.showView=false;
     this.showEdit=false;
     this.selectedBuyer=undefined;
     this.buyer_id=undefined;
    this.getFeedbacks();
}

}
