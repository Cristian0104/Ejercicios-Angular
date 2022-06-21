import { Injectable } from '@angular/core';
import { ControllerComponent } from '../components/controller/controller.component';
import { TrafficLightsComponent } from '../components/traffic-lights/traffic-lights.component';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  controller!: ControllerComponent;
  trafficLights!: TrafficLightsComponent;

constructor() { }

}
