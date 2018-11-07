import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [AuthService]
})
export class LandingPageComponent implements OnInit {

  constructor(private authService: AuthService) {
    // this.authService.user.subscribe(user=>{

    // })
   }

  ngOnInit() {
  }
  login(userEmail: string, userPassword: string) {
    this.authService.login(userEmail,userPassword);
    console.log("djqbwjdhq");
  }
  signup(userEmail: string, userPassword: string) {
    this.authService.signup(userEmail,userPassword);
  }
}
