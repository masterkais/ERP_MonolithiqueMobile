function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parallax-parallax2-parallax2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax2/parallax2.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax2/parallax2.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesParallaxParallax2Parallax2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <div class=\"shrinking-header\" [shrinkingHeader]=\"scrollContent\">\n    <ion-icon color=\"light\" [class.ios_pad]=\"plt == 'ios'\" name=\"arrow-back-outline\" (click)=\"goBack()\"></ion-icon>\n    <div class=\"bg-img\" [ngStyle]=\"{'background-image': 'url(\\'assets/imgs/image3.jpg\\')'}\"></div>\n    <div class=\"bg-layer\"></div>\n    <div class=\"nav-layer\"></div>\n    <div class=\"nav-img\" [ngStyle]=\"{'background-image': 'url(\\'assets/imgs/image4.jpg\\')'}\"></div>\n  </div>\n\n  <ion-toolbar color=\"secondary\">\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"selectedSegment\">\n      <ion-segment-button mode=\"ios\" checked value=\"about\">\n        <div class=\"segment-name\">About</div>\n        <div class=\"divider\" [ngClass]=\"{'selected': selectedSegment === 'about'}\"></div>\n      </ion-segment-button>\n      <ion-segment-button mode=\"ios\" value=\"top5spots\">\n        <div class=\"segment-name\">Top 5</div>\n        <div class=\"divider\" [ngClass]=\"{'selected': selectedSegment === 'top5spots'}\"></div>\n      </ion-segment-button>\n      <ion-segment-button mode=\"ios\" value=\"partners\">\n        <div class=\"segment-name\">Partners</div>\n        <div class=\"divider\" [ngClass]=\"{'selected': selectedSegment === 'partners'}\"></div>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen #scrollContent scrollEvents=\"true\">\n  <div [ngSwitch]=\"selectedSegment\">\n    <!-- About Tab -->\n    <div *ngSwitchCase=\"'about'\" class=\"content-wrapper about-content\">\n\n      <ion-label *ngFor=\"let iten of [1,2,3,4,5,6,7,8,9,10]\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n        standard dummy\n        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n        specimen book\n      </ion-label>\n\n    </div>\n\n    <!-- Top 5 Spots Tab -->\n    <div *ngSwitchCase=\"'top5spots'\" class=\"content-wrapper spots-content\">\n      <!-- Spots card list-->\n      <ion-card *ngFor=\"let fruits of basicAlertCard\" (click)=\"showBasicAlert(fruits)\">\n        <ion-img [src]=\"fruits.image\"></ion-img>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"title\">{{fruits.name}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"descriptions\">{{fruits.descriptions}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <!-- Partners Tab -->\n    <div *ngSwitchCase=\"'partners'\" class=\"content-wrapper partners-content\">\n      <ion-card *ngFor=\"let fruits of basicAlertCard\" (click)=\"showBasicAlert(fruits)\">\n        <ion-img [src]=\"fruits.image\"></ion-img>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"title\">{{fruits.name}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"descriptions\">{{fruits.descriptions}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n  <!-- FAB -->\n  <!-- <ion-fab class=\"start-tour-fab\" #startTourFab (click)=\"openTourMapPage()\">\n\t\t<button ion-fab>\n\t\t\t<div class=\"label\">Start Tour</div>\n\t\t</button>\n\t</ion-fab> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/directives/shrinking-header.directive.ts":
  /*!**********************************************************!*\
    !*** ./src/app/directives/shrinking-header.directive.ts ***!
    \**********************************************************/

  /*! exports provided: ShrinkingHeaderDirective */

  /***/
  function srcAppDirectivesShrinkingHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShrinkingHeaderDirective", function () {
      return ShrinkingHeaderDirective;
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

    var ShrinkingHeaderDirective = /*#__PURE__*/function () {
      function ShrinkingHeaderDirective(element, renderer, domCtrl) {
        _classCallCheck(this, ShrinkingHeaderDirective);

        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.minHeaderHeight = 100;
        this.headerShow = true;
        this.headerHeight = 350;
      }

      _createClass(ShrinkingHeaderDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initStyles();
        }
      }, {
        key: "initStyles",
        value: function initStyles() {
          var _this = this;

          this.domCtrl.write(function () {
            _this.renderer.setStyle(_this.element.nativeElement, "transition", "0.2s linear");

            _this.renderer.setStyle(_this.element.nativeElement, "height", _this.headerHeight + "px");
          });
          this.scrollArea.ionScroll.subscribe(function (scrollEvent) {
            _this.resizeHeader(scrollEvent);
          });
        }
      }, {
        key: "resizeHeader",
        value: function resizeHeader(scrollEvent) {
          var _this2 = this;

          this.domCtrl.write(function () {
            // Calculate suitable header height
            _this2.newHeaderHeight = _this2.headerHeight - scrollEvent.detail.scrollTop; // Avoid scolling up to the top, set second nav header to have 100px height

            if (_this2.newHeaderHeight < _this2.minHeaderHeight) {
              _this2.newHeaderHeight = _this2.minHeaderHeight;
            }

            console.log('newHeaderHeight', _this2.newHeaderHeight); // Resize header height

            _this2.renderer.setStyle(_this2.element.nativeElement, 'height', _this2.newHeaderHeight + 'px'); // Keep track of the header height to determine opacity transition speed


            var headerChangeProgress = (_this2.newHeaderHeight - _this2.minHeaderHeight) / (_this2.headerHeight - _this2.minHeaderHeight); // Do transitioning animation to show/hide header content

            _this2.changeHeaderContent(headerChangeProgress, 1 - headerChangeProgress);
          });
        } // Change header content on scroll

      }, {
        key: "changeHeaderContent",
        value: function changeHeaderContent(bgOpacityPercent, navOpacityPercent) {
          // Apply styles to header elements
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.element.nativeElement.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var headerElement = _step.value;

              switch (headerElement.className) {
                // Background img from bg header hide on shrink, show on expand
                case 'bg-img':
                  this.renderer.setStyle(headerElement, 'opacity', bgOpacityPercent);
                  break;
                // Background img from nav header show on shrink, hide on expand

                case 'nav-img':
                case 'nav-layer':
                  this.renderer.setStyle(headerElement, 'opacity', navOpacityPercent);
                  break;
                // Control header content element vibility
                // case 'bg-content':
                // 	let totalHeight = headerElement.offsetTop + headerElement.clientHeight;
                // 	let navContentElement = this.element.nativeElement.querySelector('.nav-content');
                // 	if(totalHeight > this.newHeaderHeight && !headerElement.isHidden){
                // 		headerElement.isHidden = true;
                // 		this.events.publish('header:expanded', false);
                // 		this.renderer.setElementStyle(headerElement, 'opacity', '0');
                // 		this.renderer.setElementStyle(navContentElement, 'opacity', '1');
                // 	} else if (totalHeight <= this.newHeaderHeight && headerElement.isHidden) {
                // 		headerElement.isHidden = false;
                // 		this.events.publish('header:expanded', true);
                // 		this.renderer.setElementStyle(headerElement, 'opacity', '1');
                // 		this.renderer.setElementStyle(navContentElement, 'opacity', '0');
                // 	}
                // 	break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }]);

      return ShrinkingHeaderDirective;
    }();

    ShrinkingHeaderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("shrinkingHeader"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ShrinkingHeaderDirective.prototype, "scrollArea", void 0);
    ShrinkingHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[shrinkingHeader]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])], ShrinkingHeaderDirective);
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax2/parallax2-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/parallax/parallax2/parallax2-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: Parallax2PageRoutingModule */

  /***/
  function srcAppPagesParallaxParallax2Parallax2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Parallax2PageRoutingModule", function () {
      return Parallax2PageRoutingModule;
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


    var _parallax2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./parallax2.page */
    "./src/app/pages/parallax/parallax2/parallax2.page.ts");

    var routes = [{
      path: '',
      component: _parallax2_page__WEBPACK_IMPORTED_MODULE_3__["Parallax2Page"]
    }];

    var Parallax2PageRoutingModule = function Parallax2PageRoutingModule() {
      _classCallCheck(this, Parallax2PageRoutingModule);
    };

    Parallax2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Parallax2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax2/parallax2.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/parallax/parallax2/parallax2.module.ts ***!
    \**************************************************************/

  /*! exports provided: Parallax2PageModule */

  /***/
  function srcAppPagesParallaxParallax2Parallax2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Parallax2PageModule", function () {
      return Parallax2PageModule;
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


    var _parallax2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./parallax2-routing.module */
    "./src/app/pages/parallax/parallax2/parallax2-routing.module.ts");
    /* harmony import */


    var _parallax2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./parallax2.page */
    "./src/app/pages/parallax/parallax2/parallax2.page.ts");
    /* harmony import */


    var src_app_directives_shrinking_header_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shrinking-header.directive */
    "./src/app/directives/shrinking-header.directive.ts");

    var Parallax2PageModule = function Parallax2PageModule() {
      _classCallCheck(this, Parallax2PageModule);
    };

    Parallax2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _parallax2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Parallax2PageRoutingModule"]],
      declarations: [_parallax2_page__WEBPACK_IMPORTED_MODULE_6__["Parallax2Page"], src_app_directives_shrinking_header_directive__WEBPACK_IMPORTED_MODULE_7__["ShrinkingHeaderDirective"]]
    })], Parallax2PageModule);
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax2/parallax2.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/parallax/parallax2/parallax2.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesParallaxParallax2Parallax2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --border-width: 0 !important;\n}\nion-toolbar ion-segment {\n  --border-width: 0;\n}\nion-toolbar ion-segment ion-segment-button {\n  --background: rgba(192,193,142,0.5);\n  --background-activated: rgba(192,193,142,0.5);\n  --background-checked: rgba(192,193,142,0.5);\n  --background-hover: rgba(192,193,142,0.5);\n  --border-radius: none;\n  --border-width: 0;\n  --indicator-color: transparent;\n  --indicator-color-checked: transparent;\n  --color: #554B4B;\n  --color-activated: #6D750E;\n  --color-checked: #6D750E;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  text-transform: none;\n  font-size: 12px;\n  font-weight: 600;\n  max-width: unset;\n}\nion-toolbar ion-segment ion-segment-button .divider {\n  position: absolute;\n  bottom: 5px;\n  width: 30px;\n  height: 2px;\n  background: transparent;\n}\nion-toolbar ion-segment ion-segment-button .divider.selected {\n  background: #6D750E;\n}\n.shrinking-header {\n  color: #fff;\n  display: block;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: -1;\n  overflow: hidden;\n  background-color: #fff;\n  position: relative;\n}\n.shrinking-header ion-icon {\n  font-size: 30px;\n  position: absolute;\n  left: 16px;\n  z-index: 99999;\n  top: 16px;\n}\n.shrinking-header .bg-img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 1;\n}\n.shrinking-header .nav-img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-position: unset;\n  background-repeat: repeat;\n  background-size: 587px 801px;\n  opacity: 0;\n}\n.shrinking-header .bg-layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #000;\n  opacity: 0.2;\n}\n.shrinking-header .nav-layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  opacity: 0;\n  background-color: #6D750E;\n}\n.about-content {\n  padding: 20px;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n  line-height: 18px;\n  color: #554B4B;\n}\n.about-content p {\n  padding: 0;\n  margin: 0;\n  padding-bottom: 5px;\n}\n.about-content img {\n  width: 100%;\n}\nion-label {\n  display: block;\n  margin-top: 20px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFyYWxsYXgvcGFyYWxsYXgyL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxwYXJhbGxheFxccGFyYWxsYXgyXFxwYXJhbGxheDIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXJhbGxheC9wYXJhbGxheDIvcGFyYWxsYXgyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDZko7QURnQkk7RUFDSSxpQkFBQTtBQ2RSO0FEZVE7RUFDSSxtQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNiWjtBRGNZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ1poQjtBRGFnQjtFQUNJLG1CQUFBO0FDWHBCO0FEa0JBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNmSjtBRGlCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ2ZSO0FEa0JJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ2hCUjtBRGtCSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNoQlI7QURrQkk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNoQlI7QURrQkk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNoQlI7QURvQkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDakJKO0FEa0JJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ2hCUjtBRG1CSTtFQUNJLFdBQUE7QUNqQlI7QURxQkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFyYWxsYXgvcGFyYWxsYXgyL3BhcmFsbGF4Mi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc2VnbWVudC1iYXItaGVpZ2h0OiA0NHB4O1xuJHNlZ21lbnQtYmFyLWJnOiByZ2JhKDE5MiwxOTMsMTQyLDAuNSk7XG4kc2VnbWVudC1iYXItdGV4dDogIzZENzUwRTtcblxuLy8gaW9uLWJhY2stYnV0dG9uIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiA1cHg7XG4vLyAgICAgbGVmdDogNXB4O1xuLy8gICAgIHotaW5kZXg6IDEwMDtcbi8vICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICBib3gtc2hhZG93OiBub25lO1xuLy8gICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbi8vICAgICBoZWlnaHQ6IDQwcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMDtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyB9XG5pb24tdG9vbGJhciB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgxOTIsMTkzLDE0MiwwLjUpOztcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMTkyLDE5MywxNDIsMC41KTs7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiYSgxOTIsMTkzLDE0MiwwLjUpOztcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgxOTIsMTkzLDE0MiwwLjUpOztcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWNvbG9yOiAjNTU0QjRCO1xuICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM2RDc1MEU7XG4gICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICM2RDc1MEU7XG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNkQ3NTBFO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNocmlua2luZy1oZWFkZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogLTE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICB9XG5cbiAgICAuYmctaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgLm5hdi1pbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdW5zZXQ7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTg3cHggODAxcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIC5iZy1sYXllciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgfVxuICAgIC5uYXYtbGF5ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZENzUwRTtcbiAgICB9XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM1NTRCNEI7XG4gICAgcCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59IiwiaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciBpb24tc2VnbWVudCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuaW9uLXRvb2xiYXIgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE5MiwxOTMsMTQyLDAuNSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMTkyLDE5MywxNDIsMC41KTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEoMTkyLDE5MywxNDIsMC41KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDE5MiwxOTMsMTQyLDAuNSk7XG4gIC0tYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6ICM1NTRCNEI7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjNkQ3NTBFO1xuICAtLWNvbG9yLWNoZWNrZWQ6ICM2RDc1MEU7XG4gIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5pb24tdG9vbGJhciBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gLmRpdmlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLXRvb2xiYXIgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIC5kaXZpZGVyLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzZENzUwRTtcbn1cblxuLnNocmlua2luZy1oZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zaHJpbmtpbmctaGVhZGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2cHg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB0b3A6IDE2cHg7XG59XG4uc2hyaW5raW5nLWhlYWRlciAuYmctaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMTtcbn1cbi5zaHJpbmtpbmctaGVhZGVyIC5uYXYtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHVuc2V0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDU4N3B4IDgwMXB4O1xuICBvcGFjaXR5OiAwO1xufVxuLnNocmlua2luZy1oZWFkZXIgLmJnLWxheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMjtcbn1cbi5zaHJpbmtpbmctaGVhZGVyIC5uYXYtbGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZENzUwRTtcbn1cblxuLmFib3V0LWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjNTU0QjRCO1xufVxuLmFib3V0LWNvbnRlbnQgcCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5hYm91dC1jb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/parallax/parallax2/parallax2.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/parallax/parallax2/parallax2.page.ts ***!
    \************************************************************/

  /*! exports provided: Parallax2Page */

  /***/
  function srcAppPagesParallaxParallax2Parallax2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Parallax2Page", function () {
      return Parallax2Page;
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


    var src_app_services_parallex_parallax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/parallex/parallax.service */
    "./src/app/services/parallex/parallax.service.ts");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var Parallax2Page = /*#__PURE__*/function () {
      function Parallax2Page(alertCtrl, parallax, navCtrl) {
        _classCallCheck(this, Parallax2Page);

        this.alertCtrl = alertCtrl;
        this.parallax = parallax;
        this.navCtrl = navCtrl;
        this.selectedSegment = 'about';
        this.basicAlertCard = this.parallax.card;
        this.plt = localStorage.getItem('platform');
      }

      _createClass(Parallax2Page, [{
        key: "segmentChanged",
        value: function segmentChanged(event) {
          console.log('Segment changed', event);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showBasicAlert",
        value: function showBasicAlert(fruits) {
          this.presentAlert(fruits.name, fruits.descriptions);
        }
        /*
         Show basic Alert Message
         param :header = header or title of alert message, msg = message to display
         Call this method to show basic Alert,
         */

      }, {
        key: "presentAlert",
        value: function presentAlert(headerMsg, msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: headerMsg,
                      message: msg,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler(Cancle) {
                          console.log('Cancle Button');
                        }
                      }, {
                        text: 'OK',
                        handler: function handler() {
                          console.log('Confirm Ok');
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return Parallax2Page;
    }();

    Parallax2Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: src_app_services_parallex_parallax_service__WEBPACK_IMPORTED_MODULE_3__["ParallaxService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    Parallax2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parallax2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./parallax2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parallax/parallax2/parallax2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./parallax2.page.scss */
      "./src/app/pages/parallax/parallax2/parallax2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_parallex_parallax_service__WEBPACK_IMPORTED_MODULE_3__["ParallaxService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], Parallax2Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-parallax-parallax2-parallax2-module-es5.js.map