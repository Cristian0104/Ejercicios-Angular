import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightSwitchComponent } from './pages/light-switch/light-switch.component';
import { ControlerComponent } from './components/controler/controler.component';
import { TrafficLightsComponent } from './components/traffic-lights/traffic-lights.component';
import { ControllerComponent } from './components/controller/controller.component';



@NgModule({
  declarations: [
    LightSwitchComponent,
    ControlerComponent,
    TrafficLightsComponent,
    ControllerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LightSwitchModule { }
