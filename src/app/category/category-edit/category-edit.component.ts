import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { CategoryService } from '../category.service';
import { CategoryDetail } from '../category-detail';
@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
 
  constructor( private categoryService: CategoryService,
    private toastrService: ToastrService
  ) { }
  @Input() category: CategoryDetail;


  @Output() update= new EventEmitter();
  @Output() cancel= new EventEmitter();

  editFeedback():void{
    this.categoryService.updateCategory(this.category).subscribe(()=>{
      this.toastrService.success("The category was updated","category  edition");
    });
    this.update.emit();
  }

  cancelEdition():void{
    this.cancel.emit();
  }
  getCategory():void{
    this.categoryService.getCategoryDetail(this.category.idType).subscribe(category=>{this.category=category});
  }
  ngOnInit() {
    this.category= new CategoryDetail();
    this.getCategory();
  }

  ngOnChanges()
  {
    this.ngOnInit();
  }

}
