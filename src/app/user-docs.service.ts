import { Injectable } from '@angular/core';
import { UserDoc } from './Models/user-doc';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserDocsService {
  userDocs = FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.userDocs = database.list('albums');
  }

  getUserDocs() {
    return this.userDocs;
  }

  addUserDoc(newDoc: UserDoc) {
    this.userDocs.push(newDoc);
  }

  getUserDocById(docNumber: number) {
    return this.database.object('userDocs/' + docNumber);
  }
}
