(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ecommerce-example1-example1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example1/example1.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example1/example1.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>E-commerce Example 1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <ion-label class=\"header_lbl\">New Products</ion-label>\n\n    <span *ngFor=\"let item of allProducts; let i = index\">\n\n      <div class=\"left_div\" *ngIf=\"i%2 == 0\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\"></div>\n        <div class=\"second_div\">\n          <ion-label class=\"name\">{{item.name}}</ion-label>\n          <ion-label class=\"prize\">$ {{item.price}}</ion-label>\n          <!-- <ion-icon name=\"cart\"></ion-icon> -->\n          <ion-button size=\"small\" fill=\"outline\" shape=\"round\">\n            Add to Cart\n          </ion-button>\n        </div>\n      </div>\n\n      <div class=\"right_div\" *ngIf=\"i%2 == 1\">\n        <div class=\"second_div\">\n          <ion-label class=\"name\">{{item.name}}</ion-label>\n          <ion-label class=\"prize\">$ {{item.price}}</ion-label>\n          <!-- <ion-icon name=\"cart\"></ion-icon> -->\n          <ion-button size=\"small\" fill=\"outline\" shape=\"round\">\n            Add to Cart\n          </ion-button>\n        </div>\n        <div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\"></div>\n      </div>\n\n    </span>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/ecommerce/example1/example1-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ecommerce/example1/example1-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: Example1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example1PageRoutingModule", function() { return Example1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _example1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example1.page */ "./src/app/pages/ecommerce/example1/example1.page.ts");




const routes = [
    {
        path: '',
        component: _example1_page__WEBPACK_IMPORTED_MODULE_3__["Example1Page"]
    }
];
let Example1PageRoutingModule = class Example1PageRoutingModule {
};
Example1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Example1PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ecommerce/example1/example1.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ecommerce/example1/example1.module.ts ***!
  \*************************************************************/
/*! exports provided: Example1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example1PageModule", function() { return Example1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _example1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example1-routing.module */ "./src/app/pages/ecommerce/example1/example1-routing.module.ts");
/* harmony import */ var _example1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example1.page */ "./src/app/pages/ecommerce/example1/example1.page.ts");







let Example1PageModule = class Example1PageModule {
};
Example1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _example1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Example1PageRoutingModule"]
        ],
        declarations: [_example1_page__WEBPACK_IMPORTED_MODULE_6__["Example1Page"]]
    })
], Example1PageModule);



/***/ }),

/***/ "./src/app/pages/ecommerce/example1/example1.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/ecommerce/example1/example1.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div .header_lbl {\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  font-weight: 600;\n  font-size: 22px;\n}\n.main_content_div ion-label {\n  display: block;\n  margin-top: 10px;\n}\n.main_content_div .prize {\n  font-weight: 600;\n}\n.main_content_div .name {\n  color: gray;\n}\n.main_content_div .back_image {\n  height: 110px;\n  width: 110px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 5px;\n  min-width: 110px;\n}\n.main_content_div .left_div {\n  border-radius: 5px;\n  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n.main_content_div .left_div .second_div {\n  padding-left: 20px;\n  width: 100%;\n  position: relative;\n}\n.main_content_div .left_div .second_div ion-button {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n.main_content_div .right_div {\n  border-radius: 5px;\n  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n.main_content_div .right_div .second_div {\n  padding-right: 20px;\n  width: 100%;\n  position: relative;\n}\n.main_content_div .right_div .second_div ion-button {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWNvbW1lcmNlL2V4YW1wbGUxL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxlY29tbWVyY2VcXGV4YW1wbGUxXFxleGFtcGxlMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vjb21tZXJjZS9leGFtcGxlMS9leGFtcGxlMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FERUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBREVJO0VBQ0ksV0FBQTtBQ0FSO0FER0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBRElJO0VBQ0ksa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRFdZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDVGhCO0FEY0k7RUFDSSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1pSO0FEYVE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1haO0FEcUJZO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDbkJoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vjb21tZXJjZS9leGFtcGxlMS9leGFtcGxlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nIDogMjBweDtcblxuICAgIC5oZWFkZXJfbGJse1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAucHJpemV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5uYW1le1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICB9XG5cbiAgICAubGVmdF9kaXZ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDZweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIC5zZWNvbmRfZGl2e1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC8vIGlvbi1pY29ue1xuICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIC8vICAgICByaWdodDogMDtcbiAgICAgICAgICAgIC8vICAgICBib3R0b20gOiAwO1xuICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogIzczRDI1QztcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI5YjUwNztcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogIzczRDI1QztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yaWdodF9kaXZ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDZweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIC5zZWNvbmRfZGl2e1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAvLyBpb24taWNvbntcbiAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAvLyAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIC8vICAgICBib3R0b20gOiAwO1xuICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogIzczRDI1QztcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjliNTA3O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjNzNEMjVDO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZGVyX2xibCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcml6ZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSB7XG4gIGNvbG9yOiBncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDExMHB4O1xuICB3aWR0aDogMTEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDExMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxlZnRfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiAuc2Vjb25kX2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiAuc2Vjb25kX2RpdiBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzI5YjUwNztcbiAgLS1ib3JkZXItY29sb3I6ICM3M0QyNUM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yaWdodF9kaXYgLnNlY29uZF9kaXYge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJpZ2h0X2RpdiAuc2Vjb25kX2RpdiBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA5MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjliNTA3O1xuICAtLWJvcmRlci1jb2xvcjogIzczRDI1Qztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/ecommerce/example1/example1.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ecommerce/example1/example1.page.ts ***!
  \***********************************************************/
/*! exports provided: Example1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example1Page", function() { return Example1Page; });
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


let Example1Page = class Example1Page {
    constructor(products) {
        this.products = products;
        this.allProducts = this.products.products;
    }
    ngOnInit() {
    }
};
Example1Page.ctorParameters = () => [
    { type: _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
Example1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-example1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example1/example1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./example1.page.scss */ "./src/app/pages/ecommerce/example1/example1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
], Example1Page);



/***/ })

}]);
//# sourceMappingURL=pages-ecommerce-example1-example1-module-es2015.js.map