import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'         ;
import { Cv    } from './cv'     ;
import {cvDetail}from './cv-detail';


const API_URL = "../../assets/" ;
const cvs  = 'cv.json'   ;

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }
 
  getCvDetail(cvId): Observable<cvDetail> 
     {
       return this.http.get<cvDetail>(API_URL + cvs + '/' + cvId);
    }
    createCv(cv): Observable<Cv> {
      return this.http.post<Cv>(API_URL + cvs, cv);
}
deleteCV(cvId): Observable<boolean>
{
  return this.http.delete<boolean>(API_URL + cvs + '/' +cvId);
}
}
