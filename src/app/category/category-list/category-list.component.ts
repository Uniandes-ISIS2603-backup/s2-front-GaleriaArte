import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import { ActivatedRoute } from '@angular/router';
import {CategoryService} from '../category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  closeResult: string;


  constructor(private categoryService: CategoryService ,
    private route : ActivatedRoute
        ) { }

  
  categories:Category[];
  
  getCategories():void
  {
      this.categoryService.getCategories().subscribe(categories => {this.categories=categories;});
  }
  ngOnInit() {
      this.getCategories();
  }

}
