import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../category.service';
//import { ToastrService } from 'ngx-toastr';
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
    * //param toastrService The toastr to show messages to the user
    */
   constructor(
    private categoryService: CategoryService,
    private router: Router,
   // private toastrService: ToastrService
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
    * Creates a category
    */
 createCategory(): Category
 {
   console.log(this.category);

   this.categoryService.createCategory(this.category).subscribe((category) => {this.category=category; this.create.emit(); 
     //this.toastrService.success("El comentario fue creado", "Creacion de comentario") 
   });

   return this.category;
 }
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create a category
    */
 cancelCreation(): void{
   this.cancel.emit();
 }

     /**
    * This function will initialize the component
    */
ngOnInit() {
 this.category= new Category();
}

}
