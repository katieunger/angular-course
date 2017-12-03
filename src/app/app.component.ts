import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`h3{color:dodgerblue}`]
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
    // Add counter to clicksArray
    if (this.clicksArray.length == 0){
      this.clicksArray.push(0)
    } else {
      // Last element in array
      var lastItem = this.clicksArray[this.clicksArray.length - 1];
      this.clicksArray.push(lastItem + 1);
    }
    console.log(this.clicksArray);

    // Toggle showDetails boolean
    return this.showDetails ? this.showDetails = false : this.showDetails = true;
  }

  getShowDetails(){
    return this.showDetails ? "none" : "block";
  }


}
