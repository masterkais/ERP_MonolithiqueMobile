(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-timeline-timeline1-timeline1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline1/timeline1.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline1/timeline1.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Timeline 1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"card_div\" *ngFor=\"let item of [1,2,3,4,5]; let i = index\">\n\n      <div class=\"flex_div\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user2.jpg)'\"></div>\n        <div class=\"user_div\">\n          <ion-label class=\"username\">Jonh Doe</ion-label>\n          <ion-label class=\"location\">Paris, France</ion-label>\n        </div>\n      </div>\n\n      <div class=\"content_div\">\n\n        <ion-label>\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n        </ion-label>\n\n        <div class=\"back_img\" *ngIf=\"i == 1\" [style.backgroundImage]=\"'url(assets/imgs/image1.jpg)'\"></div>\n      </div>\n\n      <div class=\"bottom_div\">\n        <ion-icon name=\"thumbs-up-sharp\"></ion-icon>\n        <ion-label>12 Likes</ion-label>\n        <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n        <ion-label>4 Comments</ion-label>\n        <span class=\"time\">4 days ago</span>\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/timeline/timeline1/timeline1-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/timeline/timeline1/timeline1-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: Timeline1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline1PageRoutingModule", function() { return Timeline1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _timeline1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline1.page */ "./src/app/pages/timeline/timeline1/timeline1.page.ts");




const routes = [
    {
        path: '',
        component: _timeline1_page__WEBPACK_IMPORTED_MODULE_3__["Timeline1Page"]
    }
];
let Timeline1PageRoutingModule = class Timeline1PageRoutingModule {
};
Timeline1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Timeline1PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/timeline/timeline1/timeline1.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/timeline/timeline1/timeline1.module.ts ***!
  \**************************************************************/
/*! exports provided: Timeline1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline1PageModule", function() { return Timeline1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _timeline1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline1-routing.module */ "./src/app/pages/timeline/timeline1/timeline1-routing.module.ts");
/* harmony import */ var _timeline1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline1.page */ "./src/app/pages/timeline/timeline1/timeline1.page.ts");







let Timeline1PageModule = class Timeline1PageModule {
};
Timeline1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _timeline1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Timeline1PageRoutingModule"]
        ],
        declarations: [_timeline1_page__WEBPACK_IMPORTED_MODULE_6__["Timeline1Page"]]
    })
], Timeline1PageModule);



/***/ }),

/***/ "./src/app/pages/timeline/timeline1/timeline1.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/timeline/timeline1/timeline1.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: whitesmoke;\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .card_div {\n  background: white;\n  margin-bottom: 15px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n}\n\n.main_content_div .card_div .flex_div {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 15px;\n}\n\n.main_content_div .card_div .flex_div .back_image {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.main_content_div .card_div .flex_div .user_div {\n  padding-left: 10px;\n}\n\n.main_content_div .card_div .flex_div .user_div .username {\n  font-weight: 600;\n}\n\n.main_content_div .card_div .flex_div .user_div .location {\n  color: gray;\n  font-size: 14px;\n}\n\n.main_content_div .card_div .content_div {\n  padding-top: 0px;\n  font-size: 14px;\n  border-bottom: 1px solid lightgray;\n}\n\n.main_content_div .card_div .content_div ion-label {\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-bottom: 20px;\n}\n\n.main_content_div .card_div .content_div .back_img {\n  height: 200px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.main_content_div .card_div .bottom_div {\n  padding: 15px;\n  display: -webkit-box;\n  display: flex;\n  align-self: center;\n  position: relative;\n}\n\n.main_content_div .card_div .bottom_div ion-label {\n  margin-left: 5px;\n  margin-right: 10px;\n  font-size: 14px;\n}\n\n.main_content_div .card_div .bottom_div ion-icon {\n  color: lightgray;\n  font-size: 20px;\n}\n\n.main_content_div .card_div .bottom_div .time {\n  position: absolute;\n  right: 15px;\n  font-size: 14px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGltZWxpbmUvdGltZWxpbmUxL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFx0aW1lbGluZVxcdGltZWxpbmUxXFx0aW1lbGluZTEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90aW1lbGluZS90aW1lbGluZTEvdGltZWxpbmUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0VKOztBREFJO0VBQ0ksY0FBQTtBQ0VSOztBRENJO0VBQ0ksaUJBQUE7RUFFQSxtQkFBQTtFQUNBLDBDQUFBO0FDQVI7O0FERVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7QUNBWjs7QURDWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNDaEI7O0FEQ1k7RUFDSSxrQkFBQTtBQ0NoQjs7QURDZ0I7RUFDSSxnQkFBQTtBQ0NwQjs7QURDZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NwQjs7QURJUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDRlo7O0FESVk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNGaEI7O0FES1k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0hoQjs7QURPUTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTFo7O0FET1k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0xoQjs7QURRWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ05oQjs7QURRWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDTmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGltZWxpbmUvdGltZWxpbmUxL3RpbWVsaW5lMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2e1xuICAgICAgICBiYWNrZ3JvdW5kIDogd2hpdGU7XG4gICAgICAgIC8vIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4zKTtcblxuICAgICAgICAuZmxleF9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51c2VyX2RpdntcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAudXNlcm5hbWV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2NhdGlvbntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudF9kaXZ7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYWNrX2ltZ3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYm90dG9tX2RpdntcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aW1le1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmZsZXhfZGl2IC5iYWNrX2ltYWdlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmZsZXhfZGl2IC51c2VyX2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZmxleF9kaXYgLnVzZXJfZGl2IC51c2VybmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmZsZXhfZGl2IC51c2VyX2RpdiAubG9jYXRpb24ge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jb250ZW50X2RpdiB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmNvbnRlbnRfZGl2IC5iYWNrX2ltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmJvdHRvbV9kaXYge1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuYm90dG9tX2RpdiBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuYm90dG9tX2RpdiBpb24taWNvbiB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuYm90dG9tX2RpdiAudGltZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/timeline/timeline1/timeline1.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/timeline/timeline1/timeline1.page.ts ***!
  \************************************************************/
/*! exports provided: Timeline1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline1Page", function() { return Timeline1Page; });
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

let Timeline1Page = class Timeline1Page {
    constructor() { }
    ngOnInit() {
    }
};
Timeline1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timeline1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline1/timeline1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timeline1.page.scss */ "./src/app/pages/timeline/timeline1/timeline1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Timeline1Page);



/***/ })

}]);
//# sourceMappingURL=pages-timeline-timeline1-timeline1-module-es2015.js.map