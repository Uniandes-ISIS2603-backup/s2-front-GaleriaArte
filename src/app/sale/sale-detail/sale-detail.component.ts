import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleService } from '../sale.service';
import { SaleDetail } from '../sale-detail';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {
  @Input() saleDetail: SaleDetail;
  constructor(private route: ActivatedRoute, 
    private saleService: SaleService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService,
    private router:Router
    ) { }
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
  deleteSale(): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete a Sale',
        childComponent: SimpleModalComponent,
        data: {text: 'Are you sure your want to delete this sale?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.saleService.deleteSale(this.saleId).subscribe(sale => {
                        this.toastrService.success("The sale  ", "Sale deleted");
                        this.router.navigate(['sales/list']);
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                    return true;
                }
            },
            {text: 'No', onAction: () => true}
        ]
    });
}

}
