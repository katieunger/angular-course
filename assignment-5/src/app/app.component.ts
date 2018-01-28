import { Component, OnInit, DoCheck } from '@angular/core';

import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  activeUsers: Array<string> = [];
  inactiveUsers: Array<string> = [];
  count: Number = 0;

  constructor(private usersService: UsersService, private counterService: CounterService) {

  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    //this.count = this.counterService.count;
  }

  ngDoCheck() {
    this.count = this.counterService.count;
  }

}
