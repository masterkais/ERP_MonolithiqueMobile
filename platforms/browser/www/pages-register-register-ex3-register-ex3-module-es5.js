function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-ex3-register-ex3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-ex3/register-ex3.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-ex3/register-ex3.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterEx3RegisterEx3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>login-ex3</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n\n<ion-content>\n  <div class=\"main_content_div\" [class.ios_pad]=\"plt == 'ios'\">\n    \n    <ion-icon name=\"arrow-back-outline\" (click)=\"goBack()\"></ion-icon>\n\n    <div class=\"green_curve\"></div>\n    <div class=\"black_curve\">\n      <img src=\"assets/imgs/car.png\" class=\"car\">\n    </div>\n    <div class=\"black_green_curve\"></div>\n\n    <div class=\"form_div\">\n      <ion-label class=\"head_lbl\">Sign Up</ion-label>\n\n      <ion-input type=\"text\" placeholder=\"First Name\"></ion-input>\n      <ion-input type=\"text\" placeholder=\"Last Name\"></ion-input>\n      <ion-input type=\"text\" placeholder=\"Email ID\"></ion-input>\n      <ion-input type=\"text\" placeholder=\"Password\"></ion-input>\n\n      <ion-button expand=\"block\" fill=\"outline\">\n        Sign Up\n      </ion-button>\n\n      <ion-label class=\"bottom_lbl\">Already have an Account ? <span class=\"signup_span\">Login</span></ion-label>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/register/register-ex3/register-ex3-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/register/register-ex3/register-ex3-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: RegisterEx3PageRoutingModule */

  /***/
  function srcAppPagesRegisterRegisterEx3RegisterEx3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterEx3PageRoutingModule", function () {
      return RegisterEx3PageRoutingModule;
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


    var _register_ex3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register-ex3.page */
    "./src/app/pages/register/register-ex3/register-ex3.page.ts");

    var routes = [{
      path: '',
      component: _register_ex3_page__WEBPACK_IMPORTED_MODULE_3__["RegisterEx3Page"]
    }];

    var RegisterEx3PageRoutingModule = function RegisterEx3PageRoutingModule() {
      _classCallCheck(this, RegisterEx3PageRoutingModule);
    };

    RegisterEx3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterEx3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register-ex3/register-ex3.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/register/register-ex3/register-ex3.module.ts ***!
    \********************************************************************/

  /*! exports provided: RegisterEx3PageModule */

  /***/
  function srcAppPagesRegisterRegisterEx3RegisterEx3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterEx3PageModule", function () {
      return RegisterEx3PageModule;
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


    var _register_ex3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-ex3-routing.module */
    "./src/app/pages/register/register-ex3/register-ex3-routing.module.ts");
    /* harmony import */


    var _register_ex3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register-ex3.page */
    "./src/app/pages/register/register-ex3/register-ex3.page.ts");

    var RegisterEx3PageModule = function RegisterEx3PageModule() {
      _classCallCheck(this, RegisterEx3PageModule);
    };

    RegisterEx3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_ex3_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterEx3PageRoutingModule"]],
      declarations: [_register_ex3_page__WEBPACK_IMPORTED_MODULE_6__["RegisterEx3Page"]]
    })], RegisterEx3PageModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register-ex3/register-ex3.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/register/register-ex3/register-ex3.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterEx3RegisterEx3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #253A4B;\n}\n\n.main_content_div {\n  width: 100%;\n  position: relative;\n}\n\n.main_content_div ion-icon {\n  font-size: 30px;\n  color: white;\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\n.main_content_div .green_curve {\n  background-color: #028364;\n  width: 130%;\n  height: 300px;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  position: absolute;\n}\n\n.main_content_div .black_curve {\n  background: #253A4B;\n  height: 170px;\n  width: 150%;\n  position: absolute;\n  z-index: 99;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .black_curve .car {\n  width: 100px;\n  left: 56%;\n  position: absolute;\n  margin-top: 30px;\n}\n\n.main_content_div .black_green_curve {\n  background: #1A4E52;\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 9;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 65%;\n  -webkit-transform: translate(-75%);\n          transform: translate(-75%);\n  position: absolute;\n}\n\n.main_content_div .upper_curve {\n  height: 230px;\n  width: 150%;\n  position: absolute;\n  z-index: 999;\n  border-radius: 50%;\n  box-shadow: 15px 15px 0 0 red;\n}\n\n.main_content_div .form_div {\n  padding-top: 300px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.main_content_div .form_div .head_lbl {\n  color: white;\n  font-size: 25px;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.main_content_div .form_div ion-input {\n  color: white;\n  border-bottom: 1px solid white;\n  margin-bottom: 20px;\n  color: white;\n}\n\n.main_content_div .form_div ion-button {\n  margin-top: 30px;\n  color: white;\n  --border-radius: 5px;\n  --background: #028364;\n  --border-color: #028364;\n}\n\n.main_content_div .form_div .bottom_lbl {\n  display: block;\n  text-align: center;\n  color: white;\n  margin-top: 20px;\n}\n\n.main_content_div .form_div .signup_span {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItZXgzL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXItZXgzXFxyZWdpc3Rlci1leDMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci1leDMvcmVnaXN0ZXItZXgzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VSOztBRENJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURDSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDWjs7QURFSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FERUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNBUjs7QURHSTtFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0ZSOztBRElRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNGWjs7QURLUTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0haOztBRE1RO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDSlo7O0FET1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMWjs7QURPUTtFQUNJLGdCQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci1leDMvcmVnaXN0ZXItZXgzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogIzI1M0E0Qjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC5ncmVlbl9jdXJ2ZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDI4MzY0O1xuICAgICAgICB3aWR0aDoxMzAlO1xuICAgICAgICBoZWlnaHQ6MzAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NTAlO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAuYmxhY2tfY3VydmV7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNTNBNEI7XG4gICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgIHdpZHRoOiAxNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNjUlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzUlKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgIC5jYXJ7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1NiU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5ibGFja19ncmVlbl9jdXJ2ZXtcbiAgICAgICAgYmFja2dyb3VuZDogIzFBNEU1MjtcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgICAgd2lkdGg6IDE1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDY1JTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1JSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLnVwcGVyX2N1cnZle1xuICAgICAgICBoZWlnaHQ6IDIzMHB4O1xuICAgICAgICB3aWR0aDogMTUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMTVweCAxNXB4IDAgMCByZWQ7XG4gICAgfVxuXG4gICAgLmZvcm1fZGl2e1xuICAgICAgICAvLyBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMzAwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgICAgICAuaGVhZF9sYmx7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taW5wdXR7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAyODM2NDtcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjMDI4MzY0O1xuXG4gICAgICAgIH1cbiAgICAgICAgLmJvdHRvbV9sYmx7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNpZ251cF9zcGFue1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzI1M0E0Qjtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZ3JlZW5fY3VydmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI4MzY0O1xuICB3aWR0aDogMTMwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ibGFja19jdXJ2ZSB7XG4gIGJhY2tncm91bmQ6ICMyNTNBNEI7XG4gIGhlaWdodDogMTcwcHg7XG4gIHdpZHRoOiAxNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzUlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJsYWNrX2N1cnZlIC5jYXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGxlZnQ6IDU2JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJsYWNrX2dyZWVuX2N1cnZlIHtcbiAgYmFja2dyb3VuZDogIzFBNEU1MjtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgd2lkdGg6IDE1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDY1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1JSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9jdXJ2ZSB7XG4gIGhlaWdodDogMjMwcHg7XG4gIHdpZHRoOiAxNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAxNXB4IDE1cHggMCAwIHJlZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiB7XG4gIHBhZGRpbmctdG9wOiAzMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5oZWFkX2xibCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24taW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJhY2tncm91bmQ6ICMwMjgzNjQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDI4MzY0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5ib3R0b21fbGJsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5zaWdudXBfc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/register/register-ex3/register-ex3.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/register/register-ex3/register-ex3.page.ts ***!
    \******************************************************************/

  /*! exports provided: RegisterEx3Page */

  /***/
  function srcAppPagesRegisterRegisterEx3RegisterEx3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterEx3Page", function () {
      return RegisterEx3Page;
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


    var RegisterEx3Page = /*#__PURE__*/function () {
      function RegisterEx3Page(navCtrl) {
        _classCallCheck(this, RegisterEx3Page);

        this.navCtrl = navCtrl;
        this.plt = localStorage.getItem('platform');
      }

      _createClass(RegisterEx3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return RegisterEx3Page;
    }();

    RegisterEx3Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    RegisterEx3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-ex3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-ex3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register-ex3/register-ex3.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-ex3.page.scss */
      "./src/app/pages/register/register-ex3/register-ex3.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], RegisterEx3Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-ex3-register-ex3-module-es5.js.map