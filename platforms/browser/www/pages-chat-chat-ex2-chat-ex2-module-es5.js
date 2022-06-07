function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-ex2-chat-ex2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex2/chat-ex2.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex2/chat-ex2.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChatChatEx2ChatEx2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <!-- <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Chat Example 2</ion-title>\n  </ion-toolbar> -->\n\n  <div class=\"header_div\">\n    <div>\n      <ion-buttons slot=\"start\">\n        <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\n      </ion-buttons>\n    </div>\n    <div>\n      <ion-label class=\"username\">Jonh Doe</ion-label>\n    </div>\n    <div>\n      <ion-button fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"videocam\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <span *ngFor=\"let item of msgs\">\n      <div class=\"left_div\" *ngIf=\"item.side == 'left'\">\n        <div class=\"inner_div\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\n          <div class=\"msg_div\">\n            <ion-label>{{item.msg}}</ion-label>\n            <div class=\"tri_left\"></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"right_div\" *ngIf=\"item.side == 'right'\">\n        <div class=\"inner_div\">\n          <div class=\"msg_div\">\n            <ion-label>{{item.msg}}</ion-label>\n            <div class=\"tri_right\"></div>\n          </div>\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user2.jpg)'\"></div>\n        </div>\n      </div>\n    </span>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class=\"footer_div\">\n    <ion-input type=\"text\" placeholder=\"Type Here..\"></ion-input>\n    <div class=\"chat_div\">\n      <ion-icon name=\"navigate\"></ion-icon>\n    </div>\n  </div>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/chat/chat-ex2/chat-ex2-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/chat/chat-ex2/chat-ex2-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: ChatEx2PageRoutingModule */

  /***/
  function srcAppPagesChatChatEx2ChatEx2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatEx2PageRoutingModule", function () {
      return ChatEx2PageRoutingModule;
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


    var _chat_ex2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-ex2.page */
    "./src/app/pages/chat/chat-ex2/chat-ex2.page.ts");

    var routes = [{
      path: '',
      component: _chat_ex2_page__WEBPACK_IMPORTED_MODULE_3__["ChatEx2Page"]
    }];

    var ChatEx2PageRoutingModule = function ChatEx2PageRoutingModule() {
      _classCallCheck(this, ChatEx2PageRoutingModule);
    };

    ChatEx2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatEx2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/chat/chat-ex2/chat-ex2.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/chat/chat-ex2/chat-ex2.module.ts ***!
    \********************************************************/

  /*! exports provided: ChatEx2PageModule */

  /***/
  function srcAppPagesChatChatEx2ChatEx2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatEx2PageModule", function () {
      return ChatEx2PageModule;
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


    var _chat_ex2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-ex2-routing.module */
    "./src/app/pages/chat/chat-ex2/chat-ex2-routing.module.ts");
    /* harmony import */


    var _chat_ex2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-ex2.page */
    "./src/app/pages/chat/chat-ex2/chat-ex2.page.ts");

    var ChatEx2PageModule = function ChatEx2PageModule() {
      _classCallCheck(this, ChatEx2PageModule);
    };

    ChatEx2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_ex2_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatEx2PageRoutingModule"]],
      declarations: [_chat_ex2_page__WEBPACK_IMPORTED_MODULE_6__["ChatEx2Page"]]
    })], ChatEx2PageModule);
    /***/
  },

  /***/
  "./src/app/pages/chat/chat-ex2/chat-ex2.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/chat/chat-ex2/chat-ex2.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChatChatEx2ChatEx2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 50px;\n  border-bottom: 1px solid lightgray;\n  background-color: #4BE3B0;\n}\n.header_div .username {\n  font-weight: 600;\n  color: white;\n}\n.header_div ion-icon {\n  color: white;\n}\n.main_content_div {\n  width: 100%;\n  padding: 15px;\n}\n.main_content_div .back_image {\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n}\n.main_content_div .left_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 15px;\n}\n.main_content_div .left_div .inner_div {\n  width: 70%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.main_content_div .left_div .msg_div {\n  background: #F0EFF5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 15px;\n  border-radius: 5px;\n  margin-left: 5px;\n  position: relative;\n}\n.main_content_div .left_div .tri_left {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-top: 10px solid #F0EFF5;\n  border-left: 10px solid transparent;\n  top: 0px;\n  left: -7px;\n}\n.main_content_div .right_div {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.main_content_div .right_div .inner_div {\n  width: 70%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.main_content_div .right_div .tri_right {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-top: 10px solid #4BE3B0;\n  border-right: 10px solid transparent;\n  top: 0px;\n  right: -7px;\n}\n.main_content_div .right_div .msg_div {\n  background: #4BE3B0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 15px;\n  border-radius: 5px;\n  margin-right: 5px;\n  color: white;\n  position: relative;\n}\nion-footer .footer_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 20px;\n}\nion-footer ion-input {\n  border-radius: 25px;\n  border: 1px solid lightgray;\n  --padding-start: 8px;\n}\nion-footer .chat_div {\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  height: 35px;\n  width: 35px;\n  position: relative;\n  margin-left: 10px;\n}\nion-footer .chat_div ion-icon {\n  color: #4BE3B0;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-55%, -45%);\n          transform: translate(-55%, -45%);\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LWV4Mi9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcY2hhdFxcY2hhdC1leDJcXGNoYXQtZXgyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LWV4Mi9jaGF0LWV4Mi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNDUjtBRENJO0VBQ0ksWUFBQTtBQ0NSO0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FERUk7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVRO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7QUNBWjtBREdRO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRElRO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0ZaO0FES0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDSFI7QURNUTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDSlo7QURPUTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNMWjtBRFFRO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTlo7QURZSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNUUjtBRFdJO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDVFI7QURXSTtFQUNJLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNUUjtBRFVRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsZUFBQTtBQ1JaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LWV4Mi9jaGF0LWV4Mi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRCRTNCMDtcbiAgICBcbiAgICAudXNlcm5hbWV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWluLXdpZHRoOiA0NXB4O1xuICAgIH1cblxuICAgIC5sZWZ0X2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgLmlubmVyX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tc2dfZGl2e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0YwRUZGNTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50cmlfbGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjRjBFRkY1O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IC03cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cblxuICAgICAgICAuaW5uZXJfZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50cmlfcmlnaHR7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzRCRTNCMDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IC03cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubXNnX2RpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0QkUzQjA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVye1xuICAgIC5mb290ZXJfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB9XG4gICAgaW9uLWlucHV0e1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgIH1cbiAgICAuY2hhdF9kaXZ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzRCRTNCMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTU1JSwtNDUlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuaGVhZGVyX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCRTNCMDtcbn1cbi5oZWFkZXJfZGl2IC51c2VybmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFkZXJfZGl2IGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogNDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxlZnRfZGl2IC5pbm5lcl9kaXYge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGVmdF9kaXYgLm1zZ19kaXYge1xuICBiYWNrZ3JvdW5kOiAjRjBFRkY1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxlZnRfZGl2IC50cmlfbGVmdCB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjRjBFRkY1O1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IC03cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2IC5pbm5lcl9kaXYge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJpZ2h0X2RpdiAudHJpX3JpZ2h0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICM0QkUzQjA7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAtN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJpZ2h0X2RpdiAubXNnX2RpdiB7XG4gIGJhY2tncm91bmQ6ICM0QkUzQjA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1mb290ZXIgLmZvb3Rlcl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbmlvbi1mb290ZXIgaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbn1cbmlvbi1mb290ZXIgLmNoYXRfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pb24tZm9vdGVyIC5jaGF0X2RpdiBpb24taWNvbiB7XG4gIGNvbG9yOiAjNEJFM0IwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01NSUsIC00NSUpO1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/chat/chat-ex2/chat-ex2.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/chat/chat-ex2/chat-ex2.page.ts ***!
    \******************************************************/

  /*! exports provided: ChatEx2Page */

  /***/
  function srcAppPagesChatChatEx2ChatEx2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatEx2Page", function () {
      return ChatEx2Page;
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


    var src_app_services_chats_chat_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/chats/chat-data.service */
    "./src/app/services/chats/chat-data.service.ts");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var ChatEx2Page = /*#__PURE__*/function () {
      function ChatEx2Page(chat) {
        _classCallCheck(this, ChatEx2Page);

        this.chat = chat;
        this.msgs = [];
        this.msgs = this.chat.messages;
      }

      _createClass(ChatEx2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatEx2Page;
    }();

    ChatEx2Page.ctorParameters = function () {
      return [{
        type: src_app_services_chats_chat_data_service__WEBPACK_IMPORTED_MODULE_2__["ChatDataService"]
      }];
    };

    ChatEx2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-ex2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-ex2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex2/chat-ex2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-ex2.page.scss */
      "./src/app/pages/chat/chat-ex2/chat-ex2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_chats_chat_data_service__WEBPACK_IMPORTED_MODULE_2__["ChatDataService"]])], ChatEx2Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-chat-chat-ex2-chat-ex2-module-es5.js.map