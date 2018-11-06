import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackListComponent } from './feedback-list/feedback-list.component';

import {FeedbackService} from './feedback.service';
import { FeedbacksCreateComponent } from './feedbacks-create/feedbacks-create.component';

import { AppRoutingModule } from '../app-routing/app-routing.module';



 
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
    
  ],
  declarations: [FeedbackListComponent, FeedbacksCreateComponent],
  providers:[FeedbackService],
  exports:[FeedbackListComponent,FeedbacksCreateComponent]
})
export class FeedbackModule { }
