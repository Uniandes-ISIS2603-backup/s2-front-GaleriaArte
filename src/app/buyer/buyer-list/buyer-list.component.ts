import { Component, OnInit } from '@angular/core';
import { Buyer } from '../buyer';
import {BuyerService} from '../buyer.service';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

  
  constructor(private buyerService: BuyerService) { }

  
  buyers:Buyer[];
  
  getFeedbacks():void
  {
      this.buyerService.getBuyers().subscribe(buyers => {this.buyers=buyers;});
  }
  ngOnInit() {
      this.getFeedbacks();
  }

}
