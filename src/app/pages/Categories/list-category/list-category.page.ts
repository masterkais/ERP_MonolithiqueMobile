import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../../../modals/Category";
import {HttpClient} from "@angular/common/http";
import {environmentApi} from "../../../services/rest/environnement.model";
import {NavController} from "@ionic/angular";
import {NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.page.html',
  styleUrls: ['./list-category.page.scss'],
})
export class ListCategoryPage implements OnInit {
  category_list: Array<Category> = [];
  badgecount:any;
  constructor(private http:HttpClient,private navCtrl: NavController) { }

  ngOnInit() {
    this.getallCategory();
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
  listCategory():Observable<Category[]>{
    return this.http.get<Category[]>(environmentApi.host+"/api/category/categorys");
  }
  getallCategory(){
    var cat,i,j;

    this.listCategory().subscribe((data) => {

      let info=data;
      //alert(info[0]['id']);
      // alert(info.length);
      //  this.product_list=data;

      //const info = JSON.parse(data.data);

      if(info.length>0) {
        for (i = 0; i < info.length; i++) {
          cat = new Category();
          cat.setid(info[i]['id']);
          cat.setname(info[i]['name']);
          cat.setdescription(info[i]['description']);
          cat.setidBrand(info[i]['idBrand']);
          this.category_list.push(cat);
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
  addtocart(){

    this.navCtrl.navigateRoot(['my-cart']);
  }

  goListProduct(idcateg,nomcateg){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        idcateg:idcateg,
        nomcateg:nomcateg,
      }
    };
    this.navCtrl.navigateForward(['product-list'],navigationExtras);
  }
}
