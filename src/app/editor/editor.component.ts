import { Component, OnInit, DoCheck } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, UrlSegment,Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserDocsService } from '../user-docs.service';
import { UserDoc } from '../Models/user-doc.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


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
export class EditorComponent implements OnInit{
  title = 'Doc Editor';
  menuState: string = 'out';
  workingDoc: UserDoc;
  docPath: string;
  docTitle: String = null;
  docContent: String = null;
  docId: string = null;
  
  constructor(private router: Router,private route: ActivatedRoute, private location: Location, private docsService: UserDocsService) {
   }

  toggleMenu(): void {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  ngOnInit() {
    
  }
}

