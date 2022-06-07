(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-offline-offline-home-offline-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offline/offline-home/offline-home.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offline/offline-home/offline-home.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addtocart()\" class=\"ion-button custom-class\" color=\"red\"  fill=\"solid\">\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\n        <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\n      </ion-button>\n\n    </ion-buttons>\n    <ion-title>\n      Nouveau Client\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_logo\" (click)=\"addNew()\">\n    <img src=\"assets/images/add.png\" class=\"img \">\n    <p class=\"new_title\">Ajouter un client</p>\n  </div>\n  <img  src=\"assets/images/nodata.png\">\n  <!--\n  <img *ngIf=\"!haveData\" src=\"assets/images/nodata.png\">\n  <ion-card *ngFor=\"let list of lists;let i = index\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        <span class=\"text-primary\">{{ i + 1 }}.</span>\n\n        <div class=\"list-more\">\n          <ion-button fill=\"clear\" (click)=\"launchMenu(list)\" size=\"small\">\n\n            <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\" style=\"font-size: 20px;\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-card-subtitle>\n      <ion-card-title>{{list.title}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n        {{ list.description}}\n      </p>\n    </ion-card-content>\n  </ion-card>-->\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/offline/offline-home/offline-home-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/offline/offline-home/offline-home-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: OfflineHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineHomePageRoutingModule", function() { return OfflineHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _offline_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offline-home.page */ "./src/app/pages/offline/offline-home/offline-home.page.ts");




const routes = [
    {
        path: '',
        component: _offline_home_page__WEBPACK_IMPORTED_MODULE_3__["OfflineHomePage"]
    }
];
let OfflineHomePageRoutingModule = class OfflineHomePageRoutingModule {
};
OfflineHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OfflineHomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/offline/offline-home/offline-home.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/offline/offline-home/offline-home.module.ts ***!
  \*******************************************************************/
/*! exports provided: OfflineHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineHomePageModule", function() { return OfflineHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _offline_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offline-home-routing.module */ "./src/app/pages/offline/offline-home/offline-home-routing.module.ts");
/* harmony import */ var _offline_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offline-home.page */ "./src/app/pages/offline/offline-home/offline-home.page.ts");







let OfflineHomePageModule = class OfflineHomePageModule {
};
OfflineHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offline_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfflineHomePageRoutingModule"]
        ],
        declarations: [_offline_home_page__WEBPACK_IMPORTED_MODULE_6__["OfflineHomePage"]]
    })
], OfflineHomePageModule);



/***/ }),

/***/ "./src/app/pages/offline/offline-home/offline-home.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/offline/offline-home/offline-home.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_logo {\n  width: 100%;\n  text-align: center;\n}\n.div_logo .new_title {\n  font-size: 1rem;\n}\n.div_logo .img {\n  width: 20%;\n  margin-top: 5% !important;\n}\n.list-more {\n  font-size: 25px !important;\n  position: absolute;\n  right: -10px;\n  top: -18px;\n}\n.text-primary {\n  color: var(--ion-color-primary) !important;\n}\n.list-source-name {\n  font-size: 12px;\n  color: lightgray;\n}\nion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n/* Setting Overflow Visible */\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb2ZmbGluZS9vZmZsaW5lLWhvbWUvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXG9mZmxpbmVcXG9mZmxpbmUtaG9tZVxcb2ZmbGluZS1ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb2ZmbGluZS9vZmZsaW5lLWhvbWUvb2ZmbGluZS1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDSSxlQUFBO0FDQ1I7QURDSTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQ0NSO0FERUE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDSjtBRENBO0VBQ0ksMENBQUE7QUNFSjtBREFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR0o7QURhQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDVko7QURhQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDVko7QURjQSw2QkFBQTtBQUNBO0VBQ0ksaUJBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29mZmxpbmUvb2ZmbGluZS1ob21lL29mZmxpbmUtaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kaXZfbG9nb3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLm5ld190aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAuaW1ne1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5saXN0LW1vcmUge1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTEwcHg7XG4gICAgdG9wOiAtMThweDtcbn1cbi50ZXh0LXByaW1hcnkge1xuICAgIGNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG4ubGlzdC1zb3VyY2UtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA4cHQ7XG4gICAgcmlnaHQ6IC01cHg7XG4gICAgdG9wOiAycHg7XG59XG5cbi5pb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcbn1cblxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXG4uaW9uLWJ1dHRvbi5jdXN0b20tY2xhc3M6OnBhcnQobmF0aXZlKSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59IiwiLmRpdl9sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXZfbG9nbyAubmV3X3RpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmRpdl9sb2dvIC5pbWcge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1tb3JlIHtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0b3A6IC0xOHB4O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1zb3VyY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDhwdDtcbiAgcmlnaHQ6IC01cHg7XG4gIHRvcDogMnB4O1xufVxuXG4uaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIFNldHRpbmcgT3ZlcmZsb3cgVmlzaWJsZSAqL1xuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/offline/offline-home/offline-home.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/offline/offline-home/offline-home.page.ts ***!
  \*****************************************************************/
