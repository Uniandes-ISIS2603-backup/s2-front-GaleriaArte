import { KindDetailComponent } from './../kind/kind-detail/kind-detail.component';
import { KindCreateComponent } from './../kind/kind-create/kind-create.component';
import { LoginComponent } from './../login/login.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FeedbackListComponent } from '../feedback/feedback-list/feedback-list.component';
import { InicioComponent } from "../inicio/inicio.component";
import { ArtistListComponent } from "../artist/artist-list/artist-list.component";
import { ArtistDetailComponent } from '../artist/artist-detail/artist-detail.component';
import { BuyerListComponent } from "../buyer/buyer-list/buyer-list.component";
import { BuyerDetailComponent } from '../buyer/buyer-detail/buyer-detail.component';
import { PaintworkListComponent } from "../paintwork/paintwork-list/paintwork-list.component";
import { PaintworkDetailComponent } from '../paintwork/paintwork-detail/paintwork-detail.component';
import { ExtraServiceListComponent } from '../extraService/extraService-list/extraService-list.component';
import {ExtraServiceDetailComponent } from '../extraService/extraService-detail/extraService-detail.component';
import { MedioPagoListComponent } from '../medioPago/medioPago-list/medioPago-list.component';
import {MedioPagoDetailComponent } from '../medioPago/medioPago-detail/medioPago-detail.component';
import { PaintworkAddComponent } from '../paintwork/paintwork-add/paintwork-add.component';
import { PaintworkEditComponent } from '../paintwork/paintwork-edit/paintwork-edit.component';
import { SaleListComponent } from '../sale/sale-list/sale-list.component';
import { ModalBasicComponent } from '../modal-basic/modal-basic.component';
import { Error404Component } from '../error404/error404.component';
import { KindListComponent } from '../kind/kind-list/kind-list.component';
import { SaleCreateComponent } from '../sale/sale-create/sale-create.component';
import { SaleEditComponent } from '../sale/sale-edit/sale-edit.component';
import { SaleDetailComponent } from '../sale/sale-detail/sale-detail.component';
import { MedioPagoDetail } from '../medioPago/medioPago-detail';
import { MedioPagoEditComponent } from '../medioPago/medio-pago-edit/medio-pago-edit.component';
import { MedioPagoCreateComponent } from '../medioPago/medioPago-add/medioPago-add.component';
import { BuyerEditComponent } from '../buyer/buyer-edit/buyer-edit.component';
import { BuyerCreateComponent } from '../buyer/buyer-create/buyer-create.component';
import { ExtraServiceDetail } from '../extraService/extraService-detail';
import { ExtraServiceEditComponent } from '../extraService/extra-service-edit/extra-service-edit.component';
import { ExtraServiceCreateComponent } from '../extraService/extraService-add/extraService-add.component';




export const routes: Routes = [
  {
    path: 'paintwork', children: [
      { path: 'list', component: PaintworkListComponent },
      { path: ':id', component: PaintworkDetailComponent },
      // { path: 'add', component: PaintworkAddComponent },
      // { path: 'edit/:id', component: PaintworkEditComponent }
      ]
  },

  {
    path: 'medioPagos', 
    children: [
      { path: 'list', 
      component: MedioPagoListComponent },
      {path: ':id', component:MedioPagoDetail},
      {path: ':id/edit' , component:MedioPagoEditComponent},
      {path: 'create' , component: MedioPagoCreateComponent}
      ]
  },

  {
    path: 'buyer', children: [
      { path: 'list', component: BuyerListComponent },
      { path: ':id', component: BuyerDetailComponent },
      {path: ':id/edit', component: BuyerEditComponent},
      {path: 'create', component: BuyerCreateComponent}
    ]
  },
  {path: 'kinds', children: [
    { path: 'list', component: KindListComponent },
<<<<<<< HEAD
    { path: 'detail/:id', component: KindDetailComponent },
=======
>>>>>>> 4707a10ab0120262e587ac449cbb82b6b18fb60f
    {path : 'create', component : KindCreateComponent}
  ]
},

  {
    path: 'extraServices', children: 
    [
      { path: 'list', component: ExtraServiceListComponent },
      {path: ':id', component:ExtraServiceDetail},
      {path: ':id/edit', component: ExtraServiceEditComponent},
      {path: 'create', component: ExtraServiceCreateComponent}

    ]
  },

  {
    path: 'artists', children: [
      { path: 'list', component: ArtistListComponent },
      { path: ':id', component: ArtistDetailComponent }]
  },


  

  //{path: '**', component :NotFoundComponent},
  { path: 'login', component: LoginComponent },

  { path: 'inicio', component: InicioComponent },
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'aniade', component: ModalBasicComponent },
  { 
    path: 'sale', 
    children:[
      {
       path:'create', component: SaleCreateComponent
      },
      {
        path:'list', component: SaleListComponent
      },
      {
        path:':id/edit', component: SaleEditComponent
      },
      {
        path: ':id', component: SaleDetailComponent
      }
    ]
  
},

  { path: '**', component: Error404Component }




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
