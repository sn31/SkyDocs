import { Component, OnInit, DoCheck } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, UrlSegment,Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserDocsService } from '../user-docs.service';
import { UserDoc } from '../Models/user-doc.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [UserDocsService, AuthService],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class EditorComponent implements OnInit, DoCheck {
  title = 'Doc Editor';
  menuState: string = 'out';
  workingDoc: UserDoc;
  docPath: string;
  docTitle: String = null;
  docContent: String = null;
  docId: string = null;
  userId;

  constructor(private authService: AuthService, private router: Router,private route: ActivatedRoute, private location: Location, private docsService: UserDocsService) {
   }

  toggleMenu(): void {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.docId = urlParameters['id'];
    });
    this.docsService.getUserDocById(this.docId).subscribe(dataLastEmittedFromObserver => {
      this.workingDoc = dataLastEmittedFromObserver;
      this.docPath = this.workingDoc.$key;
    });
    
  }

  //because OnInit only happens once, this method checks to see if the url path has changed, and then, if so, it updates the page with the new doc info
  ngDoCheck() {
    let displayedPath: string;
    this.route.url.subscribe(dataLastEmittedFromObserver => {
      displayedPath = dataLastEmittedFromObserver[1].path;
    })
    if (displayedPath !== this.docPath) {
      this.docPath = displayedPath;
      this.docsService.getUserDocById(this.docId).subscribe(dataLastEmittedFromObserver => {
        this.workingDoc = dataLastEmittedFromObserver;
      });
    }
  }
 
  db = firebase.database();
  saveDoc(title:string) {
    this.userId = firebase.auth().currentUser.uid;
    console.log(this.userId);
    this.db.ref('/users/'+this.userId+'/userDocs')
      .push({
        doc3: {
          content: "fake3",
          dateCreated: 154174265232,
          title: "title3",
          wordCount: 0
        }
      });
  }
  
}

