import { Injectable } from '@angular/core';

import {USER} from './user';
import {AngularFireFunctions} from '@angular/fire/functions';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  public authId: string;
  public userData: USER = {};

  constructor(private cf: AngularFireFunctions, private http: HttpClient) { }
  callable(fn: string, dat: Object ) {
    /*const call = this.cf.httpsCallable(fn);
    call( {topic: 'depression', blog: 'I am feelig depressed'} ).subscribe(
      (res) => console.log(` ${fn} call result ${res} `),
      (err) => console.log(` ${fn} function Error ${err}`)
    );*/
    const url = 'https://us-central1-cool-coral-204811.cloudfunctions.net/' + fn;
    const params = new HttpParams(dat);
    const headers = new HttpHeaders({'Content-Type': 'application/json'
    });
    this.http.post(url, { headers, data: dat })
      .subscribe(
        (res) => console.log(`${fn} call result ${res}`),
        (err) => console.log(`${fn} function err ${err}`)
      );
  }
}
