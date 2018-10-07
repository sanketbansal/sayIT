import { Injectable } from '@angular/core';

// import { ApiAiClient } from 'api-ai-javascript';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class TextService {

  private url = 'https://us-central1-plachat-9a2af.cloudfunctions.net/dialogflow?text=';
  public bottom = '5%';
  public minHeight = '0%';
  public chats = [];
  public texts = Array();
  public type2_ = Array();
  public type1_ = Array();
  public type3_ = Array();

  constructor(private http: HttpClient) {  }

  talk(text) {
    const params = new HttpParams();
    const headers = new HttpHeaders({'Content-Type': 'application/json'
    });
    params.set('text', text);
    return this.http.get(this.url + text, { headers });
  }
}
