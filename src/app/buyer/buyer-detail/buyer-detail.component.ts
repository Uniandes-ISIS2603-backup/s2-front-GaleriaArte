import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buyer-detail',
  templateUrl: './buyer-detail.component.html',
  styleUrls: ['./buyer-detail.component.css']
})
export class BuyerDetailComponent implements OnInit {

  constructor(
    private buyerService: BuyerService,
    private route: ActivatedRoute) { }

    buyer_id: number;

  ngOnInit() {
    this.buyer_id = +this.route.snapshot.paramMap.get('id');
  }

}