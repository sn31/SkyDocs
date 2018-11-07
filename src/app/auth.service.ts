import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }

   login(userEmail: string, userPassword: string) {
     this.afAuth.auth.signInWithEmailAndPassword(userEmail,userPassword);
   }
   logout(){
     this.afAuth.auth.signOut();
   }
   signup(userEmail: string, userPassword: string) {
     this.afAuth.auth.createUserWithEmailAndPassword(userEmail,userPassword);
   }
}