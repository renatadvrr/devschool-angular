import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';



@NgModule({
  declarations: [
    TelaLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TelaLoginComponent
  ]
})
export class LoginModule { }
