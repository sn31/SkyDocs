import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../authguard.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, AuthGuard]
})
export class LoginComponent implements OnInit {
  private isLoggedIn: Boolean;
  constructor(public authService: AuthService, public router: Router) {
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

  login(userEmail: string, userPassword: string) {
    this.authService.login(userEmail, userPassword);
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      }
    });
  }

  authStatus() {
    if (this.isLoggedIn == false) {
      alert("Login failed. Please try again.");
    }
    else {
      this.router.navigate(['dash']);
    }
  }
  user;

}
