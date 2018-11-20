import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
       private buyerService: BuyerService 
   ) { }

   
   

   
   buyer_id: number;
  
   getBuyerDetail(): void {
       this.buyerService.getBuyerDetail(this.buyer_id)
           .subscribe(buyerDetail => {
               this.buyerDetail = buyerDetail
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
