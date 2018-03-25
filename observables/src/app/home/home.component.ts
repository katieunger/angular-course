import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // Interval is a simple method for creating a new Observable
    // We pass a number to interval as a parameter, and this specifies the number of milliseconds elapsed between emitting Observables
    const myNumbers = Observable.interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        }
    );
    // Now that we have created the myNumbers Observable, we can subscribe to it
    // Subscribe can be passed three callback functions: one for handling data, one for handling errors, and one for handling completion
    // This Observable will not fail (raise an error) or complete
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    )

    // The create method takes a function as an argument
    // This function should take your asynchronous code
    // This function takes an argument - an Observer - not to be mistaken for the subscriber in the subscription function
    // This setup is needed when creating an Observable from scratch
    // Next method emits the next data package
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(()=>{
        observer.next('first package');
      }, 2000);
      setTimeout(()=>{
        observer.next('second package');
      }, 4000);
      setTimeout(()=>{
        //observer.error('this does not work');
        observer.complete();
      }, 5000);
      // This never fires because complete function is called before this
      setTimeout(()=>{
        observer.next('third package');
      }, 6000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string)=>{ console.log(data); },
      (error: string)=>{ console.log(error); },
      // This completed function won't be called as of now
      ()=>{ console.log('completed'); }
    )
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
