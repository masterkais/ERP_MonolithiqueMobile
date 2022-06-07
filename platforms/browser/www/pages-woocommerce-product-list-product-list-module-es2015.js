(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-woocommerce-product-list-product-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/woocommerce/product-list/product-list.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/woocommerce/product-list/product-list.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Products</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of [1,2,3,4,5,6,7,8,9]\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/cloth2.jpg)'\"></div>\n          <ion-label>Casual T-shirt</ion-label>\n          <ion-label class=\"prise\">$100.00</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/woocommerce/product-list/product-list-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/woocommerce/product-list/product-list-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageRoutingModule", function() { return ProductListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list.page */ "./src/app/pages/woocommerce/product-list/product-list.page.ts");




const routes = [
    {
        path: '',
        component: _product_list_page__WEBPACK_IMPORTED_MODULE_3__["ProductListPage"]
    }
];
let ProductListPageRoutingModule = class ProductListPageRoutingModule {
};
ProductListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/woocommerce/product-list/product-list.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/woocommerce/product-list/product-list.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProductListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list-routing.module */ "./src/app/pages/woocommerce/product-list/product-list-routing.module.ts");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list.page */ "./src/app/pages/woocommerce/product-list/product-list.page.ts");







let ProductListPageModule = class ProductListPageModule {
};
ProductListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductListPageRoutingModule"]
        ],
        declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductListPage"]]
    })
], ProductListPageModule);



/***/ }),

/***/ "./src/app/pages/woocommerce/product-list/product-list.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/woocommerce/product-list/product-list.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-col {\n  margin-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n  margin-top: 7px;\n}\n.main_content_div .back_image {\n  height: 200px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div .prise {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29vY29tbWVyY2UvcHJvZHVjdC1saXN0L0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFx3b29jb21tZXJjZVxccHJvZHVjdC1saXN0XFxwcm9kdWN0LWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93b29jb21tZXJjZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURFSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQVI7QURHSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRFI7QURHSTtFQUNJLGdCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93b29jb21tZXJjZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICBpb24tY29se1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gICAgLnByaXNle1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWNvbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLnByaXNlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/woocommerce/product-list/product-list.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/woocommerce/product-list/product-list.page.ts ***!
  \*********************************************************************/
/*! exports provided: ProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPage", function() { return ProductListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_woocommerce_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/woocommerce/api.service */ "./src/app/services/woocommerce/api.service.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/


let ProductListPage = class ProductListPage {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        // this.getAllProducts();
    }
};
ProductListPage.ctorParameters = () => [
    { type: _services_woocommerce_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ProductListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/woocommerce/product-list/product-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-list.page.scss */ "./src/app/pages/woocommerce/product-list/product-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_woocommerce_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], ProductListPage);



/***/ }),

/***/ "./src/app/services/woocommerce/api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/woocommerce/api.service.ts ***!
  \*****************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wooCommerce.baseUrl;
        this.ck = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wooCommerce.ck;
        this.cs = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wooCommerce.cs;
    }
    getProducts() {
        // let headers = new HttpHeaders({
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // });
        // return new Promise(resolve => {
        //   this.http
        //     .get(
        //       `${this.baseUrl}/wp-json/wc/v3/products?consumer_key=${
        //         this.ck
        //         }&consumer_secret=${this.cs}`
        //     )
        //     .subscribe(productData => {
        //       resolve(productData);
        //     });
        // });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ApiService);



/***/ })

}]);
//# sourceMappingURL=pages-woocommerce-product-list-product-list-module-es2015.js.map