import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Test Server";
  serverCreated = false;

  // Method executed at the time the component is created by Angular.
  constructor() {
    // ES6 arrow function
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event){
    // HTMLInputElement informs TypeScript that the type of the HTML element of the event is an input
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
