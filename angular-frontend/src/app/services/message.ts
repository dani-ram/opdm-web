import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class messageService {

  private apiUrl = 'http://localhost:8000/api/message';
  
  constructor(private http: HttpClient){}

  sendMessage(data: { name: string; 
    email: string; 
    message: string}): Observable<any>{
    return this.http.post(this.apiUrl, data);
  }
}
