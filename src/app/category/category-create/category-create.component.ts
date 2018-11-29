import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../category.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  
     /**
    * Constructor for the component
    * @param feedbackService The feedbacks's services provider
    *  @param toastrService  The toastr to show messages to the user
    */
   constructor(
    private categoryService: CategoryService,
    private toastrService: ToastrService
  
  ) { }

    /**
    * The new category
    */
   category:Category

  /**
    * The output which tells the parent component
    * that the user no longer wants to create a category
    */
 @Output() cancel = new EventEmitter();

   /**
    * The output which tells the parent component
    * that the user created a new category
    */
 @Output() create = new EventEmitter();
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create a category
    */
   cancelCreation(): void{
    this.cancel.emit();
  }
   /**
    * Creates a category
    */
   createCategory(): void {
    var category_create = {
      name: this.category.name,
      description: this.category.description,
  };
  this.categoryService.createCategory(category_create)
      .subscribe(() => {
        this.create.emit()
          this.toastrService.success("The category was successfully created", 'category creation');
      }, err => {
          this.toastrService.error(err, 'Error');
      });


     /**
    * This function will initialize the component
    */
}
ngOnInit() {
  this.category= new Category();
}
}