import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {ExtraService} from './extraService';
import {ExtraServiceDetail}from './extraService-detail';

const API_URL = "../../assets/";
const extraServices = 'extraService.json';

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

  getExtraServiceDetail(extraServiceId): Observable<ExtraServiceDetail> 
     {
       return this.http.get<ExtraServiceDetail>(API_URL + extraServices + '/' + extraServiceId);
    }

    createExtraService(extraService): Observable<ExtraService> {
        return this.http.post<ExtraService>(API_URL + extraServices, extraService);
      }

      updateExtraService(extraService):Observable<ExtraServiceDetail>{
        return this.http.put<ExtraServiceDetail>(API_URL + extraServices + '/' + extraService.id, extraService  );
      }
      deleteExtraService(extraServiceId): Observable<boolean>
      {
        return this.http.delete<boolean>(API_URL + extraServices + '/' +extraServiceId);
      }
    }


