import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { SaleDetail } from '../sale-detail';

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
    sale_id:number;

    showCreate:boolean;

    showView:boolean;

    showEdit: boolean;

    selectedSale: Sale;

    onSelected(sale_id:number):void{
        this.showCreate=false;
        this.showEdit=false;
        this.showView=true;
        this.sale_id=sale_id;
        this.selectedSale= new SaleDetail();
        this.getSaleDetail();
    }

    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }

    /**
    * Shows or hides the create component
    */

    showHideEdit(sale_id: number): void {
        if (!this.showEdit || (this.showEdit && sale_id != this.selectedSale.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.sale_id = sale_id;
            this.selectedSale = new SaleDetail();
            this.getSaleDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
    }
    getSaleDetail(): void {
        this.saleService.getSale(this.sale_id)
            .subscribe(selectedSale => {
                this.selectedSale = selectedSale
            });
    }
    updateSale(): void {
        this.showEdit = false;
        this.showView = true;
    }
  getBooks(): void {
    this.saleService.getSales().subscribe(sale=>this.sales=sale);
}
  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.showEdit = false;
    this.selectedSale = undefined;
    this.sale_id = undefined;
    this.getBooks();

  }
  deleteSale(saleId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete a Sale',
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
