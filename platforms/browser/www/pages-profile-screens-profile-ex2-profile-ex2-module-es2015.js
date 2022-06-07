(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-screens-profile-ex2-profile-ex2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex2/profile-ex2.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex2/profile-ex2.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Profile Example 2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"upper_div\">\n      <div class=\"user_image\" [style.backgroundImage]=\"'url(assets/imgs/user2.jpg)'\"></div>\n      <div class=\"detail_div\">\n        <ion-label class=\"header_lbl\">Work Status</ion-label>\n        <ion-label>\n          <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon> Paris, France\n        </ion-label>\n        <ion-label>At Bank</ion-label>\n        <ion-label>Contract Signing</ion-label>\n\n        <div class=\"line_div\"></div>\n\n        <div class=\"tab_div\">\n          <div>\n            <ion-label class=\"bold_lbl\">230</ion-label>\n            <ion-label>Contacts</ion-label>\n          </div>\n          <div>\n            <ion-label class=\"bold_lbl\">150</ion-label>\n            <ion-label>Meetings</ion-label>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"name_div\">\n      <ion-label class=\"username\">Jonh Doe</ion-label>\n      <ion-label class=\"gray_lbl\">Junior Manager</ion-label>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"last_div\">\n      <ion-label class=\"header_lbl\">Technologies</ion-label>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">Angular</ion-col>\n          <ion-col size=\"8\">\n            <ion-progress-bar value=\"0.5\" mode=\"md\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"4\">Java</ion-col>\n          <ion-col size=\"8\">\n            <ion-progress-bar value=\"0.5\" mode=\"md\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"4\">PHP</ion-col>\n          <ion-col size=\"8\">\n            <ion-progress-bar value=\"0.5\" mode=\"md\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class=\"last_div\">\n      <ion-label class=\"header_lbl\">Technical Skills</ion-label>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">Mac OS</ion-col>\n          <ion-col size=\"8\">\n            <ion-progress-bar value=\"0.5\" mode=\"md\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"4\">Windows OS</ion-col>\n          <ion-col size=\"8\">\n            <ion-progress-bar value=\"0.5\" mode=\"md\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"4\">Linux OS</ion-col>\n          <ion-col size=\"8\">\n            <ion-progress-bar value=\"0.5\" mode=\"md\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex2/profile-ex2-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex2/profile-ex2-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfileEx2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx2PageRoutingModule", function() { return ProfileEx2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_ex2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-ex2.page */ "./src/app/pages/profile-screens/profile-ex2/profile-ex2.page.ts");




const routes = [
    {
        path: '',
        component: _profile_ex2_page__WEBPACK_IMPORTED_MODULE_3__["ProfileEx2Page"]
    }
];
let ProfileEx2PageRoutingModule = class ProfileEx2PageRoutingModule {
};
ProfileEx2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileEx2PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex2/profile-ex2.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex2/profile-ex2.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileEx2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx2PageModule", function() { return ProfileEx2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_ex2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-ex2-routing.module */ "./src/app/pages/profile-screens/profile-ex2/profile-ex2-routing.module.ts");
/* harmony import */ var _profile_ex2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-ex2.page */ "./src/app/pages/profile-screens/profile-ex2/profile-ex2.page.ts");







let ProfileEx2PageModule = class ProfileEx2PageModule {
};
ProfileEx2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_ex2_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEx2PageRoutingModule"]
        ],
        declarations: [_profile_ex2_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEx2Page"]]
    })
], ProfileEx2PageModule);



