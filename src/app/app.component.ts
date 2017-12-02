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

  toggleDetails() {
    return this.showDetails ? this.showDetails = false : this.showDetails = true;
  }

  getShowDetails(){
    return this.showDetails ? "none" : "block";
  }


}
