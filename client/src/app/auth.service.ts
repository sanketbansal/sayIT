import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';

import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import {MessageService} from './message.service';
import {FirestoreService } from './firestore.service';
import {MainService} from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fauth: AngularFireAuth, private service: MainService, private fservice: FirestoreService, private mservice: MessageService ) {
    console.log('Auth service constuctor');
    this.check()
      .subscribe(
        (user) => {
          if (user == null) {
            this.login();
          } else {
            this.service.authId = user.email;
            this.mservice.requestPermission();
            this.fservice.query();
          }
        },
        (error) => console.log(`Auth service check error ${error}`)
      );
  }

  // Authentication
  check() {
    return this.fauth.user;
  }
  login() {
    this.fauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => { this.service.authId = result.user.email; this.service.userData.id = this.service.authId;
        this.fservice.setData()
          .then(() => console.log('Data written Succesfully'))
          .catch((error) => console.log(`Error in wriiting data ${error}`));
      })
      .catch((error) => console.log(`Auth service Login Error ${error}`));
  }

  logout() {
    return this.fauth.auth.signOut();
  }
}
