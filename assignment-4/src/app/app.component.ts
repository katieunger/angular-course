import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timerArray = [];

  // Only executed after button is clicked
  onGameStarted(timerData: {value:number, even:boolean}) {
    this.timerArray.push({
      value: timerData.value,
      even: timerData.even
    });
  }

  onGameStopped() {
  }
}
