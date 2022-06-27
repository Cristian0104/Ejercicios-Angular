import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsComponent } from './graphs/graphs.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    GraphsComponent
  ],
  exports: [
    GraphsComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ]
})
export class ExternalLibraryGraphsModule { }
