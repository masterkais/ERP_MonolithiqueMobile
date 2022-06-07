(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admob-admob-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admob/admob.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admob/admob.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Admob</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label class=\"ion-text-center\">Resources</ion-label>\n    </ion-item>\n\n    <ion-button (click)=\"showBanner()\" expand=\"block\" id=\"g1\">\n      Show Banner Ads\n    </ion-button>\n\n    <ion-button (click)=\"showInter()\" expand=\"block\" id=\"g2\">\n      Show Interstitial Ads\n    </ion-button>\n\n    <ion-button (click)=\"showVideo()\" expand=\"block\" id=\"g3\">\n      Show Video Reward Ads\n    </ion-button>\n\n\n\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/admob/admob-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/admob/admob-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AdmobPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmobPageRoutingModule", function() { return AdmobPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admob_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admob.page */ "./src/app/pages/admob/admob.page.ts");




const routes = [
    {
        path: '',
        component: _admob_page__WEBPACK_IMPORTED_MODULE_3__["AdmobPage"]
    }
];
let AdmobPageRoutingModule = class AdmobPageRoutingModule {
};
AdmobPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdmobPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admob/admob.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/admob/admob.module.ts ***!
  \*********************************************/
/*! exports provided: AdmobPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmobPageModule", function() { return AdmobPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _admob_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admob-routing.module */ "./src/app/pages/admob/admob-routing.module.ts");
/* harmony import */ var _admob_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admob.page */ "./src/app/pages/admob/admob.page.ts");







let AdmobPageModule = class AdmobPageModule {
};
AdmobPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admob_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdmobPageRoutingModule"]
        ],
        declarations: [_admob_page__WEBPACK_IMPORTED_MODULE_6__["AdmobPage"]]
    })
], AdmobPageModule);



/***/ }),

/***/ "./src/app/pages/admob/admob.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/admob/admob.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbW9iL2FkbW9iLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/admob/admob.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/admob/admob.page.ts ***!
  \*******************************************/
/*! exports provided: AdmobPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmobPage", function() { return AdmobPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/admob-pro/ngx */ "./node_modules/@ionic-native/admob-pro/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/




let AdmobPage = class AdmobPage {
    constructor(admob, plt) {
        this.admob = admob;
        this.plt = plt;
        if (this.plt.is('ios')) {
            this.bannerId = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].iosAdmob.banner;
            this.inter = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].iosAdmob.inter;
            this.videoId = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].iosAdmob.reward;
        }
        else if (this.plt.is('android')) {
            this.bannerId = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].androidAdmob.banner;
            this.inter = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].androidAdmob.inter;
            this.videoId = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].androidAdmob.reward;
        }
        /// adding subscriber for track add events
        this.admob.onAdDismiss().subscribe((data) => {
            console.log('on dismiss', data);
        }, error => {
            console.log(error);
        });
    }
    showBanner() {
        this.admob.createBanner({
            adId: this.bannerId,
            isTesting: false
        }).then(() => {
            this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
        }).catch((err) => {
            console.log(err);
        });
    }
    showInter() {
        this.admob.prepareInterstitial({
            adId: this.inter,
            isTesting: false
        }).then(() => {
            this.admob.showInterstitial();
        })
            .catch((err) => {
            console.log(err);
        });
    }
    showVideo() {
        this.admob.prepareRewardVideoAd({
            adId: this.videoId,
            isTesting: false,
        }).then(() => {
            this.admob.showRewardVideoAd();
        }).catch(error => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
};
AdmobPage.ctorParameters = () => [
    { type: _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_2__["AdMobPro"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
AdmobPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admob',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admob.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admob/admob.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admob.page.scss */ "./src/app/pages/admob/admob.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_2__["AdMobPro"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], AdmobPage);



/***/ })

}]);
//# sourceMappingURL=pages-admob-admob-module-es2015.js.map