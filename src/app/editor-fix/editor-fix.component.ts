import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import {AuthService} from '../auth.service';

@Component({
  selector: "app-editor-fix",
  templateUrl: "./editor-fix.component.html",
  styleUrls: ["./editor-fix.component.css"],
  providers:  [AuthService]
})
export class EditorFixComponent implements OnInit {
  
  constructor(private authService: AuthService) {}
  userId;
  ngOnInit() {}
  db = firebase.database();
  saveDoc(title:string, content:string) {
    this.userId = firebase.auth().currentUser.uid;
    console.log(this.userId);
    this.db.ref('/users/'+this.userId+'/userDocs')
      .push({
        doc3: {
          content: content,
          dateCreated: 154174265232, //put the time tracker functionality here - this is just a placeholder.
          title: title,
          wordCount: 0 //also placeholder for now.
        }
      });
  }
}
