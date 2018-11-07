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


  constructor(public authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
