import { Injectable } from '@angular/core';
import { UserDoc } from './Models/user-doc.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserDocsService {
  userDocs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.userDocs = database.list('albums');
  }

  getUserDocs(): FirebaseListObservable<any[]> {
    return this.userDocs;
  }

  addUserDoc(newDoc: UserDoc): void {
    this.userDocs.push(newDoc);
  }

  getUserDocById(docNumber: number) {
    return this.database.object('/userDocs/' + docNumber);
  }

  updateUserDoc(localUpdatedDoc): void {
    let userDocInFirebase = this.getUserDocById(localUpdatedDoc.$key);
    userDocInFirebase.update({
      key1: localUpdatedDoc.property,
      key2: localUpdatedDoc.property2});
  }

  deleteUserDoc(localDocToDelete): void {
    let userDocInFirebase = this.getUserDocById(localDocToDelete.$key);
    userDocInFirebase.remove();
  }
}
