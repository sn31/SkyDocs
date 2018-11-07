import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  private isLoggedIn: Boolean;

  login(userEmail: string, userPassword: string) {
    this.authService.login(userEmail,userPassword);
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      }
  });
}

  authStatus() {
    if(this.isLoggedIn == false){
      alert("Login failed. Please try again.");
    }
  }

}
