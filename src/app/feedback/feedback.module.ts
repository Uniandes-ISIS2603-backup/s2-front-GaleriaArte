import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
import { FeedbackCreateComponent } from './feedback-create/feedback-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeedbackListComponent, FeedbackDetailComponent, FeedbackCreateComponent]
})
export class FeedbackModule { }
