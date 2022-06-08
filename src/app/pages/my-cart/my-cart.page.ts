import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {Panier} from "../../modals/Panier";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-my-cart',
  templateUrl: 'my-cart.page.html',
  styleUrls: ['my-cart.page.scss'],
})
export class MyCartPage implements OnInit {
  badgecount = '0';
  produits_commandes_list : Array<Panier> = [];
  value = 0;
  c2 : any = 0;
  constructor(private navCtrl: NavController,private route: ActivatedRoute,private sanitizer:DomSanitizer) {
    //this.badgecount=0;
    if (localStorage.getItem("produits_commandes") != null) {
      this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
    }
  }
  showImage(data){
    const sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(data);
    return sanitizedContent;
  }
  ngOnInit() {
    if (localStorage.getItem("produits_commandes") != null) {
      this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));

    }

    if (localStorage.getItem("compteur") != null) {
      this.badgecount=localStorage.getItem("compteur");
    }

  }
  plus(idprod) {
    var i;
    if (this.produits_commandes_list.length >0) {
      for(i=0;i<this.produits_commandes_list.length;i++){
        if (this.produits_commandes_list[i]['_idProd'] == idprod){
          this.value = parseInt(this.produits_commandes_list[i]['_compteur']) + 1;
          this.produits_commandes_list[i]['_compteur'] = this.value+"";
          localStorage.setItem("produits_commandes", JSON.stringify(this.produits_commandes_list));
        }

      }
    }
  }
  minus(idprod) {
    var i;
    if (this.produits_commandes_list.length >0) {
      for(i=0;i<this.produits_commandes_list.length;i++){
        if (this.produits_commandes_list[i]['_idProd'] == idprod){
          this.value = parseInt(this.produits_commandes_list[i]['_compteur']) - 1;
          this.produits_commandes_list[i]['_compteur'] = this.value+"";
          localStorage.setItem("produits_commandes", JSON.stringify(this.produits_commandes_list));
        }

      }
    }
  }
  delete(idprod) {

    var i;
    if (this.produits_commandes_list.length >0) {
      for(i=0;i<this.produits_commandes_list.length;i++){
        if (this.produits_commandes_list[i]['_idProd'] == idprod){
          delete this.produits_commandes_list[i];
          localStorage.setItem("produits_commandes", JSON.stringify(this.produits_commandes_list));
          this.c2 =parseInt(this.badgecount)-1;
          localStorage.setItem("compteur",this.c2+"");
        }

      }
    }
  }
  charge_compteur(){
   /* if (localStorage.getItem("compteur") != null) {
      this.badgecount=localStorage.getItem("compteur");
    }
    else{
      this.badgecount=0;
    }*/
    return this.badgecount;

  }
  addtocart(){



    this.navCtrl.navigateRoot(['my-cart']);
  }
  gotocaisse(){
    this.navCtrl.navigateRoot(['send-request']);
  }
}
