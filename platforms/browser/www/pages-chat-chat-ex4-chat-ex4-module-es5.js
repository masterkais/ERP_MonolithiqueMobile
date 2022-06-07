function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-ex4-chat-ex4-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex4/chat-ex4.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex4/chat-ex4.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChatChatEx4ChatEx4PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <!-- <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>chatEx4</ion-title>\n  </ion-toolbar> -->\n\n  <div class=\"header_div\">\n    <div class=\"first_div\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button mode=\"md\" color=\"light\"></ion-back-button>\n      </ion-buttons>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\n      <ion-label>Jonh Doe</ion-label>\n    </div>\n    <div>\n      <ion-button fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <span *ngFor=\"let item of msgs\">\n      <div class=\"left_div\" *ngIf=\"item.side == 'left'\">\n        <div class=\"inner_div\">\n          <div class=\"msg_div\">\n            <ion-label>{{item.msg}}</ion-label>\n          </div>\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\n        </div>\n      </div>\n\n      <div class=\"right_div2\" *ngIf=\"item.side == 'right'\">\n        <div class=\"inner_div2\">\n          <div class=\"msg2_div\">\n            <ion-label>{{item.msg}}</ion-label>\n          </div>\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/user2.jpg)'\"></div>\n        </div>\n      </div>\n    </span>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class=\"footer_div\">\n    <ion-icon name=\"happy-outline\" class=\"smiley\"></ion-icon>\n    <ion-input type=\"text\" placeholder=\"Type Here..\"></ion-input>\n    <ion-icon name=\"navigate-circle\" class=\"send\"></ion-icon>\n  </div>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/chat/chat-ex4/chat-ex4-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/chat/chat-ex4/chat-ex4-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: ChatEx4PageRoutingModule */

  /***/
  function srcAppPagesChatChatEx4ChatEx4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatEx4PageRoutingModule", function () {
      return ChatEx4PageRoutingModule;
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


    var _chat_ex4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-ex4.page */
    "./src/app/pages/chat/chat-ex4/chat-ex4.page.ts");

    var routes = [{
      path: '',
      component: _chat_ex4_page__WEBPACK_IMPORTED_MODULE_3__["ChatEx4Page"]
    }];

    var ChatEx4PageRoutingModule = function ChatEx4PageRoutingModule() {
      _classCallCheck(this, ChatEx4PageRoutingModule);
    };

    ChatEx4PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatEx4PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/chat/chat-ex4/chat-ex4.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/chat/chat-ex4/chat-ex4.module.ts ***!
    \********************************************************/

  /*! exports provided: ChatEx4PageModule */

  /***/
  function srcAppPagesChatChatEx4ChatEx4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatEx4PageModule", function () {
      return ChatEx4PageModule;
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


    var _chat_ex4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-ex4-routing.module */
    "./src/app/pages/chat/chat-ex4/chat-ex4-routing.module.ts");
    /* harmony import */


    var _chat_ex4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-ex4.page */
    "./src/app/pages/chat/chat-ex4/chat-ex4.page.ts");

    var ChatEx4PageModule = function ChatEx4PageModule() {
      _classCallCheck(this, ChatEx4PageModule);
    };

    ChatEx4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_ex4_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatEx4PageRoutingModule"]],
      declarations: [_chat_ex4_page__WEBPACK_IMPORTED_MODULE_6__["ChatEx4Page"]]
    })], ChatEx4PageModule);
    /***/
  },

  /***/
  "./src/app/pages/chat/chat-ex4/chat-ex4.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/chat/chat-ex4/chat-ex4.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChatChatEx4ChatEx4PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 65px;\n  border-bottom: 1px solid lightgray;\n  background-color: #4BE3B0;\n}\n.header_div .first_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  color: white;\n  font-weight: bold;\n}\n.header_div .back_image {\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n  margin-right: 10px;\n}\n.header_div .username {\n  font-weight: 600;\n  color: white;\n}\n.header_div ion-icon {\n  color: white;\n}\n.main_content_div {\n  width: 100%;\n  padding: 15px;\n}\n.main_content_div .back_image {\n  width: 45px;\n  height: 45px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n  border: 5px solid white;\n  position: absolute;\n  bottom: -35px;\n  left: -5px;\n}\n.main_content_div .left_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 15px;\n}\n.main_content_div .left_div .back_image {\n  width: 45px;\n  height: 45px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n  border: 5px solid white;\n  position: absolute;\n  bottom: -35px;\n  left: -5px;\n}\n.main_content_div .left_div .inner_div {\n  width: 70%;\n  position: relative;\n  padding-left: 10px;\n}\n.main_content_div .left_div .msg_div {\n  background: #F0EFF5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 15px;\n  border-radius: 5px;\n  margin-left: 5px;\n  position: relative;\n  padding-left: 20px;\n}\n.main_content_div .right_div {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.main_content_div .right_div .inner_div {\n  width: 70%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  position: relative;\n}\n.main_content_div .right_div .msg_div {\n  background: #4BE3B0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 15px;\n  border-radius: 5px;\n  margin-right: 5px;\n  color: white;\n  position: relative;\n  padding-right: 20px;\n}\n.main_content_div .right_div .back_image {\n  width: 45px;\n  height: 45px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n  border: 5px solid white;\n}\n.main_content_div .right_div2 {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  position: relative;\n  padding-right: 10px;\n}\n.main_content_div .right_div2 .inner_div2 {\n  width: 70%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.main_content_div .right_div2 .msg2_div {\n  background: #4BE3B0;\n  width: auto;\n  padding: 10px 15px;\n  border-radius: 5px;\n  color: white;\n  padding-right: 20px;\n  margin-right: 5px;\n}\n.main_content_div .right_div2 .back_image {\n  width: 45px;\n  height: 45px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n  border: 5px solid white;\n  position: absolute;\n  bottom: -35px;\n  left: 90%;\n}\nion-footer {\n  padding: 10px 10px;\n}\nion-footer .footer_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 0px;\n  width: 100%;\n  border: 1px solid lightgray;\n  border-radius: 25px;\n}\nion-footer ion-input {\n  --padding-start: 8px;\n}\nion-footer .smiley {\n  font-size: 35px;\n  margin-left: 10px;\n  color: lightgray;\n}\nion-footer .send {\n  font-size: 35px;\n  margin-right: 10px;\n  color: #4BE3B0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LWV4NC9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcY2hhdFxcY2hhdC1leDRcXGNoYXQtZXg0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LWV4NC9jaGF0LWV4NC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQ0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDRFI7QURHSTtFQUNJLFlBQUE7QUNEUjtBRElBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNESjtBREdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDRFI7QURJSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FESVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNGWjtBREtRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIWjtBRE1RO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0paO0FET0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDTFI7QURPUTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0Esa0JBQUE7QUNMWjtBRFFRO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNOWjtBRFNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNQWjtBRGNJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNaUjtBRGVRO0VBQ0ksVUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUVBLHFCQUFBO1VBQUEseUJBQUE7QUNmWjtBRG1CUTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2pCWjtBRG9CUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ2xCWjtBRHVCQTtFQUNJLGtCQUFBO0FDcEJKO0FEcUJJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDbkJSO0FEc0JJO0VBQ0ksb0JBQUE7QUNwQlI7QUR1Qkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3JCUjtBRHVCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNyQlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0L2NoYXQtZXg0L2NoYXQtZXg0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEJFM0IwO1xuXG4gICAgLmZpcnN0X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDQ1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLnVzZXJuYW1le1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMzVweDtcbiAgICAgICAgbGVmdDogLTVweDtcbiAgICB9XG5cbiAgICAubGVmdF9kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtMzVweDtcbiAgICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5uZXJfZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tc2dfZGl2e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0YwRUZGNTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmlnaHRfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAuaW5uZXJfZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tc2dfZGl2e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRCRTNCMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAvLyBib3R0b206IC0zNXB4O1xuICAgICAgICAgICAgLy8gbGVmdDogLTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yaWdodF9kaXYye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG5cbiAgICAgICAgLmlubmVyX2RpdjJ7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgLy8gZGlzcGxheTogY29udGVudHM7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLy8gZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAubXNnMl9kaXZ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNEJFM0IwO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICAgICAgICBsZWZ0OiA5MCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mb290ZXJ7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIC5mb290ZXJfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbiAgICB9XG4gICAgaW9uLWlucHV0e1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICB9XG5cbiAgICAuc21pbGV5e1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgIH1cbiAgICAuc2VuZHtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjNEJFM0IwO1xuICAgIH1cbn0iLCIuaGVhZGVyX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCRTNCMDtcbn1cbi5oZWFkZXJfZGl2IC5maXJzdF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhlYWRlcl9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogNDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlcl9kaXYgLnVzZXJuYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhlYWRlcl9kaXYgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiA0NXB4O1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zNXB4O1xuICBsZWZ0OiAtNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxlZnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGVmdF9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogNDVweDtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMzVweDtcbiAgbGVmdDogLTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiAuaW5uZXJfZGl2IHtcbiAgd2lkdGg6IDcwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGVmdF9kaXYgLm1zZ19kaXYge1xuICBiYWNrZ3JvdW5kOiAjRjBFRkY1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2IC5pbm5lcl9kaXYge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2IC5tc2dfZGl2IHtcbiAgYmFja2dyb3VuZDogIzRCRTNCMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yaWdodF9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogNDVweDtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2MiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2MiAuaW5uZXJfZGl2MiB7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2MiAubXNnMl9kaXYge1xuICBiYWNrZ3JvdW5kOiAjNEJFM0IwO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmlnaHRfZGl2MiAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiA0NXB4O1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zNXB4O1xuICBsZWZ0OiA5MCU7XG59XG5cbmlvbi1mb290ZXIge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG5pb24tZm9vdGVyIC5mb290ZXJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuaW9uLWZvb3RlciBpb24taW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbn1cbmlvbi1mb290ZXIgLnNtaWxleSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5pb24tZm9vdGVyIC5zZW5kIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjNEJFM0IwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/chat/chat-ex4/chat-ex4.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/chat/chat-ex4/chat-ex4.page.ts ***!
    \******************************************************/

  /*! exports provided: ChatEx4Page */

  /***/
  function srcAppPagesChatChatEx4ChatEx4PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatEx4Page", function () {
      return ChatEx4Page;
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


    var ChatEx4Page = /*#__PURE__*/function () {
      function ChatEx4Page(chat) {
        _classCallCheck(this, ChatEx4Page);

        this.chat = chat;
        this.msgs = [];
        this.msgs = this.chat.messages;
      }

      _createClass(ChatEx4Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatEx4Page;
    }();

    ChatEx4Page.ctorParameters = function () {
      return [{
        type: src_app_services_chats_chat_data_service__WEBPACK_IMPORTED_MODULE_2__["ChatDataService"]
      }];
    };

    ChatEx4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-ex4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-ex4.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat-ex4/chat-ex4.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-ex4.page.scss */
      "./src/app/pages/chat/chat-ex4/chat-ex4.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_chats_chat_data_service__WEBPACK_IMPORTED_MODULE_2__["ChatDataService"]])], ChatEx4Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-chat-chat-ex4-chat-ex4-module-es5.js.map