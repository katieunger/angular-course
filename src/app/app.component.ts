import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: [`h3{color:dodgerblue} .white{color:white}`]

})
export class AppComponent {
  allowResetUsername: boolean = false;
  username: string = '';
  showDetails: boolean = true;
  clicksArray = [];
  //title = 'Does this change?';
  //name = '';

  onUpdateUsername(event: Event){
    console.log(this.username);
    if (this.username !== ""){
      this.allowResetUsername = true;
    } else {
      this.allowResetUsername = false;
    }
  }

  onResetUsername() {
    this.username = "";
    this.allowResetUsername = false;
  }

  onClickDetails() {
    // Toggle showDetails boolean
    this.showDetails = !this.showDetails;

    // Add counter to clicksArray
    this.clicksArray.push(new Date());
  }
}
