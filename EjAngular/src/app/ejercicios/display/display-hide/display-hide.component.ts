import { Component } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styles: [
  ]
})
export class DisplayHideComponent {

bool: boolean = false;

ensennar() {
  this.bool = !this.bool;
}

}
