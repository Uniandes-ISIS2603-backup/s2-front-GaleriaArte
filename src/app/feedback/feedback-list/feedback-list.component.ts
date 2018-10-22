import { Component, OnInit } from '@angular/core';
import {Feedback} from '../feedback';
import {FeedbackService} from '../feedback.service';
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }

  
  feedbacks:Feedback[];
  
  getFeedbacks():void
  {
      this.feedbackService.getFeedBacks().subscribe(feedbacks => {this.feedbacks=feedbacks;});
  }
  ngOnInit() {
      this.getFeedbacks();
  }

}
