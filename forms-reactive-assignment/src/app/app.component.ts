import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectNames = ['Test'];


  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    this.projectForm.reset();
  }


  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    // If control.value is not in the array, this is evaluated as -1
    // -1 is interpreted as true!
    if(this.forbiddenProjectNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
    // If validation is successful you must return nothing or null
  }

}
