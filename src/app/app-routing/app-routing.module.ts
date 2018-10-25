import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { Routes, RouterModule   } from "@angular/router";
import { FeedbackListComponent  } from '../feedback/feedback-list/feedback-list.component';
import { InicioComponent        } from "../inicio/inicio.component";
import { ArtistListComponent    } from "../artist/artist-list/artist-list.component";
import { ArtistDetailComponent  } from '../artist/artist-detail/artist-detail.component';


export const routes: Routes=[
    { path: 'artists', children: [
       {path: 'list', component: ArtistListComponent},
       {path: ':id', component: ArtistDetailComponent}]},
    { path: 'feedbacks', children: [
       {path: 'list', component: FeedbackListComponent}]},
    { path:'', component:InicioComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
