import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/'

  registrarUsuario(body){
    return this.http.post(`${this.url}users`,JSON.stringify(body),{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }

  getUsuarios(){
    return this.http.get(`${this.url}users`);
  }
  getData(usuario){
    return this.http.get(`${this.url}datos/${usuario}`);
  }
}
