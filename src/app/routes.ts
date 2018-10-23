import { Routes } from "@angular/router";
import {FeedbackListComponent} from './feedback/feedback-list/feedback-list.component';
import { InicioComponent } from "./inicio/inicio.component";




export const routes: Routes=[
    
    
    { path:'feedbacks',component:FeedbackListComponent},
   { path:'', component:InicioComponent}
];