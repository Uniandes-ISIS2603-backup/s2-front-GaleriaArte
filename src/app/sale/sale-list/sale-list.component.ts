import { Component, OnInit, Input } from '@angular/core';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {
  @Input() sale:Sale;

  constructor(
    private route: ActivatedRoute,
    private saleService: SaleService
  ) { }
    saleId: number;

    getSale(): void{
      this.saleService.getSale(this.saleId).subscribe(sale=>{this.sale= sale});
    }
  ngOnInit() 
  {
    this.saleId= +this.route.snapshot.paramMap.get('id');
    if(this.saleId)
    {
     // this.sale= new Sale();
      this.getSale();
    }
  }

}
