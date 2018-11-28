import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {
  @Input() sale:Sale;

  constructor(
    private route: ActivatedRoute,
    private saleService: SaleService,
    

    private modalService: NgbModal
  ) { }
    saleId: number;
    closeResult: string;

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
    getSale(): void{
      this.saleService.getSale(this.saleId).subscribe(sale=>{this.sale= sale});
    }
    ngOnInit() 
  {
   
     this.sale= new Sale();
      this.getSale();
    
  }
   
}
