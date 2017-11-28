import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  // Method executed at the time the component is created by Angular.
  constructor() {
    // ES6 arrow function
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
