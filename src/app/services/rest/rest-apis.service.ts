/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RestAPIsService {
  baseUrl: any = '';
  imagePath: any;
  host = 'https://3a13-196-179-94-188.eu.ngrok.io/api/';
  constructor(
    private http: HTTP,public http2: HttpClient
  ) {
    this.baseUrl = environment.restURL.baseUrl;
    this.imagePath = environment.restURL.imagePath;
  }

  post(param, link) {

    return this.http.post(this.baseUrl + link, param,{'Content-Type': 'application/json'});
  }

  get(link) {
    return this.http.get(this.baseUrl + link, {}, {});
  }

}
