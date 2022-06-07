(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ecommerce-example10-example10-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example10/example10.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example10/example10.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>E-commerce Example 6</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"left_div\" *ngFor=\"let item of allProducts\">\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\"></div>\n      <div class=\"second_div\">\n        <ion-label class=\"name\">{{item.name}}</ion-label>\n        <ion-label class=\"prize\">$ {{item.price}}</ion-label>\n      </div>\n      <div class=\"last_div\">\n        <ion-button (click)=\"plus()\" size=\"small\" fill=\"clear\">\n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n        </ion-button>\n\n        <!-- <ion-label><span>{{value}}</span></ion-label> -->\n\n        <div class=\"text_div\">\n          <div class=\"lbl_div\">{{value}}</div>\n        </div>\n\n        <ion-button (click)=\"minus()\" size=\"small\" fill=\"clear\">\n          <ion-icon slot=\"icon-only\" name=\"remove-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/ecommerce/example10/example10-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ecommerce/example10/example10-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: Example10PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example10PageRoutingModule", function() { return Example10PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _example10_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example10.page */ "./src/app/pages/ecommerce/example10/example10.page.ts");




const routes = [
    {
        path: '',
        component: _example10_page__WEBPACK_IMPORTED_MODULE_3__["Example10Page"]
    }
];
let Example10PageRoutingModule = class Example10PageRoutingModule {
};
Example10PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Example10PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ecommerce/example10/example10.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ecommerce/example10/example10.module.ts ***!
  \***************************************************************/
/*! exports provided: Example10PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example10PageModule", function() { return Example10PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _example10_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example10-routing.module */ "./src/app/pages/ecommerce/example10/example10-routing.module.ts");
/* harmony import */ var _example10_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example10.page */ "./src/app/pages/ecommerce/example10/example10.page.ts");







let Example10PageModule = class Example10PageModule {
};
Example10PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _example10_routing_module__WEBPACK_IMPORTED_MODULE_5__["Example10PageRoutingModule"]
        ],
        declarations: [_example10_page__WEBPACK_IMPORTED_MODULE_6__["Example10Page"]]
    })
], Example10PageModule);



/***/ }),

/***/ "./src/app/pages/ecommerce/example10/example10.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/ecommerce/example10/example10.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div .left_div {\n  border-radius: 5px;\n  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div .left_div .back_image {\n  height: 110px;\n  width: 110px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 5px;\n  min-width: 110px;\n}\n.main_content_div .left_div .second_div {\n  padding-left: 10px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.main_content_div .left_div .second_div .prize {\n  font-weight: 600;\n  margin-top: 10px;\n}\n.main_content_div .left_div .second_div .name {\n  color: gray;\n  margin-top: 10px;\n}\n.main_content_div .left_div .last_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.main_content_div .left_div .last_div ion-button {\n  margin: 0;\n  color: gray;\n}\n.main_content_div .left_div .last_div .text_div {\n  text-align: center;\n}\n.main_content_div .left_div .last_div .text_div .lbl_div {\n  background: #73D25C;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWNvbW1lcmNlL2V4YW1wbGUxMC9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcZWNvbW1lcmNlXFxleGFtcGxlMTBcXGV4YW1wbGUxMC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vjb21tZXJjZS9leGFtcGxlMTAvZXhhbXBsZTEwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0NSO0FEQ1E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBREVRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQVo7QURFWTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBaEI7QURHWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0RoQjtBREtRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBQ0haO0FESVk7RUFDSSxTQUFBO0VBQ0EsV0FBQTtBQ0ZoQjtBREtZO0VBQ0ksa0JBQUE7QUNIaEI7QURLZ0I7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNIcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lY29tbWVyY2UvZXhhbXBsZTEwL2V4YW1wbGUxMC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLmxlZnRfZGl2e1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgXG4gICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmRfZGl2e1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLnByaXple1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXN0X2RpdntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHRfZGl2e1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIC5sYmxfZGl2e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzNEMjVDO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogMTEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGVmdF9kaXYgLnNlY29uZF9kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxlZnRfZGl2IC5zZWNvbmRfZGl2IC5wcml6ZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGVmdF9kaXYgLnNlY29uZF9kaXYgLm5hbWUge1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiAubGFzdF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiAubGFzdF9kaXYgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGVmdF9kaXYgLmxhc3RfZGl2IC50ZXh0X2RpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiAubGFzdF9kaXYgLnRleHRfZGl2IC5sYmxfZGl2IHtcbiAgYmFja2dyb3VuZDogIzczRDI1QztcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/ecommerce/example10/example10.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ecommerce/example10/example10.page.ts ***!
  \*************************************************************/
/*! exports provided: Example10Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example10Page", function() { return Example10Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/


let Example10Page = class Example10Page {
    constructor(products) {
        this.products = products;
        this.value = 1;
        this.allProducts = this.products.products;
    }
    ngOnInit() {
    }
    plus() {
        this.value = this.value + 1;
    }
    minus() {
        this.value = this.value - 1;
    }
};
Example10Page.ctorParameters = () => [
    { type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
Example10Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-example10',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example10.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example10/example10.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./example10.page.scss */ "./src/app/pages/ecommerce/example10/example10.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
], Example10Page);



/***/ })

}]);
//# sourceMappingURL=pages-ecommerce-example10-example10-module-es2015.js.map