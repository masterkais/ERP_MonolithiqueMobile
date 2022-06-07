function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maps-marker-marker-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/marker/marker.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/marker/marker.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapsMarkerMarkerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Marker</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\" class=\"map\"></div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/maps/marker/marker-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/maps/marker/marker-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: MarkerPageRoutingModule */

  /***/
  function srcAppPagesMapsMarkerMarkerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerPageRoutingModule", function () {
      return MarkerPageRoutingModule;
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


    var _marker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./marker.page */
    "./src/app/pages/maps/marker/marker.page.ts");

    var routes = [{
      path: '',
      component: _marker_page__WEBPACK_IMPORTED_MODULE_3__["MarkerPage"]
    }];

    var MarkerPageRoutingModule = function MarkerPageRoutingModule() {
      _classCallCheck(this, MarkerPageRoutingModule);
    };

    MarkerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MarkerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/maps/marker/marker.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/maps/marker/marker.module.ts ***!
    \****************************************************/

  /*! exports provided: MarkerPageModule */

  /***/
  function srcAppPagesMapsMarkerMarkerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerPageModule", function () {
      return MarkerPageModule;
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


    var _marker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./marker-routing.module */
    "./src/app/pages/maps/marker/marker-routing.module.ts");
    /* harmony import */


    var _marker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./marker.page */
    "./src/app/pages/maps/marker/marker.page.ts");

    var MarkerPageModule = function MarkerPageModule() {
      _classCallCheck(this, MarkerPageModule);
    };

    MarkerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _marker_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarkerPageRoutingModule"]],
      declarations: [_marker_page__WEBPACK_IMPORTED_MODULE_6__["MarkerPage"]]
    })], MarkerPageModule);
    /***/
  },

  /***/
  "./src/app/pages/maps/marker/marker.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/maps/marker/marker.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapsMarkerMarkerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwcy9tYXJrZXIvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXG1hcHNcXG1hcmtlclxcbWFya2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwcy9tYXJrZXIvbWFya2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXBzL21hcmtlci9tYXJrZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59IiwiI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/maps/marker/marker.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/maps/marker/marker.page.ts ***!
    \**************************************************/

  /*! exports provided: MarkerPage */

  /***/
  function srcAppPagesMapsMarkerMarkerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerPage", function () {
      return MarkerPage;
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


    var MarkerPage = /*#__PURE__*/function () {
      function MarkerPage() {
        _classCallCheck(this, MarkerPage);
      }

      _createClass(MarkerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMap();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var latLng = new google.maps.LatLng('21.7606883', '72.1534491');
          var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          var icon = {
            url: 'assets/avatars/2.jpg',
            scaledSize: new google.maps.Size(50, 50)
          };
          var marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            animation: google.maps.Animation.DROP,
            title: 'Hello World!',
            icon: icon
          });
          marker.setMap(this.map);
        }
      }]);

      return MarkerPage;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MarkerPage.prototype, "mapElement", void 0);
    MarkerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-marker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./marker.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/marker/marker.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./marker.page.scss */
      "./src/app/pages/maps/marker/marker.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MarkerPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-maps-marker-marker-module-es5.js.map