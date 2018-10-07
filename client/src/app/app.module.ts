import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Angualr fire
import {AngularFireModule} from '@angular/fire';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireFunctionsModule} from '@angular/fire/functions';

// Material Design
import {MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule,
MatChipsModule, MatDividerModule, MatListModule} from '@angular/material';

// Component
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

// Service
import {TextService} from './text.service';
import {MessageService} from './message.service';
import {AuthService} from './auth.service';
import {FirestoreService} from './firestore.service';

import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // AngularFire
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireFunctionsModule,
    // Material Design
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    // Service Worker Module
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [TextService, MessageService, AuthService, FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
