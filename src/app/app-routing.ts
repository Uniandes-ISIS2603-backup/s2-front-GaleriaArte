import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import {FeedbackListComponent} from './feedback/feedback-list/feedback-list.component';


const routes:Routes=[
    
    
    {
        path:'feed',
        component:FeedbackListComponent
    }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}