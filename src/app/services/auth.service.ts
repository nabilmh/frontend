import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { Agency} from '../agency.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../user.model';
import { Product } from '../product.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private basUrl = "http://localhost:9000/products"
  username1!:string
  password1!:string

  isAuthenticated:boolean = false;

  constructor(private http : HttpClient) { 
    
  }

  public login(username:string , password:string){
    let options = {
      headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
      
    }
    let params = new HttpParams()
    .set("username",username).set("password",password)
    .set("Authorization","Basic " + btoa("username:password"))
    return this.http.post("http://localhost:9000/login",params,options)
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.basUrl}`);
  }
  

  


}
