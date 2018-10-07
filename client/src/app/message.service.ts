import { Injectable } from '@angular/core';

import {AngularFireMessaging} from '@angular/fire/messaging';

import * as firebase from 'firebase/app';

import {environment} from '../environments/environment';

import { mergeMap } from 'rxjs/operators';

// Service
import {FirestoreService} from './firestore.service';
import {MainService} from './main.service';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  constructor(private fcm: AngularFireMessaging, private service: MainService, private fservice: FirestoreService ) {
      // firebase.initializeApp(environment.firebase);
      console.log('Message service constuctor');
  }

  requestPermission() {
    this.fcm.requestToken
      .subscribe(
        (token) => {
          console.log(token); this.service.userData.token = token;
          this.fservice.setData()
            .then(() => console.log('Token written successfully'))
            .catch((error) => console.log(`Message service firestore error ${error}`));
        },
        (error) => console.log(`Message Servcie Token Error ${error}`)
      );
  }

  deleteToken() {
    this.fcm.getToken
      .pipe(mergeMap(token => this.fcm.deleteToken(token)))
      .subscribe(
        (token) => { console.log('Deleted!'); },
      );
  }

  listen() {
    this.fcm.messages
      .subscribe((message) => { console.log(message); });
  }

}
