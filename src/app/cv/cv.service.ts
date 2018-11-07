import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'         ;
import { Cv    } from './cv'     ;

const API_URL = "../../assets/" ;
const cv  = 'cv.json'   ;

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }
}