/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex2/profile-ex2.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex2/profile-ex2.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .line_div {\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .upper_div {\n  display: -webkit-box;\n  display: flex;\n}\n.main_content_div .upper_div .user_image {\n  height: 200px;\n  width: 150px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border: 10px solid #f3f3f3;\n  min-width: 150px;\n}\n.main_content_div .upper_div .detail_div {\n  padding-left: 20px;\n  width: 100%;\n}\n.main_content_div .upper_div .detail_div .header_lbl {\n  font-weight: 600;\n  text-align: left;\n  color: black !important;\n}\n.main_content_div .upper_div .detail_div ion-label {\n  text-align: right;\n  margin-top: 10px;\n  color: gray;\n}\n.main_content_div .upper_div .detail_div .tab_div {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div .upper_div .detail_div .tab_div .bold_lbl {\n  font-weight: 600;\n}\n.main_content_div .upper_div .detail_div .tab_div ion-label {\n  text-align: center;\n}\n.main_content_div .name_div {\n  margin-top: 30px;\n}\n.main_content_div .name_div .username {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n.main_content_div .name_div .gray_lbl {\n  color: lightgray;\n}\n.main_content_div .last_div .header_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.main_content_div .last_div ion-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .last_div ion-progress-bar {\n  --progress-background: #1A4E52;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1zY3JlZW5zL3Byb2ZpbGUtZXgyL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlLXNjcmVlbnNcXHByb2ZpbGUtZXgyXFxwcm9maWxlLWV4Mi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtc2NyZWVucy9wcm9maWxlLWV4Mi9wcm9maWxlLWV4Mi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0FDQ1I7QURFSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0RSO0FESVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNGWjtBRElRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDRlo7QURJWTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZoQjtBRElZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNGaEI7QURLWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDSGhCO0FES2dCO0VBQ0ksZ0JBQUE7QUNIcEI7QURNZ0I7RUFDSSxrQkFBQTtBQ0pwQjtBRFVJO0VBQ0ksZ0JBQUE7QUNSUjtBRFVRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDUlo7QURVUTtFQUNJLGdCQUFBO0FDUlo7QURjUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNaWjtBRGdCUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNkWjtBRGdCUTtFQUNJLDhCQUFBO0FDZFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlLXNjcmVlbnMvcHJvZmlsZS1leDIvcHJvZmlsZS1leDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5saW5lX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLnVwcGVyX2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLnVzZXJfaW1hZ2V7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgI2YzZjNmMztcbiAgICAgICAgICAgIG1pbi13aWR0aDogIDE1MHB4OyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbF9kaXZ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgLmhlYWRlcl9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGFiX2RpdntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgICAgIC5ib2xkX2xibHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5hbWVfZGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgIC51c2VybmFtZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXlfbGJse1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sYXN0X2RpdntcblxuICAgICAgICAuaGVhZGVyX2xibHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXJvd3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1wcm9ncmVzcy1iYXJ7XG4gICAgICAgICAgICAtLXByb2dyZXNzLWJhY2tncm91bmQgIDogIzFBNEU1MjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGluZV9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAudXNlcl9pbWFnZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXI6IDEwcHggc29saWQgI2YzZjNmMztcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgLmRldGFpbF9kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuZGV0YWlsX2RpdiAuaGVhZGVyX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuZGV0YWlsX2RpdiBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IC5kZXRhaWxfZGl2IC50YWJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgLmRldGFpbF9kaXYgLnRhYl9kaXYgLmJvbGRfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgLmRldGFpbF9kaXYgLnRhYl9kaXYgaW9uLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWVfZGl2IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lX2RpdiAudXNlcm5hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZV9kaXYgLmdyYXlfbGJsIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sYXN0X2RpdiAuaGVhZGVyX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sYXN0X2RpdiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sYXN0X2RpdiBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjMUE0RTUyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/profile-screens/profile-ex2/profile-ex2.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile-screens/profile-ex2/profile-ex2.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileEx2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEx2Page", function() { return ProfileEx2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/


let ProfileEx2Page = class ProfileEx2Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
ProfileEx2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ProfileEx2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-ex2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-ex2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-screens/profile-ex2/profile-ex2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-ex2.page.scss */ "./src/app/pages/profile-screens/profile-ex2/profile-ex2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ProfileEx2Page);



/***/ })

}]);
//# sourceMappingURL=pages-profile-screens-profile-ex2-profile-ex2-module-es2015.js.map