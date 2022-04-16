import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input()
  mensagem: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
