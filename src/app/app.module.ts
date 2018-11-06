import { AuthService } from './services/auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import { PaintworkModule } from './paintwork/paintwork.module';
import { BrowserModule    } from '@angular/platform-browser'        ;
import { NgModule         } from '@angular/core'                    ;
import { HttpClientModule } from '@angular/common/http'             ;
import { AppRoutingModule } from './app-routing/app-routing.module' ;
import { NgbModule        } from '@ng-bootstrap/ng-bootstrap' ;
import { AppComponent     } from './app.component'            ;
import { ArtistModule     } from './artist/artist.module'     ;
import { FeedbackModule   } from "./feedback/feedback.module" ;
import { BuyerModule      } from './buyer/buyer.module'       ;
import { InicioComponent  } from './inicio/inicio.component';
import { FeedbacksCreateComponent } from './feedback/feedbacks-create/feedbacks-create.component'  ;
import { MedioPagoModule } from './medioPago/medioPago.module';
import { ExtraServiceModule} from './extraService/extraService.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { SaleModule } from './sale/sale.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NotFoundComponent,
    LoginComponent,
    ModalBasicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
/**********  Importe de los modulos nuestros  ************************** */
    PaintworkModule,
    ArtistModule,
    FeedbackModule,
    BuyerModule,
    MedioPagoModule,
    ExtraServiceModule,
/*********************************************************************** */
    AppRoutingModule,
    NgbModule,
    SaleModule
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

