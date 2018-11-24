import { Kind } from './kind';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = "http://localhost:8080/s2_galeriaarte-api/api/";
const kinds = 'kinds';

@Injectable({
  providedIn: 'root'
})
export class KindService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
   
   /**
   * Creates an author
   * @param author The new author
   * @returns The new author with the new id
   */
   createKind(Kind): Observable<Kind> {
       return this.http.post<Kind>(API_URL + kinds, Kind);
   }

   /**
    * Retrieves the list of Kinds in the KindStore
    * @returns The list of Kinds
    */
   getKinds(): Observable<Kind[]> {
    return this.http.get<Kind[]>(API_URL + kinds);
  }
   /**
    * Updates a new Kind
    * @param Kind The updated Kind
    * @returns The updated Kind
    */
   updateKind(kind): Observable<Kind> {
    return this.http.put<Kind>(API_URL + kinds + '/' + kind.idType, kind);
  }
  /**
    * Deletes a Kind
    * @param KindId The Kind's id
    * @returns True if the Kind was deleted, false otherwise
    */
   deleteKind(kindId): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + kinds + '/' + kindId);
  }

}
