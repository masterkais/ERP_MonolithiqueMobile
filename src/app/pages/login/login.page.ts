
  import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { login } from 'src/app/interfaces/login';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UtilService } from 'src/app/services/util/util.service';
import { RestAPIsService } from 'src/app/services/rest/rest-apis.service';
  @Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
  })
  export class LoginPage implements OnInit {


  login: login = { email: '', password: '' };
  submitted = false;
  isLogin: boolean = false;
  showSkip = true;
  slideOpts = {
    zoom: false
  };
  @ViewChild('slides', { static: false }) slides: IonSlides;
  constructor(
      private menuCtrl: MenuController,
      private navCtrl: NavController,
      private util: UtilService,
      private router: Router,
      private api: RestAPIsService) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }
  ngOnInit() {

  }



  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
  startApp() {
    console.log('logn');
    this.navCtrl.navigateRoot(['home']);
  }

  onLogin(form: NgForm) {
    console.log('form', form);
    this.submitted = true;
    if (form.valid) {
      /*const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
       if (!emailfilter.test(this.login.email)) {
       this.util.showToast('Please enter valid email', 'danger', 'bottom');
       return false;
       }*/
      console.log('login');
      this.isLogin = true;
      let param = {
        email: this.login.email,
        password: this.login.password
      }
      /*this.api.post(param,'Users/login').then((data) => {
       this.isLogin = false;
       const info = JSON.parse(data.data);
       console.log('inof', info);
       if (info && info.status === 200) {
       localStorage.setItem('uid', info.data.id);
       this.router.navigate(['/rest-home']);
       } else {
       this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
       }
       }).catch(error => {
       this.isLogin = false;
       console.log(error);
       this.util.showToast(`${error}`, 'danger', 'bottom');
       });*/
      this.navCtrl.navigateRoot(['charts']);

    }
  }

  register() {
    this.router.navigate(['rest-register']);
  }
}
