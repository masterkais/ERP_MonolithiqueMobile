function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gridScreens-grid-ex4-grid-ex4-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex4/grid-ex4.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex4/grid-ex4.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGridScreensGridEx4GridEx4PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Grid Example 4</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of dummyData\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\"></div>\n          <ion-label>{{item.name}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-ex4/grid-ex4-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-ex4/grid-ex4-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: GridEx4PageRoutingModule */

  /***/
  function srcAppPagesGridScreensGridEx4GridEx4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridEx4PageRoutingModule", function () {
      return GridEx4PageRoutingModule;
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


    var _grid_ex4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./grid-ex4.page */
    "./src/app/pages/gridScreens/grid-ex4/grid-ex4.page.ts");

    var routes = [{
      path: '',
      component: _grid_ex4_page__WEBPACK_IMPORTED_MODULE_3__["GridEx4Page"]
    }];

    var GridEx4PageRoutingModule = function GridEx4PageRoutingModule() {
      _classCallCheck(this, GridEx4PageRoutingModule);
    };

    GridEx4PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GridEx4PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-ex4/grid-ex4.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-ex4/grid-ex4.module.ts ***!
    \***************************************************************/

  /*! exports provided: GridEx4PageModule */

  /***/
  function srcAppPagesGridScreensGridEx4GridEx4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridEx4PageModule", function () {
      return GridEx4PageModule;
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


    var _grid_ex4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./grid-ex4-routing.module */
    "./src/app/pages/gridScreens/grid-ex4/grid-ex4-routing.module.ts");
    /* harmony import */


    var _grid_ex4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./grid-ex4.page */
    "./src/app/pages/gridScreens/grid-ex4/grid-ex4.page.ts");

    var GridEx4PageModule = function GridEx4PageModule() {
      _classCallCheck(this, GridEx4PageModule);
    };

    GridEx4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _grid_ex4_routing_module__WEBPACK_IMPORTED_MODULE_5__["GridEx4PageRoutingModule"]],
      declarations: [_grid_ex4_page__WEBPACK_IMPORTED_MODULE_6__["GridEx4Page"]]
    })], GridEx4PageModule);
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-ex4/grid-ex4.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-ex4/grid-ex4.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGridScreensGridEx4GridEx4PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n}\n.main_content_div .back_image {\n  height: 150px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.main_content_div ion-label {\n  display: block;\n  text-align: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 10px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JpZFNjcmVlbnMvZ3JpZC1leDQvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXGdyaWRTY3JlZW5zXFxncmlkLWV4NFxcZ3JpZC1leDQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ncmlkU2NyZWVucy9ncmlkLWV4NC9ncmlkLWV4NC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDQ1I7QURDSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncmlkU2NyZWVucy9ncmlkLWV4NC9ncmlkLWV4NC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/gridScreens/grid-ex4/grid-ex4.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/gridScreens/grid-ex4/grid-ex4.page.ts ***!
    \*************************************************************/

  /*! exports provided: GridEx4Page */

  /***/
  function srcAppPagesGridScreensGridEx4GridEx4PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridEx4Page", function () {
      return GridEx4Page;
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


    var GridEx4Page = /*#__PURE__*/function () {
      function GridEx4Page(grid) {
        _classCallCheck(this, GridEx4Page);

        this.grid = grid;
        this.dummyData = [];
        this.dummyData = this.grid.data;
      }

      _createClass(GridEx4Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GridEx4Page;
    }();

    GridEx4Page.ctorParameters = function () {
      return [{
        type: src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"]
      }];
    };

    GridEx4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grid-ex4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./grid-ex4.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex4/grid-ex4.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./grid-ex4.page.scss */
      "./src/app/pages/gridScreens/grid-ex4/grid-ex4.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"]])], GridEx4Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-gridScreens-grid-ex4-grid-ex4-module-es5.js.map