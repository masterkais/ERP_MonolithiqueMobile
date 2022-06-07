(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-avatar-user-avatar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-avatar/user-avatar.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-avatar/user-avatar.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>User Text Avatar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let user of users\">\n      <ion-avatar slot=\"start\">\n        <app-text-avatar [text]=\"user.name\" [color]=\"user.color\"></app-text-avatar>\n      </ion-avatar>\n\n      <ion-label>\n        <ion-text>\n          <h3>{{ user.name }}</h3>\n        </ion-text>\n\n        <p>{{ user.company }} - {{ user.job_title }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/user-avatar/user-avatar-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user-avatar/user-avatar-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserAvatarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatarPageRoutingModule", function() { return UserAvatarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_avatar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-avatar.page */ "./src/app/pages/user-avatar/user-avatar.page.ts");




const routes = [
    {
        path: '',
        component: _user_avatar_page__WEBPACK_IMPORTED_MODULE_3__["UserAvatarPage"]
    }
];
let UserAvatarPageRoutingModule = class UserAvatarPageRoutingModule {
};
UserAvatarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserAvatarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user-avatar/user-avatar.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-avatar/user-avatar.module.ts ***!
  \*********************************************************/
/*! exports provided: UserAvatarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatarPageModule", function() { return UserAvatarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _user_avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-avatar-routing.module */ "./src/app/pages/user-avatar/user-avatar-routing.module.ts");
/* harmony import */ var _user_avatar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-avatar.page */ "./src/app/pages/user-avatar/user-avatar.page.ts");
/* harmony import */ var src_app_components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/component.module */ "./src/app/components/component.module.ts");








let UserAvatarPageModule = class UserAvatarPageModule {
};
UserAvatarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserAvatarPageRoutingModule"],
            src_app_components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]
        ],
        declarations: [_user_avatar_page__WEBPACK_IMPORTED_MODULE_6__["UserAvatarPage"]]
    })
], UserAvatarPageModule);



/***/ }),

/***/ "./src/app/pages/user-avatar/user-avatar.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-avatar/user-avatar.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItYXZhdGFyL3VzZXItYXZhdGFyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/user-avatar/user-avatar.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/user-avatar/user-avatar.page.ts ***!
  \*******************************************************/
/*! exports provided: UserAvatarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatarPage", function() { return UserAvatarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/

let UserAvatarPage = class UserAvatarPage {
    constructor() {
        this.users = [
            { name: 'Abc', company: 'Siemens', job_title: 'Technical Lead', color: '#ccc' },
            { name: 'Jonh', company: 'NBS', job_title: 'BI Engineer' },
            { name: 'Test', company: 'Siemens', job_title: 'Technical Lead' },
            { name: 'Xyz', company: 'Siemens', job_title: 'Software Engineer' },
            { name: 'Mno', company: 'Siemens', job_title: 'Software Engineer' },
            { name: 'User', company: 'Siemens', job_title: 'Sr. Technical Lead' },
        ];
    }
    ngOnInit() {
    }
};
UserAvatarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-avatar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-avatar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-avatar/user-avatar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-avatar.page.scss */ "./src/app/pages/user-avatar/user-avatar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserAvatarPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-avatar-user-avatar-module-es2015.js.map