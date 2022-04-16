import { Router } from '@angular/router';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
      email: ['', [Validators.required, Validators.email]],
      fullName: [''],
      userName: [
        '',
        [Validators.required, minusculoValidator],
        //[this.usuarioExisteService.usuarioJaExiste()],
      ],
      password: [''],
    },
    {
      validators: [usuarioSenhaIguaisValidator]
    }
    );
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario: NovoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(() =>{
        this.router.navigateByUrl('');
      },
      (error)=> {console.log(error.error)}

      );
    }

  }

  printErros() {
    console.log(this.novoUsuarioForm?.valid);
    console.log(this.novoUsuarioForm?.valid);
  }
}
