
import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { BuyerService } from '../buyer.service';

import { BuyerDetail } from '../buyer-detail';
import { Buyer } from '../buyer';


@Component({
    selector: 'app-buyer-detail',
    templateUrl: './buyer-detail.component.html',
    styleUrls: ['./buyer-detail.component.css']
})
export class BuyerDetailComponent implements OnInit {

  
    
   @Input() buyerDetail:BuyerDetail;
  
   constructor(
       private route: ActivatedRoute,
       private buyerService: BuyerService,
         private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService,
    private router:Router
   ) { }

   
   

   
   buyer_id: number;
  
   getBuyerDetail(): void {
       this.buyerService.getBuyerDetail(this.buyer_id)
           .subscribe(buyerDetail => {
               this.buyerDetail = buyerDetail
           });
   }

  
   deleteBuyer(): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete a Buyer',
        childComponent: SimpleModalComponent,
        data: {text: 'Are you sure your want to delete this buyer?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.buyerService.deleteBuyer(this.buyer_id).subscribe(buyer => {
                        this.toastrService.success("The buyer  ", "Buyer deleted");
                        this.router.navigate(['buyers/list']);
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
       this.buyer_id = +this.route.snapshot.paramMap.get('id');
       if (this.buyer_id){
       this.buyerDetail = new BuyerDetail();
       this.getBuyerDetail();
       }
   }
  }
