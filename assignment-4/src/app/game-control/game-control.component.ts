import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;

  @Output() emitEvenNumbers = new EventEmitter();
  @Output() emitOddNumbers = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    //var i = 0;
    //function increment() {
    //  i++;
    //  timeArray.push(i);
    //  if (i%2==0){
    //    this.emitEvenNumbers.emit(i);
    //  } else {
    //    this.emitOddNumbers.emit(i);
    //  }
    //  console.log(timeArray);
    //}
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.interval);
  }

}
