import { Component, OnInit} from '@angular/core';
import { UserDocsService } from './../../user-docs.service'
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserDoc } from '../../Models/user-doc.model';

@Component({
  selector: 'app-dash-main',
  templateUrl: './dash-main.component.html',
  styleUrls: ['./dash-main.component.css'],
  providers: [UserDocsService]
})
export class DashMainComponent implements OnInit {

  docs: UserDoc[] = [];
  constructor(private router: Router, private userDocsService: UserDocsService) {
  }

  goToEditor(clickedDoc: UserDoc) {
    this.router.navigate(['editor', clickedDoc.$key]);
  }

  ngOnInit() {
    this.userDocsService.getUserDocs().subscribe(dataLastEmittedFromObserver => {
      for (let i = 0; i < dataLastEmittedFromObserver.length; i++) {
        let newDoc = new UserDoc(dataLastEmittedFromObserver[i].title, 
          dataLastEmittedFromObserver[i].content, 
          dataLastEmittedFromObserver[i].dateCreated);
          newDoc.$key = dataLastEmittedFromObserver[i].$key;
        this.docs.push(newDoc);
      }
    });
  }

  submitForm(title: string) {
    this.docs = [];
    let content: string = "";
    var addUserDoc: UserDoc = new UserDoc(title, content);
    this.userDocsService.addUserDoc(addUserDoc);
  }


  deleteDoc(docToDelete: UserDoc) {
    this.docs = [];
    this.userDocsService.deleteUserDoc(docToDelete);  
  }


}
