(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loginScreens-login-ex3-login-ex3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-ex3/login-ex3.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-ex3/login-ex3.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>login-ex3</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n\n<ion-content>\n  <div class=\"main_content_div\" [class.ios_pad]=\"plt == 'ios'\">\n\n    <ion-icon name=\"arrow-back-outline\" (click)=\"goBack()\"></ion-icon>\n\n    <div class=\"green_curve\"></div>\n    <div class=\"black_curve\">\n      <img src=\"assets/imgs/car.png\" class=\"car\">\n    </div>\n    <div class=\"black_green_curve\"></div>\n\n    <div class=\"form_div\">\n      <ion-label class=\"head_lbl\">Login</ion-label>\n\n      <ion-input type=\"text\" placeholder=\"Usernane\"></ion-input>\n      <ion-input type=\"text\" placeholder=\"Password\"></ion-input>\n\n      <ion-label class=\"forgot\">Forgot Password ?</ion-label>\n\n      <ion-button expand=\"block\" fill=\"outline\">\n        Login\n      </ion-button>\n\n      <ion-label class=\"bottom_lbl\">Don't have Account ? <span class=\"signup_span\">Sign Up</span></ion-label>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/loginScreens/login-ex3/login-ex3-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/loginScreens/login-ex3/login-ex3-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: LoginEx3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEx3PageRoutingModule", function() { return LoginEx3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_ex3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-ex3.page */ "./src/app/pages/loginScreens/login-ex3/login-ex3.page.ts");




const routes = [
    {
        path: '',
        component: _login_ex3_page__WEBPACK_IMPORTED_MODULE_3__["LoginEx3Page"]
    }
];
let LoginEx3PageRoutingModule = class LoginEx3PageRoutingModule {
};
LoginEx3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginEx3PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/loginScreens/login-ex3/login-ex3.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/loginScreens/login-ex3/login-ex3.module.ts ***!
  \******************************************************************/
/*! exports provided: LoginEx3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEx3PageModule", function() { return LoginEx3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_ex3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-ex3-routing.module */ "./src/app/pages/loginScreens/login-ex3/login-ex3-routing.module.ts");
/* harmony import */ var _login_ex3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-ex3.page */ "./src/app/pages/loginScreens/login-ex3/login-ex3.page.ts");







let LoginEx3PageModule = class LoginEx3PageModule {
};
LoginEx3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_ex3_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginEx3PageRoutingModule"]
        ],
        declarations: [_login_ex3_page__WEBPACK_IMPORTED_MODULE_6__["LoginEx3Page"]]
    })
], LoginEx3PageModule);



/***/ }),

