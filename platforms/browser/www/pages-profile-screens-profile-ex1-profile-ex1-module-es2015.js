(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-screens-profile-ex1-profile-ex1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex1/profile-ex1.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex1/profile-ex1.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>profile-ex1</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <ion-icon name=\"arrow-back-outline\" [class.ios_pad]=\"plt == 'ios'\" class=\"back_btn\" (click)=\"goBack()\"></ion-icon>\n\n    <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/cover.jpg)'\"></div>\n    <div class=\"user_image\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\n\n    <div class=\"detail_div\">\n      <ion-label class=\"username\">Jonh Doe</ion-label>\n      <ion-label class=\"location\">\n        <ion-icon name=\"location\"></ion-icon> Paris, France\n      </ion-label>\n\n      <div class=\"follow_div\">\n        <ion-button shape=\"round\">\n          Follow\n        </ion-button>\n        <img src=\"assets/imgs/email.png\" class=\"email\">\n      </div>\n\n      <div class=\"following_div\">\n        <div>\n          <ion-label class=\"bold_lbl\">200</ion-label>\n          <ion-label>Posts</ion-label>\n        </div>\n        <div>\n          <ion-label class=\"bold_lbl\">10.3 k</ion-label>\n          <ion-label>Followers</ion-label>\n        </div>\n        <div>\n          <ion-label class=\"bold_lbl\">700</ion-label>\n          <ion-label>Following</ion-label>\n        </div>\n      </div>\n\n      <div class=\"post_feed\">\n        <div class=\"card_div\" *ngFor=\"let item of data\">\n          <div class=\"back_img\" [style.backgroundImage]=\"'url(' + item.url + ')'\"></div>\n          <div class=\"like_div\">\n            <ion-icon name=\"heart-outline\" style=\"font-size: 28px;\"></ion-icon>\n            <ion-icon name=\"chatbubble-outline\"></ion-icon>\n            <ion-icon name=\"bookmark-outline\"></ion-icon>\n          </div>\n          <div class=\"caption_div\">\n            Liked by <span>Jonh Doe and 33 others</span> #Nightout unknown place\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex1/profile-ex1-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex1/profile-ex1-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfileEx1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx1PageRoutingModule", function() { return ProfileEx1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_ex1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-ex1.page */ "./src/app/pages/profile-screens/profile-ex1/profile-ex1.page.ts");




const routes = [
    {
        path: '',
        component: _profile_ex1_page__WEBPACK_IMPORTED_MODULE_3__["ProfileEx1Page"]
    }
];
let ProfileEx1PageRoutingModule = class ProfileEx1PageRoutingModule {
};
ProfileEx1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileEx1PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex1/profile-ex1.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex1/profile-ex1.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileEx1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx1PageModule", function() { return ProfileEx1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_ex1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-ex1-routing.module */ "./src/app/pages/profile-screens/profile-ex1/profile-ex1-routing.module.ts");
/* harmony import */ var _profile_ex1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-ex1.page */ "./src/app/pages/profile-screens/profile-ex1/profile-ex1.page.ts");







let ProfileEx1PageModule = class ProfileEx1PageModule {
};
ProfileEx1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_ex1_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEx1PageRoutingModule"]
        ],
        declarations: [_profile_ex1_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEx1Page"]]
    })
], ProfileEx1PageModule);



