import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  // The ActivatedRoute object we injected will give us access to the id passed the URL - the selected user
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']

    };
    // Params is an observable
    // This allows us to work with asynchronous events
    // This code will only fire when params change
    this.route.params
      .subscribe (
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }

    );
  }

}
