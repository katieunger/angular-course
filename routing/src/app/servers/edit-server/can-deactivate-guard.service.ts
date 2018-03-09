import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// An interface is a programming structure/syntax that allows the computer to enforce certain properties on an object (class).
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// CanDeactivate is an interface provided by the Angular router
// This wraps our own interface, CanComponentDeactivate - causes component/class to implement the CanDeactivate method
// This ensures that we can connect a component to our CanDeactivate guard
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  // This is the canDeactivate method which will be called by the Angular router when we try to leave a route
  // Will be passed the component we are currently on as an argument
  // This component needs to be of type CanComponentDeactivate - component needs to have this interface implemented, and thus be a component which has canDeactivate method
  // NextState is an optional argument - where we want to navigate next
  canDeactivate (component: CanComponentDeactivate,
                 currentRoute: ActivatedRouteSnapshot,
                 currentState: RouterStateSnapshot,
                 nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |
  boolean {
    // Call canDeactivate method on the component we are currently on
    // This is where we will implement the logic that defines whether we can route away or not
    return component.canDeactivate();
  }
}
