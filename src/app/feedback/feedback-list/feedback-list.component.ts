import { Component, OnInit } from '@angular/core';
import {Feedback} from '../feedback';
import { ActivatedRoute } from '@angular/router';
import {FeedbackService} from '../feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
})
export class FeedbackListComponent implements OnInit {

  closeResult: string;


  constructor(private feedbackService: FeedbackService ,
    private route : ActivatedRoute
        ) { }

  
  feedbacks:Feedback[];
  
  getFeedbacks():void
  {
      this.feedbackService.getFeedBacks().subscribe(feedbacks => {this.feedbacks=feedbacks;});
  }
  ngOnInit() {
      this.getFeedbacks();
  }


}
