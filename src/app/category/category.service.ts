import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Category} from './category';
import { CategoryDetail } from './category-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const categories = '/categories';
/**
* The service provider for everything related to feedbacks
*/
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }


   /**
    * Returns the Observable object containing the list of categories retrieved from the API
    * @returns The list of categories in real time
    */
   getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + categories);
}

    /**
    * Creates an category
    * @param category The new category
    * @returns The new category with the new id
    */
createCategory(category): Observable<Category> {
  return this.http.post<Category>(API_URL + categories, category);
}

updateCategory(category):Observable<CategoryDetail>{
  return this.http.put<CategoryDetail>(API_URL + categories + '/' + category.idType, category  );

}

  getCategoryDetail(categoryId): Observable<CategoryDetail> {
    return this.http.get<CategoryDetail>(API_URL + "categories" + categoryId + ".json");
}

deleteCategory(categoryId): Observable<boolean>
{
  return this.http.delete<boolean>(API_URL + categories + '/' +categoryId);
}
}
