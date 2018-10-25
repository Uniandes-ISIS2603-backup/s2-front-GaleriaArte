import { BrowserModule    } from '@angular/platform-browser'        ;
import { NgModule         } from '@angular/core'                    ;
import { HttpClientModule } from '@angular/common/http'             ;
import { AppRoutingModule } from './app-routing/app-routing.module' ;
import { NgbModule        } from '@ng-bootstrap/ng-bootstrap' ;
import { AppComponent     } from './app.component'            ;

import { ArtistModule     } from './artist/artist.module'     ;
import { FeedbackModule   } from "./feedback/feedback.module" ;
import { BuyerModule      } from './buyer/buyer.module'       ;
import { InicioComponent  } from './inicio/inicio.component'  ;

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
/**********  Importe de los modulos nuestros  ************************** */
    ArtistModule,
    FeedbackModule,
    BuyerModule,
/*********************************************************************** */
    AppRoutingModule,
    NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

