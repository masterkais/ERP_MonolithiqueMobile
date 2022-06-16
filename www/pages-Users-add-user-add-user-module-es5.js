function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Users-add-user-add-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Users/add-user/add-user.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Users/add-user/add-user.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsersAddUserAddUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <!--- <ion-back-button mode=\"md\"></ion-back-button>-->\r\n\r\n      <ion-menu-button></ion-menu-button>\r\n\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"ion-button custom-class\" (click)=\"addtocart()\" color=\"red\"  fill=\"solid\">\r\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\r\n        <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">Ajouter un client</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form (submit)=\"adduser(nom.value,prenom.value,adrmail.value,nomutilid.value,adr.value,ville.value,datenaiss.value,tel.value,fax.value)\">\r\n    <ion-list lines=\"none\" class=\"contactFormList\">\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Nom\" #nom></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Prénom\" #prenom></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-input type=\"email\" placeholder=\"Adresse email\" #adrmail></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Matricule Fiscale\" #nomutilid></ion-input>\r\n      </ion-item>\r\n\r\n      <!--<ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-input type=\"password\" placeholder=\"Mot de passe\" #motdepasse></ion-input>\r\n      </ion-item>-->\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Adresse\" #adr></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Ville\" #ville></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-input type=\"date\" placeholder=\"{{startDate}}\" #datenaiss></ion-input>\r\n\r\n\r\n      </ion-item>\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Numéro tél\" #tel></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"inputs-item\" lines=\"none\">\r\n        <ion-input type=\"text\" placeholder=\"Fax\" #fax></ion-input>\r\n      </ion-item>\r\n\r\n\r\n    </ion-list>\r\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"adduser(nom.value,prenom.value,adrmail.value,nomutilid.value, adr.value,ville.value,datenaiss.value,tel.value,fax.value)\">Enregistrer</ion-button>\r\n  </form>\r\n\r\n  <!--<ion-button expand=\"block\" color=\"secondary\" (click)=\"sendMessage()\">Enregistrer</ion-button>-->\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/Users/add-user/add-user-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/Users/add-user/add-user-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddUserPageRoutingModule */

  /***/
  function srcAppPagesUsersAddUserAddUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserPageRoutingModule", function () {
      return AddUserPageRoutingModule;
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


    var _add_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-user.page */
    "./src/app/pages/Users/add-user/add-user.page.ts");

    var routes = [{
      path: '',
      component: _add_user_page__WEBPACK_IMPORTED_MODULE_3__["AddUserPage"]
    }];

    var AddUserPageRoutingModule = function AddUserPageRoutingModule() {
      _classCallCheck(this, AddUserPageRoutingModule);
    };

    AddUserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddUserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/Users/add-user/add-user.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/Users/add-user/add-user.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddUserPageModule */

  /***/
  function srcAppPagesUsersAddUserAddUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserPageModule", function () {
      return AddUserPageModule;
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


    var _add_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-user-routing.module */
    "./src/app/pages/Users/add-user/add-user-routing.module.ts");
    /* harmony import */


    var _add_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-user.page */
    "./src/app/pages/Users/add-user/add-user.page.ts");

    var AddUserPageModule = function AddUserPageModule() {
      _classCallCheck(this, AddUserPageModule);
    };

    AddUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUserPageRoutingModule"]],
      declarations: [_add_user_page__WEBPACK_IMPORTED_MODULE_6__["AddUserPage"]]
    })], AddUserPageModule);
    /***/
  },

  /***/
  "./src/app/pages/Users/add-user/add-user.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/Users/add-user/add-user.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsersAddUserAddUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n/* Setting Overflow Visible */\n\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n\n.contactFormList {\n  margin-top: 20px;\n}\n\n.contactFormList .inputs-item {\n  border: 1px solid lightcyan;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  margin: 10px;\n}\n\nion-button {\n  --border-radius: 5px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVXNlcnMvYWRkLXVzZXIvRDpcXEVEU1xcSW9uaWMgRVJQXFxFUlBfTW9ub2xpdGhpcXVlTW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcVXNlcnNcXGFkZC11c2VyXFxhZGQtdXNlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL1VzZXJzL2FkZC11c2VyL2FkZC11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBLDZCQUFBOztBQUNBO0VBQ0UsaUJBQUE7QUNBRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FESUU7RUFDRSwyQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRE1BO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9Vc2Vycy9hZGQtdXNlci9hZGQtdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDhwdDtcclxuICByaWdodDogLTVweDtcclxuICB0b3A6IDJweDtcclxufVxyXG5cclxuLmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cclxuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWN0Rm9ybUxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIC5pbnB1dHMtaXRlbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufSIsImlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA4cHQ7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IDJweDtcbn1cblxuLmlvbi1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5jb250YWN0Rm9ybUxpc3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRhY3RGb3JtTGlzdCAuaW5wdXRzLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/Users/add-user/add-user.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/Users/add-user/add-user.page.ts ***!
    \*******************************************************/

  /*! exports provided: AddUserPage */

  /***/
  function srcAppPagesUsersAddUserAddUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserPage", function () {
      return AddUserPage;
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


    var _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/rest/rest-apis.service */
    "./src/app/services/rest/rest-apis.service.ts");
    /* harmony import */


    var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util/util.service */
    "./src/app/services/util/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var date_fns_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! date-fns/format */
    "./node_modules/date-fns/esm/format/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/rest/environnement.model */
    "./src/app/services/rest/environnement.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddUserPage = /*#__PURE__*/function () {
      function AddUserPage(util, navCtrl, sqlite, api, http, datePipe, httpClient, router) {
        _classCallCheck(this, AddUserPage);

        this.util = util;
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.api = api;
        this.http = http;
        this.datePipe = datePipe;
        this.httpClient = httpClient;
        this.router = router;
        this.produits_commandes_list = [];
        this.startDate = new Date().toISOString();
        this.today2 = new Date();
        this.startDate = Object(date_fns_format__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(), "yyyy-MM-dd");

        if (localStorage.getItem("produits_commandes") != null) {
          this.produits_commandes_list = JSON.parse(localStorage.getItem("produits_commandes"));
        } // alert(this.startDate);

      }

      _createClass(AddUserPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.badgecount = 0;
          this.isCreate = false;
        }
      }, {
        key: "addList",
        value: function addList() {
          /*  if (this.title == '') {
           this.util.showWarningAlert('Please Add Title');
           return false;
           }
           if (this.description === '') {
           this.util.showWarningAlert('Please add Description');
           return false;
           }
           this.isCreate = true;
           this.sqlite.create({
           name: 'offline5.db',
           location: 'default'
           }).then((db: SQLiteObject) => {
           db.executeSql('INSERT INTO offlineData VALUES(NULL,?,?)', [this.title, this.description])
           .then(res => {
           console.log(res);
           this.navCtrl.back();
           })
           .catch(e => {
           console.log(e);
           this.util.showToast('Error', 'danger', 'bottom');
           });
           }).catch(e => {
           console.log(e);
           this.util.showToast('Error', 'danger', 'bottom');
           });*/
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
        key: "addtocart",
        value: function addtocart() {
          this.navCtrl.navigateRoot(['my-cart']);
        }
      }, {
        key: "adduser",
        value: function adduser(nom, prenom, adrmail, nomutilid, adr, ville, datenaiss, tel, fax) {
          var _this = this;

          if (nom == "" || prenom == "" || adrmail == "" || nomutilid == "" || adr == "" || ville == "" || tel == "" || fax == "") {
            this.util.showToast('Veuillez remplir tous les champs !', 'danger', 'bottom');
          } else {
            var maDate = this.datePipe.transform(datenaiss, "yyyy-MM-ddT14:20:29");
            var data = {
              id: null,
              firstName: nom,
              lastName: prenom,
              login: nomutilid,
              password: nomutilid,
              dateNaissanced: maDate,
              dateCreated: new Date(),
              adress: adr,
              fax: fax,
              email: adrmail,
              city: ville,
              picture: null,
              active: true,
              groupIds: [{
                id: 3
              }]
            };
            this.saveUser(data).subscribe(function (data) {
              console.log("succces");
              location.reload();

              _this.util.showToast('Ajout User success', 'success', 'bottom');

              _this.navCtrl.navigateRoot(['add-user']);
            }, function (err) {
              location.reload();

              _this.util.showToast('Utilisateur existe déjà', 'danger', 'bottom');
            });
          }
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          return this.httpClient.post(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_10__["environmentApi"].host + "/api/user", user);
        }
      }]);

      return AddUserPage;
    }();

    AddUserPage.ctorParameters = function () {
      return [{
        type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"]
      }, {
        type: _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__["RestAPIsService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }];
    };

    AddUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Users/add-user/add-user.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-user.page.scss */
      "./src/app/pages/Users/add-user/add-user.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"], _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__["RestAPIsService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])], AddUserPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-Users-add-user-add-user-module-es5.js.map