(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-video-player-video-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-player/video-player.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-player/video-player.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Video Player</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-spinner class=\"ion-text-center\" name=\"circles\" *ngIf=\"!haveLoaded\"></ion-spinner>\n  <video src=\"\" poster=\"\" playsinline=\"1\" class=\"video_tag\" #videoPl controlsList=\"nodownload\"></video>\n\n  <div class=\"content_div\">\n    <ion-label>\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's \n      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make \n      a type specimen book.\n    </ion-label>\n  </div>\n\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/video-player/video-player-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/video-player/video-player-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VideoPlayerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerPageRoutingModule", function() { return VideoPlayerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _video_player_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-player.page */ "./src/app/pages/video-player/video-player.page.ts");




const routes = [
    {
        path: '',
        component: _video_player_page__WEBPACK_IMPORTED_MODULE_3__["VideoPlayerPage"]
    }
];
let VideoPlayerPageRoutingModule = class VideoPlayerPageRoutingModule {
};
VideoPlayerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoPlayerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/video-player/video-player.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/video-player/video-player.module.ts ***!
  \***********************************************************/
/*! exports provided: VideoPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerPageModule", function() { return VideoPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _video_player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-player-routing.module */ "./src/app/pages/video-player/video-player-routing.module.ts");
/* harmony import */ var _video_player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-player.page */ "./src/app/pages/video-player/video-player.page.ts");







let VideoPlayerPageModule = class VideoPlayerPageModule {
};
VideoPlayerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_player_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoPlayerPageRoutingModule"]
        ],
        declarations: [_video_player_page__WEBPACK_IMPORTED_MODULE_6__["VideoPlayerPage"]]
    })
], VideoPlayerPageModule);



/***/ }),

/***/ "./src/app/pages/video-player/video-player.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/video-player/video-player.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".video_tag {\n  width: 100%;\n}\n\n.content_div {\n  padding: 20px;\n}\n\n.content_div ion-label {\n  display: block;\n  color: gray;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlkZW8tcGxheWVyL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFx2aWRlby1wbGF5ZXJcXHZpZGVvLXBsYXllci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aWRlby1wbGF5ZXIvdmlkZW8tcGxheWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlb190YWd7XG4gICAgd2lkdGg6IDEwMCU7ICBcbn1cbi5jb250ZW50X2RpdntcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufSIsIi52aWRlb190YWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnRfZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/video-player/video-player.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/video-player/video-player.page.ts ***!
  \*********************************************************/
/*! exports provided: VideoPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerPage", function() { return VideoPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/

let VideoPlayerPage = class VideoPlayerPage {
    constructor() {
        this.haveLoaded = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.mVideoPlayers.nativeElement.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
            this.mVideoPlayers.nativeElement.poster = '';
            this.mVideoPlayers.nativeElement.play();
            this.haveLoaded = true;
        }, 2000);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoPl', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], VideoPlayerPage.prototype, "mVideoPlayers", void 0);
VideoPlayerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-player.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/video-player/video-player.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-player.page.scss */ "./src/app/pages/video-player/video-player.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VideoPlayerPage);



/***/ })

}]);
//# sourceMappingURL=pages-video-player-video-player-module-es2015.js.map