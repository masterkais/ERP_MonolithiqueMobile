(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-ex5-register-ex5-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-ex5/register-ex5.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-ex5/register-ex5.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>login-ex5</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <div class=\"overlay\">\n  \n    <ion-icon name=\"arrow-back-outline\" (click)=\"goBack()\" [class.ios_pad]=\"plt == 'ios'\"></ion-icon>\n\n    <div class=\"form_div\">\n      <ion-label class=\"head_lbl\">Sign Up</ion-label>\n\n      <ion-label class=\"small_lbl\">First Name</ion-label>\n      <ion-input type=\"text\" placeholder=\"First Name\"></ion-input>\n      <ion-label class=\"small_lbl\">Last Name</ion-label>\n      <ion-input type=\"text\" placeholder=\"Last Name\"></ion-input>\n      <ion-label class=\"small_lbl\">Email ID</ion-label>\n      <ion-input type=\"text\" placeholder=\"Email ID\"></ion-input>\n      <ion-label class=\"small_lbl\">Password</ion-label>\n      <ion-input type=\"text\" placeholder=\"Password\"></ion-input>\n\n      <ion-button expand=\"block\" fill=\"outline\">\n        Sign Up\n      </ion-button>\n\n      <ion-label class=\"bottom_lbl\">Already have an Account ? <span class=\"signup_span\">Login</span></ion-label>\n    </div>\n  </div>\n\n  <ion-slides>\n    <ion-slide>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/slide1.jpg)'\"></div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/slide2.jpg)'\"></div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/slide3.jpg)'\"></div>\n    </ion-slide>\n  </ion-slides>\n  <div class=\"main_content_div\">\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/register/register-ex5/register-ex5-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/register/register-ex5/register-ex5-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterEx5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEx5PageRoutingModule", function() { return RegisterEx5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_ex5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-ex5.page */ "./src/app/pages/register/register-ex5/register-ex5.page.ts");




const routes = [
    {
        path: '',
        component: _register_ex5_page__WEBPACK_IMPORTED_MODULE_3__["RegisterEx5Page"]
    }
];
let RegisterEx5PageRoutingModule = class RegisterEx5PageRoutingModule {
};
RegisterEx5PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterEx5PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register/register-ex5/register-ex5.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/register/register-ex5/register-ex5.module.ts ***!
  \********************************************************************/
/*! exports provided: RegisterEx5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEx5PageModule", function() { return RegisterEx5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_ex5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-ex5-routing.module */ "./src/app/pages/register/register-ex5/register-ex5-routing.module.ts");
/* harmony import */ var _register_ex5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-ex5.page */ "./src/app/pages/register/register-ex5/register-ex5.page.ts");







let RegisterEx5PageModule = class RegisterEx5PageModule {
};
RegisterEx5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_ex5_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterEx5PageRoutingModule"]
        ],
        declarations: [_register_ex5_page__WEBPACK_IMPORTED_MODULE_6__["RegisterEx5Page"]]
    })
], RegisterEx5PageModule);



/***/ }),

/***/ "./src/app/pages/register/register-ex5/register-ex5.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/register/register-ex5/register-ex5.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: relative;\n}\nion-content .back_image {\n  height: 100vh;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.overlay {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  z-index: 9;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 20px;\n}\n.overlay ion-icon {\n  font-size: 30px;\n  color: white;\n}\n.overlay .form_div {\n  margin-top: 130px;\n}\n.overlay .head_lbl {\n  text-align: center;\n  color: white;\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 20px;\n}\n.overlay ion-label {\n  display: block;\n}\n.overlay .small_lbl {\n  color: white;\n  margin-bottom: 10px;\n}\n.overlay ion-input {\n  border: 1px solid white;\n  --padding-start: 8px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  --placeholder-color: white;\n  color: white;\n}\n.overlay ion-button {\n  --border-radius: 5px;\n  --border-color: white;\n  color: white;\n  font-weight: 600;\n  margin-top: 30px;\n}\n.overlay .bottom_lbl {\n  display: block;\n  text-align: center;\n  margin-top: 20px;\n  color: white;\n}\n.overlay .signup_span {\n  font-weight: 500;\n  color: white;\n}\n.main_content_div {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItZXg1L0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXItZXg1XFxyZWdpc3Rlci1leDUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci1leDUvcmVnaXN0ZXItZXg1LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDRVI7QURDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDRUo7QURBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDRVI7QURDSTtFQUNJLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQVI7QURFSTtFQUNJLGNBQUE7QUNBUjtBREdJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDRFI7QURHSTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FDRFI7QURJSTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FES0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNIUjtBREtJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDSFI7QURNQTtFQUNJLFdBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLWV4NS9yZWdpc3Rlci1leDUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbn1cbi5vdmVybGF5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgXG4gICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5mb3JtX2RpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMTMwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRfbGJse1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuc21hbGxfbGJse1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydCA6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG5cbiAgICAuYm90dG9tX2xibHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuc2lnbnVwX3NwYW57XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbn0iLCJpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ub3ZlcmxheSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm92ZXJsYXkgLmZvcm1fZGl2IHtcbiAgbWFyZ2luLXRvcDogMTMwcHg7XG59XG4ub3ZlcmxheSAuaGVhZF9sYmwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm92ZXJsYXkgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ub3ZlcmxheSAuc21hbGxfbGJsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm92ZXJsYXkgaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG4ub3ZlcmxheSBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLm92ZXJsYXkgLmJvdHRvbV9sYmwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ub3ZlcmxheSAuc2lnbnVwX3NwYW4ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/register/register-ex5/register-ex5.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/register/register-ex5/register-ex5.page.ts ***!
  \******************************************************************/
/*! exports provided: RegisterEx5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEx5Page", function() { return RegisterEx5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/


let RegisterEx5Page = class RegisterEx5Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.plt = localStorage.getItem('platform');
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
RegisterEx5Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
RegisterEx5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-ex5',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-ex5.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-ex5/register-ex5.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-ex5.page.scss */ "./src/app/pages/register/register-ex5/register-ex5.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], RegisterEx5Page);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-ex5-register-ex5-module-es2015.js.map