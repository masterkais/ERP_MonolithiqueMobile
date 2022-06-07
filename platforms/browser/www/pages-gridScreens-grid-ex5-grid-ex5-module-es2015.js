(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gridScreens-grid-ex5-grid-ex5-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex5/grid-ex5.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex5/grid-ex5.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Grid Example 5</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of dummyData\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\">\n            <ion-icon name=\"heart-outline\"></ion-icon>\n          </div>\n          <ion-label>{{item.name}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex5/grid-ex5-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex5/grid-ex5-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: GridEx5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridEx5PageRoutingModule", function() { return GridEx5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _grid_ex5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-ex5.page */ "./src/app/pages/gridScreens/grid-ex5/grid-ex5.page.ts");




const routes = [
    {
        path: '',
        component: _grid_ex5_page__WEBPACK_IMPORTED_MODULE_3__["GridEx5Page"]
    }
];
let GridEx5PageRoutingModule = class GridEx5PageRoutingModule {
};
GridEx5PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GridEx5PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex5/grid-ex5.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex5/grid-ex5.module.ts ***!
  \***************************************************************/
/*! exports provided: GridEx5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridEx5PageModule", function() { return GridEx5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _grid_ex5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-ex5-routing.module */ "./src/app/pages/gridScreens/grid-ex5/grid-ex5-routing.module.ts");
/* harmony import */ var _grid_ex5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-ex5.page */ "./src/app/pages/gridScreens/grid-ex5/grid-ex5.page.ts");







let GridEx5PageModule = class GridEx5PageModule {
};
GridEx5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grid_ex5_routing_module__WEBPACK_IMPORTED_MODULE_5__["GridEx5PageRoutingModule"]
        ],
        declarations: [_grid_ex5_page__WEBPACK_IMPORTED_MODULE_6__["GridEx5Page"]]
    })
], GridEx5PageModule);



/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex5/grid-ex5.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex5/grid-ex5.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div .back_image {\n  height: 150px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n}\n.main_content_div .back_image ion-icon {\n  font-size: 20px;\n  color: white;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div ion-label {\n  display: block;\n  text-align: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 10px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JpZFNjcmVlbnMvZ3JpZC1leDUvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXGdyaWRTY3JlZW5zXFxncmlkLWV4NVxcZ3JpZC1leDUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ncmlkU2NyZWVucy9ncmlkLWV4NS9ncmlkLWV4NS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDQ1o7QURFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncmlkU2NyZWVucy9ncmlkLWV4NS9ncmlkLWV4NS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex5/grid-ex5.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex5/grid-ex5.page.ts ***!
  \*************************************************************/
/*! exports provided: GridEx5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridEx5Page", function() { return GridEx5Page; });
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


let GridEx5Page = class GridEx5Page {
    constructor(grid) {
        this.grid = grid;
        this.dummyData = [];
        this.dummyData = this.grid.data;
    }
    ngOnInit() {
    }
};
GridEx5Page.ctorParameters = () => [
    { type: src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"] }
];
GridEx5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid-ex5',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid-ex5.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex5/grid-ex5.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid-ex5.page.scss */ "./src/app/pages/gridScreens/grid-ex5/grid-ex5.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"]])
], GridEx5Page);



/***/ })

}]);
//# sourceMappingURL=pages-gridScreens-grid-ex5-grid-ex5-module-es2015.js.map