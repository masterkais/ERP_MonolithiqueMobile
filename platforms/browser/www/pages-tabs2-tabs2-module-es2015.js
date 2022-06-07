(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs2-tabs2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs2/tabs2.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs2/tabs2.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs appSwipetab (ionTabsDidChange)=\"ionTabsDidChange($event)\" (tabChange)=\"onTabChange($event)\" #myTabs>\n  <ion-tab-bar color=\"secondary\" slot=\"bottom\">\n      <ion-tab-button tab=\"grid-ex1\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label>Account</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"grid-ex2\">\n          <ion-icon name=\"call\"></ion-icon>\n          <ion-label>Contact</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"grid-ex3\">\n          <ion-icon name=\"settings\"></ion-icon>\n          <ion-label>Settings</ion-label>\n      </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/tabs2/tabs2-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs2/tabs2-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Tabs2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs2PageRoutingModule", function() { return Tabs2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs2.page */ "./src/app/pages/tabs2/tabs2.page.ts");




const routes = [
    {
        path: '',
        component: _tabs2_page__WEBPACK_IMPORTED_MODULE_3__["Tabs2Page"]
    },
    {
        path: '',
        component: _tabs2_page__WEBPACK_IMPORTED_MODULE_3__["Tabs2Page"],
        children: [
            {
                path: 'grid-ex1',
                loadChildren: '../gridScreens/grid-ex1/grid-ex1.module#GridEx1PageModule'
            },
            {
                path: 'grid-ex2',
                loadChildren: '../gridScreens/grid-ex2/grid-ex2.module#GridEx2PageModule'
            },
            {
                path: 'grid-ex3',
                loadChildren: '../gridScreens/grid-ex3/grid-ex3.module#GridEx3PageModule'
            },
        ]
    }
];
let Tabs2PageRoutingModule = class Tabs2PageRoutingModule {
};
Tabs2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tabs2PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs2/tabs2.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/tabs2/tabs2.module.ts ***!
  \*********************************************/
/*! exports provided: Tabs2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs2PageModule", function() { return Tabs2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs2-routing.module */ "./src/app/pages/tabs2/tabs2-routing.module.ts");
/* harmony import */ var _tabs2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs2.page */ "./src/app/pages/tabs2/tabs2.page.ts");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/directives.module */ "./src/app/directives/directives.module.ts");








let Tabs2PageModule = class Tabs2PageModule {
};
Tabs2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tabs2PageRoutingModule"],
            src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"]
        ],
        declarations: [_tabs2_page__WEBPACK_IMPORTED_MODULE_6__["Tabs2Page"]]
    })
], Tabs2PageModule);



/***/ }),

/***/ "./src/app/pages/tabs2/tabs2.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/tabs2/tabs2.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiczIvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXHRhYnMyXFx0YWJzMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMyL3RhYnMyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMyL3RhYnMyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn0iLCJpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/tabs2/tabs2.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs2/tabs2.page.ts ***!
  \*******************************************/
/*! exports provided: Tabs2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs2Page", function() { return Tabs2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_directives_swipe_tab_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directives/swipe-tab.directive */ "./src/app/directives/swipe-tab.directive.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/



let Tabs2Page = class Tabs2Page {
    constructor() { }
    ngOnInit() {
    }
    ionTabsDidChange($event) {
        // console.log('[TabsPage] ionTabsDidChange, $event: ', $event);
        // console.log("=====", this.swipeTabDirective);
        // console.log("=====", this.swipeTabDirective);
        this.swipeTabDirective.onTabInitialized($event.tab);
    }
    onTabChange($event) {
        // console.log('[TabsPage] onTabChange, $event: ', $event);
        this.tabRef.select($event);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_directives_swipe_tab_directive__WEBPACK_IMPORTED_MODULE_2__["SwipeTabDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_directives_swipe_tab_directive__WEBPACK_IMPORTED_MODULE_2__["SwipeTabDirective"])
], Tabs2Page.prototype, "swipeTabDirective", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTabs', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabs"])
], Tabs2Page.prototype, "tabRef", void 0);
Tabs2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs2/tabs2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs2.page.scss */ "./src/app/pages/tabs2/tabs2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tabs2Page);



/***/ })

}]);
//# sourceMappingURL=pages-tabs2-tabs2-module-es2015.js.map