import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaLoginComponent } from './features/login/components/tela-login/tela-login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TelaLoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
