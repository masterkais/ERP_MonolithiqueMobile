(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-screens-profile-ex4-profile-ex4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex4/profile-ex4.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex4/profile-ex4.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>profile-ex4</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-icon name=\"arrow-back-outline\" class=\"back_btn\" [class.ios_pad]=\"plt == 'ios'\" (click)=\"goBack()\"></ion-icon>\n\n    <div class=\"cover_div\" [style.backgroundImage]=\"'url(assets/imgs/cover.jpg)'\">\n      <div class=\"overlay\"></div>\n      <div class=\"user_image\" [style.backgroundImage]=\"'url(assets/imgs/user2.jpg)'\"></div>\n\n      <div class=\"detail_div\">\n        <ion-label class=\"username\">Jonh Doe</ion-label>\n        <ion-label class=\"location\">Paris, France</ion-label>\n\n        <div class=\"flex_div\">\n          <div>\n            <ion-label class=\"bold\">10.2 k</ion-label>\n            <ion-label>Followers</ion-label>\n          </div>\n          <div>\n            <ion-label class=\"bold\">70</ion-label>\n            <ion-label>Following</ion-label>\n          </div>\n          <div>\n            <ion-label class=\"bold\">700</ion-label>\n            <ion-label>Posts</ion-label>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"bottom_div\">\n      <ion-label class=\"head_lbl\">About</ion-label>\n      <ion-label class=\"about_lbl\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n      </ion-label>\n\n      <ion-label class=\"head_lbl\">Posts</ion-label>\n\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"4\" *ngFor=\"let item of dummyData\">\n            <div class=\"back_image\" [style.backgroundImage]=\"'url(' + item.url + ')'\"></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex4/profile-ex4-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex4/profile-ex4-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfileEx4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx4PageRoutingModule", function() { return ProfileEx4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_ex4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-ex4.page */ "./src/app/pages/profile-screens/profile-ex4/profile-ex4.page.ts");




const routes = [
    {
        path: '',
        component: _profile_ex4_page__WEBPACK_IMPORTED_MODULE_3__["ProfileEx4Page"]
    }
];
let ProfileEx4PageRoutingModule = class ProfileEx4PageRoutingModule {
};
ProfileEx4PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileEx4PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex4/profile-ex4.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex4/profile-ex4.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileEx4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx4PageModule", function() { return ProfileEx4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_ex4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-ex4-routing.module */ "./src/app/pages/profile-screens/profile-ex4/profile-ex4-routing.module.ts");
/* harmony import */ var _profile_ex4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-ex4.page */ "./src/app/pages/profile-screens/profile-ex4/profile-ex4.page.ts");







let ProfileEx4PageModule = class ProfileEx4PageModule {
};
ProfileEx4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_ex4_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEx4PageRoutingModule"]
        ],
        declarations: [_profile_ex4_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEx4Page"]]
    })
], ProfileEx4PageModule);



/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex4/profile-ex4.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex4/profile-ex4.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .back_btn {\n  font-size: 25px;\n  color: white;\n  position: absolute;\n  z-index: 999;\n  margin-left: 16px;\n  margin-top: 16px;\n}\n.main_content_div .cover_div {\n  width: 100%;\n  height: 350px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.main_content_div .cover_div .overlay {\n  width: 100%;\n  height: 350px;\n  background: rgba(0, 0, 0, 0.4);\n}\n.main_content_div .cover_div .user_image {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.main_content_div .cover_div .detail_div {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n}\n.main_content_div .cover_div .detail_div .username {\n  color: white;\n  font-weight: 600;\n  text-align: center;\n  font-size: 20px;\n}\n.main_content_div .cover_div .detail_div .location {\n  color: white;\n  text-align: center;\n  margin-top: 5px;\n  letter-spacing: 1px;\n  font-weight: 600;\n}\n.main_content_div .cover_div .flex_div {\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  margin-top: 30px;\n}\n.main_content_div .cover_div .flex_div ion-label {\n  text-align: center;\n}\n.main_content_div .cover_div .flex_div .bold {\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.main_content_div .bottom_div {\n  padding: 20px;\n}\n.main_content_div .bottom_div .head_lbl {\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 15px;\n}\n.main_content_div .bottom_div .about_lbl {\n  color: lightgray;\n  line-height: 1.4rem;\n}\n.main_content_div .bottom_div ion-grid {\n  padding: 0px;\n}\n.main_content_div .bottom_div .back_image {\n  height: 100px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1zY3JlZW5zL3Byb2ZpbGUtZXg0L0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlLXNjcmVlbnNcXHByb2ZpbGUtZXg0XFxwcm9maWxlLWV4NC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtc2NyZWVucy9wcm9maWxlLWV4NC9wcm9maWxlLWV4NC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7QUNDUjtBREVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURHSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0RaO0FER1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNEWjtBRElRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0ZaO0FESVk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGaEI7QURJWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRmhCO0FETVE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7RUFDQSxnQkFBQTtBQ0paO0FETVk7RUFDSSxrQkFBQTtBQ0poQjtBRE1ZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0poQjtBRFFJO0VBQ0ksYUFBQTtBQ05SO0FEUVE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOWjtBRFFRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ05aO0FEU1E7RUFDSSxZQUFBO0FDUFo7QURTUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDUFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlLXNjcmVlbnMvcHJvZmlsZS1leDQvcHJvZmlsZS1leDQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuYmFja19idG57XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLmNvdmVyX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5vdmVybGF5e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyX2ltYWdle1xuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogMzAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxfZGl2e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcblxuICAgICAgICAgICAgLnVzZXJuYW1le1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9jYXRpb257XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXhfZGl2e1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJvbGR7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ib3R0b21fZGl2e1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuYWJvdXRfbGJse1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XG4gICAgICAgIH1cblxuICAgICAgICBpb24tZ3JpZHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19idG4ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvdmVyX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb3Zlcl9kaXYgLm92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvdmVyX2RpdiAudXNlcl9pbWFnZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAzMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvdmVyX2RpdiAuZGV0YWlsX2RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvdmVyX2RpdiAuZGV0YWlsX2RpdiAudXNlcm5hbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvdmVyX2RpdiAuZGV0YWlsX2RpdiAubG9jYXRpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvdmVyX2RpdiAuZmxleF9kaXYge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb3Zlcl9kaXYgLmZsZXhfZGl2IGlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb3Zlcl9kaXYgLmZsZXhfZGl2IC5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib3R0b21fZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib3R0b21fZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm90dG9tX2RpdiAuYWJvdXRfbGJsIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib3R0b21fZGl2IGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJvdHRvbV9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex4/profile-ex4.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex4/profile-ex4.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileEx4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx4Page", function() { return ProfileEx4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/grid/grid-service.service */ "./src/app/services/grid/grid-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/



let ProfileEx4Page = class ProfileEx4Page {
    constructor(grid, navCtrl) {
        this.grid = grid;
        this.navCtrl = navCtrl;
        this.dummyData = [];
        this.dummyData = this.grid.data;
        this.plt = localStorage.getItem('platform');
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
ProfileEx4Page.ctorParameters = () => [
    { type: src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ProfileEx4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-ex4',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-ex4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex4/profile-ex4.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-ex4.page.scss */ "./src/app/pages/profile-screens/profile-ex4/profile-ex4.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ProfileEx4Page);



/***/ })

}]);
//# sourceMappingURL=pages-profile-screens-profile-ex4-profile-ex4-module-es2015.js.map