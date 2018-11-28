import { KindModule } from './kind/kind.module';
import { KindCreateComponent } from './kind/kind-create/kind-create.component';
import { AuthService } from './services/auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import { PaintworkModule } from './paintwork/paintwork.module';
import { BrowserModule    } from '@angular/platform-browser'        ;
import { NgModule         } from '@angular/core'                    ;
import { AppRoutingModule } from './app-routing/app-routing.module' ;
import { NgbModule        } from '@ng-bootstrap/ng-bootstrap' ;
import { AppComponent     } from './app.component'            ;
import { ArtistModule     } from './artist/artist.module'     ;
import { FeedbackModule   } from "./feedback/feedback.module" ;
import { BuyerModule      } from './buyer/buyer.module'       ;
import { InicioComponent  } from './inicio/inicio.component';
import { FeedbackCreateComponent } from './feedback/feedback-create/feedback-create.component'  ;
import { MedioPagoModule } from './medioPago/medioPago.module';
import { ExtraServiceModule} from './extraService/extraService.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { SaleModule } from './sale/sale.module';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Error404Component } from './error404/error404.component';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvModule } from './cv/cv.module';
import { ModalDialogModule } from 'ngx-modal-dialog';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NotFoundComponent,
    LoginComponent,
    ModalBasicComponent,
    Error404Component

  ],
  imports: [
    BrowserModule,
    ModalDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
/**********  Importe de los modulos nuestros  ************************** */
    PaintworkModule,
    KindModule,
    ArtistModule,
    FeedbackModule,
    BuyerModule,
    CvModule,
    MedioPagoModule,
    ExtraServiceModule,
   ToastrModule.forRoot({
     timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true
 }),
/*********************************************************************** */
    AppRoutingModule,
    NgbModule,
    SaleModule,
    ModalDialogModule.forRoot()
    ],
   providers: [ { 
      provide: HTTP_INTERCEPTORS,
     useClass: HttpErrorInterceptor,
     multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

