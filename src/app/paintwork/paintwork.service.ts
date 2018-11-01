import { Paintwork } from './paintwork';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = "../../assets/";
const paintworks = 'Paintorks.json';

/**
* The service provider for everything related to editorials
*/
@Injectable({
  providedIn: 'root'
})
export class PaintworkService {
/**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
  
   getPaintworks() : Observable<Paintwork[]> {
       return this.http.get<Paintwork[]>(API_URL + paintworks);
   }
}