/*! exports provided: OfflineHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineHomePage", function() { return OfflineHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/





let OfflineHomePage = class OfflineHomePage {
    constructor(router, sqlite, actionSheetController, navCtrl, util, alertCtrl) {
        this.router = router;
        this.sqlite = sqlite;
        this.actionSheetController = actionSheetController;
        this.navCtrl = navCtrl;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.produits_commandes_list = [];
        this.haveData = false;
        if (localStorage.getItem("produits_commandes") != null) {
            this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
        }
    }
    ionViewWillEnter() {
        this.getInfo();
    }
    charge_compteur() {
        if (localStorage.getItem("compteur") != null) {
            this.badgecount = localStorage.getItem("compteur");
        }
        else {
            this.badgecount = 0;
        }
        return this.badgecount;
    }
    getInfo() {
        this.sqlite.create({
            name: 'offline5.db',
            location: 'default'
        }).then((db) => {
            db.executeSql('CREATE TABLE IF NOT EXISTS offlineData(id INTEGER PRIMARY KEY, title TEXT, description TEXT)', [])
                .then(res => console.log('Executed SQL'))
                .catch(e => this.util.showToast(e, 'danger', 'bottom'));
            db.executeSql('SELECT * FROM offlineData ORDER BY id DESC', [])
                .then(res => {
                console.log('offline data', res);
                this.lists = [];
                for (let i = 0; i < res.rows.length; i++) {
                    this.lists.push({
                        id: res.rows.item(i).id,
                        title: res.rows.item(i).title,
                        description: res.rows.item(i).description
                    });
                }
                if (this.lists.length > 0) {
                    this.haveData = true;
                }
            }).catch(error => {
                console.log(error);
                this.util.showToast('Error', 'danger', 'bottom');
            });
        }).catch(error => {
            console.log(error);
            this.util.showToast('Error', 'danger', 'bottom');
        });
    }
    addNew() {
        this.router.navigate(['offline-create']);
    }
    ngOnInit() {
        this.badgecount = 0;
    }
    deleteItem(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'are you sure?',
                message: 'to delete this item',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.sqlite.create({
                                name: 'offline5.db',
                                location: 'default'
                            }).then((db) => {
                                db.executeSql('DELETE FROM offlineData WHERE id=?', [item])
                                    .then(res => {
                                    console.log(res);
                                    this.getInfo();
                                })
                                    .catch(e => console.log(e));
                            }).catch(e => console.log(e));
                        }
                    }
                ]
            });
            yield alert.present();
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
                                    data: JSON.stringify(item)
                                }
                            };
                            this.router.navigate(['offline-details'], navData);
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
    addtocart() {
        this.navCtrl.navigateRoot(['my-cart']);
    }
};
OfflineHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
OfflineHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offline-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offline-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offline/offline-home/offline-home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offline-home.page.scss */ "./src/app/pages/offline/offline-home/offline-home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], OfflineHomePage);



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
//# sourceMappingURL=pages-offline-offline-home-offline-home-module-es2015.js.map