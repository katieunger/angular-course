import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`h3{color:dodgerblue}`]
})
export class AppComponent {
  allowResetUsername = false;
  username = '';
  //title = 'Does this change?';
  //name = '';

  onUpdateUsername(event: Event){
    // HTMLInputElement informs TypeScript that the type of the HTML element of the event is an input
    console.log(this.username);
    if (this.username !== ""){
      this.allowResetUsername = true;
    } else {
      this.allowResetUsername = false;
    }
  }
}
