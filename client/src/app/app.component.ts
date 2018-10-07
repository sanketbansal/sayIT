import {Component, OnInit} from '@angular/core';

// Angualr Fire
import {AngularFireFunctions} from '@angular/fire/functions';


// services
import {TextService} from './text.service';
import {MessageService} from './message.service';
import {AuthService} from './auth.service';
import {FirestoreService} from './firestore.service';
import {MainService} from './main.service';

// Interface
import {USER } from './user';

import {eraseStyles} from '@angular/animations/browser/src/util';
import {error} from 'util';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'GE';
  public chat = false;

  constructor( private cf: AngularFireFunctions, public tservice: TextService, private aservice: AuthService, private mservice: MessageService, private fservice: FirestoreService, private service: MainService ) {
      window.document.body.setAttribute('style', 'margin:0px !important;');
      // console.log(window.parent.document);
    this.service.callable('tags', {topic: 'depression', id: 'sanketbansal57@gmail.com'});
  }

  ngOnInit() {
  }

  toggle(value) {
    this.chat = value;
    this.tservice.bottom = '2.5%';
    if (value) {
      this.tservice.minHeight = '67%';
    } else {
      this.tservice.minHeight = '0%';
      this.tservice.chats = [];
    }
    this.mservice.listen();
    this.service.callable('publish', {topic: 'depression', post: 'I am feelig depressed'});
  }

  mini(value) {
    this.chat = value;
    this.tservice.bottom = '2.5%';
    if (value) {
      this.tservice.minHeight = '67%';
    } else {
      this.tservice.minHeight = '0%';
    }
  }

  mouse(value) {
    if (value) {
      console.log('mouse is over');
      // window.document.body.setAttribute('style', 'overflow:hidden; margin:0px !important;');
      window.parent.postMessage('over', '*');
    } else {
      console.log('mouse is out');
      // window.document.body.setAttribute('style', 'overflow:auto; margin:0px !important;');
      window.parent.postMessage('out', '*');
    }
  }
}
