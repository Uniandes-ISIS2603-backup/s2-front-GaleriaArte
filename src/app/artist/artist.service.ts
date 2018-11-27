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

/**
* Updates an artist
* @param artist The artist's information updated
* @returns The confirmation that the artist was updated
*/
updateArtist(artist): Observable<ArtistDetail> {
    return this.http.put<ArtistDetail>(API_URL + artists + '/' + artist.id, artist);
}

/**
* Deletes an artist from the BookStore
* @param artistId The id of the artist
* @returns The confirmation that the artist was deleted
*/
deleteArtist(artistId): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + artists + '/' + artistId);
}
}