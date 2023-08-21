import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private basUrl = "http://localhost:9000/products"

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.basUrl}`,{ withCredentials: true });
  }
}
