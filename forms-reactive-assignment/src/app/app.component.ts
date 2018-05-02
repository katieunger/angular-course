import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectNames = ['Test', 'test'];
  statuses = ['stable', 'critical', 'finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.asyncForbiddenNames.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    //this.projectForm.reset();
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

  asyncForbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({'nameIsForbidden': true})
        } else {
          resolve(null)
        }
      }, 1500);
    });
    return promise;
  }

}
