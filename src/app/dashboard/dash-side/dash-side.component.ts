import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dash-side',
  templateUrl: './dash-side.component.html',
  styleUrls: ['./dash-side.component.css'],
  providers: [AuthService]

})
export class DashSideComponent implements OnInit {

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

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
