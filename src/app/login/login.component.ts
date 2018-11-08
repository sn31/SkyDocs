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
  private isLoggedIn: Boolean = true;
  constructor(public authService: AuthService, public router: Router) {
  }

  login(userEmail: string, userPassword: string) {
    this.authService.login(userEmail, userPassword);
    this.authService.user.subscribe(user => {
      if (user == null) {
        setTimeout(() => {
          this.isLoggedIn = false;
        }, 1000);
      } else {
        this.router.navigate(['dash']);
        this.isLoggedIn = true;
      }
    });
  }

  ngOnInit() {
  }
}

