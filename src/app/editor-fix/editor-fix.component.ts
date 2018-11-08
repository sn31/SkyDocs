import { Component, OnInit } from '@angular/core';
import { UserDocsService } from '../user-docs.service';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-editor-fix',
  templateUrl: './editor-fix.component.html',
  styleUrls: ['./editor-fix.component.css'],
})
export class EditorFixComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
   }

  ngOnInit() {
  }

  saveDoc(title:string, content:string){
    console.log(this.users);
  }

}
