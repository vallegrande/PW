import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SunatService {

  url:string ="/v1/tipo-cambio-sunat";
  constructor(private http:HttpClient) { }

  findall():Observable<any>{
    
    return this.http.get(this.url)
  }
}
