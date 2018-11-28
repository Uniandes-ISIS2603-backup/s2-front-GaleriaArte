import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FeedbackService } from '../feedback.service';
//import { ToastrService } from 'ngx-toastr';
import { Feedback } from '../feedback';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css'],
})
export class FeedbackCreateComponent implements OnInit {

     /**
    * Constructor for the component
    * @param feedbackService The feedbacks's services provider
    * //param toastrService The toastr to show messages to the user
    */
  constructor(
    private feedbackService: FeedbackService,
    private router: Router,
   // private toastrService: ToastrService
  ) { }

    /**
    * The new feedback
    */
 feedback:Feedback

  /**
    * The output which tells the parent component
    * that the user no longer wants to create a feedback
    */
 @Output() cancel = new EventEmitter();

   /**
    * The output which tells the parent component
    * that the user created a new feedback
    */
 @Output() create = new EventEmitter();

   /**
    * Creates an feedback
    */
 createFeedback(): Feedback
 {
   console.log(this.feedback);

   this.feedbackService.createFeedback(this.feedback).subscribe((feedback) => {this.feedback=feedback; this.create.emit(); 
     //this.toastrService.success("El comentario fue creado", "Creacion de comentario") 
   });

   return this.feedback;
 }
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
 cancelCreation(): void{
   this.cancel.emit();
 }

     /**
    * This function will initialize the component
    */
ngOnInit() {
 this.feedback= new Feedback();
}

 

  //  /**
  //   * Cancels the creation of the new feedback
  //   * Redirects to the feedback' list page
  //   */
  //  cancelCreation(): void {
  //   //this.toastrService.warning('The feedback wasn\'t created', 'feedback creation');
  //   this.router.navigate(['/feedbacks/list']);
  // }
  // createFeedback(): void {
  //   var feedback_create = {
  //     usuario: this.feedback.usuario,
  //     descripcion: this.feedback.descripcion,
  //     rating: this.feedback.rating,
  // };
  // this.feedbackService.createFeedback(feedback_create)
  //     .subscribe(feedback => {
  //         this.router.navigate(['/feedbacks/' + feedback.idType + '/details']);
  //         this.toastrService.success("The feedback was successfully created", 'feedback creation');
  //     }, err => {
  //         this.toastrService.error(err, 'Error');
  //     });
//}

}
