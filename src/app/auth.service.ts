import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserDoc } from './Models/user-doc.model';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userDatabase: FirebaseListObservable<any[]>;
  currentUID: string;
  constructor(public afAuth: AngularFireAuth, private database: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.userDatabase = database.list('users');
  }

  login(userEmail: string, userPassword: string) {
    this.afAuth.auth.signInWithEmailAndPassword(userEmail,userPassword);
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  signup(userEmail: string, userPassword: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(userEmail,userPassword).then( () => {
      this.currentUID = firebase.auth().currentUser.uid;
      let newDoc = new UserDoc ('Title', 'Content');
      firebase.database().ref('users/' + this.currentUID + '/userDocs').push(newDoc);
    });
  }
}