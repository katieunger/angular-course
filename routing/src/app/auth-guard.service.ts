import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

// This will be executed before a route is loaded
// CanActivate can run asynchronously, returning an Observable or Promise
// or synchronously (returning just a boolean)
// (You may have some guards which execute some code that runs completely on the client, therefore they run synchronously)
// (Or, you might have some code which takes a couple fo seconds to run due to using a timeout or reaching out to server, therefore the guard runs asynchronously)
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
          // Navigate away
            this.router.navigate(['/']);
          }
      }
    )
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
