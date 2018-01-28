import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) {

  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

}
