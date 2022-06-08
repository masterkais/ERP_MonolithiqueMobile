(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forms-forms4-forms4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/forms4/forms4.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/forms4/forms4.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Form with Images\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\n  <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\" halfStarIconName=\"star-half\"\n    starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\"></rating>\n\n  <ion-list lines=\"none\" class=\"contactFormList\">\n\n    <ion-item class=\"inputs-item\" lines=\"none\">\n      <ion-input type=\"text\" placeholder=\"Name\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"inputs-item\" lines=\"none\">\n      <ion-textarea placeholder=\"Message\" rows=\"6\"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf=\"cap_img\">\n      <img [src]=\"cap_img\" class=\"img_selected\" />\n    </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"block\" fill=\"outline\" color=\"secondary\" (click)=\"getImages()\">Add Images</ion-button>\n  <ion-button expand=\"block\" color=\"secondary\" (click)=\"sendMessage()\">Send Messages</ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/forms/forms4/forms4-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/forms/forms4/forms4-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: Forms4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forms4PageRoutingModule", function() { return Forms4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forms4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms4.page */ "./src/app/pages/forms/forms4/forms4.page.ts");




const routes = [
    {
        path: '',
        component: _forms4_page__WEBPACK_IMPORTED_MODULE_3__["Forms4Page"]
    }
];
let Forms4PageRoutingModule = class Forms4PageRoutingModule {
};
Forms4PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Forms4PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/forms/forms4/forms4.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/forms/forms4/forms4.module.ts ***!
  \*****************************************************/
/*! exports provided: Forms4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forms4PageModule", function() { return Forms4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _forms4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms4-routing.module */ "./src/app/pages/forms/forms4/forms4-routing.module.ts");
/* harmony import */ var _forms4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms4.page */ "./src/app/pages/forms/forms4/forms4.page.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");








let Forms4PageModule = class Forms4PageModule {
};
Forms4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forms4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Forms4PageRoutingModule"],
            ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]
        ],
        declarations: [_forms4_page__WEBPACK_IMPORTED_MODULE_6__["Forms4Page"]]
    })
], Forms4PageModule);



/***/ }),

/***/ "./src/app/pages/forms/forms4/forms4.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/forms/forms4/forms4.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contactFormList {\n  margin-top: 20px;\n}\n.contactFormList .inputs-item {\n  border: 1px solid lightcyan;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  margin: 10px;\n}\n.sendBtn {\n  border-radius: 10px;\n}\n.footerContent {\n  margin-top: 10px;\n}\n.footerContent .infoFooter {\n  color: gray;\n  font-size: 10px;\n}\n.footerContent .footerImage {\n  height: 25px;\n}\n.footerContent .footerImageW {\n  height: 25px;\n  margin-left: 82%;\n}\n.img_selected {\n  width: 100%;\n  height: 200px;\n}\nion-button {\n  --border-radius: 5px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybXMvZm9ybXM0L0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxmb3Jtc1xcZm9ybXM0XFxmb3JtczQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb3Jtcy9mb3JtczQvZm9ybXM0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGdCQUFBO0FDQ1I7QURBUTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0FDRVI7QURDSTtFQUNJLG1CQUFBO0FDRVI7QURBSTtFQUNJLGdCQUFBO0FDR1I7QURGUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDSVo7QURGUTtFQUNJLFlBQUE7QUNJWjtBREZRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDSVo7QURBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDR1I7QURBSTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybXMvZm9ybXM0L2Zvcm1zNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmNvbnRhY3RGb3JtTGlzdCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIC5pbnB1dHMtaXRlbSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y3lhbjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlbmRCdG4ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICAuZm9vdGVyQ29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIC5pbmZvRm9vdGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXJJbWFnZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlckltYWdlVyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogODIlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmltZ19zZWxlY3RlZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9IiwiLmNvbnRhY3RGb3JtTGlzdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGFjdEZvcm1MaXN0IC5pbnB1dHMtaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y3lhbjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5zZW5kQnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZvb3RlckNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmZvb3RlckNvbnRlbnQgLmluZm9Gb290ZXIge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZvb3RlckNvbnRlbnQgLmZvb3RlckltYWdlIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLmZvb3RlckNvbnRlbnQgLmZvb3RlckltYWdlVyB7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDgyJTtcbn1cblxuLmltZ19zZWxlY3RlZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/forms/forms4/forms4.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/forms/forms4/forms4.page.ts ***!
  \***************************************************/
/*! exports provided: Forms4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forms4Page", function() { return Forms4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/




let Forms4Page = class Forms4Page {
    constructor(util, cameraCtrl, actionSheetController) {
        this.util = util;
        this.cameraCtrl = cameraCtrl;
        this.actionSheetController = actionSheetController;
        this.rate = '2';
    }
    ngOnInit() {
    }
    onRatingChange(event) {
        console.log('event', event);
    }
    sendMessage() {
        this.util.showToast('Message sent', 'success', 'bottom');
    }
    getImages() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Choose From',
                buttons: [
                    {
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            console.log('camera clicked');
                            this.takePhoto();
                        }
                    }, {
                        text: 'Gallery',
                        icon: 'images',
                        handler: () => {
                            console.log('gallery clicked');
                            this.gallery();
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
    gallery() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const options = {
                    quality: 100,
                    targetHeight: 500,
                    targetWidth: 500,
                    destinationType: this.cameraCtrl.DestinationType.DATA_URL,
                    encodingType: this.cameraCtrl.EncodingType.JPEG,
                    mediaType: this.cameraCtrl.MediaType.PICTURE,
                    sourceType: this.cameraCtrl.PictureSourceType.PHOTOLIBRARY,
                    correctOrientation: true
                };
                const result = yield this.cameraCtrl.getPicture(options);
                this.cap_img = `data:image/png;base64,${result}`;
            }
            catch (e) {
                console.error(e);
            }
        });
    } // take Gallary
    takePhoto() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const options = {
                    quality: 100,
                    targetHeight: 500,
                    targetWidth: 500,
                    destinationType: this.cameraCtrl.DestinationType.DATA_URL,
                    encodingType: this.cameraCtrl.EncodingType.PNG,
                    mediaType: this.cameraCtrl.MediaType.PICTURE,
                    sourceType: this.cameraCtrl.PictureSourceType.CAMERA,
                    correctOrientation: true
                };
                const result = yield this.cameraCtrl.getPicture(options);
                this.cap_img = `data:image/png;base64,${result}`;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
};
Forms4Page.ctorParameters = () => [
    { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
Forms4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms4',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forms/forms4/forms4.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forms4.page.scss */ "./src/app/pages/forms/forms4/forms4.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
], Forms4Page);



/***/ })

}]);
//# sourceMappingURL=pages-forms-forms4-forms4-module-es2015.js.map