import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent },
  ]},
  {
    path: 'servers',
    //canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      // With resolve property, unlike guards, this property receives an object rather than an array
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
  //{ path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: "Page not found!"} },
  { path: '**', redirectTo: '/not-found' }
  // Make sure this wildcard route is the last route in array
];

@NgModule({
  // All URLS are parsed by the server first, not by Angular.
  // The server hosting your single page Angular application has to be configured so that in case of a 404 error
  // it returns the index.html file.
  // This is because when going to <mydomain.com>/servers, the host server will look for /servers and not find it (we only have index.html).
  // We want Angular to parse this route, but the server will return a 404 first.

  // Using the useHash configuration allows us to support old browsers that cannot parse routes with slashes, like /servers
  // This uses a hash sign in routes, an older technique (#servers)
  // This informs the server that it should only parse the URL before the hash
  imports: [
    RouterModule.forRoot(appRoutes)
    //RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
