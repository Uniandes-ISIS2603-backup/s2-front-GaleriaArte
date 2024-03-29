import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {MedioPago} from './medioPago';
import {MedioPagoDetail} from './medioPago-detail';

import { environment } from '../../environments/environment';
//const API_URL = "../../assets/";
//const medioPagos = 'medioPago.json';
const API_URL = environment.apiURL;
const medioPagos = '/medioPagos';

/**
* The service provider for everything related to medioPagos
*/
@Injectable()
export class MedioPagoService 
    {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
    getMedioPagos(): Observable<MedioPago[]> {
        return this.http.get<MedioPago[]>(API_URL + medioPagos);
    }
    
     getMedioPagoDetail(medioPagoId): Observable<MedioPago> 
   {
        return this.http.get<MedioPagoDetail>(API_URL + medioPagos + '/' + medioPagoId);
   }

   createMedioPago(medioPago): Observable<MedioPago> {
    return this.http.post<MedioPago>(API_URL + medioPagos, medioPago);
  }
  updateMedioPago(medioPago):Observable<MedioPagoDetail>{
    return this.http.put<MedioPagoDetail>(API_URL + medioPagos + '/' + medioPago.id, medioPago  );
  }
  deleteMedioPago(medioPagoId): Observable<boolean>
  {
    return this.http.delete<boolean>(API_URL + medioPagos + '/' +medioPagoId);
  }
}
