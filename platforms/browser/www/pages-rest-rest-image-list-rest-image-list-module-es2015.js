(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rest-rest-image-list-rest-image-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-image-list/rest-image-list.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-image-list/rest-image-list.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Rest APIs Image List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"div_logo\" (click)=\"addNew()\">\n    <img src=\"assets/images/add.png\" class=\"img \">\n    <p class=\"new_title\">Add New</p>\n  </div>\n\n  <img *ngIf=\"!haveData\" src=\"assets/images/nodata.png\">\n\n  <ion-card *ngFor=\"let list of lists;let i = index\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        <span class=\"text-primary\">{{ i + 1 }}.</span>\n        <div class=\"list-more\">\n          <ion-button fill=\"clear\" (click)=\"launchMenu(list)\">\n            <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical-outline\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-card-subtitle>\n      <ion-card-title>{{list.title}}</ion-card-title>\n    </ion-card-header>\n    <ion-img class=\"animated fadeIn fast\" *ngIf=\"list.img\" [src]=\"getImage(list.img)\">\n    </ion-img>\n    <ion-card-content>\n      <p>\n        {{ list.description}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/rest/rest-image-list/rest-image-list-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/rest/rest-image-list/rest-image-list-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: RestImageListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestImageListPageRoutingModule", function() { return RestImageListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rest_image_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest-image-list.page */ "./src/app/pages/rest/rest-image-list/rest-image-list.page.ts");




const routes = [
    {
        path: '',
        component: _rest_image_list_page__WEBPACK_IMPORTED_MODULE_3__["RestImageListPage"]
    }
];
let RestImageListPageRoutingModule = class RestImageListPageRoutingModule {
};
RestImageListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RestImageListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/rest/rest-image-list/rest-image-list.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/rest/rest-image-list/rest-image-list.module.ts ***!
  \**********************************************************************/
/*! exports provided: RestImageListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestImageListPageModule", function() { return RestImageListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_image_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rest-image-list-routing.module */ "./src/app/pages/rest/rest-image-list/rest-image-list-routing.module.ts");
/* harmony import */ var _rest_image_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rest-image-list.page */ "./src/app/pages/rest/rest-image-list/rest-image-list.page.ts");







let RestImageListPageModule = class RestImageListPageModule {
};
RestImageListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rest_image_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestImageListPageRoutingModule"]
        ],
        declarations: [_rest_image_list_page__WEBPACK_IMPORTED_MODULE_6__["RestImageListPage"]]
    })
], RestImageListPageModule);



/***/ }),

/***/ "./src/app/pages/rest/rest-image-list/rest-image-list.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/rest/rest-image-list/rest-image-list.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_logo {\n  width: 100%;\n  text-align: center;\n}\n.div_logo .new_title {\n  font-size: 1rem;\n}\n.div_logo .img {\n  width: 20%;\n  margin-top: 5% !important;\n}\n.list-more {\n  font-size: 25px !important;\n  position: absolute;\n  right: -10px;\n  top: -18px;\n}\n.text-primary {\n  color: var(--ion-color-primary) !important;\n}\n.list-source-name {\n  font-size: 12px;\n  color: lightgray;\n}\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animated.fast {\n  -webkit-animation-duration: 700ms;\n  animation-duration: 700ms;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzdC9yZXN0LWltYWdlLWxpc3QvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXHJlc3RcXHJlc3QtaW1hZ2UtbGlzdFxccmVzdC1pbWFnZS1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVzdC9yZXN0LWltYWdlLWxpc3QvcmVzdC1pbWFnZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNRLFdBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxlQUFBO0FDQ1o7QURDUTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQ0NaO0FERUk7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDUjtBRENJO0VBQ0ksMENBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR1I7QURESTtFQUNJLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDSVI7QURESTtFQUNJLGlDQUFBO0VBQ0EseUJBQUE7QUNJUjtBRERJO0VBQ0k7SUFDSSxVQUFBO0VDSVY7RURGTTtJQUNJLFVBQUE7RUNJVjtBQUNGO0FEREk7RUFDSTtJQUNJLFVBQUE7RUNHVjtFRERNO0lBQ0ksVUFBQTtFQ0dWO0FBQ0Y7QURBSTtFQUNJLDhCQUFBO0VBQ0Esc0JBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3QvcmVzdC1pbWFnZS1saXN0L3Jlc3QtaW1hZ2UtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXG4uZGl2X2xvZ297XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5uZXdfdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5saXN0LW1vcmUge1xuICAgICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgIHRvcDogLTE4cHg7XG4gICAgfVxuICAgIC50ZXh0LXByaW1hcnkge1xuICAgICAgICBjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGlzdC1zb3VyY2UtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICB9XG4gICAgLmFuaW1hdGVkIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgfVxuXG4gICAgLmFuaW1hdGVkLmZhc3Qge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNzAwbXM7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNzAwbXM7XG4gICAgfVxuXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mYWRlSW4ge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gICAgfSIsIi5kaXZfbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2X2xvZ28gLm5ld190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5kaXZfbG9nbyAuaW1nIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtbW9yZSB7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdG9wOiAtMThweDtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuLmxpc3Qtc291cmNlLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uYW5pbWF0ZWQuZmFzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA3MDBtcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA3MDBtcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmZhZGVJbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/rest/rest-image-list/rest-image-list.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/rest/rest-image-list/rest-image-list.page.ts ***!
  \********************************************************************/
