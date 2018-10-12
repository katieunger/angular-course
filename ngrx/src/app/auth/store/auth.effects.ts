import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

@Injectable()
export class AuthEffects {

  @Effect()
  authSignup;

  // Using $ to indicate that actions is an Observable
  constructor(private actions$: Actions) {

  }
}
