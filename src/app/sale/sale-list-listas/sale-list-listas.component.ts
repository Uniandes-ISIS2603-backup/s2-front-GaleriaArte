import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sale-list-listas',
  templateUrl: './sale-list-listas.component.html',
  styleUrls: ['./sale-list-listas.component.css']
})
export class SaleListListasComponent implements OnInit {
  @Input() sales: Sale[];

  constructor(
    private saleService: SaleService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
    ) { }

  getBooks(): void {
    this.saleService.getSales().subscribe(sale=>this.sales=sale);
}
  ngOnInit() {
    this.getBooks();

  }
  deleteSale(saleId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete an author',
        childComponent: SimpleModalComponent,
        data: {text: 'Are you sure your want to delete this sale ?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.saleService.deleteSale(saleId).subscribe(() => {
                        this.toastrService.error("The sale was successfully deleted", "Sale deleted");
                        this.ngOnInit();
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
