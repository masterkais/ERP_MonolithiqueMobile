import { Component, OnInit } from '@angular/core';
import {RestAPIsService} from "../../../services/rest/rest-apis.service";
import {User} from "../../../modals/User";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environmentApi} from "../../../services/rest/environnement.model";
import {HttpParams} from "@angular/common/http";
import {LigneSale} from "../../../modals/LineSale";
import {Order, SalesOrder} from "../../../modals/Order";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../../../modals/Category";
import {NavController} from "@ionic/angular";

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
  category_list: Array<Category> = [];
  constructor(private api: RestAPIsService,private http:HttpClient,  private route: ActivatedRoute,private navCtrl: NavController) {
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
  CurrentUser():Observable<User[]>{
    return this.http.get<User[]>(environmentApi.host+"/api/user/getCurretnUser");
  }
  getCurrentUser(clientid){
    var cur_user,i;
    this.CurrentUser().subscribe((data) => {
      let oder:SalesOrder;
      this.createNewSalesOrderEmpty(clientid,data['id']+"").then((data)=>{
        oder=data;
      });
      let lineSale: LigneSale={

        "categoryId": this.categoryId,
        "id": null,
        "quantity": this.quantity,
        "salesOrderId": oder.id,
        "state": 0
      }
      this.addLineToSalesOrder(lineSale).then((data)=>{
        console.log("successs")
      });
     //console.log(data['id'])
    });


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
            if(groupids[0].id == '3'){
              this.user_list = data;
            }

          }
        }
      }

      console.log(this.user_list);

    //  this.dismissLoader();
    });
  }

  createNewSalesOrderEmpty(clientId:string,purchasingManagerId:string):Promise<any>{
    let httpParams = new HttpParams()
        .append("clientId",clientId )
        .append("purchasingManagerId",purchasingManagerId );
    return this.http.post<LigneSale>(environmentApi.host + "/api/salesorder/createNewSalesOrderEmpty",httpParams).toPromise();
  }
  addtocart(){

    this.navCtrl.navigateRoot(['my-cart']);
  }

  addLineToSalesOrder(data){
   // alert(clientid);


    this.saveLineToSalesOrder(data).subscribe((data)=>{
      console.log("succces");
    },(err)=>{
      //this.util.showToast('Utilisateur existe déjà', 'danger', 'bottom');
    });
  }
  saveLineToSalesOrder(line:LigneSale):Observable<LigneSale> {
    return this.http.post<LigneSale>(environmentApi.host+"/api/ligneSale/addLineToSalesOrder",line);
  }
}
