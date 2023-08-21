import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private basUrl = "http://localhost:9000/users"

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.basUrl}`,{ withCredentials: true });
  }

  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, user);
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.basUrl}/${id}`);
  }
  
  deleteUser(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }

}
