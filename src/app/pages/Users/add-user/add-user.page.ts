
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
  import {HttpHeaders} from "@angular/common/http";
  import {HttpClient} from "@angular/common/http";
  import {environmentApi} from "../../../services/rest/environnement.model";
import { Router } from '@angular/router';
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
      private datePipe:DatePipe,private httpClient:HttpClient,
      private router:Router,
      

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
      var maDate = this.datePipe.transform(datenaiss, "yyyy-MM-ddT14:20:29");
      let data: User = {
        id:null,
        firstName: nom,
        lastName:prenom,
        login:nomutilid,
        password: nomutilid,
        dateNaissanced: maDate,
        dateCreated: new Date(),
        adress: adr,
        fax:fax,
        email:adrmail,
        city: ville,
        picture: null,
        active: true,
        groupIds: [{id:3}],
      }
      this.saveUser(data).subscribe((data)=>{
        console.log("succces");
        this.util.showToast('Ajout User success', 'success', 'bottom');
        this.navCtrl.navigateRoot(['add-user']);
    },(err)=>{
      this.util.showToast('Utilisateur existe déjà', 'danger', 'bottom');
    });
  }
  
    saveUser(user:User):Observable<User> {
      return this.httpClient.post<User>(environmentApi.host+"/api/user",user);
    }

}
