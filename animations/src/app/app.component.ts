import { Component } from '@angular/core';
import {
  trigger,
    state,
    style
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      }))

    ])
  ]
})
export class AppComponent {
  state = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate(){
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

  onAdd(item) {
    this.list.push(item);
  }
}
