function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-accordions-accordions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accordions/accordions.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accordions/accordions.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccordionsAccordionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Accordion List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Accordion Menu</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngFor=\"let item of information; let i = index;\" class=\"accordion-list\" lines=\"none\" detail=\"false\"\n    no-padding>\n    <ion-item tappable (click)=\"toggleSection(i)\" [ngClass]=\"{'section-active': item.open, 'section': !item.open}\">\n      <ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!item.open\"></ion-icon>\n      <ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"item.open\"></ion-icon>\n      <ion-label>\n        {{item.name}}\n      </ion-label>\n    </ion-item>\n\n    <div *ngIf=\"item.children && item.open\">\n      <ion-list class=\"child-list\" *ngFor=\"let child of item.children; let j = index;\" lines=\"none\">\n        <ion-item tappable (click)=\"toggleItem(i, j)\" *ngIf=\"child.children\"\n          [ngClass]=\"{'child-active': child.open, 'child': !child.open}\">\n          <ion-icon slot=\"start\" name=\"add\" *ngIf=\"!child.open\"></ion-icon>\n          <ion-icon slot=\"start\" name=\"close\" *ngIf=\"child.open\"></ion-icon>\n          <ion-label>\n            {{child.name}}\n          </ion-label>\n        </ion-item>\n\n        <app-accordion [product]=\"child\" *ngIf=\"!child.children\"></app-accordion>\n\n        <ion-list *ngIf=\"child.children && child.open\" class=\"product-list\" lines=\"none\">\n          <app-accordion [product]=\"product\" *ngFor=\"let product of child.children\"></app-accordion>\n        </ion-list>\n\n      </ion-list>\n    </div>\n\n    <p *ngIf=\"item.children.length == 0 && item.open\" text-center>Sorry, nothing in here!</p>\n\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/accordions/accordions-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/accordions/accordions-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AccordionsPageRoutingModule */

  /***/
  function srcAppPagesAccordionsAccordionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionsPageRoutingModule", function () {
      return AccordionsPageRoutingModule;
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


    var _accordions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accordions.page */
    "./src/app/pages/accordions/accordions.page.ts");

    var routes = [{
      path: '',
      component: _accordions_page__WEBPACK_IMPORTED_MODULE_3__["AccordionsPage"]
    }];

    var AccordionsPageRoutingModule = function AccordionsPageRoutingModule() {
      _classCallCheck(this, AccordionsPageRoutingModule);
    };

    AccordionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccordionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/accordions/accordions.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/accordions/accordions.module.ts ***!
    \*******************************************************/

  /*! exports provided: AccordionsPageModule */

  /***/
  function srcAppPagesAccordionsAccordionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionsPageModule", function () {
      return AccordionsPageModule;
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


    var _accordions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accordions-routing.module */
    "./src/app/pages/accordions/accordions-routing.module.ts");
    /* harmony import */


    var _accordions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./accordions.page */
    "./src/app/pages/accordions/accordions.page.ts");
    /* harmony import */


    var src_app_components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/component.module */
    "./src/app/components/component.module.ts");

    var AccordionsPageModule = function AccordionsPageModule() {
      _classCallCheck(this, AccordionsPageModule);
    };

    AccordionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _accordions_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccordionsPageRoutingModule"], src_app_components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]],
      declarations: [_accordions_page__WEBPACK_IMPORTED_MODULE_6__["AccordionsPage"]]
    })], AccordionsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/accordions/accordions.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/accordions/accordions.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccordionsAccordionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-light);\n}\n\n.accordion-list {\n  margin-bottom: 4px;\n  --ion-item-background: #fff;\n}\n\n.accordion-list .section, .accordion-list .section-active {\n  --min-height: 58px;\n}\n\n.section {\n  --ion-item-background: #fff;\n  --ion-item-color: #000;\n}\n\n.section-active {\n  --ion-item-background: #989aa2;\n  --ion-item-color: #fff;\n  font-weight: 600;\n}\n\n.section-active ion-icon {\n  color: #fff;\n}\n\n.child-list {\n  padding: 0;\n  margin: 0;\n}\n\n.child-list .child, .child-list .child-active {\n  margin-bottom: 2px;\n}\n\n.child {\n  --ion-item-background: #e8e7e6;\n  --ion-item-color: #000;\n}\n\n.child-active {\n  --ion-item-background: #989aa2;\n  --ion-item-color: #fff;\n}\n\n.child-active ion-icon {\n  color: #fff;\n}\n\n.product-list {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3JkaW9ucy9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcYWNjb3JkaW9uc1xcYWNjb3JkaW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY29yZGlvbnMvYWNjb3JkaW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxvQ0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7QUNBSjs7QURJQTtFQUNFLDJCQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURHQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVFO0VBQ0UsV0FBQTtBQ0FKOztBRElBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNERjs7QURFRTtFQUNFLGtCQUFBO0FDQUo7O0FESUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FDREY7O0FESUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FDREY7O0FER0U7RUFDRSxXQUFBO0FDREo7O0FES0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3JkaW9ucy9hY2NvcmRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5hY2NvcmRpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmZmO1xuXG4gIC5zZWN0aW9uLCAuc2VjdGlvbi1hY3RpdmUge1xuICAgIC0tbWluLWhlaWdodDogNThweDtcbiAgfVxufVxuXG4uc2VjdGlvbiB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1pb24taXRlbS1jb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWFjdGl2ZSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzk4OWFhMjtcbiAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLmNoaWxkLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIC5jaGlsZCwgLmNoaWxkLWFjdGl2ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG59XG5cbi5jaGlsZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2U4ZTdlNjtcbiAgLS1pb24taXRlbS1jb2xvcjogIzAwMDtcbn1cblxuLmNoaWxkLWFjdGl2ZSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzk4OWFhMjtcbiAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLnByb2R1Y3QtbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmFjY29yZGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmZmY7XG59XG4uYWNjb3JkaW9uLWxpc3QgLnNlY3Rpb24sIC5hY2NvcmRpb24tbGlzdCAuc2VjdGlvbi1hY3RpdmUge1xuICAtLW1pbi1oZWlnaHQ6IDU4cHg7XG59XG5cbi5zZWN0aW9uIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWlvbi1pdGVtLWNvbG9yOiAjMDAwO1xufVxuXG4uc2VjdGlvbi1hY3RpdmUge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICM5ODlhYTI7XG4gIC0taW9uLWl0ZW0tY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc2VjdGlvbi1hY3RpdmUgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNoaWxkLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY2hpbGQtbGlzdCAuY2hpbGQsIC5jaGlsZC1saXN0IC5jaGlsZC1hY3RpdmUge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5jaGlsZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2U4ZTdlNjtcbiAgLS1pb24taXRlbS1jb2xvcjogIzAwMDtcbn1cblxuLmNoaWxkLWFjdGl2ZSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzk4OWFhMjtcbiAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcbn1cbi5jaGlsZC1hY3RpdmUgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnByb2R1Y3QtbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/accordions/accordions.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/accordions/accordions.page.ts ***!
    \*****************************************************/

  /*! exports provided: AccordionsPage */

  /***/
  function srcAppPagesAccordionsAccordionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionsPage", function () {
      return AccordionsPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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


    var AccordionsPage = /*#__PURE__*/function () {
      function AccordionsPage(http) {
        var _this = this;

        _classCallCheck(this, AccordionsPage);

        this.http = http;
        this.automaticClose = false;
        this.http.get('assets/information.json').subscribe(function (res) {
          _this.information = res['items'];
          _this.information[0].open = true;
        });
      }

      _createClass(AccordionsPage, [{
        key: "toggleSection",
        value: function toggleSection(index) {
          this.information[index].open = !this.information[index].open;

          if (this.automaticClose && this.information[index].open) {
            this.information.filter(function (item, itemIndex) {
              return itemIndex != index;
            }).map(function (item) {
              return item.open = false;
            });
          }
        }
      }, {
        key: "toggleItem",
        value: function toggleItem(index, childIndex) {
          this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccordionsPage;
    }();

    AccordionsPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AccordionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accordions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accordions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accordions/accordions.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accordions.page.scss */
      "./src/app/pages/accordions/accordions.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AccordionsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-accordions-accordions-module-es5.js.map