import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario){
    return this.httpClient.post('http://localhost:3000/register', novoUsuario);
  }

  // verificaUsuarioExistente(nomeUsuario: String){
  //   return this.httpClient.get(`http://localhost:3000/users/exists/${nomeUsuario}`);
  // }
}
