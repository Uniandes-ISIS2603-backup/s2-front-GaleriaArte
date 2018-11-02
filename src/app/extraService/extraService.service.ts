import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {ExtraService} from './extraService';

const API_URL = "../../assets/";
const extraServices = '/extraServices.json';

@Injectable()
export class ExtraServiceService 
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
    getExtraServices(): Observable<ExtraService[]> {
        return this.http.get<ExtraService[]>(API_URL + extraServices);
    }

}