/***/ "./src/app/pages/loginScreens/login-ex3/login-ex3.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/loginScreens/login-ex3/login-ex3.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #253A4B;\n}\n\n.main_content_div {\n  width: 100%;\n  position: relative;\n}\n\n.main_content_div ion-icon {\n  font-size: 30px;\n  color: white;\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\n.main_content_div .green_curve {\n  background-color: #028364;\n  width: 130%;\n  height: 300px;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  position: absolute;\n}\n\n.main_content_div .black_curve {\n  background: #253A4B;\n  height: 170px;\n  width: 150%;\n  position: absolute;\n  z-index: 99;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .black_curve .car {\n  width: 100px;\n  left: 56%;\n  position: absolute;\n  margin-top: 30px;\n}\n\n.main_content_div .black_green_curve {\n  background: #1A4E52;\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 9;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .upper_curve {\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 999;\n  border-radius: 50%;\n  box-shadow: 15px 15px 0 0 red;\n}\n\n.main_content_div .form_div {\n  padding-top: 300px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.main_content_div .form_div .head_lbl {\n  color: white;\n  font-size: 25px;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.main_content_div .form_div ion-input {\n  color: white;\n  border-bottom: 1px solid white;\n  margin-bottom: 20px;\n  color: white;\n}\n\n.main_content_div .form_div ion-button {\n  margin-top: 30px;\n  color: white;\n  --border-radius: 5px;\n  --background: #028364;\n  --border-color: #028364;\n}\n\n.main_content_div .form_div .bottom_lbl {\n  display: block;\n  text-align: center;\n  color: white;\n  margin-top: 20px;\n}\n\n.main_content_div .form_div .forgot {\n  display: block;\n  color: white;\n  text-align: right;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.main_content_div .form_div .signup_span {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW5TY3JlZW5zL2xvZ2luLWV4My9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5TY3JlZW5zXFxsb2dpbi1leDNcXGxvZ2luLWV4My5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luU2NyZWVucy9sb2dpbi1leDMvbG9naW4tZXgzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VSOztBRENJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURDSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDWjs7QURFSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FERUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNBUjs7QURHSTtFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0ZSOztBRElRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNGWjs7QURLUTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0haOztBRE1RO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDSlo7O0FET1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMWjs7QURRUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTlo7O0FEUVE7RUFDSSxnQkFBQTtBQ05aIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW5TY3JlZW5zL2xvZ2luLWV4My9sb2dpbi1leDMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjUzQTRCO1xufVxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAuZ3JlZW5fY3VydmV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAyODM2NDtcbiAgICAgICAgd2lkdGg6MTMwJTtcbiAgICAgICAgaGVpZ2h0OjMwMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjUwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLmJsYWNrX2N1cnZle1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjUzQTRCO1xuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xuICAgICAgICB3aWR0aDogMTUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDY1JTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1JSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAuY2Fye1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgbGVmdDogNTYlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmxhY2tfZ3JlZW5fY3VydmV7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxQTRFNTI7XG4gICAgICAgIGhlaWdodDogMjMwcHg7XG4gICAgICAgIHdpZHRoOiAxNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA2NSU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03NSUpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIC51cHBlcl9jdXJ2ZXtcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgICAgd2lkdGg6IDE1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDE1cHggMTVweCAwIDAgcmVkO1xuICAgIH1cblxuICAgIC5mb3JtX2RpdntcbiAgICAgICAgLy8gcGFkZGluZzogMjBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgLmhlYWRfbGJse1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWlucHV0e1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMjgzNjQ7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogIzAyODM2NDtcblxuICAgICAgICB9XG4gICAgICAgIC5ib3R0b21fbGJse1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcmdvdHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2lnbnVwX3NwYW57XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjUzQTRCO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ncmVlbl9jdXJ2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjgzNjQ7XG4gIHdpZHRoOiAxMzAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJsYWNrX2N1cnZlIHtcbiAgYmFja2dyb3VuZDogIzI1M0E0QjtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgd2lkdGg6IDE1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03NSUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmxhY2tfY3VydmUgLmNhciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbGVmdDogNTYlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmxhY2tfZ3JlZW5fY3VydmUge1xuICBiYWNrZ3JvdW5kOiAjMUE0RTUyO1xuICBoZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzUlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2N1cnZlIHtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgd2lkdGg6IDE1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAwIDAgcmVkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IHtcbiAgcGFkZGluZy10b3A6IDMwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmhlYWRfbGJsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYmFja2dyb3VuZDogIzAyODM2NDtcbiAgLS1ib3JkZXItY29sb3I6ICMwMjgzNjQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmJvdHRvbV9sYmwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmZvcmdvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5zaWdudXBfc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/loginScreens/login-ex3/login-ex3.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/loginScreens/login-ex3/login-ex3.page.ts ***!
  \****************************************************************/
/*! exports provided: LoginEx3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEx3Page", function() { return LoginEx3Page; });
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


let LoginEx3Page = class LoginEx3Page {
    constructor(navCtrl, platform) {
        // if (this.platform.is('ios')) {
        //   this.plt = 'ios';
        // } else {
        //   this.plt = 'android';
        // }
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.plt = localStorage.getItem('platform');
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
LoginEx3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
LoginEx3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-ex3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-ex3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-ex3/login-ex3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-ex3.page.scss */ "./src/app/pages/loginScreens/login-ex3/login-ex3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], LoginEx3Page);



/***/ })

}]);
//# sourceMappingURL=pages-loginScreens-login-ex3-login-ex3-module-es2015.js.map