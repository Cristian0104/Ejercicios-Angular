import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './pages/padre/padre.component';
import { HijoComponent } from './pages/hijo/hijo.component';



@NgModule({
  declarations: [
    PadreComponent,
    HijoComponent
  ],
  exports: [
    PadreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesComunicadoresModule { }
