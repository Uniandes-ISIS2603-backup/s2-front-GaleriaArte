import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleService } from '../sale.service';
import { SaleDetail } from '../sale-detail';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {
  @Input() saleDetail: SaleDetail;
  constructor(private route: ActivatedRoute, private saleService: SaleService) { }
  saleId:number;

  getSaleDetail():void{
    this.saleService.getSale(this.saleId).subscribe(saleDetail=>{this.saleDetail=saleDetail});
  }
  ngOnInit() {
    this.saleId= +this.route.snapshot.paramMap.get('id');
    if(this.saleId)
    {
      this.saleDetail= new SaleDetail();
      this.getSaleDetail();
    }
  }

}
