
  import { Component, OnInit } from '@angular/core';
import {RestAPIsService} from "../../../services/rest/rest-apis.service";
import { UtilService } from 'src/app/services/util/util.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {Panier} from "../../../modals/Panier";
import format from 'date-fns/format';
import {User} from "../../../modals/User";
import {Observable} from "rxjs";
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment';
  import {DatePipe} from "@angular/common";
  @Component({
    selector: 'app-add-user',
    templateUrl: './add-user.page.html',
    styleUrls: ['./add-user.page.scss'],
  })
  export class AddUserPage implements OnInit {
  isCreate: boolean;
  nom: any;
  produits_commandes_list : Array<Panier> = [];
  badgecount:any;
  startDate: string = new Date().toISOString();
  today2 = new Date();
  constructor(
      private util: UtilService,
      private navCtrl: NavController,
      private sqlite: SQLite,
      private api: RestAPIsService,
      private http: HTTP,
      private datePipe:DatePipe

  ) {
    this.startDate=format(new Date(), "yyyy-MM-dd");
    if (localStorage.getItem("produits_commandes") != null) {
      this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
    }

    // alert(this.startDate);
  }

  ngOnInit() {
    this.badgecount=0;
    this.isCreate = false;
  }
  addList() {
    /*  if (this.title == '') {
     this.util.showWarningAlert('Please Add Title');
     return false;
     }
     if (this.description === '') {
     this.util.showWarningAlert('Please add Description');
     return false;
     }
     this.isCreate = true;
     this.sqlite.create({
     name: 'offline5.db',
     location: 'default'
     }).then((db: SQLiteObject) => {
     db.executeSql('INSERT INTO offlineData VALUES(NULL,?,?)', [this.title, this.description])
     .then(res => {
     console.log(res);
     this.navCtrl.back();
     })
     .catch(e => {
     console.log(e);
     this.util.showToast('Error', 'danger', 'bottom');
     });
     }).catch(e => {
     console.log(e);
     this.util.showToast('Error', 'danger', 'bottom');
     });*/
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
  addtocart(){
    this.navCtrl.navigateRoot(['my-cart']);
  }
  adduser(nom,prenom,adrmail,nomutilid, adr,ville,datenaiss,tel,fax){
    //alert(nomutilid);
    this.api.get('user/findUserByUserName/'+nomutilid).then((data) => {
      this.util.showToast('Utilisateur existe déjà', 'danger', 'bottom');


    }).catch(error => {
      var maDate = this.datePipe.transform(datenaiss, "yyyy-MM-ddT14:20:29");
      let data ={
        id:null,
        lastName: nom,
        firstName: prenom,
        adress: adr,
        fax: fax,
        email: adrmail,
        city: ville,
        picture: null,
        active: true,
        dateNaissanced:  maDate,
        dateCreated: new Date(),
        groupIds: 3,
        login: nomutilid,
        password: nomutilid,
      };

      this.api.post(data, 'api/user').then((data) => {
        /* this.util.hide();
         const info = JSON.parse(data.data);
         console.log(info);
         this.url = info.data;*/
        alert('user added !')
      }).catch(error => {
        /*  this.util.hide();
         console.log(error);*/
        console.log(error);
        this.util.showToast('Something went wrong ', 'danger', 'bottom');
      });

    });

  }

}
