import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserDoc } from '../Models/user-doc.model';
import { UserDocsService } from '../user-docs.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor-hamburger',
  templateUrl: './editor-hamburger.component.html',
  styleUrls: ['./editor-hamburger.component.css'],
  providers: [UserDocsService]
})
export class EditorHamburgerComponent implements OnInit {
  @Output() clickSender = new EventEmitter();
  docs: FirebaseListObservable<any[]>;

  constructor(private userDocsService: UserDocsService, private router: Router) { }

  //this method is called by (click) in the html when the X is clicked, and ultimately closes the hamburger menu by emitting to the editor component.
  xClicked(): void {
    this.clickSender.emit();
  }

  //this method navigates to the editor for the specific doc clicked.
  goToEditor(clickedDoc: UserDoc) {
    this.router.navigate(['editor', clickedDoc.$key]);
  }

  ngOnInit() {
    this.docs = this.userDocsService.getUserDocs();
  }
}
