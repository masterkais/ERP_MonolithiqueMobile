
  import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products/products.service';
import {NavController} from "@ionic/angular";
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Panier} from "../../../modals/Panier";
import {UtilService} from "../../../services/util/util.service";


  @Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.page.html',
    styleUrls: ['./product-detail.page.scss'],
  })
  export class ProductDetailPage implements OnInit {

  id;

  allProducts;
  badgecount:any;
  idProd : any;
  nameProd : any;
  descriptionProd : any;
  sellingPriceProd : any;
  buyingPriceProd : any;
  stateProd : any;
  activeProd : any;
  imagesIdsProd : any;
  imageUrlProd : any;
  categoryIdProd : any;
  siteStockIdProd : any;
  urlimgProd : any;
  produits_commandes_list : Array<Panier> = [];
  ancien_badgecount : any = 0;
  ancien_compteur : any = 0;
  c2 : any = 0;
  constructor(private util: UtilService,private products: ProductsService,private navCtrl: NavController, private toast: Toast, private route: ActivatedRoute,private sanitizer:DomSanitizer) {
    this.allProducts = this.products.products;

    this.route.queryParams.subscribe(params => {
      this.idProd = params["id"];
      this.nameProd = params["name"];
      this.descriptionProd = params["description"];
      this.sellingPriceProd = params["sellingPrice"];
      this.buyingPriceProd = params["buyingPrice"];
      this.stateProd = params["state"];
      this.activeProd = params["active"];
      this.imagesIdsProd = params["imagesIds"];
      this.imageUrlProd = params["imageUrl"];
      this.categoryIdProd = params["categoryId"];
      this.siteStockIdProd = params["siteStockId"];
      this.urlimgProd = params["urlimg"];
      // this.currency = JSON.parse(params["currency"]);
    });
    //  alert(this.urlimgProd);
  }

  ngOnInit() {

    if (localStorage.getItem("compteur") != null) {
      this.badgecount=localStorage.getItem("compteur");
    }
    else{
      this.badgecount=0;
    }
    if (localStorage.getItem("produits_commandes") != null) {
      this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
    }



  }
  showImage(data){
    const sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(data);
    return sanitizedContent;
  }
  onClick(val) {
    this.id = val;
  }

  verif_occ(idprod){
    var i,comp=1;

    for(i=0;i<this.produits_commandes_list.length;i++){
      if(this.produits_commandes_list[i]['_idProd'] == idprod){
        comp = comp +1;
        this.produits_commandes_list[i]['_compteur'] = comp+"";
      }

    }
    return comp;
  }
  addtocartform(){
    //localStorage.setItem("compteur", '');
    this.c2 =parseInt(this.badgecount)+1;
    localStorage.setItem("compteur",this.c2+"");

    var panier,i;
    if (localStorage.getItem("produits_commandes") != null) {
      this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));

      if (this.verif_occ(this.idProd)==1){
        panier = new Panier();
        panier.setcompteur(this.verif_occ(this.idProd)+"");
        panier.setidProd(this.idProd);
        panier.setnameProd(this.nameProd);
        panier.setdescriptionProd(this.descriptionProd);
        panier.setsellingPriceProd(this.sellingPriceProd);
        panier.setbuyingPriceProd(this.buyingPriceProd);
        panier.setstateProd(this.stateProd);
        panier.setactiveProd(this.activeProd);
        panier.setimagesIdsProd(this.imagesIdsProd);
        panier.setimageUrlProd(this.imageUrlProd);
        panier.setcategoryIdProd(this.categoryIdProd);
        panier.setsiteStockIdProd(this.siteStockIdProd);
        panier.seturlimgProd(this.urlimgProd);
        this.produits_commandes_list.push(panier);
      }


    }


    if (localStorage.getItem("produits_commandes") == null) {
      var c = parseInt(this.badgecount+1);
      panier = new Panier();
      panier.setcompteur(c+"");
      panier.setidProd(this.idProd);
      panier.setnameProd(this.nameProd);
      panier.setdescriptionProd(this.descriptionProd);
      panier.setsellingPriceProd(this.sellingPriceProd);
      panier.setbuyingPriceProd(this.buyingPriceProd);
      panier.setstateProd(this.stateProd);
      panier.setactiveProd(this.activeProd);
      panier.setimagesIdsProd(this.imagesIdsProd);
      panier.setimageUrlProd(this.imageUrlProd);
      panier.setcategoryIdProd(this.categoryIdProd);
      panier.setsiteStockIdProd(this.siteStockIdProd);
      panier.seturlimgProd(this.urlimgProd);
      this.produits_commandes_list.push(panier);

    }
    localStorage.setItem("produits_commandes", JSON.stringify(this.produits_commandes_list));
    this.util.showToast('Produit ajouté !', 'success', 'bottom');
    this.navCtrl.navigateForward(['product-list']);
  }
  addtocart(){
    this.navCtrl.navigateRoot(['my-cart']);
  }

}
