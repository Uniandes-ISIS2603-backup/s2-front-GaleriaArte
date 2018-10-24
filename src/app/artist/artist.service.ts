import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Artist} from './artist';

const API_URL = "../../assets/";
const artist = 'artist.json';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  get Artists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(API_URL + artist);
}
}