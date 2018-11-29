import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import {CategoryDetail } from '../category-detail';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  @Input() categoryDetail:CategoryDetail;
  
  constructor(
      private route: ActivatedRoute,
      private categoryService: CategoryService 
  ) { }

  category_id: number;
 
  getCategoryDetail(): void {
      this.categoryService.getCategoryDetail(this.category_id)
          .subscribe(categoryDetail => {
              this.categoryDetail = categoryDetail
          });
  }

  ngOnInit() {
      this.category_id = +this.route.snapshot.paramMap.get('id');
      if (this.category_id){
      this.categoryDetail = new CategoryDetail();
      this.getCategoryDetail();
      }
  }

}
