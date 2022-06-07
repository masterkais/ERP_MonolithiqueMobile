function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-firebase-firebase-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/firebase/firebase.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/firebase/firebase.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFirebaseFirebaseFirebasePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Firebase CRUD\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label class=\"ion-text-center\">Resources</ion-label>\n    </ion-item>\n    <ion-button (click)=\"firebaseLogin()\" expand=\"block\" id=\"g1\">\n      Firebase Login\n    </ion-button>\n\n    <ion-button (click)=\"firebaseSignup()\" expand=\"block\" id=\"g2\">\n      Firebase Signup\n    </ion-button>\n\n    <ion-button (click)=\"firebaseList()\" expand=\"block\" id=\"g3\">\n      Firebase List\n    </ion-button>\n\n    <ion-button (click)=\"firebaseimageUpload()\" expand=\"block\" id=\"g4\">\n      Firebase Image Upload\n    </ion-button>\n\n\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/firebase/firebase/firebase-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/firebase/firebase/firebase-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: FirebasePageRoutingModule */

  /***/
  function srcAppPagesFirebaseFirebaseFirebaseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebasePageRoutingModule", function () {
      return FirebasePageRoutingModule;
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


    var _firebase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./firebase.page */
    "./src/app/pages/firebase/firebase/firebase.page.ts");

    var routes = [{
      path: '',
      component: _firebase_page__WEBPACK_IMPORTED_MODULE_3__["FirebasePage"]
    }];

    var FirebasePageRoutingModule = function FirebasePageRoutingModule() {
      _classCallCheck(this, FirebasePageRoutingModule);
    };

    FirebasePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FirebasePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/firebase/firebase/firebase.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/firebase/firebase/firebase.module.ts ***!
    \************************************************************/

  /*! exports provided: FirebasePageModule */

  /***/
  function srcAppPagesFirebaseFirebaseFirebaseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebasePageModule", function () {
      return FirebasePageModule;
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


    var _firebase_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./firebase-routing.module */
    "./src/app/pages/firebase/firebase/firebase-routing.module.ts");
    /* harmony import */


    var _firebase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./firebase.page */
    "./src/app/pages/firebase/firebase/firebase.page.ts");

    var FirebasePageModule = function FirebasePageModule() {
      _classCallCheck(this, FirebasePageModule);
    };

    FirebasePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _firebase_routing_module__WEBPACK_IMPORTED_MODULE_5__["FirebasePageRoutingModule"]],
      declarations: [_firebase_page__WEBPACK_IMPORTED_MODULE_6__["FirebasePage"]]
    })], FirebasePageModule);
    /***/
  },

  /***/
  "./src/app/pages/firebase/firebase/firebase.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/firebase/firebase/firebase.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFirebaseFirebaseFirebasePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcmViYXNlL2ZpcmViYXNlL2ZpcmViYXNlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/firebase/firebase/firebase.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/firebase/firebase/firebase.page.ts ***!
    \**********************************************************/

  /*! exports provided: FirebasePage */

  /***/
  function srcAppPagesFirebaseFirebaseFirebasePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebasePage", function () {
      return FirebasePage;
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


    var FirebasePage = /*#__PURE__*/function () {
      function FirebasePage(router) {
        _classCallCheck(this, FirebasePage);

        this.router = router;
      }

      _createClass(FirebasePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "firebaseLogin",
        value: function firebaseLogin() {
          this.router.navigate(['fireLogin']);
        }
      }, {
        key: "firebaseSignup",
        value: function firebaseSignup() {
          this.router.navigate(['fireRegister']);
        }
      }, {
        key: "firebaseList",
        value: function firebaseList() {
          this.router.navigate(['fireHome']);
        }
      }, {
        key: "firebaseimageUpload",
        value: function firebaseimageUpload() {
          this.router.navigate(['fire-image-list']);
        }
      }]);

      return FirebasePage;
    }();

    FirebasePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FirebasePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-firebase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./firebase.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/firebase/firebase.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./firebase.page.scss */
      "./src/app/pages/firebase/firebase/firebase.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], FirebasePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-firebase-firebase-firebase-module-es5.js.map