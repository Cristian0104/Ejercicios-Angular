import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
