function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-logout-logout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLogoutLogoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>logout</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/logout/logout-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/logout/logout-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: LogoutPageRoutingModule */

  /***/
  function srcAppPagesLogoutLogoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function () {
      return LogoutPageRoutingModule;
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


    var _logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logout.page */
    "./src/app/pages/logout/logout.page.ts");

    var routes = [{
      path: '',
      component: _logout_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPage"]
    }];

    var LogoutPageRoutingModule = function LogoutPageRoutingModule() {
      _classCallCheck(this, LogoutPageRoutingModule);
    };

    LogoutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LogoutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/logout/logout.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/logout/logout.module.ts ***!
    \***********************************************/

  /*! exports provided: LogoutPageModule */

  /***/
  function srcAppPagesLogoutLogoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function () {
      return LogoutPageModule;
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


    var _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logout-routing.module */
    "./src/app/pages/logout/logout-routing.module.ts");
    /* harmony import */


    var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logout.page */
    "./src/app/pages/logout/logout.page.ts");

    var LogoutPageModule = function LogoutPageModule() {
      _classCallCheck(this, LogoutPageModule);
    };

    LogoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogoutPageRoutingModule"]],
      declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"]]
    })], LogoutPageModule);
    /***/
  },

  /***/
  "./src/app/pages/logout/logout.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/logout/logout.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLogoutLogoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ291dC9sb2dvdXQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/logout/logout.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/logout/logout.page.ts ***!
    \*********************************************/

  /*! exports provided: LogoutPage */

  /***/
  function srcAppPagesLogoutLogoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutPage", function () {
      return LogoutPage;
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

    var LogoutPage = /*#__PURE__*/function () {
      function LogoutPage(router) {
        _classCallCheck(this, LogoutPage);

        this.router = router;
      }

      _createClass(LogoutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.logout();
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('token');
          this.router.navigateByUrl("/login");
        }
      }]);

      return LogoutPage;
    }();

    LogoutPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LogoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.page.scss */
      "./src/app/pages/logout/logout.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LogoutPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-logout-logout-module-es5.js.map