function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gridScreens-grid-ex2-grid-ex2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex2/grid-ex2.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex2/grid-ex2.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGridScreensGridEx2GridEx2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Grid Example 2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col class=\"ion-no-padding\" size=\"6\" *ngFor=\"let item of dummyData\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\">\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-ex2/grid-ex2-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-ex2/grid-ex2-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: GridEx2PageRoutingModule */

  /***/
  function srcAppPagesGridScreensGridEx2GridEx2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridEx2PageRoutingModule", function () {
      return GridEx2PageRoutingModule;
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


    var _grid_ex2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./grid-ex2.page */
    "./src/app/pages/gridScreens/grid-ex2/grid-ex2.page.ts");

    var routes = [{
      path: '',
      component: _grid_ex2_page__WEBPACK_IMPORTED_MODULE_3__["GridEx2Page"]
    }];

    var GridEx2PageRoutingModule = function GridEx2PageRoutingModule() {
      _classCallCheck(this, GridEx2PageRoutingModule);
    };

    GridEx2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GridEx2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-ex2/grid-ex2.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-ex2/grid-ex2.module.ts ***!
    \***************************************************************/

  /*! exports provided: GridEx2PageModule */

  /***/
  function srcAppPagesGridScreensGridEx2GridEx2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridEx2PageModule", function () {
      return GridEx2PageModule;
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


    var _grid_ex2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./grid-ex2-routing.module */
    "./src/app/pages/gridScreens/grid-ex2/grid-ex2-routing.module.ts");
    /* harmony import */


    var _grid_ex2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./grid-ex2.page */
    "./src/app/pages/gridScreens/grid-ex2/grid-ex2.page.ts");

    var GridEx2PageModule = function GridEx2PageModule() {
      _classCallCheck(this, GridEx2PageModule);
    };

    GridEx2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _grid_ex2_routing_module__WEBPACK_IMPORTED_MODULE_5__["GridEx2PageRoutingModule"]],
      declarations: [_grid_ex2_page__WEBPACK_IMPORTED_MODULE_6__["GridEx2Page"]]
    })], GridEx2PageModule);
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-ex2/grid-ex2.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-ex2/grid-ex2.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGridScreensGridEx2GridEx2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div .back_image {\n  height: 150px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JpZFNjcmVlbnMvZ3JpZC1leDIvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXGdyaWRTY3JlZW5zXFxncmlkLWV4MlxcZ3JpZC1leDIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ncmlkU2NyZWVucy9ncmlkLWV4Mi9ncmlkLWV4Mi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JpZFNjcmVlbnMvZ3JpZC1leDIvZ3JpZC1leDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxufSIsIi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-ex2/grid-ex2.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-ex2/grid-ex2.page.ts ***!
    \*************************************************************/

  /*! exports provided: GridEx2Page */

  /***/
  function srcAppPagesGridScreensGridEx2GridEx2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridEx2Page", function () {
      return GridEx2Page;
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


    var src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/grid/grid-service.service */
    "./src/app/services/grid/grid-service.service.ts");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var GridEx2Page = /*#__PURE__*/function () {
      function GridEx2Page(grid) {
        _classCallCheck(this, GridEx2Page);

        this.grid = grid;
        this.dummyData = [];
        this.dummyData = this.grid.data;
      }

      _createClass(GridEx2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GridEx2Page;
    }();

    GridEx2Page.ctorParameters = function () {
      return [{
        type: src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"]
      }];
    };

    GridEx2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grid-ex2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./grid-ex2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex2/grid-ex2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./grid-ex2.page.scss */
      "./src/app/pages/gridScreens/grid-ex2/grid-ex2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"]])], GridEx2Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-gridScreens-grid-ex2-grid-ex2-module-es5.js.map