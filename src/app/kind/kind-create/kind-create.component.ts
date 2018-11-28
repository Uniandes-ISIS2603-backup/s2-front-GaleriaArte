import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { KindService } from './../kind.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kind } from '../kind';



@Component({
  selector: 'app-kind-create',
  templateUrl: './kind-create.component.html',
  styleUrls: ['./kind-create.component.css']
})
export class KindCreateComponent implements OnInit {
  /**
   * 
   * @param kindService 
   * @param toastrService 
   */
  constructor(
    private kindService: KindService,
    private toastrService: ToastrService
  ) { }

  /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new author
   */
   @Output() create = new EventEmitter();

   /**
    * 
    */
   kind:Kind

   /**
    * Cancels the creation of the new kind
    * Redirects to the kinds' list page
    */
   cancelCreation(): void {
    this.cancel.emit();
  }
  createKind(): void {
    var kind_create = {
      name: this.kind.name,
      description: this.kind.description,
  };
  this.kindService.createKind(kind_create)
      .subscribe(() => {
        this.create.emit()
          this.toastrService.success("The kind was successfully created", 'kind creation');
      }, err => {
          this.toastrService.error(err, 'Error');
      });
}


ngOnInit() {
  this.kind = new Kind();
}


}
