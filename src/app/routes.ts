import { Routes                 } from "@angular/router";
import { FeedbackListComponent  } from './feedback/feedback-list/feedback-list.component';
import { InicioComponent        } from "./inicio/inicio.component";
import { ArtistListComponent    } from "./artist/artist-list/artist-list.component";


export const routes: Routes=[
    { path:'artists',component: ArtistListComponent},
    { path:'feedbacks',component:FeedbackListComponent},
    { path:'', component:InicioComponent}
];