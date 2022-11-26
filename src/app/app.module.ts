import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { HeaderComponent } from './components/header/header.component';
import { PensamentosComponent } from './components/pensamentos/pensamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    HeaderComponent,
    PensamentosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
