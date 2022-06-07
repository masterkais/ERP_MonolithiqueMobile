function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loginScreens-login-ex5-login-ex5-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-ex5/login-ex5.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-ex5/login-ex5.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginScreensLoginEx5LoginEx5PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>login-ex5</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <div class=\"overlay\">\n\n  <ion-icon name=\"arrow-back-outline\" (click)=\"goBack()\" [class.ios_pad]=\"plt == 'ios'\"></ion-icon>\n\n\n    <div class=\"form_div\">\n      <ion-label class=\"head_lbl\">Login</ion-label>\n      <ion-label class=\"small_lbl\">Username</ion-label>\n      <ion-input type=\"text\" placeholder=\"Username\"></ion-input>\n      <ion-label class=\"small_lbl\">Password</ion-label>\n      <ion-input type=\"text\" placeholder=\"Password\"></ion-input>\n\n      <ion-label class=\"forgot\">Forgot Password</ion-label>\n\n      <ion-button expand=\"block\" fill=\"outline\">\n        Login\n      </ion-button>\n    </div>\n  </div>\n\n  <ion-slides [options]=\"slideOpts\">\n    <ion-slide>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/slide1.jpg)'\"></div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/slide2.jpg)'\"></div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/slide3.jpg)'\"></div>\n    </ion-slide>\n  </ion-slides>\n  <div class=\"main_content_div\">\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/loginScreens/login-ex5/login-ex5-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/loginScreens/login-ex5/login-ex5-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: LoginEx5PageRoutingModule */

  /***/
  function srcAppPagesLoginScreensLoginEx5LoginEx5RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginEx5PageRoutingModule", function () {
      return LoginEx5PageRoutingModule;
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


    var _login_ex5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-ex5.page */
    "./src/app/pages/loginScreens/login-ex5/login-ex5.page.ts");

    var routes = [{
      path: '',
      component: _login_ex5_page__WEBPACK_IMPORTED_MODULE_3__["LoginEx5Page"]
    }];

    var LoginEx5PageRoutingModule = function LoginEx5PageRoutingModule() {
      _classCallCheck(this, LoginEx5PageRoutingModule);
    };

    LoginEx5PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginEx5PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/loginScreens/login-ex5/login-ex5.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/loginScreens/login-ex5/login-ex5.module.ts ***!
    \******************************************************************/

  /*! exports provided: LoginEx5PageModule */

  /***/
  function srcAppPagesLoginScreensLoginEx5LoginEx5ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginEx5PageModule", function () {
      return LoginEx5PageModule;
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


    var _login_ex5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-ex5-routing.module */
    "./src/app/pages/loginScreens/login-ex5/login-ex5-routing.module.ts");
    /* harmony import */


    var _login_ex5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-ex5.page */
    "./src/app/pages/loginScreens/login-ex5/login-ex5.page.ts");

    var LoginEx5PageModule = function LoginEx5PageModule() {
      _classCallCheck(this, LoginEx5PageModule);
    };

    LoginEx5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_ex5_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginEx5PageRoutingModule"]],
      declarations: [_login_ex5_page__WEBPACK_IMPORTED_MODULE_6__["LoginEx5Page"]]
    })], LoginEx5PageModule);
    /***/
  },

  /***/
  "./src/app/pages/loginScreens/login-ex5/login-ex5.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/loginScreens/login-ex5/login-ex5.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginScreensLoginEx5LoginEx5PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  position: relative;\n}\nion-content .back_image {\n  height: 100vh;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.overlay {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  z-index: 9;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 20px;\n}\n.overlay ion-icon {\n  font-size: 30px;\n  color: white;\n}\n.overlay .form_div {\n  margin-top: 130px;\n}\n.overlay .head_lbl {\n  text-align: center;\n  color: white;\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 20px;\n}\n.overlay ion-label {\n  display: block;\n}\n.overlay .small_lbl {\n  color: white;\n  margin-bottom: 5px;\n}\n.overlay ion-input {\n  border: 1px solid white;\n  --padding-start: 8px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  --placeholder-color: white;\n  color: white;\n}\n.overlay .forgot {\n  text-align: right;\n  color: white;\n}\n.overlay ion-button {\n  --border-radius: 5px;\n  --border-color: white;\n  color: white;\n  font-weight: 600;\n  margin-top: 20px;\n}\n.main_content_div {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW5TY3JlZW5zL2xvZ2luLWV4NS9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5TY3JlZW5zXFxsb2dpbi1leDVcXGxvZ2luLWV4NS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luU2NyZWVucy9sb2dpbi1leDUvbG9naW4tZXg1LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDRVI7QURDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDRUo7QURBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDRVI7QURDSTtFQUNJLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQVI7QURFSTtFQUNJLGNBQUE7QUNBUjtBREdJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDRFI7QURHSTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FDRFI7QURJSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FES0k7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRE1BO0VBQ0ksV0FBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW5TY3JlZW5zL2xvZ2luLWV4NS9sb2dpbi1leDUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbn1cbi5vdmVybGF5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmZvcm1fZGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAxMzBweDtcbiAgICB9XG5cbiAgICAuaGVhZF9sYmx7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5zbWFsbF9sYmx7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQgOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZm9yZ290e1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbn0iLCJpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ub3ZlcmxheSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm92ZXJsYXkgLmZvcm1fZGl2IHtcbiAgbWFyZ2luLXRvcDogMTMwcHg7XG59XG4ub3ZlcmxheSAuaGVhZF9sYmwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm92ZXJsYXkgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ub3ZlcmxheSAuc21hbGxfbGJsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ub3ZlcmxheSBpb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5vdmVybGF5IC5mb3Jnb3Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm92ZXJsYXkgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/loginScreens/login-ex5/login-ex5.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/loginScreens/login-ex5/login-ex5.page.ts ***!
    \****************************************************************/

  /*! exports provided: LoginEx5Page */

  /***/
  function srcAppPagesLoginScreensLoginEx5LoginEx5PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginEx5Page", function () {
      return LoginEx5Page;
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
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var LoginEx5Page = /*#__PURE__*/function () {
      function LoginEx5Page(navCtrl, platform) {
        _classCallCheck(this, LoginEx5Page);

        this.navCtrl = navCtrl;
        this.platform = platform;
        this.slideOpts = {
          initialSlide: 0,
          speed: 2000,
          autoplay: true,
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              swiper.classNames.push("".concat(swiper.params.containerModifierClass, "fade"));
              var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: true
              };
              swiper.params = Object.assign(swiper.params, overwriteParams);
              swiper.params = Object.assign(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              var slides = swiper.slides;

              for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = swiper.slides.eq(i);
                var offset$$1 = $slideEl[0].swiperSlideOffset;
                var tx = -offset$$1;

                if (!swiper.params.virtualTranslate) {
                  tx -= swiper.translate;
                }

                var ty = 0;

                if (!swiper.isHorizontal()) {
                  ty = tx;
                  tx = 0;
                }

                var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                $slideEl.css({
                  opacity: slideOpacity
                }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
              }
            },
            setTransition: function setTransition(duration) {
              var swiper = this;
              var slides = swiper.slides,
                  $wrapperEl = swiper.$wrapperEl;
              slides.transition(duration);

              if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.transitionEnd(function () {
                  if (eventTriggered) {
                    return;
                  }

                  if (!swiper || swiper.destroyed) {
                    return;
                  }

                  eventTriggered = true;
                  swiper.animating = false;
                  var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                  for (var i = 0; i < triggerEvents.length; i += 1) {
                    $wrapperEl.trigger(triggerEvents[i]);
                  }
                });
              }
            }
          }
        };
        this.plt = localStorage.getItem('platform');
      }

      _createClass(LoginEx5Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return LoginEx5Page;
    }();

    LoginEx5Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], LoginEx5Page.prototype, "slides", void 0);
    LoginEx5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-ex5',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-ex5.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loginScreens/login-ex5/login-ex5.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-ex5.page.scss */
      "./src/app/pages/loginScreens/login-ex5/login-ex5.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], LoginEx5Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-loginScreens-login-ex5-login-ex5-module-es5.js.map