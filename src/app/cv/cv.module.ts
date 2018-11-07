import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CvListComponent, CvDetailComponent]
})
export class CvModule { }
