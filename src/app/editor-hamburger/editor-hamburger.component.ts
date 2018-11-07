import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserDoc } from '../Models/user-doc.model';
import { UserDocsService } from '../user-docs.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-editor-hamburger',
  templateUrl: './editor-hamburger.component.html',
  styleUrls: ['./editor-hamburger.component.css'],
  providers: [UserDocsService]
})
export class EditorHamburgerComponent implements OnInit {
  @Output() clickSender = new EventEmitter();
  docs: FirebaseListObservable<any[]>;
  constructor(private userDocsService: UserDocsService) { }

  xClicked(): void {
    this.clickSender.emit();
  }

  ngOnInit() {
    this.docs = this.userDocsService.getUserDocs();
  }

}
