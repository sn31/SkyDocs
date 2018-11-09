import { Component, OnInit} from "@angular/core";
import * as firebase from "firebase";
import {AuthService} from '../auth.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, UrlSegment,Router } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: "app-editor-fix",
  templateUrl: "./editor-fix.component.html",
  styleUrls: ["./editor-fix.component.css"],
  providers:  [AuthService]
})
export class EditorFixComponent implements OnInit {

  menuState: string = 'out';
  docTitle: String = null;
  docContent: String = null;
  docId: string = null;
  //because OnInit only happens once, this method checks to see if the url path has changed, and then, if so, it updates the page with the new doc info
  constructor(private router: Router,private route: ActivatedRoute, private location: Location) {
  }
  userId;
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.docId = urlParameters['id'];
      console.log(this.docId);
    });
  }
  db = firebase.database();
  saveDoc(title:string, content:string) {
    this.userId = firebase.auth().currentUser.uid;
    this.db.ref('/users/'+this.userId+'/userDocs') //need to save to the correct document using the document id.
      .push({
          content: content,
          dateCreated: 154174265232, //put the time tracker functionality here - this is just a placeholder.
          title: title,
          wordCount: 1 //also placeholder for now.
      });
  }
}