/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex1/profile-ex1.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex1/profile-ex1.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div .back_btn {\n  position: absolute;\n  z-index: 999;\n  color: white;\n  margin-left: 14px;\n  margin-top: 16px;\n  font-size: 25px;\n}\n.main_content_div .back_image {\n  height: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 130%;\n  height: 250px;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  position: absolute;\n}\n.main_content_div .user_image {\n  height: 100px;\n  width: 100px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  z-index: 999;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  margin-top: 200px;\n  border: 4px solid white;\n}\n.main_content_div .detail_div {\n  width: 100%;\n  padding-top: 310px;\n}\n.main_content_div .detail_div ion-label {\n  display: block;\n}\n.main_content_div .detail_div .username {\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n}\n.main_content_div .detail_div .location {\n  text-align: center;\n  color: lightgray;\n  margin-top: 10px;\n  font-size: 20px;\n}\n.main_content_div .detail_div .follow_div {\n  margin-top: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0px 20px;\n}\n.main_content_div .detail_div .follow_div ion-button {\n  --background: #1A4E52;\n  margin-right: 20px;\n  width: 130px;\n}\n.main_content_div .detail_div .follow_div .email {\n  width: 40px;\n  height: 40px;\n}\n.main_content_div .detail_div .following_div {\n  margin-top: 30px;\n  width: 100%;\n  background: #f3f3f3;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  height: 90px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .detail_div .following_div ion-label {\n  text-align: center;\n}\n.main_content_div .detail_div .following_div .bold_lbl {\n  font-weight: bold;\n  font-size: 20px;\n  margin-bottom: 5px;\n}\n.main_content_div .detail_div .post_feed {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 30px;\n}\n.main_content_div .detail_div .post_feed .card_div {\n  margin-bottom: 30px;\n}\n.main_content_div .detail_div .post_feed .card_div .back_img {\n  height: 200px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div .detail_div .post_feed .card_div .like_div {\n  width: 100%;\n  height: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .detail_div .post_feed .card_div .like_div ion-icon {\n  font-size: 25px;\n  margin-right: 10px;\n  color: #1A4E52;\n}\n.main_content_div .detail_div .post_feed .card_div .caption_div span {\n  font-weight: 600;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1zY3JlZW5zL3Byb2ZpbGUtZXgxL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlLXNjcmVlbnNcXHByb2ZpbGUtZXgxXFxwcm9maWxlLWV4MS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtc2NyZWVucy9wcm9maWxlLWV4MS9wcm9maWxlLWV4MS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FERUk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURHSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNEUjtBRElJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRlI7QURJUTtFQUNJLGNBQUE7QUNGWjtBREtRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNIWjtBREtRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0haO0FETVE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0FDSlo7QURNWTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSmhCO0FET1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0xoQjtBRFNRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDUFo7QURRWTtFQUNJLGtCQUFBO0FDTmhCO0FEU1k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1BoQjtBRFdRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1RaO0FEVVk7RUFDSSxtQkFBQTtBQ1JoQjtBRFVnQjtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDUnBCO0FEV2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDVHBCO0FEV29CO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ1R4QjtBRGFvQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ1h4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtc2NyZWVucy9wcm9maWxlLWV4MS9wcm9maWxlLWV4MS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5iYWNrX2J0bntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDoxMzAlO1xuICAgICAgICBoZWlnaHQ6MjUwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NTAlO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIC51c2VyX2ltYWdle1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZGV0YWlsX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMTBweDtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlcm5hbWV7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAubG9jYXRpb257XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb2xsb3dfZGl2e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMxQTRFNTI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmVtYWlse1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb2xsb3dpbmdfZGl2e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJvbGRfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9mZWVke1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIC5jYXJkX2RpdntcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgICAgICAgICAgICAgLmJhY2tfaW1ne1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5saWtlX2RpdntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMUE0RTUyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jYXB0aW9uX2RpdntcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2J0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEzMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXNlcl9pbWFnZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDMxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAudXNlcm5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAubG9jYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5mb2xsb3dfZGl2IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5mb2xsb3dfZGl2IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMxQTRFNTI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgd2lkdGg6IDEzMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLmZvbGxvd19kaXYgLmVtYWlsIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5mb2xsb3dpbmdfZGl2IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuZm9sbG93aW5nX2RpdiBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuZm9sbG93aW5nX2RpdiAuYm9sZF9sYmwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAucG9zdF9mZWVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5wb3N0X2ZlZWQgLmNhcmRfZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5wb3N0X2ZlZWQgLmNhcmRfZGl2IC5iYWNrX2ltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAucG9zdF9mZWVkIC5jYXJkX2RpdiAubGlrZV9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnBvc3RfZmVlZCAuY2FyZF9kaXYgLmxpa2VfZGl2IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjMUE0RTUyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnBvc3RfZmVlZCAuY2FyZF9kaXYgLmNhcHRpb25fZGl2IHNwYW4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex1/profile-ex1.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex1/profile-ex1.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileEx1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx1Page", function() { return ProfileEx1Page; });
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



let ProfileEx1Page = class ProfileEx1Page {
    constructor(grid, navCtrl) {
        this.grid = grid;
        this.navCtrl = navCtrl;
        this.plt = localStorage.getItem('platform');
        this.data = this.grid.data2;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
ProfileEx1Page.ctorParameters = () => [
    { type: _services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ProfileEx1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-ex1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-ex1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex1/profile-ex1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-ex1.page.scss */ "./src/app/pages/profile-screens/profile-ex1/profile-ex1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_2__["GridServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ProfileEx1Page);



/***/ })

}]);
//# sourceMappingURL=pages-profile-screens-profile-ex1-profile-ex1-module-es2015.js.map