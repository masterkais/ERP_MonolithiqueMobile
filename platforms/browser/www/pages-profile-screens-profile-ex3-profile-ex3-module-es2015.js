(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-screens-profile-ex3-profile-ex3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex3/profile-ex3.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex3/profile-ex3.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>profile-ex3</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"main_content_div\" [class.ios_pad]=\"plt == 'ios'\">\n    <ion-icon name=\"arrow-back-outline\" class=\"back_btn\" (click)=\"goBack()\"></ion-icon>\n\n    <div class=\"main_round\">\n      <div class=\"user_image\" [style.backgroundImage]=\"'url(assets/imgs/user2.jpg)'\"></div>\n      <div class=\"white_div\">\n        <ion-icon name=\"pencil-sharp\"></ion-icon>\n      </div>\n    </div>\n\n    <div class=\"content_div\">\n      <ion-label class=\"username\">John Doe</ion-label>\n      <ion-label class=\"small_lbl\">\n        <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon> Paris, France\n      </ion-label>\n\n      <ion-label class=\"head_lbl\">About</ion-label>\n      <ion-label class=\"about_lbl\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n      </ion-label>\n\n      <ion-label class=\"head_lbl\">Posts</ion-label>\n\n      <ion-grid fixed class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"ion-no-padding\" size=\"4\" *ngFor=\"let item of posts\">\n            <div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\"></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex3/profile-ex3-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex3/profile-ex3-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfileEx3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx3PageRoutingModule", function() { return ProfileEx3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_ex3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-ex3.page */ "./src/app/pages/profile-screens/profile-ex3/profile-ex3.page.ts");




const routes = [
    {
        path: '',
        component: _profile_ex3_page__WEBPACK_IMPORTED_MODULE_3__["ProfileEx3Page"]
    }
];
let ProfileEx3PageRoutingModule = class ProfileEx3PageRoutingModule {
};
ProfileEx3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileEx3PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex3/profile-ex3.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex3/profile-ex3.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileEx3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx3PageModule", function() { return ProfileEx3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_ex3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-ex3-routing.module */ "./src/app/pages/profile-screens/profile-ex3/profile-ex3-routing.module.ts");
/* harmony import */ var _profile_ex3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-ex3.page */ "./src/app/pages/profile-screens/profile-ex3/profile-ex3.page.ts");







let ProfileEx3PageModule = class ProfileEx3PageModule {
};
ProfileEx3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_ex3_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEx3PageRoutingModule"]
        ],
        declarations: [_profile_ex3_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEx3Page"]]
    })
], ProfileEx3PageModule);



/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex3/profile-ex3.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex3/profile-ex3.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div .back_btn {\n  font-size: 25px;\n  margin-left: 16px;\n  margin-top: 16px;\n}\n.main_content_div .main_round {\n  height: 130px;\n  width: 130px;\n  border-radius: 100%;\n  border: 3px solid skyblue;\n  margin: auto;\n  display: block;\n  margin-top: 80px;\n  position: relative;\n}\n.main_content_div .main_round .user_image {\n  height: 115px;\n  width: 115px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.main_content_div .main_round .white_div {\n  width: 65px;\n  height: 65px;\n  border-radius: 100%;\n  background-color: white;\n  position: absolute;\n  bottom: -25px;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n}\n.main_content_div .main_round .white_div ion-icon {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 22px;\n  color: skyblue;\n}\n.main_content_div .content_div {\n  padding: 20px;\n}\n.main_content_div .content_div ion-label {\n  display: block;\n}\n.main_content_div .content_div .username {\n  font-weight: 600;\n  text-align: center;\n}\n.main_content_div .content_div .small_lbl {\n  color: gray;\n  text-align: center;\n  margin-top: 5px;\n}\n.main_content_div .content_div .head_lbl {\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 15px;\n}\n.main_content_div .content_div .about_lbl {\n  color: lightgray;\n  line-height: 1.4rem;\n}\n.main_content_div .content_div .back_image {\n  height: 100px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1zY3JlZW5zL3Byb2ZpbGUtZXgzL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlLXNjcmVlbnNcXHByb2ZpbGUtZXgzXFxwcm9maWxlLWV4My5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtc2NyZWVucy9wcm9maWxlLWV4My9wcm9maWxlLWV4My5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURFSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURHSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RSO0FER1E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNEWjtBRElRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNGWjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0ZoQjtBRE9JO0VBQ0ksYUFBQTtBQ0xSO0FET1E7RUFDSSxjQUFBO0FDTFo7QURPUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNMWjtBRE9RO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0xaO0FEUVE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOWjtBRFFRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ05aO0FEUVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ05aIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS1zY3JlZW5zL3Byb2ZpbGUtZXgzL3Byb2ZpbGUtZXgzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5iYWNrX2J0bntcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG5cbiAgICAubWFpbl9yb3VuZHtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBza3libHVlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLnVzZXJfaW1hZ2V7XG4gICAgICAgICAgICBoZWlnaHQ6IDExNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDExNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndoaXRlX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtMjVweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBza3libHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnRfZGl2e1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAudXNlcm5hbWV7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuYWJvdXRfbGJse1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfYnRuIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX3JvdW5kIHtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDNweCBzb2xpZCBza3libHVlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubWFpbl9yb3VuZCAudXNlcl9pbWFnZSB7XG4gIGhlaWdodDogMTE1cHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW5fY29udGVudF9kaXYgLm1haW5fcm91bmQgLndoaXRlX2RpdiB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTI1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubWFpbl9yb3VuZCAud2hpdGVfZGl2IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogc2t5Ymx1ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnVzZXJuYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5zbWFsbF9sYmwge1xuICBjb2xvcjogZ3JheTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmhlYWRfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuYWJvdXRfbGJsIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex3/profile-ex3.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex3/profile-ex3.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileEx3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx3Page", function() { return ProfileEx3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/grid/grid-service.service */ "./src/app/services/grid/grid-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/



let ProfileEx3Page = class ProfileEx3Page {
    constructor(data, navCtrl) {
        this.data = data;
        this.navCtrl = navCtrl;
        this.posts = this.data.data;
        this.plt = localStorage.getItem('platform');
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
ProfileEx3Page.ctorParameters = () => [
    { type: _services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ProfileEx3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-ex3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-ex3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex3/profile-ex3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-ex3.page.scss */ "./src/app/pages/profile-screens/profile-ex3/profile-ex3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ProfileEx3Page);



/***/ })

}]);
//# sourceMappingURL=pages-profile-screens-profile-ex3-profile-ex3-module-es2015.js.map