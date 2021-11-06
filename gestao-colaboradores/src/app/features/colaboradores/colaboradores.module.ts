import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaColaboradoresComponent } from './components/lista-colaboradores/lista-colaboradores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColaboradorComponent } from './components/colaborador/colaborador.component';



@NgModule({
  declarations: [
    ListaColaboradoresComponent,
    ColaboradorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListaColaboradoresComponent,
    ColaboradorComponent
  ]
})
export class ColaboradoresModule { }
