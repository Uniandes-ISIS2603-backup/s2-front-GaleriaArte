import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { CategoryService } from './category.service';

@NgModule({
  imports: [
    BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
  ],
  declarations: [CategoryListComponent, CategoryDetailComponent, CategoryCreateComponent, CategoryEditComponent],
  providers   :[CategoryService       ],
  exports     :[CategoryListComponent ]

})
export class CategoryModule { }
