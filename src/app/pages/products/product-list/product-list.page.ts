import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products/products.service';
import {NavController} from "@ionic/angular";
import {RestAPIsService} from "../../../services/rest/rest-apis.service";
import {Product} from "../../../modals/Product";
import {Image} from "../../../modals/Image";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { LoadingController } from '@ionic/angular';
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import {Panier} from "../../../modals/Panier";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environmentApi} from "../../../services/rest/environnement.model";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  allProducts;
  badgecount:any;
  imagesIds: any = '';
  produits_commandes_list : Array<Panier> = [];
  product_list: Array<Product> = [];
  img_list: Array<Image> = [];
  idcateg : any;
  nomcateg : any;
  constructor(private sanitizer:DomSanitizer,
              private products: ProductsService,
              private navCtrl: NavController,
              private api: RestAPIsService,
              public loadingCtrl: LoadingController,
              private router: Router,
              private http:HttpClient,
              private route: ActivatedRoute) {
    this.allProducts = this.products.products;
    this.route.queryParams.subscribe(params => {
      this.idcateg = params["idcateg"];
      this.nomcateg = params["nomcateg"];
    });
    if (localStorage.getItem("produits_commandes") != null) {
      this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
    }
    this.charge_compteur();
    this.getallimages();
    this.getallproducts();


  }
  charge_compteur(){
    if (localStorage.getItem("compteur") != null) {
      this.badgecount=localStorage.getItem("compteur");
    }
    else{
      this.badgecount=0;
    }
    return this.badgecount;

  }
  ngOnInit() {



  }
  gotodetail(id){
    var i;
    for (i = 0; i < this.product_list.length; i++) {
      if(this.product_list[i].getid() == id){

        let navigationExtras: NavigationExtras = {
          queryParams: {
            id:this.product_list[i].getid(),
            name:this.product_list[i].getname(),
            description:this.product_list[i].getdescription(),
            sellingPrice:this.product_list[i].getsellingPrice(),
            buyingPrice:this.product_list[i].getbuyingPrice(),
            state:this.product_list[i].getstate(),
            active:this.product_list[i].getactive(),
            imagesIds:this.product_list[i].getimagesIds(),
            imageUrl:this.product_list[i].getimageUrl(),
            categoryId:this.product_list[i].getcategoryId(),
            siteStockId:this.product_list[i].getsiteStockId(),
            urlimg:this.product_list[i].geturlimg(),
          }
        };
        this.navCtrl.navigateForward(['product-detail'],navigationExtras);


      }
    }

    //this.navCtrl.navigateRoot(['example2']);
  }
  addtocart(){

    this.navCtrl.navigateRoot(['my-cart']);
  }

  showImage(data){
    //console.log('data  '+data);
    const sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(data);
    return sanitizedContent;
  }
  simpleLoader(message) {
    this.loadingCtrl.create({
      message: 'Chargement',
      duration: 9000
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds', dis);
      });
    });
  }
  dismissLoader() {
    this.loadingCtrl.dismiss().then((response) => {
      console.log('Loader closed!', response);
    }).catch((err) => {
      console.log('Error occured : ', err.message);
    });
  }
  listImage():Observable<Image[]>{
    return this.http.get<Image[]>(environmentApi.host+"/api/image/images");
  }
  getallimages(){
    var img,i;
    this.simpleLoader('Chargement ..');
    this.listImage().subscribe((data) => {
    //console.log(data);
      this.img_list=data;
      if(data.length>0) {
        this.img_list=data;
      }
      this.mergelists(this.product_list,data);

    });
   // this.dismissLoader();






  }
  listProduct():Observable<Product[]>{
   return this.http.get<Product[]>(environmentApi.host+"/api/product/products");
  }
  getallproducts(){
    var prod,i,j;

    this.listProduct().subscribe((data) => {

     let info=data;
      //alert(info[0]['id']);
      // alert(info.length);
        //  this.product_list=data;

      //const info = JSON.parse(data.data);

      if(info.length>0) {
        for (i = 0; i < info.length; i++) {
          if(info[i]['categoryId'] == this.idcateg){
            prod = new Product();
            prod.setid(info[i]['id']);
            prod.setname(info[i]['name']);
            prod.setdescription(info[i]['description']);
            prod.setsellingPrice(info[i]['sellingPrice']);
            prod.setbuyingPrice(info[i]['buyingPrice']);
            prod.setstate(info[i]['state']);
            prod.setactive(info[i]['active']);
            prod.setimagesIds(info[i]['imagesIds']);
            this.imagesIds = info[i]['imagesIds'];



            prod.setcategoryId(info[i]['categoryId']);
            prod.setsiteStockId(info[i]['siteStockId']);
            this.product_list.push(prod);
          }

        }
      }

      })


      //   if(this.img_list.length>0) {


      //  }
      // }
      /* else {
       // this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
       }*/

  }

  mergelists( productlist, imagelist){

    //console.log('getallimages', imagelist);
    var i,j;
    if(imagelist.length>=productlist.length){
      for (j = 0; j < imagelist.length; j++) {
        for (i = 0; i < productlist.length; i++) {
          if(imagelist[j].id == productlist[i].getimagesIds()) {
            productlist[i].seturlimg(imagelist[j].data);
          }
        }
      }

    }
    if(imagelist.length<=productlist.length){
      for (i = 0; i < productlist.length; i++) {
        for (j = 0; j < imagelist.length; j++) {

          if(imagelist[j].id == productlist[i].getimagesIds()) {
            productlist[i].seturlimg(imagelist[j].data);
          }
        }
      }
    }

  }
}

