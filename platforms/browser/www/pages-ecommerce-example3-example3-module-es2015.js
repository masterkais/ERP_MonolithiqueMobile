(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ecommerce-example3-example3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example3/example3.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example3/example3.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>E-commerce Example 3</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <img src=\"assets/imgs/products/bag.jpg\">\n\n    <ion-label class=\"name\">Brown Lady Handbag <span>$200.00</span></ion-label>\n    <ion-label class=\"desc\">Small bag for travelling</ion-label>\n\n\n    <div class=\"desc_card\">\n      <ion-label class=\"small_header\">Description</ion-label>\n      <ion-label class=\"pro_desc\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n        has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type\n        and scrambled</ion-label>\n    </div>\n\n    <div class=\"flex_div\">\n      <div class=\"round_div\" (click)=\"onClick(1)\" [class.active]=\"id == 1\">\n        <ion-label>32</ion-label>\n      </div>\n      <div class=\"round_div\" (click)=\"onClick(2)\" [class.active]=\"id == 2\">\n        <ion-label>33</ion-label>\n      </div>\n      <div class=\"round_div\" (click)=\"onClick(3)\" [class.active]=\"id == 3\">\n        <ion-label>34</ion-label>\n      </div>\n      <div class=\"round_div\" (click)=\"onClick(4)\" [class.active]=\"id == 4\">\n        <ion-label>35</ion-label>\n      </div>\n    </div>\n\n    <ion-range dualKnobs=\"true\" min=\"21\" max=\"72\" step=\"3\" snaps=\"true\">\n      <ion-label slot=\"start\">100</ion-label>\n      <ion-label slot=\"end\">500</ion-label>\n    </ion-range>\n\n    <ion-button expand=\"block\">\n      ADD TO CART\n    </ion-button>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/ecommerce/example3/example3-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ecommerce/example3/example3-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: Example3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example3PageRoutingModule", function() { return Example3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _example3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example3.page */ "./src/app/pages/ecommerce/example3/example3.page.ts");




const routes = [
    {
        path: '',
        component: _example3_page__WEBPACK_IMPORTED_MODULE_3__["Example3Page"]
    }
];
let Example3PageRoutingModule = class Example3PageRoutingModule {
};
Example3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Example3PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ecommerce/example3/example3.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ecommerce/example3/example3.module.ts ***!
  \*************************************************************/
/*! exports provided: Example3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example3PageModule", function() { return Example3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _example3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example3-routing.module */ "./src/app/pages/ecommerce/example3/example3-routing.module.ts");
/* harmony import */ var _example3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example3.page */ "./src/app/pages/ecommerce/example3/example3.page.ts");







let Example3PageModule = class Example3PageModule {
};
Example3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _example3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Example3PageRoutingModule"]
        ],
        declarations: [_example3_page__WEBPACK_IMPORTED_MODULE_6__["Example3Page"]]
    })
], Example3PageModule);



/***/ }),

/***/ "./src/app/pages/ecommerce/example3/example3.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/ecommerce/example3/example3.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div img {\n  width: 100%;\n  height: 300px;\n  border-radius: 5px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .name {\n  font-size: 22px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.main_content_div .name span {\n  position: absolute;\n  right: 20px;\n  font-weight: 400;\n  font-size: 16px;\n  margin-top: 5px;\n}\n.main_content_div .desc_card {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.main_content_div .desc_card .small_header {\n  color: lightgray;\n  margin-bottom: 5px;\n}\n.main_content_div .desc_card .pro_desc {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .flex_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  width: 100%;\n  margin-top: 20px;\n}\n.main_content_div .flex_div .active {\n  background: #73D25C;\n  color: white;\n}\n.main_content_div .flex_div .round_div {\n  height: 60px;\n  width: 60px;\n  border-radius: 100%;\n  position: relative;\n  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);\n}\n.main_content_div .flex_div .round_div ion-label {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-weight: 600;\n}\n.main_content_div ion-range {\n  --knob-size: 15px;\n  --bar-background-active: #73D25C;\n  padding: 0;\n  margin-top: 20px;\n}\n.main_content_div ion-button {\n  --border-radius: 5px;\n  margin-top: 30px;\n  font-weight: 600;\n  --background: #73D25C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWNvbW1lcmNlL2V4YW1wbGUzL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxlY29tbWVyY2VcXGV4YW1wbGUzXFxleGFtcGxlMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vjb21tZXJjZS9leGFtcGxlMy9leGFtcGxlMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDSTtFQUNHLGNBQUE7QUNDUDtBRENJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NaO0FER0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDRFI7QURFUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNBWjtBREdRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNEWjtBREtJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hSO0FES1E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNIWjtBRE1RO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNKWjtBRE1ZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxnQkFBQTtBQ0poQjtBRFNJO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ1BSO0FEU0k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ1BSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWNvbW1lcmNlL2V4YW1wbGUzL2V4YW1wbGUzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5uYW1le1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGVzY19jYXJke1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAuc21hbGxfaGVhZGVye1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9fZGVzY3tcbiAgICAgICAgICAgIGNvbG9yOiBncmF5OyAgXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mbGV4X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICAgIC5hY3RpdmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzNEMjVDO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJvdW5kX2RpdntcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1yYW5nZSB7XG4gICAgICAgIC0ta25vYi1zaXplOiAxNXB4O1xuICAgICAgICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzczRDI1QztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzczRDI1QztcbiAgICB9XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2NhcmQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfY2FyZCAuc21hbGxfaGVhZGVyIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfY2FyZCAucHJvX2Rlc2Mge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNzNEMjVDO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnJvdW5kX2RpdiB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAucm91bmRfZGl2IGlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tcmFuZ2Uge1xuICAtLWtub2Itc2l6ZTogMTVweDtcbiAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICM3M0QyNUM7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYmFja2dyb3VuZDogIzczRDI1Qztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/ecommerce/example3/example3.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ecommerce/example3/example3.page.ts ***!
  \***********************************************************/
/*! exports provided: Example3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example3Page", function() { return Example3Page; });
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

let Example3Page = class Example3Page {
    constructor() {
        this.id = 1;
    }
    ngOnInit() {
    }
    onClick(val) {
        this.id = val;
    }
};
Example3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-example3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ecommerce/example3/example3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./example3.page.scss */ "./src/app/pages/ecommerce/example3/example3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Example3Page);



/***/ })

}]);
//# sourceMappingURL=pages-ecommerce-example3-example3-module-es2015.js.map