import { LoginComponent } from './../login/login.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { Routes, RouterModule   } from "@angular/router";
import { FeedbackListComponent  } from '../feedback/feedback-list/feedback-list.component';
import { InicioComponent        } from "../inicio/inicio.component";
import { ArtistListComponent    } from "../artist/artist-list/artist-list.component";
import { ArtistDetailComponent  } from '../artist/artist-detail/artist-detail.component';
import { PaintworkListComponent    } from "../paintwork/paintwork-list/paintwork-list.component";
import { PaintworkDetailComponent  } from '../paintwork/paintwork-detail/paintwork-detail.component';
import { FeedbacksCreateComponent } from '../feedback/feedbacks-create/feedbacks-create.component';
import { ExtraServiceListComponent } from '../extraService/extraService-list/extraService-list.component';
import { MedioPagoListComponent } from '../medioPago/medioPago-list/medioPago-list.component';
import { PaintworkAddComponent } from '../paintwork/paintwork-add/paintwork-add.component';
import { PaintworkEditComponent } from '../paintwork/paintwork-edit/paintwork-edit.component';
import { SaleListComponent } from '../sale/sale-list/sale-list.component';
import { ModalBasicComponent } from '../modal-basic/modal-basic.component';



export const routes: Routes=[
  { path: 'paintwork', children: [
    {path: 'detail/:id', component: PaintworkDetailComponent},
    {path: 'add', component: PaintworkAddComponent},
    {path: 'edit/:id', component: PaintworkEditComponent},
    {path: 'list', component: PaintworkListComponent}]},
    
     {path: 'medioPagos', children:[
       {path:'list', component: MedioPagoListComponent}]},
    
        
     {path: 'extraServices', children:[
       {path: 'list', component: ExtraServiceListComponent} ]},

    { path: 'artists', children: [
       {path: 'list', component: ArtistListComponent},
       {path: ':id', component: ArtistDetailComponent}]},


    { path: 'feedbacks', children: [
      {path: 'create', component: FeedbacksCreateComponent},
       {path: 'list', component: FeedbackListComponent}]},

      //{path: '**', component :NotFoundComponent},
      {path: 'login', component :LoginComponent},

    { path:'', component:InicioComponent},
    { path:'añade', component:ModalBasicComponent},
    {path:'sale', component: SaleListComponent}
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
