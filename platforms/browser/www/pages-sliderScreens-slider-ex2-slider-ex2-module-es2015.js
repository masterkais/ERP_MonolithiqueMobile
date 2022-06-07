(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sliderScreens-slider-ex2-slider-ex2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliderScreens/slider-ex2/slider-ex2.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliderScreens/slider-ex2/slider-ex2.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"overlay\"> \n    <ion-icon name=\"arrow-back-outline\" [class.ios_pad]=\"plt == 'ios'\" (click)=\"goBack()\"></ion-icon>\n  </div>\n\n  <ion-slides mode=\"ios\" pager=\"ios\" [options]=\"slideOpts\">\n    <ion-slide>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/slide1.jpg)'\">\n        <ion-label class=\"lbl_content\">\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n          when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n        </ion-label>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/slide2.jpg)'\">\n        <ion-label class=\"lbl_content\">\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n          when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n        </ion-label>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/slide3.jpg)'\">\n        <ion-label class=\"lbl_content\">\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n          when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n        </ion-label>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/sliderScreens/slider-ex2/slider-ex2-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/sliderScreens/slider-ex2/slider-ex2-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SliderEx2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderEx2PageRoutingModule", function() { return SliderEx2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _slider_ex2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider-ex2.page */ "./src/app/pages/sliderScreens/slider-ex2/slider-ex2.page.ts");




const routes = [
    {
        path: '',
        component: _slider_ex2_page__WEBPACK_IMPORTED_MODULE_3__["SliderEx2Page"]
    }
];
let SliderEx2PageRoutingModule = class SliderEx2PageRoutingModule {
};
SliderEx2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SliderEx2PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/sliderScreens/slider-ex2/slider-ex2.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/sliderScreens/slider-ex2/slider-ex2.module.ts ***!
  \*********************************************************************/
/*! exports provided: SliderEx2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderEx2PageModule", function() { return SliderEx2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _slider_ex2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider-ex2-routing.module */ "./src/app/pages/sliderScreens/slider-ex2/slider-ex2-routing.module.ts");
/* harmony import */ var _slider_ex2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider-ex2.page */ "./src/app/pages/sliderScreens/slider-ex2/slider-ex2.page.ts");







let SliderEx2PageModule = class SliderEx2PageModule {
};
SliderEx2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _slider_ex2_routing_module__WEBPACK_IMPORTED_MODULE_5__["SliderEx2PageRoutingModule"]
        ],
        declarations: [_slider_ex2_page__WEBPACK_IMPORTED_MODULE_6__["SliderEx2Page"]]
    })
], SliderEx2PageModule);



/***/ }),

/***/ "./src/app/pages/sliderScreens/slider-ex2/slider-ex2.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/sliderScreens/slider-ex2/slider-ex2.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: relative;\n}\nion-content .back_image {\n  height: 100vh;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\nion-content .overlay {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  z-index: 9;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 20px;\n  top: 0;\n}\nion-content .overlay ion-icon {\n  font-size: 30px;\n  color: white;\n}\nion-content .lbl_content {\n  color: white !important;\n  position: absolute;\n  top: 35%;\n  left: 0;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2xpZGVyU2NyZWVucy9zbGlkZXItZXgyL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxzbGlkZXJTY3JlZW5zXFxzbGlkZXItZXgyXFxzbGlkZXItZXgyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2xpZGVyU2NyZWVucy9zbGlkZXItZXgyL3NsaWRlci1leDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0FDRVI7QURBUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDRVo7QURFSTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zbGlkZXJTY3JlZW5zL3NsaWRlci1leDIvc2xpZGVyLWV4Mi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIC5vdmVybGF5e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHRvcDogMDtcblxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sYmxfY29udGVudHtcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzNSU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIH1cbn0iLCJpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IC5vdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0b3A6IDA7XG59XG5pb24tY29udGVudCAub3ZlcmxheSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgLmxibF9jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIGxlZnQ6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/sliderScreens/slider-ex2/slider-ex2.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/sliderScreens/slider-ex2/slider-ex2.page.ts ***!
  \*******************************************************************/
/*! exports provided: SliderEx2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderEx2Page", function() { return SliderEx2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/


let SliderEx2Page = class SliderEx2Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideOpts = {
            speed: 1000,
            autoplay: true,
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate() {
                    const swiper = this;
                    const { $, slides, rtlTranslate: rtl } = swiper;
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = slides.eq(i);
                        let progress = $slideEl[0].progress;
                        if (swiper.params.flipEffect.limitRotation) {
                            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        }
                        const offset$$1 = $slideEl[0].swiperSlideOffset;
                        const rotate = -180 * progress;
                        let rotateY = rotate;
                        let rotateX = 0;
                        let tx = -offset$$1;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        }
                        else if (rtl) {
                            rotateY = -rotateY;
                        }
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                        if (swiper.params.flipEffect.slideShadows) {
                            // Set shadows
                            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                        $slideEl
                            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    const { slides, activeIndex, $wrapperEl } = swiper;
                    slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        let eventTriggered = false;
                        // eslint-disable-next-line
                        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                            if (eventTriggered)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered = true;
                            swiper.animating = false;
                            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (let i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            }
        };
        this.plt = localStorage.getItem('platform');
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
SliderEx2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
SliderEx2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider-ex2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider-ex2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sliderScreens/slider-ex2/slider-ex2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider-ex2.page.scss */ "./src/app/pages/sliderScreens/slider-ex2/slider-ex2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], SliderEx2Page);



/***/ })

}]);
//# sourceMappingURL=pages-sliderScreens-slider-ex2-slider-ex2-module-es2015.js.map