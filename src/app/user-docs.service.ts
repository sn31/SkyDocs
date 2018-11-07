import { Injectable } from '@angular/core';
import { UserDoc } from './Models/user-doc.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';

@Injectable()
export class UserDocsService {
  userID: string = firebase.auth().currentUser.uid;
  userDocs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.userDocs = database.list('users/' + this.userID + '/userDocs');
  }

  getUserDocs() {
    return this.userDocs;
  }

  addUserDoc(newDoc: UserDoc): void {
    this.userDocs.push(newDoc);
  }

  getUserDocById(docNumber: number) {
    return this.database.object('/userDocs/0/John Doe' + docNumber);
  }

  updateUserDoc(localUpdatedDoc): void {
    let userDocInFirebase = this.getUserDocById(localUpdatedDoc.$key);
    userDocInFirebase.update({
      title: localUpdatedDoc.title,
      content: localUpdatedDoc.content});
  }

  deleteUserDoc(localDocToDelete): void {
    let userDocInFirebase = this.getUserDocById(localDocToDelete.$key);
    userDocInFirebase.remove();
  }
}
