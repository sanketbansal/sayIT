import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import {Observable} from 'rxjs';

// Service
import {AuthService} from './auth.service';
import {MainService} from './main.service';

// Interface
import {USER} from './user';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  private userC: AngularFirestoreCollection<USER>;
  constructor(private firestore: AngularFirestore, private mservice: MainService ) {
    console.log('Firestore service constuctor');
    this.userC = firestore.collection<USER>('sayit');
  }

  setData() {
    return this.userC.doc<USER>(this.mservice.authId).set(this.mservice.userData, { merge: true });
  }

  updateData(data: any) {
    return this.userC.doc<USER>(this.mservice.authId).update(data);
  }

  query() {
    this.userC.doc<USER>(this.mservice.authId).valueChanges()
      .subscribe(
        (snapshot) => { this.mservice.userData = snapshot; console.log('snapshot created'); },
        (error) => console.log(`Firestore service query error ${error}`)
      );
  }


}
