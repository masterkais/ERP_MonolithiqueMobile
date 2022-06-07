function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-translate-translate-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/translate/translate.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/translate/translate.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTranslateTranslatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{ 'PAGES.HOME.TITLE_PAGE' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>{{ 'PAGES.HOME.TITLE' | translate }}</h3>\n\n  <p>\n    {{ 'PAGES.HOME.CONTENT' | translate }}\n  </p>\n\n  <ion-button color=\"primary\" (click)=\"translateLang('es')\">{{ 'PAGES.HOME.BTN_ES' | translate }}</ion-button>\n  <ion-button color=\"secondary\" (click)=\"translateLang('en')\">{{ 'PAGES.HOME.BTN_EN' | translate }}</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/translate/translate-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/translate/translate-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: TranslatePageRoutingModule */

  /***/
  function srcAppPagesTranslateTranslateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatePageRoutingModule", function () {
      return TranslatePageRoutingModule;
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


    var _translate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./translate.page */
    "./src/app/pages/translate/translate.page.ts");

    var routes = [{
      path: '',
      component: _translate_page__WEBPACK_IMPORTED_MODULE_3__["TranslatePage"]
    }];

    var TranslatePageRoutingModule = function TranslatePageRoutingModule() {
      _classCallCheck(this, TranslatePageRoutingModule);
    };

    TranslatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TranslatePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/translate/translate.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/translate/translate.module.ts ***!
    \*****************************************************/

  /*! exports provided: TranslatePageModule */

  /***/
  function srcAppPagesTranslateTranslateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatePageModule", function () {
      return TranslatePageModule;
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


    var _translate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./translate-routing.module */
    "./src/app/pages/translate/translate-routing.module.ts");
    /* harmony import */


    var _translate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./translate.page */
    "./src/app/pages/translate/translate.page.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_app_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/app.module */
    "./src/app/app.module.ts");

    var TranslatePageModule = function TranslatePageModule() {
      _classCallCheck(this, TranslatePageModule);
    };

    TranslatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _translate_routing_module__WEBPACK_IMPORTED_MODULE_5__["TranslatePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
          useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_9__["customTranslateLoader"],
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
        }
      })],
      declarations: [_translate_page__WEBPACK_IMPORTED_MODULE_6__["TranslatePage"]]
    })], TranslatePageModule);
    /***/
  },

  /***/
  "./src/app/pages/translate/translate.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/translate/translate.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTranslateTranslatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW5zbGF0ZS90cmFuc2xhdGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/translate/translate.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/translate/translate.page.ts ***!
    \***************************************************/

  /*! exports provided: TranslatePage */

  /***/
  function srcAppPagesTranslateTranslatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatePage", function () {
      return TranslatePage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var TranslatePage = /*#__PURE__*/function () {
      function TranslatePage(_translate) {
        _classCallCheck(this, TranslatePage);

        this._translate = _translate;
      }

      _createClass(TranslatePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
        * Give params language
        * @param lang recibe idioma en formato de XX.
        */

      }, {
        key: "translateLang",
        value: function translateLang(lang) {
          this._translate.use(lang);
        }
      }]);

      return TranslatePage;
    }();

    TranslatePage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    TranslatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-translate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./translate.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/translate/translate.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./translate.page.scss */
      "./src/app/pages/translate/translate.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])], TranslatePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-translate-translate-module-es5.js.map