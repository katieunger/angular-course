import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  // ofType() is a helper method provided by ngrx/effects
  authSignup = this.actions$
    .ofType(AuthActions.TRY_SIGNUP);

  // Using $ to indicate that actions is an Observable
  // actions$ is just like a list of all the actions we have in our app
  constructor(private actions$: Actions) {

  }
}
