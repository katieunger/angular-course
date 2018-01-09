import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onIntervalFired(firedNumber: number){
    console.log(firedNumber)
  }
  //numbersArray = [];
  //
  //// Only executed after button is clicked
  //onGameStarted(i) {
  //  this.numbersArray.push(i);
  //}
  //
  //onGameStopped() {
  //  this.numbersArray = [];
  //}
}
