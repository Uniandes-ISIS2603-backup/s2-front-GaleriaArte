import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import {CategoryDetail } from '../category-detail';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../category';
declare var jquery:any;
declare var $ :any;
declare var M:any;

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  @Input() categoryDetail:CategoryDetail;
  
  constructor(
    private route : ActivatedRoute,
    private categoryService: CategoryService,
    private toastrService: ToastrService
  ) { }

  category:Category;
category_id:number;

    getCategory():void{

      this.categoryService.getCategoryDetail(this.category_id)
      .subscribe(category => {this.category = category}, err => {
        this.toastrService.error(err, "Error");
    });
    }
  ngOnInit() { 
    
    this.category_id =+ this.route.snapshot.paramMap.get('id');
    this.category = new Category();
    this.getCategory();
    $(document).ready(function(){
      $('.modal').modal();
    });

}


}
