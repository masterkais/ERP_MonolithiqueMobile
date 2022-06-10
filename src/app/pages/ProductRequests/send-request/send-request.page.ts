import { Component, OnInit } from '@angular/core';
import {RestAPIsService} from "../../../services/rest/rest-apis.service";
import {User} from "../../../modals/User";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environmentApi} from "../../../services/rest/environnement.model";
import {HttpParams} from "@angular/common/http";
import {LigneSale} from "../../../modals/LineSale";
import {SalesOrder} from "../../../modals/Order";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../../../modals/Category";
import {NavController, LoadingController} from "@ionic/angular";
import {UtilService} from "../../../services/util/util.service";

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.page.html',
  styleUrls: ['./send-request.page.scss'],
})
export class SendRequestPage implements OnInit {
  badgecount:any;
  categoryId:any;
  quantity:any;
  nomprod:any;
  user_list: Array<User> = [];
  current_user: Array<User> = [];
  currentUser:User;
  saleOrder: SalesOrder;
  lines:LigneSale[];
  category_list: Array<Category> = [];
  constructor(private util: UtilService,private api: RestAPIsService,private http:HttpClient,  private route: ActivatedRoute,private navCtrl: NavController,public loadingCtrl: LoadingController) {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params["categoryId"];
      this.quantity = params["quantity"];
      this.nomprod = params["nomprod"];

      // this.currency = JSON.parse(params["currency"]);
    });
  }

  ngOnInit() {
    this.getAllClients();
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


      if(info.length>0) {
        for (i = 0; i < info.length; i++) {
          if(info[i]['id'] == this.categoryId){
            cat = new Category();
            cat.setid(info[i]['id']);
            cat.setname(info[i]['name']);
            cat.setdescription(info[i]['description']);
            cat.setidBrand(info[i]['idBrand']);
            this.category_list.push(cat);
          }

        }
      }
    })

  }
  async CurrentUser():Promise<User>{
    return this.http.get<User>(environmentApi.host+"/api/user/getCurretnUser").toPromise();
  }
  async getCurrentUser(clientid){


    var cur_user,i;
    await this.CurrentUser().then((data) => {
      this.currentUser=data;
    });
    const loading = await this.loadingCtrl.create({
      message: 'Chargement ...',
    });
    loading.present();
      await this.createNewSalesOrderEmpty(clientid,this.currentUser.id).then((data)=>{
        this.saleOrder=data;
      });
      let lineSale: LigneSale={
        "categoryId": this.categoryId,
        "id": null,
        "quantity": this.quantity,
        "salesOrderId": this.saleOrder.id,
        "state": 0
      }
      await this.saveLineToSalesOrder(lineSale).then((data)=>{
        this.util.showToast('Demande Envoyée avec succée !', 'success', 'bottom');
        loading.dismiss();
      });
    loading.dismiss();
  }
  AllUser():Observable<User[]>{
    return this.http.get<User[]>(environmentApi.host+"/api/user/users");
  }
  getAllClients(){
    var i,user;
    this.AllUser().subscribe((data) => {
      let info=data;

      console.log('getAllClients  ');

     /*   alert(info[1]['groupIds']);
      alert(groupids[0]['id']);
        alert(groupids[0].id);*/
      if(data.length>0) {
        for (i = 0; i < data.length; i++) {
          const groupids = data[i].groupIds;
          if(groupids.length >0){
            if(groupids[0].id == 3){
              this.user_list = data;
            }

          }
        }
      }

      console.log(this.user_list);

    //  this.dismissLoader();
    });
  }

  createNewSalesOrderEmpty(clientId,purchasingManagerId):Promise<any>{
    let httpParams = new HttpParams()
        .append("clientId",clientId )
        .append("purchasingManagerId",purchasingManagerId );
    return this.http.post<LigneSale>(environmentApi.host + "/api/salesorder/createNewSalesOrderEmpty",httpParams).toPromise();
  }
  addtocart(){

    this.navCtrl.navigateRoot(['my-cart']);
  }

  
  saveLineToSalesOrder(line:LigneSale):Promise<LigneSale> {
    return this.http.post<LigneSale>(environmentApi.host+"/api/ligneSale/addLineToSalesOrder",line).toPromise();
  }
}
