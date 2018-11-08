import { Injectable } from '@angular/core';
import { UserDoc } from './Models/user-doc.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
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

  getUserDocById(docNumber: string): FirebaseObjectObservable<any> {
    return this.database.object('users/' + this.userID + '/userDocs/' + docNumber);
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
