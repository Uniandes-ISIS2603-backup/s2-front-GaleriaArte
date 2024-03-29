import { catchError } from 'rxjs/operators';
import { KindDetail } from './kind-detail';
import { Kind } from './kind';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = "http://localhost:8080/s2_galeriaarte-api/api/";
const kinds = 'kinds';

@Injectable({
  providedIn: 'root'
})
export class KindService {

  /**
    * The headers sent in every request to the API
    */
   headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Content-Type': 'application/json'
});

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
   /**
    * Retrieves the list of Kinds in the KindStore
    * @returns The list of Kinds
    */
   getKinds(): Observable<Kind[]> {
    return this.http.get<Kind[]>(API_URL + kinds);
  }
  
  /**
   * 
   * @param kindId 
   */
  getKind(kindId):Observable<Kind>{
    return this.http.get<Kind>(API_URL + kinds + '/' + kindId, { headers: this.headers });
  }

   /**
   * Creates an author
   * @param author The new author
   * @returns The new author with the new id
   */
   createKind(Kind): Observable<Kind> {
       return this.http.post<Kind>(API_URL + kinds, Kind);
   }

   
   /**
    * Updates a new Kind
    * @param Kind The updated Kind
    * @returns The updated Kind
    */
   updateKind(kind): Observable<boolean> {
    return this.http.put<boolean>(API_URL + kinds + '/' + kind.idType, kind, { headers: this.headers });
  }
  /**
    * Deletes a Kind
    * @param KindId The Kind's id
    * @returns True if the Kind was deleted, false otherwise
    */
   deleteKind(kindId): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + kinds + '/' + kindId);
  }

  getKindDetail(kindId): Observable<Kind> 
   {
        return this.http.get<KindDetail>(API_URL + kinds + '/' + kindId);
   }

   

  /**
    * The function which handles the errors generated by the requests
    * @param error The error which the API REST returned
    */
   private handleError(error: any) {
    return throwError(error.error.errorMessage);
}
}
