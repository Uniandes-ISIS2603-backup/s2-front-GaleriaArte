import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'         ;
import { Cv    } from './cv'     ;
import {cvDetail}from './cv-detail';
import { environment } from 'src/environments/environment';


const API_URL = environment.apiURL;
const cvs = '/artists';
//const API_URL = "../../assets/";
//const cvs = 'cv.json';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }
 
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API_URL + cvs);
  }

  getCvDetail(cvId): Observable<cvDetail> 
     {
       return this.http.get<cvDetail>(API_URL + cvs + '/' + cvId);
    }
    createCv(cv): Observable<Cv> {
      return this.http.post<Cv>(API_URL + cvs+cv.id+'/cvs', cv);
}
deleteCV(cvId): Observable<boolean>
{
  return this.http.delete<boolean>(API_URL + cvs + '/' +cvId);
}
updateCV(cv):Observable<cvDetail>{
  return this.http.put<cvDetail>(API_URL + cvs + '/' + cv.id, cv  );
}
}
