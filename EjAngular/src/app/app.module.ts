import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { DisplayModule } from './ejercicios/display/display.module';
import { ComponentesComunicadoresModule } from './ejercicios/componentes-comunicadores/componentes-comunicadores.module';
import { CrudModule } from './ejercicios/crud/crud.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    DisplayModule,
    ComponentesComunicadoresModule,
    CrudModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
