(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ProductRequests-send-request-send-request-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ProductRequests/send-request/send-request.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ProductRequests/send-request/send-request.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <!--- <ion-back-button mode=\"md\"></ion-back-button>-->\n\n      <ion-menu-button></ion-menu-button>\n\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"ion-button custom-class\" (click)=\"addtocart()\" color=\"red\"  fill=\"solid\">\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\n        <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\n      </ion-button>\n\n    </ion-buttons>\n    <ion-title style=\"text-align: center\">Envoyer une demande</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list lines=\"none\" class=\"contactFormList\">\n\n      <ion-item class=\"inputs-item\" lines=\"none\">\n        <ion-input type=\"text\" placeholder=\"Nom\" #nom></ion-input>\n      </ion-item>\n\n      <ion-item class=\"inputs-item\" lines=\"none\">\n        <ion-label>Client</ion-label>\n        <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" *ngFor=\"let item of user_list\">\n          <ion-select-option value=\"brown\">{{item.getfirstName()}} {{item.getlastName()}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item class=\"inputs-item\" lines=\"none\">\n        <ion-input type=\"email\" placeholder=\"Adresse email\" #adrmail></ion-input>\n      </ion-item>\n\n      <ion-item class=\"inputs-item\" lines=\"none\">\n        <ion-input type=\"text\" placeholder=\"Matricule Fiscale\" #nomutilid></ion-input>\n      </ion-item>\n\n      <!--<ion-item class=\"inputs-item\" lines=\"none\">\n        <ion-input type=\"password\" placeholder=\"Mot de passe\" #motdepasse></ion-input>\n      </ion-item>-->\n\n      <ion-item class=\"inputs-item\" lines=\"none\">\n        <ion-input type=\"text\" placeholder=\"Adresse\" #adr></ion-input>\n      </ion-item>\n\n      <ion-item class=\"inputs-item\" lines=\"none\">\n        <ion-input type=\"text\" placeholder=\"Ville\" #ville></ion-input>\n      </ion-item>\n\n      <ion-item class=\"inputs-item\" lines=\"none\">\n        <ion-input type=\"date\" placeholder=\"{{startDate}}\" #datenaiss></ion-input>\n\n\n      </ion-item>\n\n      <ion-item class=\"inputs-item\" lines=\"none\">\n        <ion-input type=\"text\" placeholder=\"Numéro tél\" #tel></ion-input>\n      </ion-item>\n\n      <ion-item class=\"inputs-item\" lines=\"none\">\n        <ion-input type=\"text\" placeholder=\"Fax\" #fax></ion-input>\n      </ion-item>\n\n\n    </ion-list>\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"adduser(nom.value,prenom.value,adrmail.value,nomutilid.value, adr.value,ville.value,datenaiss.value,tel.value,fax.value)\">Enregistrer</ion-button>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/ProductRequests/send-request/send-request-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/ProductRequests/send-request/send-request-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SendRequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendRequestPageRoutingModule", function() { return SendRequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _send_request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-request.page */ "./src/app/pages/ProductRequests/send-request/send-request.page.ts");




const routes = [
    {
        path: '',
        component: _send_request_page__WEBPACK_IMPORTED_MODULE_3__["SendRequestPage"]
    }
];
let SendRequestPageRoutingModule = class SendRequestPageRoutingModule {
};
SendRequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SendRequestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ProductRequests/send-request/send-request.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ProductRequests/send-request/send-request.module.ts ***!
  \***************************************************************************/
/*! exports provided: SendRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendRequestPageModule", function() { return SendRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _send_request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-request-routing.module */ "./src/app/pages/ProductRequests/send-request/send-request-routing.module.ts");
/* harmony import */ var _send_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-request.page */ "./src/app/pages/ProductRequests/send-request/send-request.page.ts");







let SendRequestPageModule = class SendRequestPageModule {
};
SendRequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _send_request_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendRequestPageRoutingModule"]
        ],
        declarations: [_send_request_page__WEBPACK_IMPORTED_MODULE_6__["SendRequestPage"]]
    })
], SendRequestPageModule);



/***/ }),

