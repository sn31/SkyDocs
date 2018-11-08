import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-navbar',
  templateUrl: './splash-navbar.component.html',
  styleUrls: ['./splash-navbar.component.css']
})
export class SplashNavbarComponent implements OnInit {
  userEmail: string;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user!= null) {
        this.userEmail = user.email;
      } else {
        this.userEmail = null;
      }
    });
  }

  logOutClicked() {
    this.authService.logout();
    this.router.navigate([""]);
  }

  ngOnInit() {
  }

}
