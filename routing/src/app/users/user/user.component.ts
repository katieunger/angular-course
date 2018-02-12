import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{
  user: {id: number, name: string};
  paramsSubscription: Subscription;

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

    // Angular cleans up this subscription whenever this component is destroyed

    this.paramsSubscription = this.route.params
      .subscribe (
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }

    );
  }

  // You don't have to do this but if you add your own observables you must unsubscribe on your own
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
