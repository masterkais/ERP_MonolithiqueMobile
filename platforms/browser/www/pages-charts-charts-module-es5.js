function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-charts-charts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/charts.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/charts.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChartsChartsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"addtocart()\" class=\"ion-button custom-class\" color=\"red\"  fill=\"solid\">\r\n              <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\r\n              <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\r\n          </ion-button>\r\n\r\n      </ion-buttons>\r\n    <ion-title style=\"text-align: center\">\r\n      Accueil\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <!--<ion-row>\r\n    <ion-col size=\"3\">\r\n      <div class=\"center\">\r\n        <div class=\"seperator\"></div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col>\r\n      <p class=\"title\">Line Chart</p>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <div class=\"center\">\r\n        <div class=\"seperator\"></div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <div class=\"row\">\r\n    <div style=\"display: block;\">\r\n      <canvas baseChart width=\"400\" height=\"400\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\r\n        [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"\r\n        (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n    </div>\r\n    <ion-button (click)=\"randomize()\" color=\"secondary\" expand=\"block\">\r\n      Change\r\n    </ion-button>\r\n  </div>-->\r\n\r\n  <ion-row>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n   <ion-col>\r\n     <p class=\"title\">Site Stock</p>\r\n   </ion-col>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n </ion-row>\r\n\r\n  <div style=\"display: block\">\r\n   <canvas baseChart [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\">\r\n   </canvas>\r\n </div>\r\n\r\n    <ion-row>\r\n        <ion-col size=\"3\">\r\n            <div class=\"center\">\r\n                <div class=\"seperator\"></div>\r\n            </div>\r\n        </ion-col>\r\n        <ion-col>\r\n            <p class=\"title\">Statut de produits</p>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n            <div class=\"center\">\r\n                <div class=\"seperator\"></div>\r\n            </div>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <div style=\"display: block\">\r\n        <canvas baseChart [datasets]=\"radarChartData\" [options]=\"radarChartOptions\" [labels]=\"radarChartLabels\"\r\n                [chartType]=\"radarChartType\">\r\n        </canvas>\r\n    </div>\r\n <ion-row>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n   <ion-col>\r\n     <p class=\"title\">Statistiques</p>\r\n   </ion-col>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n </ion-row>\r\n\r\n\r\n  <div style=\"display: block\">\r\n   <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\r\n     [legend]=\"barChartLegend\" [chartType]=\"barChartType\">\r\n   </canvas>\r\n </div>\r\n\r\n\r\n\r\n\r\n  <!--<ion-row>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n   <ion-col>\r\n     <p class=\"title\">Pie Chart</p>\r\n   </ion-col>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n </ion-row>-->\r\n\r\n\r\n  <!--<div class=\"chart\">\r\n   <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\"\r\n     [options]=\"pieChartOptions\" [colors]=\"pieChartColors\" [legend]=\"pieChartLegend\">\r\n   </canvas>\r\n </div>\r\n <ion-row>\r\n   <ion-col size=\"6\">\r\n     <ion-button (click)=\"pieChartLegend=!pieChartLegend\" color=\"secondary\" expand=\"block\">\r\n       Toggle Legend\r\n     </ion-button>\r\n   </ion-col>\r\n   <ion-col size=\"6\">\r\n     <ion-button (click)=\"changeLabels()\" color=\"secondary\" expand=\"block\">\r\n       Change Labels\r\n     </ion-button>\r\n   </ion-col>\r\n </ion-row>-->\r\n\r\n\r\n\r\n  <!--<ion-row>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n   <ion-col>\r\n     <p class=\"title\">PolarArea Chart</p>\r\n   </ion-col>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n </ion-row>-->\r\n\r\n\r\n  <!--<div style=\"display: block\">\r\n   <canvas baseChart [data]=\"polarAreaChartData\" [labels]=\"polarAreaChartLabels\" [legend]=\"polarAreaLegend\"\r\n     [chartType]=\"polarAreaChartType\">\r\n   </canvas>\r\n </div>\r\n\r\n\r\n <ion-row>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n   <ion-col>\r\n     <p class=\"title\">Bubble Chart</p>\r\n   </ion-col>\r\n   <ion-col size=\"3\">\r\n     <div class=\"center\">\r\n       <div class=\"seperator\"></div>\r\n     </div>\r\n   </ion-col>\r\n </ion-row>\r\n\r\n\r\n <div style=\"display: block\">\r\n   <canvas baseChart [datasets]=\"bubbleChartData\" [options]=\"bubbleChartOptions\" [colors]=\"bubbleChartColors\"\r\n     [legend]=\"bubbleChartLegend\" [chartType]=\"bubbleChartType\">\r\n   </canvas>\r\n </div>-->\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/charts/charts-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/charts/charts-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ChartsPageRoutingModule */

  /***/
  function srcAppPagesChartsChartsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsPageRoutingModule", function () {
      return ChartsPageRoutingModule;
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


    var _charts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./charts.page */
    "./src/app/pages/charts/charts.page.ts");

    var routes = [{
      path: '',
      component: _charts_page__WEBPACK_IMPORTED_MODULE_3__["ChartsPage"]
    }];

    var ChartsPageRoutingModule = function ChartsPageRoutingModule() {
      _classCallCheck(this, ChartsPageRoutingModule);
    };

    ChartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChartsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/charts/charts.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/charts/charts.module.ts ***!
    \***********************************************/

  /*! exports provided: ChartsPageModule */

  /***/
  function srcAppPagesChartsChartsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsPageModule", function () {
      return ChartsPageModule;
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


    var _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./charts-routing.module */
    "./src/app/pages/charts/charts-routing.module.ts");
    /* harmony import */


    var _charts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./charts.page */
    "./src/app/pages/charts/charts.page.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");

    var ChartsPageModule = function ChartsPageModule() {
      _classCallCheck(this, ChartsPageModule);
    };

    ChartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartsPageRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]],
      declarations: [_charts_page__WEBPACK_IMPORTED_MODULE_6__["ChartsPage"]]
    })], ChartsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/charts/charts.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/charts/charts.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChartsChartsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  text-align: center;\n  font-family: \"Avenir\";\n  font-size: 18px;\n  margin: 0px;\n  margin-top: 10px;\n}\n\n.center {\n  width: 100%;\n  height: 100%;\n}\n\n.seperator {\n  width: 90%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  height: 1px;\n  background-color: #ECF0F1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --border-radius: 5px;\n}\n\nion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n/* Setting Overflow Visible */\n\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhcnRzL0M6XFxVc2Vyc1xcQVNVU1xcRG93bmxvYWRzXFxBcHBfY29kZVxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxjaGFydHNcXGNoYXJ0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9jaGFydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0RGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FESUEsNkJBQUE7O0FBQ0E7RUFDRSxpQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhcnRzL2NoYXJ0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0F2ZW5pcic7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cblxuLmNlbnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zZXBlcmF0b3J7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbntcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICByaWdodDogLTVweDtcbiAgdG9wOiAycHg7XG59XG5cbi5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xufVxuXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59IiwiLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJBdmVuaXJcIjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zZXBlcmF0b3Ige1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjBGMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDhwdDtcbiAgcmlnaHQ6IC01cHg7XG4gIHRvcDogMnB4O1xufVxuXG4uaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIFNldHRpbmcgT3ZlcmZsb3cgVmlzaWJsZSAqL1xuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/charts/charts.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/charts/charts.page.ts ***!
    \*********************************************/

  /*! exports provided: ChartsPage */

  /***/
  function srcAppPagesChartsChartsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsPage", function () {
      return ChartsPage;
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


    var _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @awesome-cordova-plugins/badge/ngx */
    "./node_modules/@awesome-cordova-plugins/badge/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/rest/environnement.model */
    "./src/app/services/rest/environnement.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var ChartsPage = /*#__PURE__*/function () {
      function ChartsPage(badge, navCtrl, http) {
        _classCallCheck(this, ChartsPage);

        this.badge = badge;
        this.navCtrl = navCtrl;
        this.http = http; ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Line chart
        //https://valor-software.com/ng2-charts/#LineChart
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        this.lineChartData = [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A'
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B'
        }, {
          data: [18, 48, 77, 9, 100, 27, 40],
          label: 'Series C'
        }];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
          responsive: true
        };
        this.lineChartColors = [{
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }, {
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        }, {
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.doughnutChartLabels = ['Site Stock Non Disponible', 'Site Stock Disponible'];
        this.doughnutChartData = [[350, 450]];
        this.doughnutChartType = 'doughnut';
        this.barChartOptions = {
          responsive: true,
          // We use these empty structures as placeholders for dynamic theming.
          scales: {
            xAxes: [{}],
            yAxes: [{}]
          },
          plugins: {
            datalabels: {
              anchor: 'end',
              align: 'end'
            }
          }
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A'
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B'
        }]; ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Radar Chart
        // https://valor-software.com/ng2-charts/#RadarChart
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        this.category_list = [];
        this.product_active_list = [];
        this.product_nonactive_list = [];
        this.radarChartOptions = {
          responsive: true
        };
        this.radarChartLabels = this.category_list;
        this.radarChartData = [{
          data: this.product_nonactive_list,
          label: 'Produits Non Active'
        }, {
          data: this.product_active_list,
          label: 'Produits Active'
        }];
        this.radarChartType = 'radar'; ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Pie Chart
        // https://valor-software.com/ng2-charts/#PieChart
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        this.pieChartOptions = {
          responsive: true,
          legend: {
            position: 'top'
          },
          plugins: {
            datalabels: {
              formatter: function formatter(value, ctx) {
                var label = ctx.chart.data.labels[ctx.dataIndex];
                return label;
              }
            }
          }
        };
        this.pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartColors = [{
          backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)']
        }]; ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Polar Area Chart
        //https://valor-software.com/ng2-charts/#PolarAreaChart
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea'; ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Bubble Chart
        // https://valor-software.com/ng2-charts/#BubbleChart
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        this.bubbleChartOptions = {
          responsive: true,
          scales: {
            xAxes: [{
              ticks: {
                min: 0,
                max: 30
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 30
              }
            }]
          }
        };
        this.bubbleChartType = 'bubble';
        this.bubbleChartLegend = true;
        this.bubbleChartData = [{
          data: [{
            x: 10,
            y: 10,
            r: 10
          }, {
            x: 15,
            y: 5,
            r: 15
          }, {
            x: 26,
            y: 12,
            r: 23
          }, {
            x: 7,
            y: 8,
            r: 8
          }],
          label: 'Series A',
          backgroundColor: 'green',
          borderColor: 'blue',
          hoverBackgroundColor: 'purple',
          hoverBorderColor: 'red'
        }];
        this.bubbleChartColors = [{
          backgroundColor: ['red', 'green', 'blue', 'purple', 'yellow', 'brown', 'magenta', 'cyan', 'orange', 'pink']
        }];
        this.produits_commandes_list = [];
        this.getallCategory();

        if (localStorage.getItem("produits_commandes") != null) {
          this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
        }
      }

      _createClass(ChartsPage, [{
        key: "randomize",
        value: function randomize() {
          var _lineChartData = new Array(this.lineChartData.length);

          for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {
              data: new Array(this.lineChartData[i].data.length),
              label: this.lineChartData[i].label
            };

            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
              _lineChartData[i].data[j] = Math.floor(Math.random() * 100 + 1);
            }
          }

          this.lineChartData = _lineChartData;
          var data = [Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40];
          this.barChartData[0].data = data;
        } // events

      }, {
        key: "chartClicked",
        value: function chartClicked(e) {
          console.log(e);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(e) {
          console.log(e);
        } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //doughnut Chart
        // https://valor-software.com/ng2-charts/#DoughnutChart
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "numberSiteStockDisponible",
        value: function numberSiteStockDisponible() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/statistique/numberSiteStockDisponible");
        }
      }, {
        key: "getnumberSiteStockDisponible",
        value: function getnumberSiteStockDisponible() {
          var i, user;
          this.numberSiteStockDisponible().subscribe(function (data) {
            var info = data;
            console.log(data); //  this.dismissLoader();
          });
        }
      }, {
        key: "chartClickedDonut",
        value: function chartClickedDonut(_ref) {
          var event = _ref.event,
              active = _ref.active;
          console.log(event, active);
        }
      }, {
        key: "chartHoveredDonut",
        value: function chartHoveredDonut(_ref2) {
          var event = _ref2.event,
              active = _ref2.active;
          console.log(event, active);
        }
      }, {
        key: "listCategory",
        value: function listCategory() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/category/categorys");
        }
      }, {
        key: "getallCategory",
        value: function getallCategory() {
          var _this = this;

          var cat, i, j;
          this.listCategory().subscribe(function (data) {
            var info = data;

            if (info.length > 0) {
              for (i = 0; i < info.length; i++) {
                _this.category_list.push(info[i]['name']);

                _this.getproductsByCat(info[i]['id']);
              }
            }
          });
        }
      }, {
        key: "listProduct",
        value: function listProduct() {
          return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/product/products");
        }
      }, {
        key: "getproductsByCat",
        value: function getproductsByCat(idcat) {
          var _this2 = this;

          var prod, i, j;
          this.listProduct().subscribe(function (data) {
            var info = data;
            var compactive = 0;
            var compnonactive = 0;

            if (info.length > 0) {
              for (i = 0; i < info.length; i++) {
                if (info[i]['categoryId'] == idcat) {
                  if (info[i]['active']) {
                    compactive = compactive + 1;
                  } else {
                    compnonactive = compnonactive + 1;
                  }
                }
              }

              _this2.product_active_list.push(compactive + '');

              _this2.product_nonactive_list.push(compnonactive + '');
            }
          }); //   if(this.img_list.length>0) {
          //  }
          // }

          /* else {
           // this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
           }*/
        }
      }, {
        key: "changeLabels",
        value: function changeLabels() {
          var words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film', 'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy', 'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef', 'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language', 'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];

          var randomWord = function randomWord() {
            return words[Math.trunc(Math.random() * words.length)];
          };

          this.pieChartLabels = Array.apply(null, {
            length: 3
          }).map(function (_) {
            return randomWord();
          });
        }
      }, {
        key: "addSlice",
        value: function addSlice() {
          this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
          this.pieChartData.push(400);
          this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
        }
      }, {
        key: "removeSlice",
        value: function removeSlice() {
          this.pieChartLabels.pop();
          this.pieChartData.pop();
          this.pieChartColors[0].backgroundColor.pop();
        }
      }, {
        key: "changeLegendPosition",
        value: function changeLegendPosition() {
          this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
        }
      }, {
        key: "charge_compteur",
        value: function charge_compteur() {
          if (localStorage.getItem("compteur") != null) {
            this.badgecount = localStorage.getItem("compteur");
          } else {
            this.badgecount = 0;
          }

          return this.badgecount;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.badgecount = 0;
          this.getnumberSiteStockDisponible();
          /*if (localStorage.getItem("produits_commandes") != null) {
            this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
            console.log('chart-produits_commandes_list-lenght  '+ this.produits_commandes_list.length);
            var i;
            for(i=0;i<this.produits_commandes_list.length;i++){
              console.log('_idProd  '+ this.produits_commandes_list[i]['_idProd']);
              console.log('_compteur  '+ this.produits_commandes_list[i]['_compteur']);
            }
          }*/
        }
      }, {
        key: "addtocart",
        value: function addtocart(idprod) {
          // console.log('mycart2  '+ JSON.parse(localStorage.getItem("produits_commandes")));
          this.navCtrl.navigateRoot(['my-cart']);
        }
      }]);

      return ChartsPage;
    }();

    ChartsPage.ctorParameters = function () {
      return [{
        type: _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_2__["Badge"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    ChartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-charts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./charts.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/charts.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./charts.page.scss */
      "./src/app/pages/charts/charts.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_2__["Badge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])], ChartsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-charts-charts-module-es5.js.map