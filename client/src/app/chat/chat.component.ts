
import { Component, OnInit, AfterContentInit, AfterViewInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

// Service
import {TextService} from '../text.service';
import {FirestoreService} from '../firestore.service';



// import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';
// import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('chatText') container;
  public msg = null;
  public chatElement;
  public chat_schema = {
    'id': '',
    'type0_': [],
    'type1_': [],
    'type2_': [],
    'type3_': []
  };
  public chat_length = 0;

  constructor(public chat_service: TextService, private fservice: FirestoreService) {
     window.parent.postMessage('over', '*');
   }

  ngOnInit() {
    this.chatElement = document.getElementsByClassName('chat-text');
    // console.log(this.chatElement[0].offsetHeight);
    // console.log(this.chatElement[0].clientHeight);
  }

  ngAfterViewInit() {
    this.chatElement[0].scrollTop = this.chatElement[0].scrollHeight;
  }

  ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    console.log(this.container);
  }

  send(value) {
    this.msg = null;
    if (this.chat_length > 0) {
     for (const suggest of this.chat_service.chats[this.chat_length - 1].type2_) {
       suggest['replies'] = [];
     }
    }

    this.chat_service.chats.push({
      'id': '',
      'type0_': [],
      'type1_': [],
      'type2_': [],
      'type3_': []
    });
    this.chat_length = this.chat_service.chats.length;
    console.log(this.chat_length);

    this.chat_service.chats[this.chat_length - 1].id = this.chat_length;

    this.chat_service.bottom = '2.5%';

    console.log(value);
    this.chat_service.talk(value).subscribe(res => {
      console.log(res);

      /* remove pre-resonse gif */
      this.chat_service.chats[this.chat_length - 1].type0_.pop();

      for (const msg of res['messages']) {

        if (msg['type'] === 2) {
          this.chat_service.chats[this.chat_length - 1].type2_.push(msg);
        }

        if ( msg['type'] === 0 && msg['platform'] !== 'facebook') {
          if (msg['speech'] !== '') {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:max-line-length
            this.chat_service.chats[this.chat_length - 1].type0_.push({'type': 'response', 'val': msg['speech'], 'src': '../../assets/tripscam.jpeg'});
          }
        }

        if (msg['type'] === 1) {
          console.log('There is one type 1 message');
          this.chat_service.chats[this.chat_length - 1].type1_.push(msg);
          this.chat_service.bottom = '2.5%';
        }

        if (msg['type'] === 3) {
          console.log('There is one type 3 message');
          this.chat_service.chats[this.chat_length - 1].type3_.push(msg);
          this.chat_service.bottom = '2.5%';
        }

      }

      console.log(this.chat_service.chats);

      setTimeout(() => {
        this.chatElement[0].scrollTop = this.chatElement[0].scrollHeight;
        console.log('Interval set');
      }, 1);

    });

    this.chat_service.chats[this.chat_length - 1].type0_.push({'type': 'message', 'val': value, 'src': null});
    // tslint:disable-next-line:max-line-length
    this.chat_service.chats[this.chat_length - 1].type0_.push({'type': 'pre-response', 'val': 'typing...', 'src': '../../assets/tripscam.jpeg'});

    setTimeout(() => {
      this.chatElement[0].scrollTop = this.chatElement[0].scrollHeight;
      console.log('Interval set');
    }, 1);

  }

}

