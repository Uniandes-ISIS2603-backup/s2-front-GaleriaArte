import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { CvCreateComponent } from './cv-create/cv-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CvListComponent, CvDetailComponent, CvCreateComponent]
})
export class CvModule { }
