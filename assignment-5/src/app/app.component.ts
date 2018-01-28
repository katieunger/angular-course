import { Component, OnInit, DoCheck } from '@angular/core';

import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  providers: [UsersService]
})
export class AppComponent implements OnInit, DoCheck {

  activeUsers: Array<string> = [];
  inactiveUsers: Array<string> = [];
  activeToInactive: Number = 0;
  inactiveToActive: Number = 0;

  constructor(private usersService: UsersService, private counterService: CounterService) {

  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    //this.count = this.counterService.count;
  }

  ngDoCheck() {
    this.activeToInactive = this.counterService.activeToInactiveCounter;
    this.inactiveToActive = this.counterService.inactiveToActiveCounter;
  }

}
