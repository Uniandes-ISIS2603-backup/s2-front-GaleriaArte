import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../feedback.service';
import {FeedbackDetail } from '../feedback-detail';
import { Feedback } from '../feedback';


@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.css']
})
export class FeedbackDetailComponent implements OnInit {
  @Input() feedbackDetail:FeedbackDetail;
  
  constructor(
      private route: ActivatedRoute,
      private feedbackService: FeedbackService 
  ) { }

  feedback_id: number;
 
  getFeedbackDetail(): void {
      this.feedbackService.getFeedbackDetail(this.feedback_id)
          .subscribe(feedbackDetail => {
              this.feedbackDetail = feedbackDetail
          });
  }

  ngOnInit() {
      this.feedback_id = +this.route.snapshot.paramMap.get('id');
      if (this.feedback_id){
      this.feedbackDetail = new FeedbackDetail();
      this.getFeedbackDetail();
      }
  }
}
