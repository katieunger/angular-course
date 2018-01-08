import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{value:number, even:boolean}>();
  @Output() gameStopped = new EventEmitter<{}>();


  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    var timeArray = [];
    var i = 0;
    var bool;
    function increment() {
      i++;
      timeArray.push(i);
      if (i%2==0){
        bool = true
      } else {
        bool = false
      }
      console.log(timeArray);
    }
    this.timer = setInterval(function(){ increment(); }, 1000);
    this.gameStarted.emit({
      value: i,
      even: bool
    })

  }

  onGameStop() {
    clearInterval(this.timer);
  }

}
