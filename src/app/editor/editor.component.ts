import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserDocsService } from '../user-docs.service';
import { UserDoc } from '../Models/user-doc.model';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [UserDocsService],
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
export class EditorComponent implements OnInit {
  title = 'Doc Editor';
  menuState: string = 'out';
  workingDoc: FirebaseObjectObservable<any>;
  docTitle: String = null;
  docContent: String = null;
  docId: string = null;

  constructor(private route: ActivatedRoute, private location: Location, private docsService: UserDocsService) {
   }

  toggleMenu(): void {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.docId = urlParameters['id'];
    });
    this.workingDoc = this.docsService.getUserDocById(this.docId);
  }

}


