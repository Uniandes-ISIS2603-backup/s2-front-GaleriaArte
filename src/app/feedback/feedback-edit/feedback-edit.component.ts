import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { FeedbackService } from '../feedback.service';
import { FeedbackDetail } from '../feedback-detail';
import { Feedback } from '../feedback';
@Component({
  selector: 'app-feedback-edit',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css']
})
export class FeedbackEditComponent implements OnInit {

  constructor( private feedbackService: FeedbackService,
    private toastrService: ToastrService
  ) { }
  @Input() feedback: FeedbackDetail;


  @Output() update= new EventEmitter();
  @Output() cancel= new EventEmitter();

  editFeedback():void{
    this.feedbackService.updateFeedback(this.feedback).subscribe(()=>{
      this.toastrService.success("The feedback was updated","feedback  edition");
    });
    this.update.emit();
  }

  cancelEdition():void{
    this.cancel.emit();
  }
  getFeedback():void{
    this.feedbackService.getFeedbackDetail(this.feedback.id).subscribe(feedback=>{this.feedback=feedback});
  }
  ngOnInit() {
    this.feedback= new FeedbackDetail();
    this.getFeedback();
  }

  ngOnChanges()
  {
    this.ngOnInit();
  }

}
