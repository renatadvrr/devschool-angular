import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';
import { ColaboradorComponent } from './features/colaboradores/components/colaborador/colaborador.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradorComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
