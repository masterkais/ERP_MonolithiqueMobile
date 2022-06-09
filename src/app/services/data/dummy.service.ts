/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor() { }

  public sidemenu = [
    {
      title: 'Accueil',
      url: '/charts',
      icon: 'home'
    },

    {
      title: 'Liste de catégories',
     // url: '/example-home',
      url: '/list-category',
      icon: 'cart'
    },
    {
      title: 'Nouveau Client',
      // url: '/example-home',
      url: '/user-interface',
      icon: 'person-add'
    },

    {
      title: 'Déconnexion',
      url: '/slider',
      icon: 'log-out'
    }
  ];
}
