import { Component, OnInit, Input } from '@angular/core';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-sale-list-listas',
  templateUrl: './sale-list-listas.component.html',
  styleUrls: ['./sale-list-listas.component.css']
})
export class SaleListListasComponent implements OnInit {
  @Input() sales: Sale[];

  constructor(private saleService: SaleService) { }

  getBooks(): void {
    this.saleService.getSales().subscribe(sale=>this.sales=sale);
}
  ngOnInit() {
    this.getBooks();

  }

}
