function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-fire-image-detail-fire-image-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/fire-image-detail/fire-image-detail.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/fire-image-detail/fire-image-detail.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFirebaseFireImageDetailFireImageDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Firebase Image Update\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <div class=\"div_img\">\n    <img [src]=\"image\" class=\"img_logo\" />\n  </div>\n  <ion-item>\n    <ion-label position=\"floating\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-button expand=\"block\" color=\"secondary\" margin-top (click)=\"update()\" [disabled]=\"isCreate\">\n    <span *ngIf=\"!isCreate\">\n      Update List\n    </span>\n    <ion-spinner name=\"dots\" *ngIf=\"isCreate\"></ion-spinner>\n  </ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/firebase/fire-image-detail/fire-image-detail-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/firebase/fire-image-detail/fire-image-detail-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: FireImageDetailPageRoutingModule */

  /***/
  function srcAppPagesFirebaseFireImageDetailFireImageDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FireImageDetailPageRoutingModule", function () {
      return FireImageDetailPageRoutingModule;
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


    var _fire_image_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fire-image-detail.page */
    "./src/app/pages/firebase/fire-image-detail/fire-image-detail.page.ts");

    var routes = [{
      path: '',
      component: _fire_image_detail_page__WEBPACK_IMPORTED_MODULE_3__["FireImageDetailPage"]
    }];

    var FireImageDetailPageRoutingModule = function FireImageDetailPageRoutingModule() {
      _classCallCheck(this, FireImageDetailPageRoutingModule);
    };

    FireImageDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FireImageDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/firebase/fire-image-detail/fire-image-detail.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/firebase/fire-image-detail/fire-image-detail.module.ts ***!
    \******************************************************************************/

  /*! exports provided: FireImageDetailPageModule */

  /***/
  function srcAppPagesFirebaseFireImageDetailFireImageDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FireImageDetailPageModule", function () {
      return FireImageDetailPageModule;
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


    var _fire_image_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fire-image-detail-routing.module */
    "./src/app/pages/firebase/fire-image-detail/fire-image-detail-routing.module.ts");
    /* harmony import */


    var _fire_image_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fire-image-detail.page */
    "./src/app/pages/firebase/fire-image-detail/fire-image-detail.page.ts");

    var FireImageDetailPageModule = function FireImageDetailPageModule() {
      _classCallCheck(this, FireImageDetailPageModule);
    };

    FireImageDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fire_image_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["FireImageDetailPageRoutingModule"]],
      declarations: [_fire_image_detail_page__WEBPACK_IMPORTED_MODULE_6__["FireImageDetailPage"]]
    })], FireImageDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/firebase/fire-image-detail/fire-image-detail.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/firebase/fire-image-detail/fire-image-detail.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFirebaseFireImageDetailFireImageDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_img {\n  width: 250px;\n  height: 250px;\n  background-color: lightgray;\n  position: relative;\n  display: block;\n  margin: auto;\n  background-size: cover;\n  background-position: center;\n}\n.div_img .my_spin {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.div_img .img_logo {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlyZWJhc2UvZmlyZS1pbWFnZS1kZXRhaWwvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXGZpcmViYXNlXFxmaXJlLWltYWdlLWRldGFpbFxcZmlyZS1pbWFnZS1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9maXJlYmFzZS9maXJlLWltYWdlLWRldGFpbC9maXJlLWltYWdlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNBSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNDUjtBRENJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlyZWJhc2UvZmlyZS1pbWFnZS1kZXRhaWwvZmlyZS1pbWFnZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxuLmRpdl9pbWd7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLm15X3NwaW57XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIH1cbiAgICAuaW1nX2xvZ297ICAgICAgXG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIH1cbn0iLCIuZGl2X2ltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5kaXZfaW1nIC5teV9zcGluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5kaXZfaW1nIC5pbWdfbG9nbyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/firebase/fire-image-detail/fire-image-detail.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/firebase/fire-image-detail/fire-image-detail.page.ts ***!
    \****************************************************************************/

  /*! exports provided: FireImageDetailPage */

  /***/
  function srcAppPagesFirebaseFireImageDetailFireImageDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FireImageDetailPage", function () {
      return FireImageDetailPage;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util/util.service */
    "./src/app/services/util/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var FireImageDetailPage = /*#__PURE__*/function () {
      function FireImageDetailPage(route, util, adb, navCtrl) {
        _classCallCheck(this, FireImageDetailPage);

        this.route = route;
        this.util = util;
        this.adb = adb;
        this.navCtrl = navCtrl;
      }

      _createClass(FireImageDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.title = '';
          this.description = '';
          this.isCreate = false;
          this.route.queryParams.subscribe(function (data) {
            if (data.hasOwnProperty('id')) {
              _this.id = data.id;

              _this.adb.collection('fireimage').doc(localStorage.getItem('fuid')).collection('list').doc(_this.id).valueChanges().subscribe(function (item) {
                console.log('item', item);
                _this.title = item.title;
                _this.description = item.description;
                _this.image = item.image;
              });
            }
          });
        }
      }, {
        key: "update",
        value: function update() {
          var _this2 = this;

          if (this.title == '') {
            this.util.showWarningAlert('Please Add Title');
            return false;
          }

          if (this.description == '') {
            this.util.showWarningAlert('Please add Description');
            return false;
          }

          this.isCreate = true;
          this.adb.collection('fireimage').doc(localStorage.getItem('fuid')).collection('list').doc(this.id).update({
            title: this.title,
            description: this.description
          }).then(function () {
            console.log('added');
            _this2.isCreate = false;

            _this2.navCtrl.back();

            _this2.util.showToast('List Updated', 'success', 'bottom');
          }).catch(function (error) {
            console.log('error', error);
            _this2.isCreate = false;

            _this2.util.showErrorAlert("Something went Wrong");
          });
        }
      }]);

      return FireImageDetailPage;
    }();

    FireImageDetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    FireImageDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fire-image-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fire-image-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/fire-image-detail/fire-image-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fire-image-detail.page.scss */
      "./src/app/pages/firebase/fire-image-detail/fire-image-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], FireImageDetailPage);
    /***/
  },

  /***/
  "./src/app/services/util/util.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/util/util.service.ts ***!
    \***********************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var UtilService = /*#__PURE__*/function () {
      function UtilService(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl) {
        _classCallCheck(this, UtilService);

        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.isLoading = false;
      }
      /*
      Start Loader
      Call this method to Start your Loader
      */


      _createClass(UtilService, [{
        key: "show",
        value: function show(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isLoading = true;
                    _context.next = 3;
                    return this.loadingCtrl.create({
                      message: msg,
                      spinner: 'bubbles'
                    }).then(function (a) {
                      a.present().then(function () {
                        //console.log('presented');
                        if (!_this3.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = false;
                    _context2.next = 3;
                    return this.loadingCtrl.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /*
          Show Warning Alert Message
          param : msg = message to display
          Call this method to show Warning Alert,
          */

      }, {
        key: "showWarningAlert",
        value: function showWarningAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "showSimpleAlert",
        value: function showSimpleAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      header: '',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
        /*
         Show Error Alert Message
         param : msg = message to display
         Call this method to show Error Alert,
         */

      }, {
        key: "showErrorAlert",
        value: function showErrorAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: 'Error',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
        /*
           param : email = email to verify
           Call this method to get verify email
           */

      }, {
        key: "getEmailFilter",
        value: function getEmailFilter(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var emailfilter, alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

                    if (emailfilter.test(email)) {
                      _context6.next = 10;
                      break;
                    }

                    _context6.next = 4;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: 'Please enter valid email',
                      buttons: ['OK']
                    });

                  case 4:
                    alert = _context6.sent;
                    _context6.next = 7;
                    return alert.present();

                  case 7:
                    return _context6.abrupt("return", false);

                  case 10:
                    return _context6.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
        /*
          Show Toast Message on Screen
           param : msg = message to display, color= background color of toast example dark,danger,light. position  = position of message example top,bottom
           Call this method to show toast message
           */

      }, {
        key: "showToast",
        value: function showToast(msg, color, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var toast;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      color: color,
                      position: positon
                    });

                  case 2:
                    toast = _context7.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "shoNotification",
        value: function shoNotification(msg, color, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var toast;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 4000,
                      color: color,
                      position: positon,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        handler: function handler() {//console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context8.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "errorToast",
        value: function errorToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var toast;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context9.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "apiErrorHandler",
        value: function apiErrorHandler(err) {
          //console.log("Error got in service =>", err)
          if (err.status == -1) {
            this.showErrorAlert('Failed To Connect With Server');
          } else if (err.status == 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
          } else if (err.status == 500) {
            this.showErrorAlert("Somethimg Went Wrong..");
          }
        } // setDetails(data) {
        //   this.details = null;
        //   this.details = data;
        // }
        // getDetails() {
        //   return this.details;
        // }

      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }]);

      return UtilService;
    }();

    UtilService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], UtilService);
    /***/
  }
}]);
//# sourceMappingURL=pages-firebase-fire-image-detail-fire-image-detail-module-es5.js.map