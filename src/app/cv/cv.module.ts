import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { CvCreateComponent } from './cv-create/cv-create.component';
import { CvEditComponent } from './cv-edit/cv-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CvListComponent, CvDetailComponent, CvCreateComponent, CvEditComponent]
})
export class CvModule { }
