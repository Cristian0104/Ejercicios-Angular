import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    DisplayHideComponent
  ],
  exports: [
    DisplayHideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DisplayModule { }
