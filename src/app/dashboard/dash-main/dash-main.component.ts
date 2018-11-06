import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserDocsService } from './../../user-docs.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-main',
  templateUrl: './dash-main.component.html',
  styleUrls: ['./dash-main.component.css'],
  providers: [UserDocsService] 
})
export class DashMainComponent {
  
  docs;
  @Output() loadocsVideoSender = new EventEmitter();
  constructor(private router: Router, private userDocsService: UserDocsService) {

    this.docs = this.userDocsService.getUserDocs();    

   }
  

}
