import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserDocsService } from './../../user-docs.service'
import { Router } from '@angular/router';
import { UserDoc } from '../../Models/user-doc.model';

@Component({
  selector: 'app-dash-main',
  templateUrl: './dash-main.component.html',
  styleUrls: ['./dash-main.component.css'],
  providers: [UserDocsService] 
})
export class DashMainComponent implements OnInit {
  
  docs: UserDoc[] = [];
  @Output() loadocsVideoSender = new EventEmitter();
  constructor(private router: Router, private userDocsService: UserDocsService) {
   }

   ngOnInit() {
    this.userDocsService.getUserDocs().subscribe(dataLastEmittedFromObserver => {
      for(let i = 0; i < dataLastEmittedFromObserver.length; i++) {
        console.log(dataLastEmittedFromObserver);
        let newDoc = new UserDoc(dataLastEmittedFromObserver[i].title, dataLastEmittedFromObserver[i].content);
        this.docs.push(newDoc);

      }
    });      
    console.log(this.docs)
  }

  

}

// ngOnInit() {
//   this.docs = this.userDocsService.getUserDocs();      
//   console.log(this.docs)