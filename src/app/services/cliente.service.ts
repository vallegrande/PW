import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

 url: string ="http://localhost:3000/clientes";

  constructor(private http: HttpClient) { }

  findall(){
    return this.http.get(this.url);
  }

  registrar(persona:any){
    return this.http.post(this.url,persona);
  }

  eliminar(id:any){
    return this.http.delete(this.url+"/"+id)
  }

  actualizar(persona:any){
    return this.http.put(this.url,persona)
  }
}
