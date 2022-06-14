import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './pages/crud/crud.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuscribePipe } from './pipes/suscribe.pipe';



@NgModule({
  declarations: [
    CrudComponent,
    FormularioComponent,
    TablaComponent,
    SuscribePipe
  ],
  exports: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
