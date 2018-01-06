import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Only executed after button is clicked
  onGameStarted() {
    setInterval();
  }

  onGameStopped() {
    this.numbers.push();
  }
}
