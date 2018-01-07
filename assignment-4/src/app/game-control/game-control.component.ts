import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<>();
  @Output() gameStopped = new EventEmitter<>();


  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    var timeArray = [];
    var i = 0;
    function increment() {
      i++;
      timeArray.push(i);
      console.log(timeArray)
    }
    var timer = setInterval(function(){ increment(); }, 1000);

    //this.gameStarted.emit({
    //  evenNumbers:,
    //  oddNumbers:,
    //
    //})
  }

  onGameStop() {
    clearInterval(timer);
  }

}
