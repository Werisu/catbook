import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }

  autentica(usuario:string, senha:string): Observable<HttpResponse<any>>{
    return this.httpClient.post('http://localhost:3000/login', {
      email: usuario,
      password: senha
    },
    { observe: 'response' }
    ).pipe(
      tap((res)=> {
        //const authToken = res.headers.get('x-access-token') ?? '';
        const authToken2 = JSON.parse(JSON.stringify(res.body))['accessToken'] ?? '';
        console.log(authToken2);

        this.usuarioService.salvaToken(authToken2);
      })
    );
  }
}
