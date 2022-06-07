function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parallax-parallax5-parallax5-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax5/parallax5.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax5/parallax5.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesParallaxParallax5Parallax5PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<hidenav-stretchheader header-height=\"50\" opacity-factor=\"7\" opacity-color=\"black\" init-expanded=\"false\">\n  <div #static>\n    <ion-toolbar color=\"white\" style=\"font-size: 46px\">\n      <ion-icon color=\"light\" name=\"arrow-back-outline\" style=\"font-size: 30px;margin-left: 16px;\" (click)=\"goBack()\"></ion-icon>\n    </ion-toolbar>\n\n  </div>\n  <div #static #title style=\"width: 100%;\" (click)=\"expand()\">\n    <label style=\"left: 60px; top: 20px; position: relative; color: white; font-size: 20px; font-weight: bold;\">Moving\n      Title</label>\n  </div>\n  <div #shrinkexpand style=\"background: white; color: gold; height: 250px\" (click)=\"expand()\">\n    <img src=\"assets/avatars/1.jpg\" width=\"100%\" alt=\"\">\n  </div>\n</hidenav-stretchheader>\n\n<ion-content hidenav-sh-content>\n  <ion-card>\n    <img src=\"assets/avatars/4.jpg\">\n    <ion-card-header class=\"hydrated\">\n      <ion-card-subtitle role=\"heading\" aria-level=\"3\" class=\"hydrated\">Destination</ion-card-subtitle>\n      <ion-card-title role=\"heading\" aria-level=\"2\" class=\"hydrated\">Madison, WI</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"card-content card-content-ios hydrated\">\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin\n      Territory in 1836.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <img src=\"assets/avatars/5.jpg\">\n    <ion-card-header class=\"hydrated\">\n      <ion-card-subtitle role=\"heading\" aria-level=\"3\" class=\"hydrated\">Destination</ion-card-subtitle>\n      <ion-card-title role=\"heading\" aria-level=\"2\" class=\"hydrated\">Madison, WI</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"card-content card-content-ios hydrated\">\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin\n      Territory in 1836.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax5/parallax5-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/parallax/parallax5/parallax5-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: Parallax5PageRoutingModule */

  /***/
  function srcAppPagesParallaxParallax5Parallax5RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Parallax5PageRoutingModule", function () {
      return Parallax5PageRoutingModule;
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


    var _parallax5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./parallax5.page */
    "./src/app/pages/parallax/parallax5/parallax5.page.ts");

    var routes = [{
      path: '',
      component: _parallax5_page__WEBPACK_IMPORTED_MODULE_3__["Parallax5Page"]
    }];

    var Parallax5PageRoutingModule = function Parallax5PageRoutingModule() {
      _classCallCheck(this, Parallax5PageRoutingModule);
    };

    Parallax5PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Parallax5PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax5/parallax5.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/parallax/parallax5/parallax5.module.ts ***!
    \**************************************************************/

  /*! exports provided: Parallax5PageModule */

  /***/
  function srcAppPagesParallaxParallax5Parallax5ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Parallax5PageModule", function () {
      return Parallax5PageModule;
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


    var _parallax5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./parallax5-routing.module */
    "./src/app/pages/parallax/parallax5/parallax5-routing.module.ts");
    /* harmony import */


    var _parallax5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./parallax5.page */
    "./src/app/pages/parallax/parallax5/parallax5.page.ts");
    /* harmony import */


    var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared.module */
    "./src/app/shared.module.ts");

    var Parallax5PageModule = function Parallax5PageModule() {
      _classCallCheck(this, Parallax5PageModule);
    };

    Parallax5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _parallax5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Parallax5PageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_parallax5_page__WEBPACK_IMPORTED_MODULE_6__["Parallax5Page"]]
    })], Parallax5PageModule);
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax5/parallax5.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/parallax/parallax5/parallax5.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesParallaxParallax5Parallax5PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhcmFsbGF4L3BhcmFsbGF4NS9wYXJhbGxheDUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax5/parallax5.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/parallax/parallax5/parallax5.page.ts ***!
    \************************************************************/

  /*! exports provided: Parallax5Page */

  /***/
  function srcAppPagesParallaxParallax5Parallax5PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Parallax5Page", function () {
      return Parallax5Page;
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
    /* harmony import */


    var src_app_directives_hidenav_stretchheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/directives/hidenav-stretchheader.component */
    "./src/app/directives/hidenav-stretchheader.component.ts");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var Parallax5Page = /*#__PURE__*/function () {
      function Parallax5Page(navCtrl) {
        _classCallCheck(this, Parallax5Page);

        this.navCtrl = navCtrl;
      }

      _createClass(Parallax5Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            console.log(_this.hidenav);

            _this.hidenav.scroll.subscribe(function (res) {
              _this.title.nativeElement.style.transform = 'translate3d(0, ' + (res - 50) + 'px, 0)';
            });
          }, 2000);
        }
      }, {
        key: "expand",
        value: function expand() {
          this.hidenav.toggle(300);
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return Parallax5Page;
    }();

    Parallax5Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], Parallax5Page.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Parallax5Page.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_directives_hidenav_stretchheader_component__WEBPACK_IMPORTED_MODULE_3__["HidenavStretchheaderComponent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_directives_hidenav_stretchheader_component__WEBPACK_IMPORTED_MODULE_3__["HidenavStretchheaderComponent"])], Parallax5Page.prototype, "hidenav", void 0);
    Parallax5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parallax5',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./parallax5.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax5/parallax5.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./parallax5.page.scss */
      "./src/app/pages/parallax/parallax5/parallax5.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], Parallax5Page);
    /***/
  },

  /***/
  "./src/app/shared.module.ts":
  /*!**********************************!*\
    !*** ./src/app/shared.module.ts ***!
    \**********************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _directives_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./directives/directives.module */
    "./src/app/directives/directives.module.ts");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__["DirectivesModule"]],
      exports: [_directives_directives_module__WEBPACK_IMPORTED_MODULE_2__["DirectivesModule"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-parallax-parallax5-parallax5-module-es5.js.map