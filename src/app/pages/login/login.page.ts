
  import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides, NavController, LoadingController} from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { login } from 'src/app/interfaces/login';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UtilService } from 'src/app/services/util/util.service';
import { RestAPIsService } from 'src/app/services/rest/rest-apis.service';
import { AuthentificationServiceService } from 'src/app/services/rest/authentification.service';


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
      private api: RestAPIsService,
      private authService: AuthentificationServiceService,
      public loadingCtrl: LoadingController
    ) {

  }

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


  async onLogin(form: NgForm) {
    console.log('form', form);
    this.submitted = true;
    if (form.valid) {
      this.isLogin = true;
       let dataForm = {
        userName: this.login.email,
          password: this.login.password
      }

      const loading = await this.loadingCtrl.create({
        message: 'Chargement ...',
      });
      loading.present();
      this.authService.login(dataForm).subscribe(
         (resp) => {
          let jwt = resp.headers.get("Authorization");
          this.authService.saveToken(jwt);
          console.log("success")
          setTimeout(() => {
            this.router.navigateByUrl('/charts');;
          }, 2000);
           loading.dismiss();
        },
        (err) => {
          location.reload();
          loading.dismiss();
          console.log(err.message)
          this.util.showToast('Veuillez vérifier vos données !', 'danger', 'bottom');

        }
      );



    }
  }
  async onSignIn(resp){
    
  }

  register() {
    
   
  }
}
