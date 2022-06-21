import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../services/Switch.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styles: [
    `
    .cont{
      display: flex;
      flex-direction: row;
    }

    .select{
      margin-right: 3vw;
    }
    `
  ]
})
export class ControllerComponent implements OnInit {

  estado: boolean = false;
  color: string = '';

  constructor(private serviceSwitch: SwitchService) {
    this.serviceSwitch.controller = this;
  }

  ngOnInit(): void {
  }

  cambiarEstado(){
    this.estado = !this.estado;
    this.serviceSwitch.trafficLights.estado = this.estado;
  }

  getValue(event:any) {
    this.color = event.target.value;
    this.serviceSwitch.trafficLights.color = this.color;
  }
}
