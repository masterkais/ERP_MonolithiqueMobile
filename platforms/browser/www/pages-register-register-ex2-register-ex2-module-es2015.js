(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-ex2-register-ex2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-ex2/register-ex2.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-ex2/register-ex2.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>login-ex2</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"main_content_div\" [class.ios_pad]=\"plt == 'ios'\">\n    <ion-icon name=\"arrow-back-outline\" (click)=\"goBack()\"></ion-icon>\n    <div class=\"upper_div\">\n      <img src=\"assets/imgs/car.png\">\n    </div>\n    <div class=\"lower_div\">\n\n      <ion-label class=\"head_lbl\">Sign Up</ion-label>\n\n      <ion-item class=\"ion-no-padding\">\n        <ion-label position=\"floating\" class=\"light_lbl\">First Name</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-no-padding\">\n        <ion-label position=\"floating\" class=\"light_lbl\">Last Name</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-no-padding\">\n        <ion-label position=\"floating\" class=\"light_lbl\">Email ID</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-no-padding\">\n        <ion-label position=\"floating\" class=\"light_lbl\">Password</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"block\" shape=\"round\">\n        Sign Up\n      </ion-button>\n\n      <ion-label class=\"bottom_lbl\">Already have an account ? <span class=\"signup_span\">Login</span></ion-label>\n\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/register/register-ex2/register-ex2-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/register/register-ex2/register-ex2-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterEx2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEx2PageRoutingModule", function() { return RegisterEx2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_ex2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-ex2.page */ "./src/app/pages/register/register-ex2/register-ex2.page.ts");




const routes = [
    {
        path: '',
        component: _register_ex2_page__WEBPACK_IMPORTED_MODULE_3__["RegisterEx2Page"]
    }
];
let RegisterEx2PageRoutingModule = class RegisterEx2PageRoutingModule {
};
RegisterEx2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterEx2PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register/register-ex2/register-ex2.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/register/register-ex2/register-ex2.module.ts ***!
  \********************************************************************/
/*! exports provided: RegisterEx2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEx2PageModule", function() { return RegisterEx2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_ex2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-ex2-routing.module */ "./src/app/pages/register/register-ex2/register-ex2-routing.module.ts");
/* harmony import */ var _register_ex2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-ex2.page */ "./src/app/pages/register/register-ex2/register-ex2.page.ts");







let RegisterEx2PageModule = class RegisterEx2PageModule {
};
RegisterEx2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_ex2_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterEx2PageRoutingModule"]
        ],
        declarations: [_register_ex2_page__WEBPACK_IMPORTED_MODULE_6__["RegisterEx2Page"]]
    })
], RegisterEx2PageModule);



/***/ }),

/***/ "./src/app/pages/register/register-ex2/register-ex2.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/register/register-ex2/register-ex2.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #FF8E80;\n}\n\n.main_content_div {\n  width: 100%;\n  height: 100vh;\n}\n\n.main_content_div ion-icon {\n  font-size: 30px;\n  color: white;\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\n.main_content_div .upper_div {\n  height: 30vh;\n  width: 100%;\n  position: relative;\n}\n\n.main_content_div .upper_div img {\n  width: 130px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.main_content_div .lower_div {\n  height: 70vh;\n  width: 100%;\n  background: white;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 20px;\n}\n\n.main_content_div .lower_div .head_lbl {\n  font-size: 25px;\n  font-weight: 600;\n}\n\n.main_content_div .lower_div .light_lbl {\n  color: lightgray;\n  font-size: 12px;\n}\n\n.main_content_div .lower_div ion-button {\n  margin-top: 30px;\n  --background: #FF8E80;\n}\n\n.main_content_div .lower_div .bottom_lbl {\n  margin-top: 30px;\n  color: gray;\n  display: block;\n  text-align: center;\n}\n\n.main_content_div .lower_div .signup_span {\n  color: black;\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItZXgyL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXItZXgyXFxyZWdpc3Rlci1leDIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci1leDIvcmVnaXN0ZXItZXgyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0VKOztBREFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQVE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNFWjs7QURDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQ0NSOztBRENRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ1o7O0FERVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNBWjs7QURFUTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUNBWjs7QURHUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0RaOztBRElRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItZXgyL3JlZ2lzdGVyLWV4Mi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjhFODA7XG59XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIFxuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnVwcGVyX2RpdntcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvd2VyX2RpdntcbiAgICAgICAgaGVpZ2h0OiA3MHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAubGlnaHRfbGJse1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0ZGOEU4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3R0b21fbGJse1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2lnbnVwX3NwYW57XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkY4RTgwO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IHtcbiAgaGVpZ2h0OiAzMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiBpbWcge1xuICB3aWR0aDogMTMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IHtcbiAgaGVpZ2h0OiA3MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuaGVhZF9sYmwge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5saWdodF9sYmwge1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICAtLWJhY2tncm91bmQ6ICNGRjhFODA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5ib3R0b21fbGJsIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6IGdyYXk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5zaWdudXBfc3BhbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/register/register-ex2/register-ex2.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/register/register-ex2/register-ex2.page.ts ***!
  \******************************************************************/
/*! exports provided: RegisterEx2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEx2Page", function() { return RegisterEx2Page; });
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


let RegisterEx2Page = class RegisterEx2Page {
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
RegisterEx2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
RegisterEx2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-ex2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-ex2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-ex2/register-ex2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-ex2.page.scss */ "./src/app/pages/register/register-ex2/register-ex2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], RegisterEx2Page);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-ex2-register-ex2-module-es2015.js.map