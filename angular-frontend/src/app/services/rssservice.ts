import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Rssservice {
  
  private apiUrl = 'https://opdm-web-1.onrender.com/api/rss';
  constructor(private http: HttpClient){}

  getepisodios(): Observable<any[]> { 
    return this.http.get<any[]>(this.apiUrl);
   
    }
    
  }

