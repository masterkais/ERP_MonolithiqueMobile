(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-fire-image-create-fire-image-create-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/fire-image-create/fire-image-create.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/fire-image-create/fire-image-create.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Add New Image List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"div_img\" (click)=\"addImage()\">\n    <img src=\"assets/images/camera1.png\" *ngIf=\"image ==''\" class=\"img_logo\" />\n    <ion-spinner name=\"circles\" *ngIf=\"uploading\" class=\"my_spin\"></ion-spinner>\n    <img [src]=\"image\" *ngIf=\"image != ''\" class=\"img_logo\" />\n  </div>\n  <ion-item>\n    <ion-label position=\"floating\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-textarea [(ngModel)]=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-button expand=\"block\" color=\"secondary\" margin-top (click)=\"addList()\" [disabled]=\"isCreate\">\n    <span *ngIf=\"!isCreate\">\n      Add List\n    </span>\n    <ion-spinner name=\"dots\" *ngIf=\"isCreate\"></ion-spinner>\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/firebase/fire-image-create/fire-image-create-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/firebase/fire-image-create/fire-image-create-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: FireImageCreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireImageCreatePageRoutingModule", function() { return FireImageCreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fire_image_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fire-image-create.page */ "./src/app/pages/firebase/fire-image-create/fire-image-create.page.ts");




const routes = [
    {
        path: '',
        component: _fire_image_create_page__WEBPACK_IMPORTED_MODULE_3__["FireImageCreatePage"]
    }
];
let FireImageCreatePageRoutingModule = class FireImageCreatePageRoutingModule {
};
FireImageCreatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FireImageCreatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/firebase/fire-image-create/fire-image-create.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/firebase/fire-image-create/fire-image-create.module.ts ***!
  \******************************************************************************/
/*! exports provided: FireImageCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireImageCreatePageModule", function() { return FireImageCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _fire_image_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fire-image-create-routing.module */ "./src/app/pages/firebase/fire-image-create/fire-image-create-routing.module.ts");
/* harmony import */ var _fire_image_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fire-image-create.page */ "./src/app/pages/firebase/fire-image-create/fire-image-create.page.ts");







let FireImageCreatePageModule = class FireImageCreatePageModule {
};
FireImageCreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fire_image_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["FireImageCreatePageRoutingModule"]
        ],
        declarations: [_fire_image_create_page__WEBPACK_IMPORTED_MODULE_6__["FireImageCreatePage"]]
    })
], FireImageCreatePageModule);



/***/ }),

/***/ "./src/app/pages/firebase/fire-image-create/fire-image-create.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/firebase/fire-image-create/fire-image-create.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_img {\n  width: 250px;\n  height: 250px;\n  background-color: lightgray;\n  position: relative;\n  display: block;\n  margin: auto;\n  background-size: cover;\n  background-position: center;\n}\n.div_img .my_spin {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.div_img .img_logo {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlyZWJhc2UvZmlyZS1pbWFnZS1jcmVhdGUvRDpcXGV4cGVydERldlNvbHV0aW9uc1xcaW9uaWNfZXJwXFxBcHBfY29kZS9zcmNcXGFwcFxccGFnZXNcXGZpcmViYXNlXFxmaXJlLWltYWdlLWNyZWF0ZVxcZmlyZS1pbWFnZS1jcmVhdGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9maXJlYmFzZS9maXJlLWltYWdlLWNyZWF0ZS9maXJlLWltYWdlLWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNBSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNDUjtBRENJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlyZWJhc2UvZmlyZS1pbWFnZS1jcmVhdGUvZmlyZS1pbWFnZS1jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxuLmRpdl9pbWd7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLm15X3NwaW57XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIH1cbiAgICAuaW1nX2xvZ297ICAgICAgXG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIH1cbn0iLCIuZGl2X2ltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5kaXZfaW1nIC5teV9zcGluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5kaXZfaW1nIC5pbWdfbG9nbyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/firebase/fire-image-create/fire-image-create.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/firebase/fire-image-create/fire-image-create.page.ts ***!
  \****************************************************************************/
/*! exports provided: FireImageCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireImageCreatePage", function() { return FireImageCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/








let FireImageCreatePage = class FireImageCreatePage {
    constructor(util, adb, navCtrl, actionSheetController, cameraCtrl, afStorage) {
        this.util = util;
        this.adb = adb;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.cameraCtrl = cameraCtrl;
        this.afStorage = afStorage;
        this.title = '';
        this.description = '';
        this.image = '';
        this.url = '';
    }
    ngOnInit() {
        this.isCreate = false;
        this.uploading = false;
    }
    addList() {
        if (this.title == '') {
            this.util.showWarningAlert('Please Add Title');
            return false;
        }
        if (this.description == '') {
            this.util.showWarningAlert('Please add Description');
            return false;
        }
        if (this.image == '') {
            this.util.showWarningAlert('Please Add Image');
            return false;
        }
        if (this.url != '' && !this.uploading) {
            this.isCreate = true;
            let id = this.makeid(10);
            this.adb.collection('fireimage').doc(localStorage.getItem('fuid')).collection('list').doc(id).set({
                id: id,
                title: this.title,
                description: this.description,
                image: this.url,
                timestamp: new Date().toISOString(),
            }).then(() => {
                console.log('added');
                this.isCreate = false;
                this.navCtrl.back();
                this.util.showToast('List Added', 'success', 'bottom');
            }).catch((error) => {
                console.log('error', error);
                this.isCreate = false;
                this.util.showErrorAlert("Something went Wrong");
            });
        }
    }
    makeid(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    addImage() {
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
                this.image = `data:image/png;base64,${result}`;
                this.uploadimage();
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
                this.image = `data:image/png;base64,${result}`;
                this.uploadimage();
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    uploadimage() {
        const id = this.makeid(30);
        this.uploading = true;
        this.ref = this.afStorage.ref(`images/${id}`);
        this.task = this.ref.putString(this.image, 'data_url');
        this.uploadState = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(s => s.state));
        this.uploadProgress = this.task.percentageChanges();
        console.log('upload progress', this.uploadProgress);
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.downloadURL = this.ref.getDownloadURL();
            this.downloadURL.subscribe(url => {
                console.log('download uril', url);
                this.url = url;
                this.uploading = false;
            });
        }))
            .subscribe();
    }
};
FireImageCreatePage.ctorParameters = () => [
    { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }
];
FireImageCreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fire-image-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fire-image-create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/firebase/fire-image-create/fire-image-create.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fire-image-create.page.scss */ "./src/app/pages/firebase/fire-image-create/fire-image-create.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
], FireImageCreatePage);



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
//# sourceMappingURL=pages-firebase-fire-image-create-fire-image-create-module-es2015.js.map