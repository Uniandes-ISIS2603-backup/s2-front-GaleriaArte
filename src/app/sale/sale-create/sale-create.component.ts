import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sale';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.css']
})
export class SaleCreateComponent implements OnInit {

  constructor(
    private saleService: SaleService
  ) { }
    sale: Sale;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    createSale(): Sale{
      console.log(this.sale);
      this.saleService.createSale(this.sale).subscribe((sale)=>
      {
        this.sale= sale;
        this.create.emit();

      });
      return this.sale;
    }

    cancelCreation():void{
      this.cancel.emit();
    }
  ngOnInit() {
    this.sale= new Sale();
  }

}
