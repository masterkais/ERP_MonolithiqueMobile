(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-screens-profile-home-profile-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-home/profile-home.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-home/profile-home.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Profile Screens</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <ion-button (click)=\"goToProfile_1()\" expand=\"block\" id=\"g1\">\n      Demo 1\n    </ion-button>\n\n    <ion-button (click)=\"goToProfile_2()\" expand=\"block\" id=\"g2\">\n      Demo 2\n    </ion-button>\n\n    <ion-button (click)=\"goToProfile_3()\" expand=\"block\" id=\"g3\">\n      Demo 3\n    </ion-button>\n\n    <ion-button (click)=\"goToProfile_4()\" expand=\"block\" id=\"g4\">\n      Demo 4\n    </ion-button>\n\n    <ion-button (click)=\"goToProfile_5()\" expand=\"block\" id=\"g5\">\n      Demo 5\n    </ion-button>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/profile-screens/profile-home/profile-home-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-home/profile-home-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ProfileHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHomePageRoutingModule", function() { return ProfileHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-home.page */ "./src/app/pages/profile-screens/profile-home/profile-home.page.ts");




const routes = [
    {
        path: '',
        component: _profile_home_page__WEBPACK_IMPORTED_MODULE_3__["ProfileHomePage"]
    }
];
let ProfileHomePageRoutingModule = class ProfileHomePageRoutingModule {
};
ProfileHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileHomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile-screens/profile-home/profile-home.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-home/profile-home.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHomePageModule", function() { return ProfileHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-home-routing.module */ "./src/app/pages/profile-screens/profile-home/profile-home-routing.module.ts");
/* harmony import */ var _profile_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-home.page */ "./src/app/pages/profile-screens/profile-home/profile-home.page.ts");







let ProfileHomePageModule = class ProfileHomePageModule {
};
ProfileHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileHomePageRoutingModule"]
        ],
        declarations: [_profile_home_page__WEBPACK_IMPORTED_MODULE_6__["ProfileHomePage"]]
    })
], ProfileHomePageModule);



/***/ }),

/***/ "./src/app/pages/profile-screens/profile-home/profile-home.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-home/profile-home.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1zY3JlZW5zL3Byb2ZpbGUtaG9tZS9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZS1zY3JlZW5zXFxwcm9maWxlLWhvbWVcXHByb2ZpbGUtaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtc2NyZWVucy9wcm9maWxlLWhvbWUvcHJvZmlsZS1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlLXNjcmVlbnMvcHJvZmlsZS1ob21lL3Byb2ZpbGUtaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile-screens/profile-home/profile-home.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-home/profile-home.page.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHomePage", function() { return ProfileHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/


let ProfileHomePage = class ProfileHomePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToProfile_1() {
        this.router.navigate(['/profile-ex1']);
    }
    goToProfile_2() {
        this.router.navigate(['/profile-ex2']);
    }
    goToProfile_3() {
        this.router.navigate(['/profile-ex3']);
    }
    goToProfile_4() {
        this.router.navigate(['/profile-ex4']);
    }
    goToProfile_5() {
        this.router.navigate(['/profile-ex5']);
    }
};
ProfileHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-home/profile-home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-home.page.scss */ "./src/app/pages/profile-screens/profile-home/profile-home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProfileHomePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-screens-profile-home-profile-home-module-es2015.js.map