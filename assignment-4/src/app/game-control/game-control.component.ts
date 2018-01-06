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
    var timer = setInterval(function(){ alert("Hello"); }, 3000);

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
