import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor() { }

  get tabs() {
    return [
      {
        icon: 'home-outline',
        route: 'dashboard'
      },
      {
        icon: 'wallet-outline',
        route: 'budgets'
      },
      {
        icon: 'settings-outline',
        route: 'settings'
      },
      {
        icon: 'person-circle-outline',
        route: 'budgets'
      }
    ];
  }

  ngOnInit() {}

}
