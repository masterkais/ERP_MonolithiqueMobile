(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rest-rest-register-rest-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-register/rest-register.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-register/rest-register.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"danger\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Rest APIs Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/rest/icon.png\" class=\"logo_icon\" alt=\"starter\">\n    <p class=\"login-name\">Register</p>\n    <p class=\"subTitle\">Enter your login detail to <br>\n      access your account</p>\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.full_name\" type=\"text\" placeholder=\"Full name\" name=\"full_name\"\n          #full_name=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"full_name.valid || submitted == false\" class=\"ion-padding-start\">\n          Name is required\n        </p>\n      </ion-text>\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" type=\"email\" placeholder=\"Email\" name=\"email\" #email=\"ngModel\"\n          spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          Email is required\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" placeholder=\"password\" type=\"password\"\n          #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Password is required\n        </p>\n      </ion-text>\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.confirmPassword\" name=\"confirmPassword\" placeholder=\"Confirm password\"\n          type=\"password\" #confirmPassword=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"confirmPassword.valid || submitted == false\" class=\"ion-padding-start\">\n          Confirm Password is required\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <ion-button color=\"danger\" class=\"btn_class\" (click)=\"onRegister(loginForm)\" type=\"submit\" expand=\"block\"\n          [disabled]=\"isLogin\">\n          <span class=\"title\" *ngIf=\"!isLogin\"> Register</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n  <p class=\"createAcc\" (click)=\"loginBack()\">Already have an account?\n    <span class=\"registerTag\">Login</span>\n  </p>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/rest/rest-register/rest-register-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/rest/rest-register/rest-register-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: RestRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestRegisterPageRoutingModule", function() { return RestRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rest_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest-register.page */ "./src/app/pages/rest/rest-register/rest-register.page.ts");




const routes = [
    {
        path: '',
        component: _rest_register_page__WEBPACK_IMPORTED_MODULE_3__["RestRegisterPage"]
    }
];
let RestRegisterPageRoutingModule = class RestRegisterPageRoutingModule {
};
RestRegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RestRegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/rest/rest-register/rest-register.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/rest/rest-register/rest-register.module.ts ***!
  \******************************************************************/
/*! exports provided: RestRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestRegisterPageModule", function() { return RestRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rest-register-routing.module */ "./src/app/pages/rest/rest-register/rest-register-routing.module.ts");
/* harmony import */ var _rest_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rest-register.page */ "./src/app/pages/rest/rest-register/rest-register.page.ts");







let RestRegisterPageModule = class RestRegisterPageModule {
};
RestRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rest_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestRegisterPageRoutingModule"]
        ],
        declarations: [_rest_register_page__WEBPACK_IMPORTED_MODULE_6__["RestRegisterPage"]]
    })
], RestRegisterPageModule);



/***/ }),

/***/ "./src/app/pages/rest/rest-register/rest-register.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/rest/rest-register/rest-register.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-danger);\n}\n.btn_class {\n  margin-top: 10px;\n  --border-radius: 5px;\n  height: 50px;\n}\n.btn_class .title {\n  color: white !important;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\nion-item {\n  --ion-background-color:#f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.createAcc {\n  text-align: center;\n}\n.createAcc .registerTag {\n  color: var(--ion-color-danger);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzdC9yZXN0LXJlZ2lzdGVyL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxyZXN0XFxyZXN0LXJlZ2lzdGVyXFxyZXN0LXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVzdC9yZXN0LXJlZ2lzdGVyL3Jlc3QtcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ00sa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREFRO0VBQ0ksdUJBQUE7QUNFWjtBREFRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDRVo7QURBUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRVo7QURDSTtFQUNRLGlCQUFBO0VBQ0EsOEJBQUE7QUNFWjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUlBLFlBQUE7QUNBUjtBREhRO0VBQ0ksdUJBQUE7QUNLWjtBRERJO0VBQ0ssZ0JBQUE7QUNJVDtBREZJO0VBQ0ksZ0JBQUE7QUNLUjtBREhJO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0FDTVI7QURKSTtFQUNLLDhCQUFBO0VBQ0QsNkJBQUE7RUFDQSxnQkFBQTtBQ09SO0FESEc7RUFDSyxrQkFBQTtBQ01SO0FETE87RUFDSyw4QkFBQTtFQUNBLGlCQUFBO0FDT1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXN0L3Jlc3QtcmVnaXN0ZXIvcmVzdC1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5sb2dpbi1sb2dvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAubG9nb19pY29ue1xuICAgICAgICAgICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2luLW5hbWV7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJUaXRsZXtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mcmdUYWd7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIH1cbiAgICAuYnRuX2NsYXNze1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAubG9naW4tbG9nbyBpbWcge1xuICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICB9XG4gICAgLmxpc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICBpb24tbGlzdHtcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgXG4gICAgfVxuICBcbiAgIC5jcmVhdGVBY2N7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgLnJlZ2lzdGVyVGFne1xuICAgICAgICAgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICB9XG4gICB9ICIsIi5sb2dpbi1sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxvZ2luLWxvZ28gLmxvZ29faWNvbiB7XG4gIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWxvZ28gLmxvZ2luLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ubG9naW4tbG9nbyAuc3ViVGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZnJnVGFnIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmJ0bl9jbGFzcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uYnRuX2NsYXNzIC50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNyZWF0ZUFjYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jcmVhdGVBY2MgLnJlZ2lzdGVyVGFnIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/rest/rest-register/rest-register.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/rest/rest-register/rest-register.page.ts ***!
  \****************************************************************/
/*! exports provided: RestRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestRegisterPage", function() { return RestRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest/rest-apis.service */ "./src/app/services/rest/rest-apis.service.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/





let RestRegisterPage = class RestRegisterPage {
    constructor(util, api, navCtrl, router) {
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.router = router;
        this.login = { email: '', password: '', full_name: '', confirmPassword: '' };
        this.submitted = false;
        this.isLogin = false;
    }
    ngOnInit() {
    }
    onRegister(form) {
        console.log('form', form);
        this.submitted = true;
        if (form.valid) {
            const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailfilter.test(this.login.email)) {
                return false;
            }
            if (this.login.password != this.login.confirmPassword) {
                this.util.errorToast('Password does not match');
                return false;
            }
            console.log('login');
            this.isLogin = true;
            let param = {
                email: this.login.email,
                password: this.login.password,
                fullname: this.login.full_name
            };
            this.api.post(param, 'Users/register').then((data) => {
                this.isLogin = false;
                const info = JSON.parse(data.data);
                console.log('inof', info);
                if (info && info.status === 200) {
                    localStorage.setItem('uid', info.data.id);
                    this.router.navigate(['/rest-home']);
                }
                else {
                    this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
                }
            }).catch(error => {
                this.isLogin = false;
                console.log(error);
                this.util.showToast(`${error}`, 'danger', 'bottom');
            });
        }
    }
    loginBack() {
        this.navCtrl.back();
    }
};
RestRegisterPage.ctorParameters = () => [
    { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__["RestAPIsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RestRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rest-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rest-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-register/rest-register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rest-register.page.scss */ "./src/app/pages/rest/rest-register/rest-register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__["RestAPIsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RestRegisterPage);



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
//# sourceMappingURL=pages-rest-rest-register-rest-register-module-es2015.js.map