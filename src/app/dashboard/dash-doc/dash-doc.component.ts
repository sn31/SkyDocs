
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDocsService } from '../../user-docs.service';
import { UserDoc } from '../../Models/user-doc.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dash-doc',
  templateUrl: './dash-doc.component.html',
  styleUrls: ['./dash-doc.component.css']
})

export class DashDocComponent implements OnInit {
  @Input() displayDoc: string;
  @Output() sendDocsSender = new EventEmitter()
  docs: UserDoc[];
  
  constructor(private router: Router, private userDocsService: UserDocsService) {
  }

  ngOnInit() {

  }

  goToEditor(clickedDoc: UserDoc) {
    console.log(clickedDoc.$key);
    this.router.navigate(['editor', clickedDoc.$key]);
  }

  submitForm(title: string) {
    // this.docs = [];
    let content: string = "";
    var addUserDoc: UserDoc = new UserDoc(title, content);
    console.log("added document " + title);
    this.userDocsService.addUserDoc(addUserDoc);
  }

  deleteDoc(docToDelete: UserDoc) {
    console.log("deleted " + docToDelete.title + " document");
    // this.userDocsService.deleteUserDoc(docToDelete);
    this.sendDocsSender.emit(docToDelete);    
  }

}
