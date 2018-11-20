import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Sale} from './sale';
import { SaleDetail } from './sale-detail';



const API_URL = "../../assets/";
const sale = 'sale.json'; 
/**
* The service provider for everything related to sale
*/
@Injectable({
  providedIn: 'root'
})
export class SaleService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

  getSale(saleId): Observable<Sale>{
    return this.http.get<Sale>(API_URL + sale );
  }
  getSales():Observable<Sale[]>{

    return this.http.get<Sale[]>(API_URL + sale);
  
  }

  createSale(sale): Observable<SaleDetail>{
    return this.http.post<SaleDetail>(API_URL + sale, sale);
  }
}
