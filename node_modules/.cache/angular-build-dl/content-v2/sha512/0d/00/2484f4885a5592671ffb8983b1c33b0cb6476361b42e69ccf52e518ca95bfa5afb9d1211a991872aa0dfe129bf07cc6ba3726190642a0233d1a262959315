function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Products-product-list-product-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Products/product-list/product-list.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Products/product-list/product-list.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductsProductListProductListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"addtocart()\" class=\"ion-button custom-class\" color=\"red\"  fill=\"solid\">\r\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\r\n        <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">{{this.nomcateg}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!--<div class=\"main_content_div\" *ngFor=\"let item of product_list\">\r\n\r\n    <div class=\"card_div\">\r\n      <div class=\"back_image\"></div>\r\n      <div class=\"second_div\">\r\n        <ion-label class=\"name_lbl\">{{item.geturlimg()}}</ion-label>\r\n        <ion-label class=\"price_lbl\">{{item.getdescription()}}</ion-label>\r\n        <ion-button style=\"width: 200px\" size=\"large\" fill=\"outline\" shape=\"round\" (click)=\"goListProduct(item.getid(),item.getname())\">\r\n          Voir les produits\r\n        </ion-button>\r\n\r\n        <ion-icon name=\"heart-outline\">Brand</ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n\r\n  <div class=\"main_content_div\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"5.8\" *ngFor=\"let item of product_list\">\r\n          <div class=\"back_image\">\r\n              <img [src]=\"showImage(item.geturlimg())\" />\r\n             <!-- -- <img [src]='item.getimageUrl()' width=\"100%\" height=\"100%\" alt=\"Image\" />\r\n            div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\">\r\n              <ion-icon name=\"heart-outline\"></ion-icon>-->\r\n          </div>\r\n          <ion-label class=\"name\" (click)=\"gotodetail(item.getid())\"> {{item.getname()}}</ion-label>\r\n          <ion-label class=\"prize\">{{item.getsellingPrice()}}.00</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/modals/Product.ts":
  /*!***********************************!*\
    !*** ./src/app/modals/Product.ts ***!
    \***********************************/

  /*! exports provided: Product */

  /***/
  function srcAppModalsProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * Created by Asus on 02/06/2022.
     */


    var Product = /*#__PURE__*/function () {
      function Product() {
        _classCallCheck(this, Product);
      }

      _createClass(Product, [{
        key: "geturlimg",
        value: function geturlimg() {
          return this._urlimg;
        }
      }, {
        key: "seturlimg",
        value: function seturlimg(value) {
          this._urlimg = value;
        }
      }, {
        key: "getimageUrl",
        value: function getimageUrl() {
          return this._imageUrl;
        }
      }, {
        key: "setimageUrl",
        value: function setimageUrl(value) {
          this._imageUrl = value;
        }
      }, {
        key: "getid",
        value: function getid() {
          return this._id;
        }
      }, {
        key: "getname",
        value: function getname() {
          return this._name;
        }
      }, {
        key: "getdescription",
        value: function getdescription() {
          return this._description;
        }
      }, {
        key: "getsellingPrice",
        value: function getsellingPrice() {
          return this._sellingPrice;
        }
      }, {
        key: "getbuyingPrice",
        value: function getbuyingPrice() {
          return this._buyingPrice;
        }
      }, {
        key: "getstate",
        value: function getstate() {
          return this._state;
        }
      }, {
        key: "getactive",
        value: function getactive() {
          return this._active;
        }
      }, {
        key: "getimagesIds",
        value: function getimagesIds() {
          return this._imagesIds;
        }
      }, {
        key: "getcategoryId",
        value: function getcategoryId() {
          return this._categoryId;
        }
      }, {
        key: "getsiteStockId",
        value: function getsiteStockId() {
          return this._siteStockId;
        }
      }, {
        key: "setid",
        value: function setid(value) {
          this._id = value;
        }
      }, {
        key: "setname",
        value: function setname(value) {
          this._name = value;
        }
      }, {
        key: "setdescription",
        value: function setdescription(value) {
          this._description = value;
        }
      }, {
        key: "setsellingPrice",
        value: function setsellingPrice(value) {
          this._sellingPrice = value;
        }
      }, {
        key: "setbuyingPrice",
        value: function setbuyingPrice(value) {
          this._buyingPrice = value;
        }
      }, {
        key: "setstate",
        value: function setstate(value) {
          this._state = value;
        }
      }, {
        key: "setactive",
        value: function setactive(value) {
          this._active = value;
        }
      }, {
        key: "setimagesIds",
        value: function setimagesIds(value) {
          this._imagesIds = value;
        }
      }, {
        key: "setcategoryId",
        value: function setcategoryId(value) {
          this._categoryId = value;
        }
      }, {
        key: "setsiteStockId",
        value: function setsiteStockId(value) {
          this._siteStockId = value;
        }
      }]);

      return Product;
    }();
    /***/

  },

  /***/
  "./src/app/pages/Products/product-list/product-list-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/Products/product-list/product-list-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductListPageRoutingModule */

  /***/
  function srcAppPagesProductsProductListProductListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPageRoutingModule", function () {
      return ProductListPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _product_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-list.page */
    "./src/app/pages/Products/product-list/product-list.page.ts");

    var routes = [{
      path: '',
      component: _product_list_page__WEBPACK_IMPORTED_MODULE_3__["ProductListPage"]
    }];

    var ProductListPageRoutingModule = function ProductListPageRoutingModule() {
      _classCallCheck(this, ProductListPageRoutingModule);
    };

    ProductListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/Products/product-list/product-list.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/Products/product-list/product-list.module.ts ***!
    \********************************************************************/

  /*! exports provided: ProductListPageModule */

  /***/
  function srcAppPagesProductsProductListProductListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function () {
      return ProductListPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-list-routing.module */
    "./src/app/pages/Products/product-list/product-list-routing.module.ts");
    /* harmony import */


    var _product_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-list.page */
    "./src/app/pages/Products/product-list/product-list.page.ts");

    var ProductListPageModule = function ProductListPageModule() {
      _classCallCheck(this, ProductListPageModule);
    };

    ProductListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductListPageRoutingModule"]],
      declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductListPage"]]
    })], ProductListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/Products/product-list/product-list.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/Products/product-list/product-list.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductsProductListProductListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-row {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div ion-row ion-col {\n  border: 1px solid lightgray;\n  padding: 0px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  position: relative;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);\n}\n.main_content_div ion-row ion-col .back_image {\n  height: 150px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.main_content_div ion-row ion-col .back_image ion-icon {\n  position: absolute;\n  right: 5px;\n  padding: 5px;\n  background: white;\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  top: 5px;\n  font-size: 16px;\n  color: #29b507;\n}\n.main_content_div ion-row ion-col ion-label {\n  display: block;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n.main_content_div ion-row ion-col .name {\n  font-size: 14px;\n}\n.main_content_div ion-row ion-col .prize {\n  font-weight: 600;\n  margin-bottom: 5px;\n}\nion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n/* Setting Overflow Visible */\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvUHJvZHVjdHMvcHJvZHVjdC1saXN0L0Q6XFxFRFNcXElvbmljIEVSUFxcRVJQX01vbm9saXRoaXF1ZU1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXFByb2R1Y3RzXFxwcm9kdWN0LWxpc3RcXHByb2R1Y3QtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL1Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDSjtBRENJO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUNDTjtBRENNO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNBUjtBREVRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FWO0FER007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRFI7QURHTTtFQUNFLGVBQUE7QUNEUjtBREdNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RSO0FETUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0hGO0FETUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hGO0FET0EsNkJBQUE7QUFDQTtFQUNFLGlCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9Qcm9kdWN0cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gIGlvbi1yb3d7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgaW9uLWNvbHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMSk7XHJcblxyXG4gICAgICAuYmFja19pbWFnZXtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiAjMjliNTA3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wcml6ZXtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDhwdDtcclxuICByaWdodDogLTVweDtcclxuICB0b3A6IDJweDtcclxufVxyXG5cclxuLmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cclxuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IGlvbi1jb2wgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1yb3cgaW9uLWNvbCAuYmFja19pbWFnZSBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjliNTA3O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLXJvdyBpb24tY29sIGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IGlvbi1jb2wgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcm93IGlvbi1jb2wgLnByaXplIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5pb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICByaWdodDogLTVweDtcbiAgdG9wOiAycHg7XG59XG5cbi5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXG4uaW9uLWJ1dHRvbi5jdXN0b20tY2xhc3M6OnBhcnQobmF0aXZlKSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/Products/product-list/product-list.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/Products/product-list/product-list.page.ts ***!
    \******************************************************************/

  /*! exports provided: ProductListPage */

  /***/
  function srcAppPagesProductsProductListProductListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPage", function () {
      return ProductListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/products/products.service */
    "./src/app/services/products/products.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/rest/rest-apis.service */
    "./src/app/services/rest/rest-apis.service.ts");
    /* harmony import */


    var _modals_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../modals/Product */
    "./src/app/modals/Product.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/rest/environnement.model */
    "./src/app/services/rest/environnement.model.ts");

    var ProductListPage = /*#__PURE__*/function () {
      function ProductListPage(sanitizer, products, navCtrl, api, loadingCtrl, router, http, route) {
        var _this = this;

        _classCallCheck(this, ProductListPage);

        this.sanitizer = sanitizer;
        this.products = products;
        this.navCtrl = navCtrl;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.http = http;
        this.route = route;
        this.imagesIds = '';
        this.produits_commandes_list = [];
        this.product_list = [];
        this.img_list = [];
        this.allProducts = this.products.products;
        this.route.queryParams.subscribe(function (params) {
          _this.idcateg = params["idcateg"];
          _this.nomcateg = params["nomcateg"];
        });

        if (localStorage.getItem("produits_commandes") != null) {
          this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
        }

        this.charge_compteur();
        this.getallimages();
        this.getallproducts();
      }

      _createClass(ProductListPage, [{
        key: "charge_compteur",
        value: function charge_compteur() {
          if (localStorage.getItem("compteur") != null) {
            this.badgecount = localStorage.getItem("compteur");
          } else {
            this.badgecount = 0;
          }

          return this.badgecount;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gotodetail",
        value: function gotodetail(id) {
          var i;

          for (i = 0; i < this.product_list.length; i++) {
            if (this.product_list[i].getid() == id) {
              var navigationExtras = {
                queryParams: {
                  id: this.product_list[i].getid(),
                  name: this.product_list[i].getname(),
                  description: this.product_list[i].getdescription(),
                  sellingPrice: this.product_list[i].getsellingPrice(),
                  buyingPrice: this.product_list[i].getbuyingPrice(),
                  state: this.product_list[i].getstate(),
                  active: this.product_list[i].getactive(),
                  imagesIds: this.product_list[i].getimagesIds(),
                  imageUrl: this.product_list[i].getimageUrl(),
                  categoryId: this.product_list[i].getcategoryId(),
                  siteStockId: this.product_list[i].getsiteStockId(),
                  urlimg: this.product_list[i].geturlimg()
                }
              };
              this.navCtrl.navigateForward(['product-detail'], navigationExtras);
            }
          } //this.navCtrl.navigateRoot(['example2']);

        }
      }, {
        key: "addtocart",
        value: function addtocart() {
          this.navCtrl.navigateRoot(['my-cart']);
        }
      }, {
        key: "showImage",
        value: function showImage(data) {
          //console.log('data  '+data);
          var sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(data);
          return sanitizedContent;
        }
      }, {
        key: "simpleLoader",
        value: function simpleLoader(message) {
          this.loadingCtrl.create({
            message: 'Chargement',
            duration: 9000
          }).then(function (res) {
            res.present();
            res.onDidDismiss().then(function (dis) {
              console.log('Loading dismissed! after 2 Seconds', dis);
            });
          });
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader() {
          this.loadingCtrl.dismiss().then(function (response) {
            console.log('Loader closed!', response);
          }).catch(function (err) {
            console.log('Error occured : ', err.message);
          });
        }
      }, {
        key: "listImage",
        value: function listImage() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_9__["environmentApi"].host + "/api/image/images");
        }
      }, {
        key: "getallimages",
        value: function getallimages() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var img, i, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Chargement ...'
                    });

                  case 2:
                    loading = _context.sent;
                    loading.present();
                    this.listImage().subscribe(function (data) {
                      //console.log(data);
                      _this2.img_list = data;

                      if (data.length > 0) {
                        _this2.img_list = data;
                      }

                      _this2.mergelists(_this2.product_list, data);

                      loading.dismiss();
                    }); // this.dismissLoader();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "listProduct",
        value: function listProduct() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_9__["environmentApi"].host + "/api/product/products");
        }
      }, {
        key: "getallproducts",
        value: function getallproducts() {
          var _this3 = this;

          var prod, i, j;
          this.listProduct().subscribe(function (data) {
            var info = data; //alert(info[0]['id']);
            // alert(info.length);
            //  this.product_list=data;
            //const info = JSON.parse(data.data);

            if (info.length > 0) {
              for (i = 0; i < info.length; i++) {
                if (info[i]['categoryId'] == _this3.idcateg) {
                  prod = new _modals_Product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
                  prod.setid(info[i]['id']);
                  prod.setname(info[i]['name']);
                  prod.setdescription(info[i]['description']);
                  prod.setsellingPrice(info[i]['sellingPrice']);
                  prod.setbuyingPrice(info[i]['buyingPrice']);
                  prod.setstate(info[i]['state']);
                  prod.setactive(info[i]['active']);
                  prod.setimagesIds(info[i]['imagesIds']);
                  _this3.imagesIds = info[i]['imagesIds'];
                  prod.setcategoryId(info[i]['categoryId']);
                  prod.setsiteStockId(info[i]['siteStockId']);

                  _this3.product_list.push(prod);
                }
              }
            }
          }); //   if(this.img_list.length>0) {
          //  }
          // }

          /* else {
           // this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
           }*/
        }
      }, {
        key: "mergelists",
        value: function mergelists(productlist, imagelist) {
          //console.log('getallimages', imagelist);
          var i, j;

          if (imagelist.length >= productlist.length) {
            for (j = 0; j < imagelist.length; j++) {
              for (i = 0; i < productlist.length; i++) {
                if (imagelist[j].id == productlist[i].getimagesIds()) {
                  productlist[i].seturlimg(imagelist[j].data);
                }
              }
            }
          }

          if (imagelist.length <= productlist.length) {
            for (i = 0; i < productlist.length; i++) {
              for (j = 0; j < imagelist.length; j++) {
                if (imagelist[j].id == productlist[i].getimagesIds()) {
                  productlist[i].seturlimg(imagelist[j].data);
                }
              }
            }
          }
        }
      }]);

      return ProductListPage;
    }();

    ProductListPage.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }, {
        type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__["RestAPIsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }];
    };

    ProductListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Products/product-list/product-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.page.scss */
      "./src/app/pages/Products/product-list/product-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_4__["RestAPIsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])], ProductListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-Products-product-list-product-list-module-es5.js.map