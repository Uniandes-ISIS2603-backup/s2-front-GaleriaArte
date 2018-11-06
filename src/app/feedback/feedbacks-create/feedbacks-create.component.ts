import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FeedbackService } from '../feedback.service';
//import { ToastrService } from 'ngx-toastr';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-feedbacks-create',
  templateUrl: './feedbacks-create.component.html',
  styleUrls: ['./feedbacks-create.component.css'],
})
export class FeedbacksCreateComponent implements OnInit {

  constructor(
    private feedbackService: FeedbackService,
   // private toastrService: ToastrService
  ) { }
    feedback: Feedback;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    createFeedback(): Feedback
    {
      console.log(this.feedback);

      this.feedbackService.createFeedback(this.feedback).subscribe((feedback) => {this.feedback=feedback; this.create.emit(); 
        //this.toastrService.success("El comentario fue creado", "Creacion de comentario") 
      });

      return this.feedback;
    }

    cancelCreation(): void{
      this.cancel.emit();
    }
  ngOnInit() {
   // this.feedback= new Feedback();
  }

}
