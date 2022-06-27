import { CrudComponent } from './ejercicios/crud/pages/crud/crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayHideComponent } from './ejercicios/display/display-hide/display-hide.component';
import { PadreComponent } from './ejercicios/componentes-comunicadores/pages/padre/padre.component';
import { LightSwitchComponent } from './ejercicios/light-switch/pages/light-switch/light-switch.component';
import { GraphsComponent } from './ejercicios/external-library-graphs/graphs/graphs.component';


const  routes: Routes = [
  {
    path: 'display-hide',
    component: DisplayHideComponent
  },
  {
    path: 'componentes-comunicativos',
    component: PadreComponent
  },
  {
    path: 'crud',
    component: CrudComponent
  },
  {
    path: 'light-switch',
    component: LightSwitchComponent
  },
  {
    path: 'graphs',
    component: GraphsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
