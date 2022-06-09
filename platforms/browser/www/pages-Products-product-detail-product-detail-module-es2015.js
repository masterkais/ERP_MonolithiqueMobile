(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Products-product-detail-product-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Products/product-detail/product-detail.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Products/product-detail/product-detail.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <!--- <ion-back-button mode=\"md\"></ion-back-button>-->\r\n\r\n      <ion-back-button defaultHref=\"/example5\"></ion-back-button>\r\n\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"ion-button custom-class\" (click)=\"addtocart()\" color=\"red\"  fill=\"solid\">\r\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\r\n        <ion-badge color=\"danger\" >{{this.badgecount}}</ion-badge>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">produit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main_content_div\">\r\n    <img [src]=\"showImage(urlimgProd)\">\r\n    <ion-label class=\"name\">{{ this.nameProd}} <span>{{this.sellingPriceProd}}.00</span></ion-label>\r\n    <ion-label class=\"desc\">{{this.descriptionProd}}</ion-label>\r\n\r\n    <!--<div class=\"main_div\">\r\n      <div class=\"flex_div\">\r\n        <div class=\"round_div red\" (click)=\"onClick(1)\">\r\n          <ion-icon name=\"checkmark\" *ngIf=\"id == 1\"></ion-icon>\r\n        </div>\r\n        <div class=\"round_div green\" (click)=\"onClick(2)\">\r\n          <ion-icon name=\"checkmark\" *ngIf=\"id == 2\"></ion-icon>\r\n        </div>\r\n        <div class=\"round_div blue\" (click)=\"onClick(3)\">\r\n          <ion-icon name=\"checkmark\" *ngIf=\"id == 3\"></ion-icon>\r\n        </div>\r\n        <div class=\"round_div orange\" (click)=\"onClick(4)\">\r\n          <ion-icon name=\"checkmark\" *ngIf=\"id == 4\"></ion-icon>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <ion-icon class=\"heart_icn\" name=\"heart\"></ion-icon>\r\n      </div>\r\n    </div>-->\r\n\r\n    <div class=\"desc_card\">\r\n      <ion-label class=\"small_header\">Prix de vente</ion-label>\r\n      <ion-label class=\"pro_desc\">{{this.sellingPriceProd}}.00</ion-label>\r\n    </div>\r\n    <div class=\"desc_card\">\r\n      <ion-label class=\"small_header\">Prix d'achat</ion-label>\r\n      <ion-label class=\"pro_desc\">{{this.buyingPriceProd}}.00</ion-label>\r\n    </div>\r\n\r\n\r\n\r\n    <ion-button expand=\"block\" (click)=\"addtocartform()\">\r\n      Ajouter au panier\r\n    </ion-button>\r\n\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/modals/Panier.ts":
/*!**********************************!*\
  !*** ./src/app/modals/Panier.ts ***!
  \**********************************/
/*! exports provided: Panier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panier", function() { return Panier; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Created by Asus on 04/06/2022.
 */
class Panier {
    constructor() {
    }
    getcompteur() {
        return this._compteur;
    }
    setcompteur(value) {
        this._compteur = value;
    }
    getidProd() {
        return this._idProd;
    }
    setidProd(value) {
        this._idProd = value;
    }
    getnameProd() {
        return this._nameProd;
    }
    setnameProd(value) {
        this._nameProd = value;
    }
    getdescriptionProd() {
        return this._descriptionProd;
    }
    setdescriptionProd(value) {
        this._descriptionProd = value;
    }
    getsellingPriceProd() {
        return this._sellingPriceProd;
    }
    setsellingPriceProd(value) {
        this._sellingPriceProd = value;
    }
    getbuyingPriceProd() {
        return this._buyingPriceProd;
    }
    setbuyingPriceProd(value) {
        this._buyingPriceProd = value;
    }
    getstateProd() {
        return this._stateProd;
    }
    setstateProd(value) {
        this._stateProd = value;
    }
    getactiveProd() {
        return this._activeProd;
    }
    setactiveProd(value) {
        this._activeProd = value;
    }
    getimagesIdsProd() {
        return this._imagesIdsProd;
    }
    setimagesIdsProd(value) {
        this._imagesIdsProd = value;
    }
    getimageUrlProd() {
        return this._imageUrlProd;
    }
    setimageUrlProd(value) {
        this._imageUrlProd = value;
    }
    getcategoryIdProd() {
        return this._categoryIdProd;
    }
    setcategoryIdProd(value) {
        this._categoryIdProd = value;
    }
    getsiteStockIdProd() {
        return this._siteStockIdProd;
    }
    setsiteStockIdProd(value) {
        this._siteStockIdProd = value;
    }
    geturlimgProd() {
        return this._urlimgProd;
    }
    seturlimgProd(value) {
        this._urlimgProd = value;
    }
}


/***/ }),

