import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Feedback} from './feedback';

const API_URL = "../../assets/";
const feedbacks = 'feedbacks.json';
/**
* The service provider for everything related to feedbacks
*/
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

 /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }
  
  /**
    * Returns the Observable object containing the list of feedbacks retrieved from the API
    * @returns The list of feedbacks in real time
    */
  getFeedBacks(): Observable<Feedback[]> {
        return this.http.get<Feedback[]>(API_URL + feedbacks);
}
}
