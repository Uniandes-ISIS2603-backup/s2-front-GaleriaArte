import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { SaleService } from '../sale.service';
import { SaleDetail } from '../sale-detail';

@Component({
  selector: 'app-sale-edit',
  templateUrl: './sale-edit.component.html',
  styleUrls: ['./sale-edit.component.css']
})
export class SaleEditComponent implements OnInit,OnChanges {

  constructor(
    private saleService: SaleService,
    private toastrService: ToastrService
  ) { }

  @Input() sale: SaleDetail;


  @Output() update= new EventEmitter();
  @Output() cancel= new EventEmitter();

  editSale():void{
    this.saleService.updateSale(this.sale).subscribe(()=>{
      this.toastrService.success("The sale was updated","Sale edition");
    });
    this.update.emit();
  }

  cancelEdition():void{
    this.cancel.emit();
  }
  getSale():void{
    this.saleService.getSale(this.sale.id).subscribe(sale=>{this.sale=sale});
  }
  ngOnInit() {
    this.sale= new SaleDetail();
    this.getSale();
  }

  ngOnChanges()
  {
    this.ngOnInit();
  }

}
