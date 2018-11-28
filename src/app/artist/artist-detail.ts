import { Cv } from "../cv/Cv";
import { Paintwork } from "../paintwork/paintwork";

import { Artist } from "./artist";


export class ArtistDetail extends Artist {
    
    /** El cv del artist **/
    cv : Cv;

    /** las obras des artista */
    obras : Paintwork[];
}

