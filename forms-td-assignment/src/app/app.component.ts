import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') testForm: NgForm;
  defaultSubscription = 'advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    //console.log(this.testForm);
    this.submitted = true;
    this.user.email = this.testForm.value.email;
    this.user.subscription = this.testForm.value.subscription;
    this.user.password = this.testForm.value.password;

    this.testForm.reset();
  }

}