/***/ "./src/app/pages/ProductRequests/send-request/send-request.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ProductRequests/send-request/send-request.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-badge {\n  position: absolute;\n  font-size: 8pt;\n  right: -5px;\n  top: 2px;\n}\n\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n/* Setting Overflow Visible */\n\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n\n.contactFormList {\n  margin-top: 20px;\n}\n\n.contactFormList .inputs-item {\n  border: 1px solid lightcyan;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  margin: 10px;\n}\n\nion-button {\n  --border-radius: 5px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvUHJvZHVjdFJlcXVlc3RzL3NlbmQtcmVxdWVzdC9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcUHJvZHVjdFJlcXVlc3RzXFxzZW5kLXJlcXVlc3RcXHNlbmQtcmVxdWVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL1Byb2R1Y3RSZXF1ZXN0cy9zZW5kLXJlcXVlc3Qvc2VuZC1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBLDZCQUFBOztBQUNBO0VBQ0UsaUJBQUE7QUNBRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FESUU7RUFDRSwyQkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRE1BO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9Qcm9kdWN0UmVxdWVzdHMvc2VuZC1yZXF1ZXN0L3NlbmQtcmVxdWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDhwdDtcclxuICByaWdodDogLTVweDtcclxuICB0b3A6IDJweDtcclxufVxyXG5cclxuLmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cclxuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWN0Rm9ybUxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIC5pbnB1dHMtaXRlbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufSIsImlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA4cHQ7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IDJweDtcbn1cblxuLmlvbi1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5jb250YWN0Rm9ybUxpc3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRhY3RGb3JtTGlzdCAuaW5wdXRzLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/ProductRequests/send-request/send-request.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ProductRequests/send-request/send-request.page.ts ***!
  \*************************************************************************/
/*! exports provided: SendRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendRequestPage", function() { return SendRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/rest/rest-apis.service */ "./src/app/services/rest/rest-apis.service.ts");



let SendRequestPage = class SendRequestPage {
    constructor(api) {
        this.api = api;
        this.user_list = [];
    }
    ngOnInit() {
        this.getAllClients();
    }
    charge_compteur() {
        if (localStorage.getItem("compteur") != null) {
            this.badgecount = localStorage.getItem("compteur");
        }
        else {
            this.badgecount = 0;
        }
        return this.badgecount;
    }
    getAllClients() {
        var i, user;
        this.api.get('user/users').then((data) => {
            const info = JSON.parse(data.data);
            /*   alert(info[1]['groupIds']);
             alert(groupids[0]['id']);
               alert(groupids[0].id);
             if(info.length>0) {
               for (i = 0; i < info.length; i++) {
                 const groupids = info[i]['groupIds'];
                 if(groupids.length >0){
                   if(groupids[0]['id'] == '3'){
                     user = new User();
                     user.setgroupId(groupids[0]['id']);
                     user.setid(info[i]['id']);
                     user.setlastName(info[i]['lastName']);
                     user.setfirstName(info[i]['firstName']);
                     user.setadress(info[i]['adress']);
                     user.setfax(info[i]['fax']);
                     user.setemail(info[i]['email']);
                     user.setcity(info[i]['city']);
                     user.setactive(info[i]['active']);
                     user.setdateNaissanced(info[i]['dateNaissanced']);
                     user.setlogin(info[i]['login']);
                     user.setpassword(info[i]['password']);
                     this.user_list.push(user);
                   }
       
                 }
               }
             }*/
            //  this.dismissLoader();
        }).catch(error => {
            //this.isLogin = false;
            alert('getallimages');
            alert(error.message);
            //this.util.showToast(`${error}`, 'danger', 'bottom');
        });
    }
};
SendRequestPage.ctorParameters = () => [
    { type: _services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__["RestAPIsService"] }
];
SendRequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./send-request.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ProductRequests/send-request/send-request.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./send-request.page.scss */ "./src/app/pages/ProductRequests/send-request/send-request.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_2__["RestAPIsService"]])
], SendRequestPage);



/***/ })

}]);
//# sourceMappingURL=pages-ProductRequests-send-request-send-request-module-es2015.js.map