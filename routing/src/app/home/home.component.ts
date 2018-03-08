import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number){
    // complex calculation
    // Need to get access to router to navigate here
    // Navigate method takes an argument which is an array of the different elements of the path
    // We are using an absolute path
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin(){
    this.authService.login();
    console.log(this.authService.loggedIn);
  }

  onLogout(){
    this.authService.logout();
    console.log(this.authService.loggedIn);
  }

}