/***/ "./src/app/pages/Products/product-detail/product-detail-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/Products/product-detail/product-detail-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ProductDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageRoutingModule", function() { return ProductDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/pages/Products/product-detail/product-detail.page.ts");




const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailPage"]
    }
];
let ProductDetailPageRoutingModule = class ProductDetailPageRoutingModule {
};
ProductDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/Products/product-detail/product-detail.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/Products/product-detail/product-detail.module.ts ***!
  \************************************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail-routing.module */ "./src/app/pages/Products/product-detail/product-detail-routing.module.ts");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/pages/Products/product-detail/product-detail.page.ts");







let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPageRoutingModule"]
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
    })
], ProductDetailPageModule);



/***/ }),

/***/ "./src/app/pages/Products/product-detail/product-detail.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/Products/product-detail/product-detail.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div img {\n  width: 100%;\n  height: 300px;\n  border-radius: 5px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .name {\n  font-size: 22px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.main_content_div .name span {\n  position: absolute;\n  right: 20px;\n  font-weight: 400;\n  font-size: 16px;\n  margin-top: 5px;\n}\n.main_content_div .desc {\n  margin-top: 5px;\n  color: gray;\n}\n.main_content_div .main_div {\n  margin-top: 20px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .main_div .heart_icn {\n  padding: 7px;\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  font-size: 17px;\n  color: #29b507;\n}\n.main_content_div .flex_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.main_content_div .flex_div .round_div {\n  height: 30px;\n  width: 30px;\n  border-radius: 100%;\n  position: relative;\n  margin-right: 10px;\n}\n.main_content_div .flex_div .round_div ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white;\n  font-size: 20px;\n}\n.main_content_div .flex_div .red {\n  background-color: #871717;\n}\n.main_content_div .flex_div .green {\n  background-color: #919151;\n}\n.main_content_div .flex_div .blue {\n  background-color: #916383;\n}\n.main_content_div .flex_div .orange {\n  background-color: #deaa7c;\n}\n.main_content_div .desc_card {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.main_content_div .desc_card .small_header {\n  color: lightgray;\n  margin-bottom: 5px;\n}\n.main_content_div .desc_card .pro_desc {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div ion-button {\n  --border-radius: 5px;\n  margin-top: 30px;\n  font-weight: 600;\n  --background: #73D25C;\n}\nion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n/* Setting Overflow Visible */\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvUHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvQzpcXGthaXMgaW9uaWMgcHJvamVjdFxcRVJQX01vbm9saXRoaXF1ZU1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXFByb2R1Y3RzXFxwcm9kdWN0LWRldGFpbFxccHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9Qcm9kdWN0cy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDRTtFQUNFLGNBQUE7QUNDSjtBRENFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NOO0FERUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKO0FER0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRE47QURLRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7QUNISjtBRElJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGTjtBRElNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FES0k7RUFDRSx5QkFBQTtBQ0hOO0FES0k7RUFDRSx5QkFBQTtBQ0hOO0FES0k7RUFDRSx5QkFBQTtBQ0hOO0FES0k7RUFDRSx5QkFBQTtBQ0hOO0FET0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDTEo7QURNSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNKTjtBRE9JO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNMTjtBRFFFO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNOSjtBRFNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNORjtBRFNBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNORjtBRFVBLDZCQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvUHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5uYW1le1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgIHNwYW57XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZGVzY3tcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fZGl2e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmhlYXJ0X2ljbntcclxuICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBjb2xvcjogIzI5YjUwNztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mbGV4X2RpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIC5yb3VuZF9kaXZ7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NzE3MTc7XHJcbiAgICB9XHJcbiAgICAuZ3JlZW57XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MTkxNTE7XHJcbiAgICB9XHJcbiAgICAuYmx1ZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkxNjM4MztcclxuICAgIH1cclxuICAgIC5vcmFuZ2V7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWFhN2M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY19jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAuc21hbGxfaGVhZGVye1xyXG4gICAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb19kZXNje1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tYnV0dG9ue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC0tYmFja2dyb3VuZDogIzczRDI1QztcclxuICB9XHJcbn1cclxuaW9uLWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiA4cHQ7XHJcbiAgcmlnaHQ6IC01cHg7XHJcbiAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi5pb24tYnV0dG9uIHtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXHJcbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzYyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubWFpbl9kaXYge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLm1haW5fZGl2IC5oZWFydF9pY24ge1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMjliNTA3O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnJvdW5kX2RpdiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5yb3VuZF9kaXYgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3MTcxNztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5MTUxO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxNjM4Mztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAub3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlYWE3Yztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2NhcmQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfY2FyZCAuc21hbGxfaGVhZGVyIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfY2FyZCAucHJvX2Rlc2Mge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJhY2tncm91bmQ6ICM3M0QyNUM7XG59XG5cbmlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA4cHQ7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IDJweDtcbn1cblxuLmlvbi1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/Products/product-detail/product-detail.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/Products/product-detail/product-detail.page.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/products/products.service */ "./src/app/services/products/products.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _awesome_cordova_plugins_toast_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/toast/ngx */ "./node_modules/@awesome-cordova-plugins/toast/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _modals_Panier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modals/Panier */ "./src/app/modals/Panier.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");









