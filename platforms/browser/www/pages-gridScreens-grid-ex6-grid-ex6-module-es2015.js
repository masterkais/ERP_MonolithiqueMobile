(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gridScreens-grid-ex6-grid-ex6-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex6/grid-ex6.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex6/grid-ex6.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Grid Example 6</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"5.9\" *ngFor=\"let item of dummyData\" (click)=\"onClick(item.url)\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\"></div>\n          <ion-label>{{item.name}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex6/grid-ex6-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex6/grid-ex6-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: GridEx6PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridEx6PageRoutingModule", function() { return GridEx6PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _grid_ex6_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-ex6.page */ "./src/app/pages/gridScreens/grid-ex6/grid-ex6.page.ts");




const routes = [
    {
        path: '',
        component: _grid_ex6_page__WEBPACK_IMPORTED_MODULE_3__["GridEx6Page"]
    }
];
let GridEx6PageRoutingModule = class GridEx6PageRoutingModule {
};
GridEx6PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GridEx6PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex6/grid-ex6.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex6/grid-ex6.module.ts ***!
  \***************************************************************/
/*! exports provided: GridEx6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridEx6PageModule", function() { return GridEx6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _grid_ex6_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-ex6-routing.module */ "./src/app/pages/gridScreens/grid-ex6/grid-ex6-routing.module.ts");
/* harmony import */ var _grid_ex6_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-ex6.page */ "./src/app/pages/gridScreens/grid-ex6/grid-ex6.page.ts");







let GridEx6PageModule = class GridEx6PageModule {
};
GridEx6PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grid_ex6_routing_module__WEBPACK_IMPORTED_MODULE_5__["GridEx6PageRoutingModule"]
        ],
        declarations: [_grid_ex6_page__WEBPACK_IMPORTED_MODULE_6__["GridEx6Page"]]
    })
], GridEx6PageModule);



/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex6/grid-ex6.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex6/grid-ex6.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-row {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div ion-col {\n  border: 1px solid lightgray;\n  padding: 10px;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  position: relative;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);\n}\n.main_content_div .back_image {\n  height: 150px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.main_content_div ion-label {\n  display: block;\n  text-align: center;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JpZFNjcmVlbnMvZ3JpZC1leDYvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXGdyaWRTY3JlZW5zXFxncmlkLWV4NlxcZ3JpZC1leDYucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ncmlkU2NyZWVucy9ncmlkLWV4Ni9ncmlkLWV4Ni5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0NSO0FERUk7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQ0FSO0FER0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0RSO0FESUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JpZFNjcmVlbnMvZ3JpZC1leDYvZ3JpZC1leDYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIGlvbi1yb3d7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgaW9uLWNvbHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgfVxuXG4gICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVse1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tY29sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/gridScreens/grid-ex6/grid-ex6.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/gridScreens/grid-ex6/grid-ex6.page.ts ***!
  \*************************************************************/
/*! exports provided: GridEx6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridEx6Page", function() { return GridEx6Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/grid/grid-service.service */ "./src/app/services/grid/grid-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _grid_model_grid_model_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grid-model/grid-model.page */ "./src/app/pages/gridScreens/grid-model/grid-model.page.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/




let GridEx6Page = class GridEx6Page {
    constructor(grid, modalController) {
        this.grid = grid;
        this.modalController = modalController;
        this.dummyData = [];
        this.dummyData = this.grid.data;
    }
    ngOnInit() {
    }
    onClick(val) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _grid_model_grid_model_page__WEBPACK_IMPORTED_MODULE_4__["GridModelPage"],
                componentProps: {
                    'url': val
                }
            });
            return yield modal.present();
        });
    }
};
GridEx6Page.ctorParameters = () => [
    { type: src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
GridEx6Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid-ex6',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid-ex6.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gridScreens/grid-ex6/grid-ex6.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid-ex6.page.scss */ "./src/app/pages/gridScreens/grid-ex6/grid-ex6.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], GridEx6Page);



/***/ })

}]);
//# sourceMappingURL=pages-gridScreens-grid-ex6-grid-ex6-module-es2015.js.map