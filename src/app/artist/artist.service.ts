import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from './artist';
import { ArtistDetail } from './artist-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const artists = '/artists';
//const API_URL = "../../assets/";
//const artists = 'artist.json';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(API_URL + artists);
  }
  /**
    * Returns the Observable object with the details of an artist retrieved from the API
    * @returns The artist details
    */
  getArtistDetail(artistId): Observable<ArtistDetail> {
    return this.http.get<ArtistDetail>(API_URL + artists + '/' + artistId);
  }

  /**
  * Creates an artist
  * @param artist The new artist
  * @returns The confirmation that the artist was created
  */
  createArtist(artist): Observable<Artist> {
    return this.http.post<Artist>(API_URL + artists, artist);
  }
}