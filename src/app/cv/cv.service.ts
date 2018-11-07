import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'         ;
import { Cv    } from './cv'     ;
import {cvDetail}from './cv-detail';


const API_URL = "../../assets/" ;
const cv  = 'cv.json'   ;

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }
 
  getCvDetail(cvId): Observable<cvDetail> 
     {
       return this.http.get<cvDetail>(API_URL + cv + '/' + cvId);
    }

}
