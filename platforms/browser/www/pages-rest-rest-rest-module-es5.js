function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rest-rest-rest-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest/rest.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest/rest.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRestRestRestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Rest API CRUD\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label class=\"ion-text-center\">Resources</ion-label>\n    </ion-item>\n    <ion-button (click)=\"restLogin()\" expand=\"block\" id=\"g1\">\n      Rest API Login\n    </ion-button>\n\n    <ion-button (click)=\"restSignup()\" expand=\"block\" id=\"g2\">\n      Rest API Signup\n    </ion-button>\n\n    <ion-button (click)=\"restList()\" expand=\"block\" id=\"g3\">\n      Rest API List\n    </ion-button>\n\n    <ion-button (click)=\"restimageUpload()\" expand=\"block\" id=\"g4\">\n      Rest API Image Upload\n    </ion-button>\n\n\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/rest/rest/rest-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/rest/rest/rest-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: RestPageRoutingModule */

  /***/
  function srcAppPagesRestRestRestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestPageRoutingModule", function () {
      return RestPageRoutingModule;
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


    var _rest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rest.page */
    "./src/app/pages/rest/rest/rest.page.ts");

    var routes = [{
      path: '',
      component: _rest_page__WEBPACK_IMPORTED_MODULE_3__["RestPage"]
    }];

    var RestPageRoutingModule = function RestPageRoutingModule() {
      _classCallCheck(this, RestPageRoutingModule);
    };

    RestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RestPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/rest/rest/rest.module.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/rest/rest/rest.module.ts ***!
    \************************************************/

  /*! exports provided: RestPageModule */

  /***/
  function srcAppPagesRestRestRestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestPageModule", function () {
      return RestPageModule;
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


    var _rest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rest-routing.module */
    "./src/app/pages/rest/rest/rest-routing.module.ts");
    /* harmony import */


    var _rest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rest.page */
    "./src/app/pages/rest/rest/rest.page.ts");

    var RestPageModule = function RestPageModule() {
      _classCallCheck(this, RestPageModule);
    };

    RestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rest_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestPageRoutingModule"]],
      declarations: [_rest_page__WEBPACK_IMPORTED_MODULE_6__["RestPage"]]
    })], RestPageModule);
    /***/
  },

  /***/
  "./src/app/pages/rest/rest/rest.page.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/rest/rest/rest.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRestRestRestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3QvcmVzdC9yZXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/rest/rest/rest.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/rest/rest/rest.page.ts ***!
    \**********************************************/

  /*! exports provided: RestPage */

  /***/
  function srcAppPagesRestRestRestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestPage", function () {
      return RestPage;
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
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var RestPage = /*#__PURE__*/function () {
      function RestPage(router) {
        _classCallCheck(this, RestPage);

        this.router = router;
      }

      _createClass(RestPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "restLogin",
        value: function restLogin() {
          this.router.navigate(['rest-login']);
        }
      }, {
        key: "restSignup",
        value: function restSignup() {
          this.router.navigate(['rest-register']);
        }
      }, {
        key: "restList",
        value: function restList() {
          this.router.navigate(['rest-home']);
        }
      }, {
        key: "restimageUpload",
        value: function restimageUpload() {
          this.router.navigate(['rest-image-list']);
        }
      }]);

      return RestPage;
    }();

    RestPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rest',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rest.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest/rest.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rest.page.scss */
      "./src/app/pages/rest/rest/rest.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], RestPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-rest-rest-rest-module-es5.js.map