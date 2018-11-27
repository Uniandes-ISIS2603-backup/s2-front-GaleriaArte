import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KindListComponent } from './kind-list/kind-list.component';
import { KindCreateComponent } from './kind-create/kind-create.component';
import { KindDetailComponent } from './kind-detail/kind-detail.component';
import { KindEditComponent } from './kind-edit/kind-edit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  declarations: [KindListComponent, KindCreateComponent, KindDetailComponent, KindEditComponent]
})
export class KindModule { }
