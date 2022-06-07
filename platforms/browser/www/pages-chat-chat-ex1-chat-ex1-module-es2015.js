(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-ex1-chat-ex1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex1/chat-ex1.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex1/chat-ex1.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Chat Example 1</ion-title>\n  </ion-toolbar> -->\n\n  <div class=\"header_div\">\n    <div class=\"first_div\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\n      </ion-buttons>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\n      <ion-label>Jonh Doe</ion-label>\n    </div>\n    <div>\n      <ion-button fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"videocam\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <span *ngFor=\"let item of msgs\">\n      <div class=\"left_div\" *ngIf=\"item.side == 'left'\">\n        <div class=\"inner_div\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\n          <div class=\"msg_div\">\n            <ion-label>{{item.msg}}</ion-label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"right_div\" *ngIf=\"item.side == 'right'\">\n        <div class=\"inner_div\">\n          <div class=\"msg_div\">\n            <ion-label>{{item.msg}}</ion-label>\n          </div>\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user2.jpg)'\"></div>\n        </div>\n      </div>\n    </span>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class=\"footer_div\">\n    <ion-input type=\"text\" placeholder=\"Type Here..\">\n      <ion-icon name=\"navigate-circle\" slot=\"end\"></ion-icon>\n    </ion-input>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/chat/chat-ex1/chat-ex1-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/chat/chat-ex1/chat-ex1-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ChatEx1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEx1PageRoutingModule", function() { return ChatEx1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_ex1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-ex1.page */ "./src/app/pages/chat/chat-ex1/chat-ex1.page.ts");




const routes = [
    {
        path: '',
        component: _chat_ex1_page__WEBPACK_IMPORTED_MODULE_3__["ChatEx1Page"]
    }
];
let ChatEx1PageRoutingModule = class ChatEx1PageRoutingModule {
};
ChatEx1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatEx1PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/chat/chat-ex1/chat-ex1.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/chat/chat-ex1/chat-ex1.module.ts ***!
  \********************************************************/
/*! exports provided: ChatEx1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEx1PageModule", function() { return ChatEx1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_ex1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-ex1-routing.module */ "./src/app/pages/chat/chat-ex1/chat-ex1-routing.module.ts");
/* harmony import */ var _chat_ex1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-ex1.page */ "./src/app/pages/chat/chat-ex1/chat-ex1.page.ts");







let ChatEx1PageModule = class ChatEx1PageModule {
};
ChatEx1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_ex1_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatEx1PageRoutingModule"]
        ],
        declarations: [_chat_ex1_page__WEBPACK_IMPORTED_MODULE_6__["ChatEx1Page"]]
    })
], ChatEx1PageModule);



/***/ }),

/***/ "./src/app/pages/chat/chat-ex1/chat-ex1.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/chat/chat-ex1/chat-ex1.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 65px;\n  border-bottom: 1px solid lightgray;\n  background-color: #4BE3B0;\n}\n.header_div .first_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n  font-weight: bold;\n}\n.header_div .back_image {\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n  margin-right: 10px;\n}\n.header_div .username {\n  font-weight: 600;\n  color: white;\n}\n.header_div ion-icon {\n  color: white;\n}\n.main_content_div {\n  width: 100%;\n  padding: 15px;\n}\n.main_content_div .back_image {\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n}\n.main_content_div .left_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 15px;\n}\n.main_content_div .left_div .inner_div {\n  width: 70%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.main_content_div .left_div .msg_div {\n  background: #F0EFF5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 15px;\n  border-radius: 25px;\n  margin-left: 5px;\n}\n.main_content_div .right_div {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.main_content_div .right_div .inner_div {\n  width: 70%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.main_content_div .right_div .msg_div {\n  background: #4BE3B0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 15px;\n  border-radius: 25px;\n  margin-right: 5px;\n  color: white;\n}\nion-footer .footer_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 20px;\n}\nion-footer ion-input {\n  border-radius: 25px;\n  border: 1px solid lightgray;\n  --padding-start: 8px;\n}\nion-footer ion-icon {\n  color: #4BE3B0;\n  right: 5px;\n  position: absolute;\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LWV4MS9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcY2hhdFxcY2hhdC1leDFcXGNoYXQtZXgxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LWV4MS9jaGF0LWV4MS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQ0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDRFI7QURHSTtFQUNJLFlBQUE7QUNEUjtBRElBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNESjtBREdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNEUjtBRElJO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO0FDRlI7QURJUTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0FDRlo7QURLUTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0haO0FETUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDSlI7QURPUTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDTFo7QURRUTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNOWjtBRFdJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ1JSO0FEVUk7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNSUjtBRFdJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC1leDEvY2hhdC1leDEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcl9kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogNjVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QkUzQjA7XG5cbiAgICAuZmlyc3RfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAudXNlcm5hbWV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWluLXdpZHRoOiA0NXB4O1xuICAgIH1cblxuICAgIC5sZWZ0X2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgLmlubmVyX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tc2dfZGl2e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0YwRUZGNTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cblxuICAgICAgICAuaW5uZXJfZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tc2dfZGl2e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRCRTNCMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWZvb3RlcntcbiAgICAuZm9vdGVyX2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgfVxuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICB9XG5cbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6ICM0QkUzQjA7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgIH1cbn0iLCIuaGVhZGVyX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCRTNCMDtcbn1cbi5oZWFkZXJfZGl2IC5maXJzdF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhlYWRlcl9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogNDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlcl9kaXYgLnVzZXJuYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhlYWRlcl9kaXYgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiA0NXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxlZnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGVmdF9kaXYgLmlubmVyX2RpdiB7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiAubXNnX2RpdiB7XG4gIGJhY2tncm91bmQ6ICNGMEVGRjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yaWdodF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yaWdodF9kaXYgLmlubmVyX2RpdiB7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2IC5tc2dfZGl2IHtcbiAgYmFja2dyb3VuZDogIzRCRTNCMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tZm9vdGVyIC5mb290ZXJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5pb24tZm9vdGVyIGlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG59XG5pb24tZm9vdGVyIGlvbi1pY29uIHtcbiAgY29sb3I6ICM0QkUzQjA7XG4gIHJpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAzNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/chat/chat-ex1/chat-ex1.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/chat/chat-ex1/chat-ex1.page.ts ***!
  \******************************************************/
/*! exports provided: ChatEx1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEx1Page", function() { return ChatEx1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_chats_chat_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/chats/chat-data.service */ "./src/app/services/chats/chat-data.service.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/


let ChatEx1Page = class ChatEx1Page {
    constructor(chat) {
        this.chat = chat;
        this.msgs = [];
        this.msgs = this.chat.messages;
    }
    ngOnInit() {
    }
};
ChatEx1Page.ctorParameters = () => [
    { type: _services_chats_chat_data_service__WEBPACK_IMPORTED_MODULE_2__["ChatDataService"] }
];
ChatEx1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-ex1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-ex1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex1/chat-ex1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-ex1.page.scss */ "./src/app/pages/chat/chat-ex1/chat-ex1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chats_chat_data_service__WEBPACK_IMPORTED_MODULE_2__["ChatDataService"]])
], ChatEx1Page);



/***/ })

}]);
//# sourceMappingURL=pages-chat-chat-ex1-chat-ex1-module-es2015.js.map