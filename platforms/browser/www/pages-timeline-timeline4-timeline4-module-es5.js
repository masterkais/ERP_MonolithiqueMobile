function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-timeline-timeline4-timeline4-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline4/timeline4.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline4/timeline4.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTimelineTimeline4Timeline4PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Timeline 4</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"main_div\" *ngFor=\"let item of data\">\n      <div class=\"time_div\">\n        <ion-label class=\"time_lbl\">{{item.s_time}}</ion-label>\n      </div>\n      <div class=\"card_div\" [style.backgroundColor]=\"item.color\">\n        <div class=\"upper_div\">\n          <ion-label class=\"header\">{{item.title}}</ion-label>\n          <ion-label class=\"small_lbl\">{{item.cat}}</ion-label>\n          <ion-label class=\"small_lbl\">{{item.s_time}} - {{item.e_time}}</ion-label>\n          <div class=\"back_image\" [style.backgroundImage]=\"'url('+item.user+')'\"></div>\n        </div>\n        <div class=\"lower_div\">\n          <div>\n            <ion-label>DETAIL</ion-label>\n          </div>\n          <div>\n            <ion-icon slot=\"start\" name=\"heart-outline\"></ion-icon>\n            <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/timeline/timeline4/timeline4-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/timeline/timeline4/timeline4-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: Timeline4PageRoutingModule */

  /***/
  function srcAppPagesTimelineTimeline4Timeline4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Timeline4PageRoutingModule", function () {
      return Timeline4PageRoutingModule;
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


    var _timeline4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./timeline4.page */
    "./src/app/pages/timeline/timeline4/timeline4.page.ts");

    var routes = [{
      path: '',
      component: _timeline4_page__WEBPACK_IMPORTED_MODULE_3__["Timeline4Page"]
    }];

    var Timeline4PageRoutingModule = function Timeline4PageRoutingModule() {
      _classCallCheck(this, Timeline4PageRoutingModule);
    };

    Timeline4PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Timeline4PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/timeline/timeline4/timeline4.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/timeline/timeline4/timeline4.module.ts ***!
    \**************************************************************/

  /*! exports provided: Timeline4PageModule */

  /***/
  function srcAppPagesTimelineTimeline4Timeline4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Timeline4PageModule", function () {
      return Timeline4PageModule;
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


    var _timeline4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./timeline4-routing.module */
    "./src/app/pages/timeline/timeline4/timeline4-routing.module.ts");
    /* harmony import */


    var _timeline4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./timeline4.page */
    "./src/app/pages/timeline/timeline4/timeline4.page.ts");

    var Timeline4PageModule = function Timeline4PageModule() {
      _classCallCheck(this, Timeline4PageModule);
    };

    Timeline4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _timeline4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Timeline4PageRoutingModule"]],
      declarations: [_timeline4_page__WEBPACK_IMPORTED_MODULE_6__["Timeline4Page"]]
    })], Timeline4PageModule);
    /***/
  },

  /***/
  "./src/app/pages/timeline/timeline4/timeline4.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/timeline/timeline4/timeline4.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTimelineTimeline4Timeline4PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .main_div {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n}\n.main_content_div .main_div .time_div {\n  width: 50px;\n  min-width: 50px;\n}\n.main_content_div .main_div .time_lbl {\n  font-size: 10px;\n}\n.main_content_div .main_div .card_div {\n  margin-left: 20px;\n  width: 100%;\n  border-radius: 5px;\n}\n.main_content_div .main_div .card_div .upper_div {\n  padding: 15px;\n  border-bottom: 1px solid lightgray;\n  position: relative;\n}\n.main_content_div .main_div .card_div .upper_div .header {\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.main_content_div .main_div .card_div .upper_div .small_lbl {\n  font-size: 14px;\n  color: gray;\n}\n.main_content_div .main_div .card_div .upper_div .back_image {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n.main_content_div .main_div .card_div .lower_div {\n  padding: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .main_div .card_div .lower_div ion-label {\n  font-size: 14px;\n  color: gray;\n}\n.main_content_div .main_div .card_div .lower_div ion-icon {\n  margin-left: 15px;\n  font-size: 18px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGltZWxpbmUvdGltZWxpbmU0L0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFx0aW1lbGluZVxcdGltZWxpbmU0XFx0aW1lbGluZTQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90aW1lbGluZS90aW1lbGluZTQvdGltZWxpbmU0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7QUNDUjtBREVJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQVI7QURFUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQVo7QURHUTtFQUNJLGVBQUE7QUNEWjtBRElRO0VBRUksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNIWjtBREtZO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUNIaEI7QURLZ0I7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDSHBCO0FES2dCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNIcEI7QURNZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0pwQjtBRE9ZO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTGhCO0FET2dCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNMcEI7QURRZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDTnBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGltZWxpbmUvdGltZWxpbmU0L3RpbWVsaW5lNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLm1haW5fZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgICAgICAudGltZV9kaXZ7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lX2xibHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkX2RpdntcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgICAgIC51cHBlcl9kaXZ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICAgIC5oZWFkZXJ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvd2VyX2RpdntcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubWFpbl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX2RpdiAudGltZV9kaXYge1xuICB3aWR0aDogNTBweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm1haW5fZGl2IC50aW1lX2xibCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX2RpdiAuY2FyZF9kaXYge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX2RpdiAuY2FyZF9kaXYgLnVwcGVyX2RpdiB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX2RpdiAuY2FyZF9kaXYgLnVwcGVyX2RpdiAuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX2RpdiAuY2FyZF9kaXYgLnVwcGVyX2RpdiAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX2RpdiAuY2FyZF9kaXYgLnVwcGVyX2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubWFpbl9kaXYgLmNhcmRfZGl2IC5sb3dlcl9kaXYge1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubWFpbl9kaXYgLmNhcmRfZGl2IC5sb3dlcl9kaXYgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX2RpdiAuY2FyZF9kaXYgLmxvd2VyX2RpdiBpb24taWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBncmF5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/timeline/timeline4/timeline4.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/timeline/timeline4/timeline4.page.ts ***!
    \************************************************************/

  /*! exports provided: Timeline4Page */

  /***/
  function srcAppPagesTimelineTimeline4Timeline4PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Timeline4Page", function () {
      return Timeline4Page;
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


    var src_app_services_timeline_timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/timeline/timeline.service */
    "./src/app/services/timeline/timeline.service.ts");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var Timeline4Page = /*#__PURE__*/function () {
      function Timeline4Page(timeline) {
        _classCallCheck(this, Timeline4Page);

        this.timeline = timeline;
        this.data = this.timeline.tasks;
      }

      _createClass(Timeline4Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Timeline4Page;
    }();

    Timeline4Page.ctorParameters = function () {
      return [{
        type: src_app_services_timeline_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"]
      }];
    };

    Timeline4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timeline4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timeline4.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline4/timeline4.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timeline4.page.scss */
      "./src/app/pages/timeline/timeline4/timeline4.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_timeline_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"]])], Timeline4Page);
    /***/
  },

  /***/
  "./src/app/services/timeline/timeline.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/timeline/timeline.service.ts ***!
    \*******************************************************/

  /*! exports provided: TimelineService */

  /***/
  function srcAppServicesTimelineTimelineServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelineService", function () {
      return TimelineService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var TimelineService = function TimelineService() {
      _classCallCheck(this, TimelineService);

      // powderblue
      this.tasks = [{
        s_time: '07:00 AM',
        e_time: '10:00 AM',
        title: 'Bug Fixes #Bt456',
        cat: 'Major Task',
        color: 'aliceblue',
        user: 'assets/imgs/user1.jpg'
      }, {
        s_time: '09:00 AM',
        e_time: '11:00 AM',
        title: 'Additional #Cf456',
        cat: 'Major Task',
        color: 'antiquewhite',
        user: 'assets/imgs/user2.jpg'
      }, {
        s_time: '12:00 PM',
        e_time: '03:00 PM',
        title: 'Remove Bugs #Bt456',
        cat: 'Major Task',
        color: 'beige',
        user: 'assets/imgs/user1.jpg'
      }, {
        s_time: '04:00 PM',
        e_time: '07:00 AM',
        title: 'Add Feature #Fj456',
        cat: 'Major Task',
        color: 'ghostwhite',
        user: 'assets/imgs/user2.jpg'
      }];
    };

    TimelineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TimelineService);
    /***/
  }
}]);
//# sourceMappingURL=pages-timeline-timeline4-timeline4-module-es5.js.map