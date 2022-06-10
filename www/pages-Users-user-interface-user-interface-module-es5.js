function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Users-user-interface-user-interface-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Users/user-interface/user-interface.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Users/user-interface/user-interface.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsersUserInterfaceUserInterfacePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"addtocart()\" class=\"ion-button custom-class\" color=\"red\"  fill=\"solid\">\r\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\r\n        <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Nouveau Client\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"div_logo\" (click)=\"addNew()\">\r\n    <img src=\"assets/images/add.png\" class=\"img \">\r\n    <p class=\"new_title\">Ajouter un client</p>\r\n  </div>\r\n  <img  src=\"assets/images/nodata.png\">\r\n  <!--\r\n  <img *ngIf=\"!haveData\" src=\"assets/images/nodata.png\">\r\n  <ion-card *ngFor=\"let list of lists;let i = index\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>\r\n        <span class=\"text-primary\">{{ i + 1 }}.</span>\r\n\r\n        <div class=\"list-more\">\r\n          <ion-button fill=\"clear\" (click)=\"launchMenu(list)\" size=\"small\">\r\n\r\n            <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\" style=\"font-size: 20px;\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-card-subtitle>\r\n      <ion-card-title>{{list.title}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <p>\r\n        {{ list.description}}\r\n      </p>\r\n    </ion-card-content>\r\n  </ion-card>-->\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/Users/user-interface/user-interface-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/Users/user-interface/user-interface-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: UserInterfacePageRoutingModule */

  /***/
  function srcAppPagesUsersUserInterfaceUserInterfaceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInterfacePageRoutingModule", function () {
      return UserInterfacePageRoutingModule;
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


    var _user_interface_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-interface.page */
    "./src/app/pages/Users/user-interface/user-interface.page.ts");

    var routes = [{
      path: '',
      component: _user_interface_page__WEBPACK_IMPORTED_MODULE_3__["UserInterfacePage"]
    }];

    var UserInterfacePageRoutingModule = function UserInterfacePageRoutingModule() {
      _classCallCheck(this, UserInterfacePageRoutingModule);
    };

    UserInterfacePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserInterfacePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/Users/user-interface/user-interface.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/Users/user-interface/user-interface.module.ts ***!
    \*********************************************************************/

  /*! exports provided: UserInterfacePageModule */

  /***/
  function srcAppPagesUsersUserInterfaceUserInterfaceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInterfacePageModule", function () {
      return UserInterfacePageModule;
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


    var _user_interface_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-interface-routing.module */
    "./src/app/pages/Users/user-interface/user-interface-routing.module.ts");
    /* harmony import */


    var _user_interface_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-interface.page */
    "./src/app/pages/Users/user-interface/user-interface.page.ts");

    var UserInterfacePageModule = function UserInterfacePageModule() {
      _classCallCheck(this, UserInterfacePageModule);
    };

    UserInterfacePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_interface_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserInterfacePageRoutingModule"]],
      declarations: [_user_interface_page__WEBPACK_IMPORTED_MODULE_6__["UserInterfacePage"]]
    })], UserInterfacePageModule);
    /***/
  },

  /***/
  "./src/app/pages/Users/user-interface/user-interface.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/Users/user-interface/user-interface.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsersUserInterfaceUserInterfacePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_logo {\n  width: 100%;\n  text-align: center;\n}\n.div_logo .new_title {\n  font-size: 1rem;\n}\n.div_logo .img {\n  width: 20%;\n  margin-top: 5% !important;\n}\n.list-more {\n  font-size: 25px !important;\n  position: absolute;\n  right: -10px;\n  top: -18px;\n}\n.text-primary {\n  color: var(--ion-color-primary) !important;\n}\n.list-source-name {\n  font-size: 12px;\n  color: lightgray;\n}\nion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n/* Setting Overflow Visible */\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVXNlcnMvdXNlci1pbnRlcmZhY2UvRDpcXEVEU1xcSW9uaWMgRVJQXFxFUlBfTW9ub2xpdGhpcXVlTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcVXNlcnNcXHVzZXItaW50ZXJmYWNlXFx1c2VyLWludGVyZmFjZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL1VzZXJzL3VzZXItaW50ZXJmYWNlL3VzZXItaW50ZXJmYWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0FGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURDRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ0NKO0FERUE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDRjtBRENBO0VBQ0UsMENBQUE7QUNFRjtBREFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDR0Y7QURhQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDVkY7QURhQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDVkY7QURjQSw2QkFBQTtBQUNBO0VBQ0UsaUJBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1VzZXJzL3VzZXItaW50ZXJmYWNlL3VzZXItaW50ZXJmYWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZGl2X2xvZ297XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC5uZXdfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIC5pbWd7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmxpc3QtbW9yZSB7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTBweDtcclxuICB0b3A6IC0xOHB4O1xyXG59XHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3Qtc291cmNlLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW9uLWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiA4cHQ7XHJcbiAgcmlnaHQ6IC01cHg7XHJcbiAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi5pb24tYnV0dG9uIHtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogU2V0dGluZyBPdmVyZmxvdyBWaXNpYmxlICovXHJcbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufSIsIi5kaXZfbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2X2xvZ28gLm5ld190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5kaXZfbG9nbyAuaW1nIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtbW9yZSB7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdG9wOiAtMThweDtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuLmxpc3Qtc291cmNlLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbmlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA4cHQ7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IDJweDtcbn1cblxuLmlvbi1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/Users/user-interface/user-interface.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/Users/user-interface/user-interface.page.ts ***!
    \*******************************************************************/

  /*! exports provided: UserInterfacePage */

  /***/
  function srcAppPagesUsersUserInterfaceUserInterfacePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInterfacePage", function () {
      return UserInterfacePage;
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


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util/util.service */
    "./src/app/services/util/util.service.ts");

    var UserInterfacePage = /*#__PURE__*/function () {
      function UserInterfacePage(router, sqlite, actionSheetController, navCtrl, util, alertCtrl) {
        _classCallCheck(this, UserInterfacePage);

        this.router = router;
        this.sqlite = sqlite;
        this.actionSheetController = actionSheetController;
        this.navCtrl = navCtrl;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.produits_commandes_list = [];
        this.haveData = false;

        if (localStorage.getItem("produits_commandes") != null) {
          this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
        }
      }

      _createClass(UserInterfacePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getInfo();
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
        key: "getInfo",
        value: function getInfo() {
          var _this = this;

          this.sqlite.create({
            name: 'offline5.db',
            location: 'default'
          }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS offlineData(id INTEGER PRIMARY KEY, title TEXT, description TEXT)', []).then(function (res) {
              return console.log('Executed SQL');
            }).catch(function (e) {
              return _this.util.showToast(e, 'danger', 'bottom');
            });
            db.executeSql('SELECT * FROM offlineData ORDER BY id DESC', []).then(function (res) {
              console.log('offline data', res);
              _this.lists = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this.lists.push({
                  id: res.rows.item(i).id,
                  title: res.rows.item(i).title,
                  description: res.rows.item(i).description
                });
              }

              if (_this.lists.length > 0) {
                _this.haveData = true;
              }
            }).catch(function (error) {
              console.log(error);

              _this.util.showToast('Error', 'danger', 'bottom');
            });
          }).catch(function (error) {
            console.log(error);

            _this.util.showToast('Error', 'danger', 'bottom');
          });
        }
      }, {
        key: "addNew",
        value: function addNew() {
          this.router.navigate(['add-user']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.badgecount = 0;
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'are you sure?',
                      message: 'to delete this item',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this2.sqlite.create({
                            name: 'offline5.db',
                            location: 'default'
                          }).then(function (db) {
                            db.executeSql('DELETE FROM offlineData WHERE id=?', [item]).then(function (res) {
                              console.log(res);

                              _this2.getInfo();
                            }).catch(function (e) {
                              return console.log(e);
                            });
                          }).catch(function (e) {
                            return console.log(e);
                          });
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
        key: "launchMenu",
        value: function launchMenu(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetController.create({
                      header: 'Action',
                      buttons: [{
                        text: 'Edit',
                        icon: 'create',
                        handler: function handler() {
                          console.log('Edit clicked');
                          var navData = {
                            queryParams: {
                              data: JSON.stringify(item)
                            }
                          };

                          _this3.router.navigate(['offline-details'], navData);
                        }
                      }, {
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          console.log('Delete clicked');

                          _this3.deleteItem(item.id);
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addtocart",
        value: function addtocart() {
          this.navCtrl.navigateRoot(['my-cart']);
        }
      }]);

      return UserInterfacePage;
    }();

    UserInterfacePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    UserInterfacePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-interface',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-interface.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Users/user-interface/user-interface.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-interface.page.scss */
      "./src/app/pages/Users/user-interface/user-interface.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], UserInterfacePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-Users-user-interface-user-interface-module-es5.js.map