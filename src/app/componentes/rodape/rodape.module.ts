import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape.component';



@NgModule({
  declarations: [
    RodapeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RodapeComponent]
})
export class RodapeModule { }
