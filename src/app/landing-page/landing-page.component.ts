import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [AuthService]
})
export class LandingPageComponent implements OnInit {

  private isLoggedIn: Boolean;
  constructor(public authService: AuthService,public router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  ngOnInit() {
  }
 
  signup(userEmail: string, userPassword: string) {
    this.authService.signup(userEmail,userPassword);
    this.isLoggedIn = true;
    this.authService.login(userEmail,userPassword);    
    this.router.navigate(['dash']);
  }
}