/*! exports provided: RestImageListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestImageListPage", function() { return RestImageListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest/rest-apis.service */ "./src/app/services/rest/rest-apis.service.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/





let RestImageListPage = class RestImageListPage {
    constructor(router, actionSheetController, util, api, alertCtrl) {
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.util = util;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.haveData = false;
    }
    ionViewWillEnter() {
        const uid = localStorage.getItem('uid');
        if (uid && uid != null && uid != 'null') {
            this.getItems();
        }
        else {
            this.router.navigate(['/rest-login']);
            this.util.showToast('Unauthorized', 'danger', 'bottom');
        }
    }
    getItems() {
        let param = {
            user_id: localStorage.getItem('uid')
        };
        this.api.post(param, 'ImagesCRUD/getById').then((data) => {
            const info = JSON.parse(data.data);
            console.log('data', info);
            if (info && info.status === 200) {
                this.lists = [];
                this.lists = info.data;
                if (this.lists.length > 0) {
                    this.haveData = true;
                }
            }
        }).catch(error => {
            console.log('errr', error);
            this.util.showToast('something went wrong', 'danger', 'bottom');
        });
    }
    ngOnInit() {
    }
    addNew() {
        this.router.navigate(['rest-image-create']);
    }
    getImage(img) {
        return this.api.imagePath + img;
    }
    deleteItem(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'are you sure?',
                message: 'to delete this item',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.util.show();
                            const param = {
                                id: item
                            };
                            this.api.post(param, 'ImagesCRUD/deleteList').then((data) => {
                                this.util.hide();
                                const info = JSON.parse(data.data);
                                console.log(info);
                                this.getItems();
                            }).catch(error => {
                                this.util.hide();
                                console.log(error);
                                this.util.showToast('Something went wrong', 'danger', 'bottom');
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    launchMenu(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Action',
                buttons: [
                    {
                        text: 'Edit',
                        icon: 'create',
                        handler: () => {
                            console.log('Edit clicked');
                            const navData = {
                                queryParams: {
                                    data: JSON.stringify(item)
                                }
                            };
                            this.router.navigate(['rest-image-details'], navData);
                        }
                    }, {
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            console.log('Delete clicked');
                            this.deleteItem(item.id);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
RestImageListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__["RestAPIsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
RestImageListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rest-image-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rest-image-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest/rest-image-list/rest-image-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rest-image-list.page.scss */ "./src/app/pages/rest/rest-image-list/rest-image-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        src_app_services_rest_rest_apis_service__WEBPACK_IMPORTED_MODULE_5__["RestAPIsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], RestImageListPage);



/***/ }),

/***/ "./src/app/services/util/util.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/util/util.service.ts ***!
  \***********************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/



let UtilService = class UtilService {
    constructor(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl) {
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
    show(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                message: msg,
                spinner: 'bubbles',
            }).then(a => {
                a.present().then(() => {
                    //console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    hide() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
    /*
      Show Warning Alert Message
      param : msg = message to display
      Call this method to show Warning Alert,
      */
    showWarningAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Warning',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    showSimpleAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /*
     Show Error Alert Message
     param : msg = message to display
     Call this method to show Error Alert,
     */
    showErrorAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Error',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /*
       param : email = email to verify
       Call this method to get verify email
       */
    getEmailFilter(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!(emailfilter.test(email))) {
                const alert = yield this.alertCtrl.create({
                    header: 'Warning',
                    message: 'Please enter valid email',
                    buttons: ['OK']
                });
                yield alert.present();
                return false;
            }
            else {
                return true;
            }
        });
    }
    /*
      Show Toast Message on Screen
       param : msg = message to display, color= background color of toast example dark,danger,light. position  = position of message example top,bottom
       Call this method to show toast message
       */
    showToast(msg, color, positon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                color: color,
                position: positon
            });
            toast.present();
        });
    }
    shoNotification(msg, color, positon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 4000,
                color: color,
                position: positon,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Cancel clicked');
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    errorToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
            });
            toast.present();
        });
    }
    apiErrorHandler(err) {
        //console.log("Error got in service =>", err)
        if (err.status == -1) {
            this.showErrorAlert('Failed To Connect With Server');
        }
        else if (err.status == 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
        }
        else if (err.status == 500) {
            this.showErrorAlert("Somethimg Went Wrong..");
        }
    }
    // setDetails(data) {
    //   this.details = null;
    //   this.details = data;
    // }
    // getDetails() {
    //   return this.details;
    // }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};
UtilService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], UtilService);



/***/ })

}]);
//# sourceMappingURL=pages-rest-rest-image-list-rest-image-list-module-es2015.js.map