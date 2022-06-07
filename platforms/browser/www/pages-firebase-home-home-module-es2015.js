(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/home/home.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/home/home.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Firebase CRUD\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_logo\" (click)=\"addNew()\">\n    <img src=\"assets/images/add.png\" class=\"img \">\n    <p class=\"new_title\">Add New</p>\n  </div>\n  <img *ngIf=\"!haveData\" src=\"assets/images/nodata.png\">\n  <ion-card *ngFor=\"let list of lists;let i = index\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        <span class=\"text-primary\">{{ i + 1 }}. </span>\n        <span class=\"list-source-name\" [innerHTML]=\"gettimeago(list.timestamp)\"></span>\n        <div class=\"list-more\">\n          <ion-button fill=\"clear\" (click)=\"launchMenu(list)\" size=\"small\" style=\"margin: 0px;\">\n            <!-- <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon> -->\n            <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\" style=\"font-size: 20px;\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-card-subtitle>\n      <ion-card-title>{{list.title}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n        {{ list.description}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/firebase/home/home-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/firebase/home/home-routing.module.ts ***!
  \************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/firebase/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/firebase/home/home.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/firebase/home/home.module.ts ***!
  \****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/firebase/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/firebase/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/firebase/home/home.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/firebase/home/home.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_logo {\n  width: 100%;\n  text-align: center;\n}\n.div_logo .new_title {\n  font-size: 1rem;\n}\n.div_logo .img {\n  width: 20%;\n  margin-top: 5% !important;\n}\n.list-more {\n  font-size: 25px !important;\n  position: absolute;\n  right: -10px;\n  top: -18px;\n}\n.text-primary {\n  color: var(--ion-color-primary) !important;\n}\n.list-source-name {\n  font-size: 12px;\n  color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlyZWJhc2UvaG9tZS9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcZmlyZWJhc2VcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9maXJlYmFzZS9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ1EsV0FBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7QUNDWjtBRENRO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0FDQ1o7QURFSTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NSO0FEQ0k7RUFDSSwwQ0FBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcmViYXNlL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXG4uZGl2X2xvZ297XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5uZXdfdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5saXN0LW1vcmUge1xuICAgICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgIHRvcDogLTE4cHg7XG4gICAgfVxuICAgIC50ZXh0LXByaW1hcnkge1xuICAgICAgICBjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGlzdC1zb3VyY2UtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICB9IiwiLmRpdl9sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXZfbG9nbyAubmV3X3RpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmRpdl9sb2dvIC5pbWcge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1tb3JlIHtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0b3A6IC0xOHB4O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1zb3VyY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/firebase/home/home.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/firebase/home/home.page.ts ***!
  \**************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/






let HomePage = class HomePage {
    constructor(router, adb, actionSheetController, util) {
        this.router = router;
        this.adb = adb;
        this.actionSheetController = actionSheetController;
        this.util = util;
        this.haveData = false;
    }
    addNew() {
        this.router.navigate(['create']);
    }
    ngOnInit() {
        const uid = localStorage.getItem('fuid');
        if (uid && uid != null && uid != 'null') {
            this.adb.collection('lists')
                .doc(localStorage.getItem('fuid'))
                .collection('list')
                .valueChanges()
                .subscribe((lists) => {
                console.log('list', lists);
                this.lists = lists;
                if (this.lists.length > 0) {
                    this.haveData = true;
                }
            });
        }
        else {
            this.router.navigate(['/firebase-auth']);
            this.util.showToast('Unauthorized', 'danger', 'bottom');
        }
    }
    gettimeago(time) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(time).format('llll');
    }
    deleteItem(id) {
        return this.adb.collection('lists')
            .doc(localStorage.getItem('fuid'))
            .collection('list')
            .doc(id)
            .delete()
            .then(() => {
            console.log('deleted');
        });
    }
    launchMenu(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Action',
                buttons: [
                    {
                        text: 'Edit',
                        icon: 'create',
                        handler: () => {
                            console.log('Edit clicked');
                            const navData = {
                                queryParams: {
                                    id: item.id
                                }
                            };
                            this.router.navigate(['details'], navData);
                        }
                    }, {
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            console.log('Delete clicked');
                            this.deleteItem(item.id);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/firebase/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
], HomePage);



/***/ }),

/***/ "./src/app/services/util/util.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/util/util.service.ts ***!
  \***********************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/



let UtilService = class UtilService {
    constructor(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.isLoading = false;
    }
    /*
    Start Loader
    Call this method to Start your Loader
    */
    show(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                message: msg,
                spinner: 'bubbles',
            }).then(a => {
                a.present().then(() => {
                    //console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    hide() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
    /*
      Show Warning Alert Message
      param : msg = message to display
      Call this method to show Warning Alert,
      */
    showWarningAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Warning',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    showSimpleAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /*
     Show Error Alert Message
     param : msg = message to display
     Call this method to show Error Alert,
     */
    showErrorAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Error',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /*
       param : email = email to verify
       Call this method to get verify email
       */
    getEmailFilter(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!(emailfilter.test(email))) {
                const alert = yield this.alertCtrl.create({
                    header: 'Warning',
                    message: 'Please enter valid email',
                    buttons: ['OK']
                });
                yield alert.present();
                return false;
            }
            else {
                return true;
            }
        });
    }
    /*
      Show Toast Message on Screen
       param : msg = message to display, color= background color of toast example dark,danger,light. position  = position of message example top,bottom
       Call this method to show toast message
       */
    showToast(msg, color, positon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                color: color,
                position: positon
            });
            toast.present();
        });
    }
    shoNotification(msg, color, positon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 4000,
                color: color,
                position: positon,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Cancel clicked');
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    errorToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
            });
            toast.present();
        });
    }
    apiErrorHandler(err) {
        //console.log("Error got in service =>", err)
        if (err.status == -1) {
            this.showErrorAlert('Failed To Connect With Server');
        }
        else if (err.status == 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
        }
        else if (err.status == 500) {
            this.showErrorAlert("Somethimg Went Wrong..");
        }
    }
    // setDetails(data) {
    //   this.details = null;
    //   this.details = data;
    // }
    // getDetails() {
    //   return this.details;
    // }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};
UtilService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], UtilService);



/***/ })

}]);
//# sourceMappingURL=pages-firebase-home-home-module-es2015.js.map