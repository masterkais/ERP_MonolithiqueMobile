import { Component, OnInit } from '@angular/core';
import {RestAPIsService} from "../../../services/rest/rest-apis.service";
import {User} from "../../../modals/User";

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.page.html',
  styleUrls: ['./send-request.page.scss'],
})
export class SendRequestPage implements OnInit {
  badgecount:any;
  user_list: Array<User> = [];
  constructor(private api: RestAPIsService) { }

  ngOnInit() {
    this.getAllClients();
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

  getAllClients(){
    var i,user;
    this.api.get('user/users').then((data) => {
      const info = JSON.parse(data.data);


     /*   alert(info[1]['groupIds']);
      alert(groupids[0]['id']);
        alert(groupids[0].id);
      if(info.length>0) {
        for (i = 0; i < info.length; i++) {
          const groupids = info[i]['groupIds'];
          if(groupids.length >0){
            if(groupids[0]['id'] == '3'){
              user = new User();
              user.setgroupId(groupids[0]['id']);
              user.setid(info[i]['id']);
              user.setlastName(info[i]['lastName']);
              user.setfirstName(info[i]['firstName']);
              user.setadress(info[i]['adress']);
              user.setfax(info[i]['fax']);
              user.setemail(info[i]['email']);
              user.setcity(info[i]['city']);
              user.setactive(info[i]['active']);
              user.setdateNaissanced(info[i]['dateNaissanced']);
              user.setlogin(info[i]['login']);
              user.setpassword(info[i]['password']);
              this.user_list.push(user);
            }

          }
        }
      }*/



    //  this.dismissLoader();
    }).catch(error => {
      //this.isLogin = false;
      alert('getallimages');
      alert(error.message);
      //this.util.showToast(`${error}`, 'danger', 'bottom');
    });
  }
}
