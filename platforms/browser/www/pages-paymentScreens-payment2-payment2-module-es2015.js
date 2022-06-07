(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paymentScreens-payment2-payment2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentScreens/payment2/payment2.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentScreens/payment2/payment2.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>payment2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-label class=\"header_lbl\">Enter Payment Detail</ion-label>\n\n    <ion-list lines=\"none\">\n      <ion-radio-group mode=\"md\" (ionChange)=\"checkedChange($event)\">\n        \n        <ion-item class=\"ion-no-padding\">\n          <ion-label>Stripe</ion-label>\n          <ion-radio slot=\"start\" value=\"stripe\"></ion-radio>\n        </ion-item>\n\n        <div class=\"form_div\" *ngIf=\"value == 'stripe'\">\n          <ion-input type=\"text\" placeholder=\"XXXX-XXXX-XXXX-4242\"></ion-input>\n          <ion-input type=\"text\" placeholder=\"Card Holder Name\"></ion-input>\n          <ion-row>\n            <ion-col size=\"6\">\n                <ion-datetime display-format=\"YYYY\" placeholder=\"YYYY\"></ion-datetime>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-input type=\"text\" placeholder=\"cvv\"></ion-input>\n            </ion-col>\n          </ion-row>\n    \n          <ion-button expand=\"block\">\n            Confirm & Pay\n          </ion-button>\n        </div>\n    \n        <ion-item class=\"ion-no-padding\">\n          <ion-label>Paypal</ion-label>\n          <ion-radio slot=\"start\" value=\"paypal\"></ion-radio>\n        </ion-item>\n\n        <div class=\"form_div\" *ngIf=\"value == 'paypal'\">\n          <ion-input type=\"text\" placeholder=\"Paypal ID\"></ion-input>\n    \n          <ion-button expand=\"block\">\n            Confirm & Pay\n          </ion-button>\n        </div>\n\n        <ion-item class=\"ion-no-padding\">\n          <ion-label>Cash on Delivery</ion-label>\n          <ion-radio slot=\"start\" value=\"cod\"></ion-radio>\n        </ion-item>\n\n        <div class=\"form_div\" *ngIf=\"value == 'cod'\">\n    \n          <ion-button expand=\"block\">\n            Confirm\n          </ion-button>\n        </div>\n\n\n\n      </ion-radio-group>\n    </ion-list>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/paymentScreens/payment2/payment2-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/paymentScreens/payment2/payment2-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: Payment2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment2PageRoutingModule", function() { return Payment2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment2.page */ "./src/app/pages/paymentScreens/payment2/payment2.page.ts");




const routes = [
    {
        path: '',
        component: _payment2_page__WEBPACK_IMPORTED_MODULE_3__["Payment2Page"]
    }
];
let Payment2PageRoutingModule = class Payment2PageRoutingModule {
};
Payment2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Payment2PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/paymentScreens/payment2/payment2.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/paymentScreens/payment2/payment2.module.ts ***!
  \******************************************************************/
/*! exports provided: Payment2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment2PageModule", function() { return Payment2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payment2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment2-routing.module */ "./src/app/pages/paymentScreens/payment2/payment2-routing.module.ts");
/* harmony import */ var _payment2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment2.page */ "./src/app/pages/paymentScreens/payment2/payment2.page.ts");







let Payment2PageModule = class Payment2PageModule {
};
Payment2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Payment2PageRoutingModule"]
        ],
        declarations: [_payment2_page__WEBPACK_IMPORTED_MODULE_6__["Payment2Page"]]
    })
], Payment2PageModule);



/***/ }),

/***/ "./src/app/pages/paymentScreens/payment2/payment2.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/paymentScreens/payment2/payment2.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .header_lbl {\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.main_content_div ion-item {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n.main_content_div ion-input, .main_content_div ion-datetime {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  --padding-start: 8px ;\n}\n.main_content_div ion-button {\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudFNjcmVlbnMvcGF5bWVudDIvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXHBheW1lbnRTY3JlZW5zXFxwYXltZW50MlxccGF5bWVudDIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXltZW50U2NyZWVucy9wYXltZW50Mi9wYXltZW50Mi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0FDQ1I7QURFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBRElJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7QUNIUjtBRE1JO0VBQ0ksb0JBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnRTY3JlZW5zL3BheW1lbnQyL3BheW1lbnQyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmcgOiAyMHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmhlYWRlcl9sYmx7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICBpb24taXRlbXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICBpb24taW5wdXQsIGlvbi1kYXRldGltZXtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIC8vIGhlaWdodDogNTBweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0IDogOHB4XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkZXJfbGJsIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWlucHV0LCAubWFpbl9jb250ZW50X2RpdiBpb24tZGF0ZXRpbWUge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/paymentScreens/payment2/payment2.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/paymentScreens/payment2/payment2.page.ts ***!
  \****************************************************************/
/*! exports provided: Payment2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment2Page", function() { return Payment2Page; });
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

let Payment2Page = class Payment2Page {
    constructor() { }
    ngOnInit() {
    }
    checkedChange(eve) {
        console.log(eve.detail.value);
        this.value = eve.detail.value;
    }
};
Payment2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentScreens/payment2/payment2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment2.page.scss */ "./src/app/pages/paymentScreens/payment2/payment2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Payment2Page);



/***/ })

}]);
//# sourceMappingURL=pages-paymentScreens-payment2-payment2-module-es2015.js.map