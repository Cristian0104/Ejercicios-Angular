import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../services/Switch.service';

@Component({
  selector: 'app-traffic-lights',
  templateUrl: './traffic-lights.component.html',
  styleUrls: ['./traffic-lights.component.css']
})
export class TrafficLightsComponent implements OnInit {

  estado!: boolean;

  color: string = 'Rojo';

  constructor(private serviceSwitch: SwitchService) {
    this.serviceSwitch.trafficLights = this;
  }

  ngOnInit(): void {
  }

}
