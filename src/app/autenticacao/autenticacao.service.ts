import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autentica(usuario:string, senha:string): Observable<any>{
    return this.httpClient.post('http://localhost:3000/login', {
      email: usuario,
      password: senha
    });
  }
}
