import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.autentica(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigateByUrl('animais');
      },
      (error) => {
        alert('Usuário ou senha inválido');
        console.log(error.message);
      }
    );
  }
}
