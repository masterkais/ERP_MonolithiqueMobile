(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gridScreens-grid-ex3-grid-ex3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex3/grid-ex3.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex3/grid-ex3.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Grid Example 3</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of dummyData\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\">\n            <div class=\"bottom_div\">{{item.name}}</div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex3/grid-ex3-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex3/grid-ex3-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: GridEx3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridEx3PageRoutingModule", function() { return GridEx3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _grid_ex3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-ex3.page */ "./src/app/pages/gridScreens/grid-ex3/grid-ex3.page.ts");




const routes = [
    {
        path: '',
        component: _grid_ex3_page__WEBPACK_IMPORTED_MODULE_3__["GridEx3Page"]
    }
];
let GridEx3PageRoutingModule = class GridEx3PageRoutingModule {
};
GridEx3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GridEx3PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex3/grid-ex3.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex3/grid-ex3.module.ts ***!
  \***************************************************************/
/*! exports provided: GridEx3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridEx3PageModule", function() { return GridEx3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _grid_ex3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-ex3-routing.module */ "./src/app/pages/gridScreens/grid-ex3/grid-ex3-routing.module.ts");
/* harmony import */ var _grid_ex3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-ex3.page */ "./src/app/pages/gridScreens/grid-ex3/grid-ex3.page.ts");







let GridEx3PageModule = class GridEx3PageModule {
};
GridEx3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grid_ex3_routing_module__WEBPACK_IMPORTED_MODULE_5__["GridEx3PageRoutingModule"]
        ],
        declarations: [_grid_ex3_page__WEBPACK_IMPORTED_MODULE_6__["GridEx3Page"]]
    })
], GridEx3PageModule);



/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex3/grid-ex3.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex3/grid-ex3.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div .back_image {\n  height: 150px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n.main_content_div .back_image .bottom_div {\n  height: 50px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  color: white;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JpZFNjcmVlbnMvZ3JpZC1leDMvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXGdyaWRTY3JlZW5zXFxncmlkLWV4M1xcZ3JpZC1leDMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ncmlkU2NyZWVucy9ncmlkLWV4My9ncmlkLWV4My5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyaWRTY3JlZW5zL2dyaWQtZXgzL2dyaWQtZXgzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAuYm90dG9tX2RpdntcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIC5ib3R0b21fZGl2IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex3/grid-ex3.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex3/grid-ex3.page.ts ***!
  \*************************************************************/
/*! exports provided: GridEx3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridEx3Page", function() { return GridEx3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/grid/grid-service.service */ "./src/app/services/grid/grid-service.service.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/


let GridEx3Page = class GridEx3Page {
    constructor(grid) {
        this.grid = grid;
        this.dummyData = [];
        this.dummyData = this.grid.data;
    }
    ngOnInit() {
    }
};
GridEx3Page.ctorParameters = () => [
    { type: src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"] }
];
GridEx3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid-ex3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid-ex3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex3/grid-ex3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid-ex3.page.scss */ "./src/app/pages/gridScreens/grid-ex3/grid-ex3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"]])
], GridEx3Page);



/***/ })

}]);
//# sourceMappingURL=pages-gridScreens-grid-ex3-grid-ex3-module-es2015.js.map