let ProductDetailPage = class ProductDetailPage {
    constructor(util, products, navCtrl, toast, route, sanitizer) {
        this.util = util;
        this.products = products;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.route = route;
        this.sanitizer = sanitizer;
        this.produits_commandes_list = [];
        this.ancien_badgecount = 0;
        this.ancien_compteur = 0;
        this.c2 = 0;
        this.allProducts = this.products.products;
        this.route.queryParams.subscribe(params => {
            this.idProd = params["id"];
            this.nameProd = params["name"];
            this.descriptionProd = params["description"];
            this.sellingPriceProd = params["sellingPrice"];
            this.buyingPriceProd = params["buyingPrice"];
            this.stateProd = params["state"];
            this.activeProd = params["active"];
            this.imagesIdsProd = params["imagesIds"];
            this.imageUrlProd = params["imageUrl"];
            this.categoryIdProd = params["categoryId"];
            this.siteStockIdProd = params["siteStockId"];
            this.urlimgProd = params["urlimg"];
            // this.currency = JSON.parse(params["currency"]);
        });
        //  alert(this.urlimgProd);
    }
    ngOnInit() {
        if (localStorage.getItem("compteur") != null) {
            this.badgecount = localStorage.getItem("compteur");
        }
        else {
            this.badgecount = 0;
        }
        if (localStorage.getItem("produits_commandes") != null) {
            this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
        }
    }
    showImage(data) {
        const sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(data);
        return sanitizedContent;
    }
    onClick(val) {
        this.id = val;
    }
    verif_occ(idprod) {
        var i, comp = 1;
        for (i = 0; i < this.produits_commandes_list.length; i++) {
            if (this.produits_commandes_list[i]['_idProd'] == idprod) {
                comp = comp + 1;
                this.produits_commandes_list[i]['_compteur'] = comp + "";
            }
        }
        return comp;
    }
    addtocartform() {
        //localStorage.setItem("compteur", '');
        this.c2 = parseInt(this.badgecount) + 1;
        localStorage.setItem("compteur", this.c2 + "");
        var panier, i;
        if (localStorage.getItem("produits_commandes") != null) {
            this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
            if (this.verif_occ(this.idProd) == 1) {
                panier = new _modals_Panier__WEBPACK_IMPORTED_MODULE_7__["Panier"]();
                panier.setcompteur(this.verif_occ(this.idProd) + "");
                panier.setidProd(this.idProd);
                panier.setnameProd(this.nameProd);
                panier.setdescriptionProd(this.descriptionProd);
                panier.setsellingPriceProd(this.sellingPriceProd);
                panier.setbuyingPriceProd(this.buyingPriceProd);
                panier.setstateProd(this.stateProd);
                panier.setactiveProd(this.activeProd);
                panier.setimagesIdsProd(this.imagesIdsProd);
                panier.setimageUrlProd(this.imageUrlProd);
                panier.setcategoryIdProd(this.categoryIdProd);
                panier.setsiteStockIdProd(this.siteStockIdProd);
                panier.seturlimgProd(this.urlimgProd);
                this.produits_commandes_list.push(panier);
            }
        }
        if (localStorage.getItem("produits_commandes") == null) {
            var c = parseInt(this.badgecount + 1);
            panier = new _modals_Panier__WEBPACK_IMPORTED_MODULE_7__["Panier"]();
            panier.setcompteur(c + "");
            panier.setidProd(this.idProd);
            panier.setnameProd(this.nameProd);
            panier.setdescriptionProd(this.descriptionProd);
            panier.setsellingPriceProd(this.sellingPriceProd);
            panier.setbuyingPriceProd(this.buyingPriceProd);
            panier.setstateProd(this.stateProd);
            panier.setactiveProd(this.activeProd);
            panier.setimagesIdsProd(this.imagesIdsProd);
            panier.setimageUrlProd(this.imageUrlProd);
            panier.setcategoryIdProd(this.categoryIdProd);
            panier.setsiteStockIdProd(this.siteStockIdProd);
            panier.seturlimgProd(this.urlimgProd);
            this.produits_commandes_list.push(panier);
        }
        localStorage.setItem("produits_commandes", JSON.stringify(this.produits_commandes_list));
        this.util.showToast('Produit ajouté !', 'success', 'bottom');
        this.navCtrl.navigateForward(['product-list']);
    }
    addtocart() {
        this.navCtrl.navigateRoot(['my-cart']);
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"] },
    { type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _awesome_cordova_plugins_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
ProductDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Products/product-detail/product-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/pages/Products/product-detail/product-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"], _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _awesome_cordova_plugins_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
], ProductDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-Products-product-detail-product-detail-module-es2015.js.map