import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintworkDetailComponent } from './paintwork-detail/paintwork-detail.component';
import { PaintworkListComponent } from './paintwork-list/paintwork-list.component';
import { PaintworkService } from './paintwork.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[PaintworkListComponent, PaintworkDetailComponent ],
  providers   :[PaintworkService       ],
  exports     :[PaintworkListComponent ]
})
export class PaintworkModule { }
