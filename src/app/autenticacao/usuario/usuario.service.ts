import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
   }

  private decodificaJWT(){
    const token = this.tokenService.retornaToken();
    console.log("============================");
    console.log(token);

    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }
}
