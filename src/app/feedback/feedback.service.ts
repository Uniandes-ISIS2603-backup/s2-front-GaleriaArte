import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Feedback} from './feedback';
import { FeedbackDetail } from './feedback-detail';


const API_URL = "http://localhost:8080/s2_galeriaarte-api/api/paintworks/1/";
const feedbacks = 'feedBacks';
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

    /**
    * Creates an feedback
    * @param feedback The new feedback
    * @returns The new feedback with the new id
    */
createFeedback(feedback): Observable<Feedback> {
  return this.http.post<Feedback>(API_URL + feedbacks, feedback);
}

updateFeedback(feedback):Observable<FeedbackDetail>{
  return this.http.put<FeedbackDetail>(API_URL + feedbacks + '/' + feedback.idType, feedback  );

}

  getFeedbackDetail(feedbackId): Observable<FeedbackDetail> {
    return this.http.get<FeedbackDetail>(API_URL + "feedbacks" + feedbackId + ".json");
}

deleteFeedback(feedbackId): Observable<boolean>
{
  return this.http.delete<boolean>(API_URL + feedbacks + '/' +feedbackId);
}
}
