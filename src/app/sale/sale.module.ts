import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { SaleListListasComponent } from './sale-list-listas/sale-list-listas.component';
import { SaleCreateComponent } from './sale-create/sale-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SaleListComponent, SaleDetailComponent, SaleListListasComponent, SaleCreateComponent]
})
export class SaleModule { }
