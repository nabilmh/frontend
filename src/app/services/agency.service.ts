import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency} from '../agency.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  private basUrl = "http://localhost:9000/agencies"

  constructor(private httpClient: HttpClient) { }

  getAgencyList(): Observable<Agency[]> {
    return this.httpClient.get<Agency[]>(`${this.basUrl}`);
  }

  createUser(agency: Agency): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, agency);
  }

  getUserById(id: number): Observable<Agency>{
    return this.httpClient.get<Agency>(`${this.basUrl}/${id}`);
  }
  
  deleteUser(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }

}
