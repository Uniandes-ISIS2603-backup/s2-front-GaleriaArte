import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {MedioPago} from './medioPago';

const API_URL = "../../assets/";
const medioPagos = '/medioPagos.json';

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

}
