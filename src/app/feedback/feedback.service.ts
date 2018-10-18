import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Feedback} from './feedback';

const API_URL = "../../assets/";
const editorials = 'feedbacks.json';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }
  
  getFeedBacks(): Observable<Feedback[]> {
        return this.http.get<Feedback[]>(API_URL + editorials);
}
}
