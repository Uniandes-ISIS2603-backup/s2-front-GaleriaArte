import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KindListComponent } from './kind-list/kind-list.component';
import { KindCreateComponent } from './kind-create/kind-create.component';
import { KindDetailComponent } from './kind-detail/kind-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KindListComponent, KindCreateComponent, KindDetailComponent]
})
export class KindModule { }
