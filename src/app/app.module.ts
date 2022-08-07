import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BarrainicialComponent } from './componentes/barrainicial/barrainicial.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BarrainicialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
