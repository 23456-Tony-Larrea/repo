import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/enviroments/enviroments';
import { Products } from '../../components/interface/Products'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/productos/';
  }

  getListProducts():Observable<Products[]> {
    return this.http.get<Products[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  postProduct(product:Products):Observable<Products> {
    return this.http.post<Products>(`${this.myAppUrl}${this.myApiUrl}`, product);
  }
  putProduct(id:number, product:Products):Observable<Products> {
    return this.http.put<Products>(`${this.myAppUrl}${this.myApiUrl}${id}`, product);
  }
  deleteProduct(id:number):Observable<Products> {
    return this.http.delete<Products>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
}
