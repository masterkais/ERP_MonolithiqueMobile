function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loginScreens-login-ex1-login-ex1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-ex1/login-ex1.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-ex1/login-ex1.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginScreensLoginEx1LoginEx1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>login-ex1</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"main_content_div\" [class.ios_pad]=\"plt == 'ios'\">\n\n    <ion-icon name=\"arrow-back-outline\" (click)=\"goBack()\"></ion-icon>\n    \n    <ion-label class=\"main_head\">Login</ion-label>\n    \n    <div class=\"form_div\">\n\n      <div class=\"tri\"></div>\n\n      <ion-label>Username</ion-label>\n      <ion-input type=\"text\" placeholder=\"Username\"></ion-input>\n      <ion-label>Password</ion-label>\n      <ion-input type=\"text\" placeholder=\"Password\"></ion-input>\n      <ion-label class=\"forgot\">Forgot Password ?</ion-label>\n      <ion-button expand=\"block\">\n        Login\n      </ion-button>\n\n      <ion-label class=\"lbl\">Don't have an account ? <span class=\"signup_span\">Sign Up</span></ion-label>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/loginScreens/login-ex1/login-ex1-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/loginScreens/login-ex1/login-ex1-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: LoginEx1PageRoutingModule */

  /***/
  function srcAppPagesLoginScreensLoginEx1LoginEx1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginEx1PageRoutingModule", function () {
      return LoginEx1PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_ex1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-ex1.page */
    "./src/app/pages/loginScreens/login-ex1/login-ex1.page.ts");

    var routes = [{
      path: '',
      component: _login_ex1_page__WEBPACK_IMPORTED_MODULE_3__["LoginEx1Page"]
    }];

    var LoginEx1PageRoutingModule = function LoginEx1PageRoutingModule() {
      _classCallCheck(this, LoginEx1PageRoutingModule);
    };

    LoginEx1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginEx1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/loginScreens/login-ex1/login-ex1.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/loginScreens/login-ex1/login-ex1.module.ts ***!
    \******************************************************************/

  /*! exports provided: LoginEx1PageModule */

  /***/
  function srcAppPagesLoginScreensLoginEx1LoginEx1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginEx1PageModule", function () {
      return LoginEx1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_ex1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-ex1-routing.module */
    "./src/app/pages/loginScreens/login-ex1/login-ex1-routing.module.ts");
    /* harmony import */


    var _login_ex1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-ex1.page */
    "./src/app/pages/loginScreens/login-ex1/login-ex1.page.ts");

    var LoginEx1PageModule = function LoginEx1PageModule() {
      _classCallCheck(this, LoginEx1PageModule);
    };

    LoginEx1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_ex1_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginEx1PageRoutingModule"]],
      declarations: [_login_ex1_page__WEBPACK_IMPORTED_MODULE_6__["LoginEx1Page"]]
    })], LoginEx1PageModule);
    /***/
  },

  /***/
  "./src/app/pages/loginScreens/login-ex1/login-ex1.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/loginScreens/login-ex1/login-ex1.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginScreensLoginEx1LoginEx1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(#ff64c0, #FF8E80);\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n}\n\n.main_content_div ion-icon {\n  color: white;\n  font-size: 30px;\n}\n\n.main_content_div .main_head {\n  display: block;\n  text-align: center;\n  color: white;\n  font-weight: 600;\n  font-size: 30px;\n  margin-top: 50px;\n}\n\n.main_content_div .form_div {\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);\n  padding: 25px;\n  margin-top: 100px;\n  position: relative;\n}\n\n.main_content_div .form_div ion-label {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div .form_div .forgot {\n  display: block;\n  text-align: right;\n  color: #ff64c0;\n}\n\n.main_content_div .form_div ion-input {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  --padding-start: 8px ;\n}\n\n.main_content_div .form_div ion-button {\n  margin-top: 20px;\n  --background: black;\n}\n\n.main_content_div .form_div .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n\n.main_content_div .form_div .lbl {\n  margin-top: 20px;\n  color: gray;\n  display: block;\n  text-align: center;\n}\n\n.main_content_div .form_div .signup_span {\n  color: black;\n  font-weight: 600;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW5TY3JlZW5zL2xvZ2luLWV4MS9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5TY3JlZW5zXFxsb2dpbi1leDFcXGxvZ2luLWV4MS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luU2NyZWVucy9sb2dpbi1leDEvbG9naW4tZXgxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDUjs7QURFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURHUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0RaOztBRElRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZaOztBRElRO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNGWjs7QURLUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNIWjs7QURLUTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSFo7O0FES1E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNIWjs7QURLUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luU2NyZWVucy9sb2dpbi1leDEvbG9naW4tZXgxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjY0YzAsICNGRjhFODApO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuXG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblxuICAgIC5tYWluX2hlYWR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cblxuICAgIC5mb3JtX2RpdntcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTVweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9yZ290e1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmY2NGMwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweFxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIC50cmkge1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtMTVweDtcbiAgICAgICAgfVxuICAgICAgICAubGJse1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnNpZ251cF9zcGFue1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjY0YzAsICNGRjhFODApO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX2hlYWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZm9yZ290IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogI2ZmNjRjMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC50cmkge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5sYmwge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogZ3JheTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuc2lnbnVwX3NwYW4ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/loginScreens/login-ex1/login-ex1.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/loginScreens/login-ex1/login-ex1.page.ts ***!
    \****************************************************************/

  /*! exports provided: LoginEx1Page */

  /***/
  function srcAppPagesLoginScreensLoginEx1LoginEx1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginEx1Page", function () {
      return LoginEx1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var LoginEx1Page = /*#__PURE__*/function () {
      function LoginEx1Page(navCtrl, platform) {
        _classCallCheck(this, LoginEx1Page);

        // if (this.platform.is('ios')) {
        //   this.plt = 'ios';
        // } else {
        //   this.plt = 'android';
        // }
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.plt = localStorage.getItem('platform');
      }

      _createClass(LoginEx1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return LoginEx1Page;
    }();

    LoginEx1Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    LoginEx1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-ex1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-ex1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-ex1/login-ex1.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-ex1.page.scss */
      "./src/app/pages/loginScreens/login-ex1/login-ex1.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], LoginEx1Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-loginScreens-login-ex1-login-ex1-module-es5.js.map