(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-create-create-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/create/create.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/create/create.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Add New List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-textarea [(ngModel)]=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-button expand=\"block\" color=\"secondary\" margin-top (click)=\"addList()\" [disabled]=\"isCreate\">\n    <span *ngIf=\"!isCreate\">\n      Add List\n    </span>\n    <ion-spinner name=\"dots\" *ngIf=\"isCreate\"></ion-spinner>\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/firebase/create/create-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/firebase/create/create-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageRoutingModule", function() { return CreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.page */ "./src/app/pages/firebase/create/create.page.ts");




const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_3__["CreatePage"]
    }
];
let CreatePageRoutingModule = class CreatePageRoutingModule {
};
CreatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/firebase/create/create.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/firebase/create/create.module.ts ***!
  \********************************************************/
/*! exports provided: CreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-routing.module */ "./src/app/pages/firebase/create/create-routing.module.ts");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/pages/firebase/create/create.page.ts");







let CreatePageModule = class CreatePageModule {
};
CreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatePageRoutingModule"]
        ],
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]]
    })
], CreatePageModule);



/***/ }),

/***/ "./src/app/pages/firebase/create/create.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/firebase/create/create.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcmViYXNlL2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/firebase/create/create.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/firebase/create/create.page.ts ***!
  \******************************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/




let CreatePage = class CreatePage {
    constructor(util, adb, navCtrl) {
        this.util = util;
        this.adb = adb;
        this.navCtrl = navCtrl;
        this.title = '';
        this.description = '';
    }
    ngOnInit() {
        this.isCreate = false;
    }
    addList() {
        if (this.title == '') {
            this.util.showWarningAlert('Please Add Title');
            return false;
        }
        if (this.description == '') {
            this.util.showWarningAlert('Please add Description');
            return false;
        }
        this.isCreate = true;
        let id = this.makeid(10);
        this.adb.collection('lists').doc(localStorage.getItem('fuid')).collection('list').doc(id).set({
            id: id,
            title: this.title,
            description: this.description,
            timestamp: new Date().toISOString(),
        }).then(() => {
            console.log('added');
            this.isCreate = false;
            this.navCtrl.back();
            this.util.showToast('List Added', 'success', 'bottom');
        }).catch((error) => {
            console.log('error', error);
            this.isCreate = false;
            this.util.showErrorAlert("Something went Wrong");
        });
    }
    makeid(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
};
CreatePage.ctorParameters = () => [
    { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
CreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/create/create.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create.page.scss */ "./src/app/pages/firebase/create/create.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], CreatePage);



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
//# sourceMappingURL=pages-firebase-create-create-module-es2015.js.map