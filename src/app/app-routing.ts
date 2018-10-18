import{RouterModule,Routes} from '@angular/router';
import {FeedbackListComponent} from './feedback/feedback-list/feedback-list.component';


const routes:Routes=[
    
    {path:'',redirectTo:'/feed/lista',pathMatch:'full'},
    
    {path:'feed',component:FeedbackListComponent}
];