import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [{number: 1}]

  // Only executed after button is clicked
  onGameStarted() {
    setInterval();
  }

  onGameStopped() {
  }
}
