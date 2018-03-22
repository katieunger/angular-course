import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Interval is a simple method for creating a new Observable
    // We pass a number to interval as a parameter, and this specifies the number of milliseconds elapsed between emitting Observables
    const myNumbers = Observable.interval(1000);
    // Now that we have created the myNumbers Observable, we can subscribe to it
    // Subscribe can be passed three callback functions: one for handling data, one for handling errors, and one for handling completion
    // This Observable will not fail (raise an error) or complete
    myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    )
  }
}
