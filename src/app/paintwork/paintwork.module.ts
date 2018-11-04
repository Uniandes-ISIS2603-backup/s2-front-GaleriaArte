import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintworkDetailComponent } from './paintwork-detail/paintwork-detail.component';
import { PaintworkListComponent } from './paintwork-list/paintwork-list.component';
import { PaintworkService } from './paintwork.service';
import { PaintworkAddComponent } from './paintwork-add/paintwork-add.component';
import { PaintworkEditComponent } from './paintwork-edit/paintwork-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[PaintworkListComponent, PaintworkDetailComponent, PaintworkAddComponent, PaintworkEditComponent ],
  providers   :[PaintworkService       ],
  exports     :[PaintworkListComponent ]
})
export class PaintworkModule { }
