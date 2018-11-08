import { Component,Inject,OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit{
  title = 'app';
  currentRoute: string;
  constructor(@Inject(DOCUMENT) private document: Document) { 
    
  }
  ngOnInit() {
    
  }
  getCurrentRoute()
  {
    this.currentRoute = this.document.location.href;
    console.log(this.document.location.href);
  }
}
