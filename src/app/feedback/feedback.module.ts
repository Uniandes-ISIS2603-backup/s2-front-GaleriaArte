import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackListComponent } from './feedback-list/feedback-list.component';

import {FeedbackService} from './feedback.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeedbackListComponent],
  providers:[FeedbackService],
  exports:[FeedbackListComponent]
})
export class FeedbackModule { }
