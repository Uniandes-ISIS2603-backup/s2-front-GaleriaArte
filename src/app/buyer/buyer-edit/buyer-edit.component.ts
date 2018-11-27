import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { BuyerService } from '../buyer.service';
import { BuyerDetail } from '../buyer-detail';
import { Buyer } from '../buyer';

@Component({
  selector: 'app-buyer-edit',
  templateUrl: './buyer-edit.component.html',
  styleUrls: ['./buyer-edit.component.css']
})
export class BuyerEditComponent implements OnInit, OnChanges {

  constructor( private buyerService: BuyerService,
    private toastrService: ToastrService
  ) { }
  @Input() buyer: BuyerDetail;


  @Output() update= new EventEmitter();
  @Output() cancel= new EventEmitter();

  editBuyer():void{
    this.buyerService.updateBuyer(this.buyer).subscribe(()=>{
      this.toastrService.success("The buyer was updated","Buyer  edition");
    });
    this.update.emit();
  }

  cancelEdition():void{
    this.cancel.emit();
  }
  getBuyer():void{
    this.buyerService.getBuyerDetail(this.buyer.id).subscribe(buyer=>{this.buyer=buyer});
  }
  ngOnInit() {
    this.buyer= new BuyerDetail();
    this.getBuyer();
  }

  ngOnChanges()
  {
    this.ngOnInit();
  }
}
