(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verification-verification-module"],{

/***/ "./node_modules/ng-otp-input/fesm2015/ng-otp-input.js":
/*!************************************************************!*\
  !*** ./node_modules/ng-otp-input/fesm2015/ng-otp-input.js ***!
  \************************************************************/
/*! exports provided: NgOtpInputModule, ɵa, ɵc, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgOtpInputModule", function() { return NgOtpInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgOtpInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NumberOnlyDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return KeysPipe; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KeysPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return Object.keys(value);
    }
}
KeysPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"], args: [{
                name: 'keys'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputComponent {
    /**
     * @param {?} keysPipe
     */
    constructor(keysPipe) {
        this.keysPipe = keysPipe;
        this.config = { length: 4 };
        // tslint:disable-next-line: no-output-on-prefix
        this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.inputControls = new Array(this.config.length);
        this.componentKey = Math.random()
            .toString(36)
            .substring(2) + new Date().getTime().toString(36);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        for (let index = 0; index < this.config.length; index++) {
            this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]());
        }
        this.inputType = this.getInputType();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.config.disableAutoFocus) {
            /** @type {?} */
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            if (containerItem) {
                containerItem.addEventListener('paste', (/**
                 * @param {?} evt
                 * @return {?}
                 */
                (evt) => this.handlePaste(evt)));
                /** @type {?} */
                const ele = containerItem.getElementsByClassName('otp-input')[0];
                if (ele && ele.focus) {
                    ele.focus();
                }
            }
        }
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    getControlName(idx) {
        return `ctrl_${idx}`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifLeftArrow(event) {
        return this.ifKeyCode(event, 37);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifRightArrow(event) {
        return this.ifKeyCode(event, 39);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifBackspaceOrDelete(event) {
        return (event.key === 'Backspace' ||
            event.key === 'Delete' ||
            this.ifKeyCode(event, 8) ||
            this.ifKeyCode(event, 46));
    }
    /**
     * @param {?} event
     * @param {?} targetCode
     * @return {?}
     */
    ifKeyCode(event, targetCode) {
        /** @type {?} */
        const key = event.keyCode || event.charCode;
        // tslint:disable-next-line: triple-equals
        return key == targetCode ? true : false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKeyDown($event) {
        /** @type {?} */
        var isSpace = this.ifKeyCode($event, 32);
        if (isSpace) { // prevent space
            return false;
        }
    }
    /**
     * @param {?} $event
     * @param {?} inputIdx
     * @return {?}
     */
    onKeyUp($event, inputIdx) {
        /** @type {?} */
        const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
        /** @type {?} */
        const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
        if (this.ifRightArrow($event)) {
            this.setSelected(nextInputId);
            return;
        }
        if (this.ifLeftArrow($event)) {
            this.setSelected(prevInputId);
            return;
        }
        /** @type {?} */
        const isBackspace = this.ifBackspaceOrDelete($event);
        if (isBackspace && !$event.target.value) {
            this.setSelected(prevInputId);
            this.rebuildValue();
            return;
        }
        if (!$event.target.value) {
            return;
        }
        if (this.ifValidEntry($event)) {
            this.setSelected(nextInputId);
        }
        this.rebuildValue();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    appendKey(id) {
        return `${id}_${this.componentKey}`;
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    setSelected(eleId) {
        this.focusTo(eleId);
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele && ele.setSelectionRange) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                ele.setSelectionRange(0, 1);
            }), 0);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifValidEntry(event) {
        /** @type {?} */
        const inp = String.fromCharCode(event.keyCode);
        /** @type {?} */
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return (isMobile ||
            /[a-zA-Z0-9-_]/.test(inp) ||
            (this.config.allowKeyCodes &&
                this.config.allowKeyCodes.includes(event.keyCode)) ||
            (event.keyCode >= 96 && event.keyCode <= 105));
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    focusTo(eleId) {
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele) {
            ele.focus();
        }
    }
    // method to set component value
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        if (this.config.allowNumbersOnly && isNaN(value)) {
            return;
        }
        this.otpForm.reset();
        if (!value) {
            this.rebuildValue();
            return;
        }
        value = value.toString().replace(/\s/g, ''); // remove whitespace
        Array.from(value).forEach((/**
         * @param {?} c
         * @param {?} idx
         * @return {?}
         */
        (c, idx) => {
            if (this.otpForm.get(this.getControlName(idx))) {
                this.otpForm.get(this.getControlName(idx)).setValue(c);
            }
        }));
        /** @type {?} */
        const containerItem = document.getElementById(`c_${this.componentKey}`);
        /** @type {?} */
        var indexOfElementToFocus = value.length < this.config.length ? value.length : (this.config.length - 1);
        /** @type {?} */
        let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
        if (ele && ele.focus) {
            ele.focus();
        }
        this.rebuildValue();
    }
    /**
     * @return {?}
     */
    rebuildValue() {
        /** @type {?} */
        let val = '';
        this.keysPipe.transform(this.otpForm.controls).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            if (this.otpForm.controls[k].value) {
                val += this.otpForm.controls[k].value;
            }
        }));
        this.onInputChange.emit(val);
    }
    /**
     * @return {?}
     */
    getInputType() {
        return this.config.isPasswordInput
            ? 'password'
            : this.config.allowNumbersOnly
                ? 'tel'
                : 'text';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handlePaste(e) {
        // Get pasted data via clipboard API
        /** @type {?} */
        let clipboardData = e.clipboardData || window['clipboardData'];
        if (clipboardData) {
            /** @type {?} */
            var pastedData = clipboardData.getData('Text');
        }
        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();
        if (!pastedData) {
            return;
        }
        this.setValue(pastedData);
    }
}
NgOtpInputComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-otp-input',
                template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" maxlength=\"1\"\r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"off\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
                styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input{width:30px;font-size:18px;height:30px}}"]
            }] }
];
/** @nocollapse */
NgOtpInputComponent.ctorParameters = () => [
    { type: KeysPipe }
];
NgOtpInputComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberOnlyDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.disabledNumberOnly) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
        }
    }
}
NumberOnlyDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                selector: '[numberOnly]'
            },] }
];
/** @nocollapse */
NumberOnlyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
];
NumberOnlyDirective.propDecorators = {
    disabledNumberOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputModule {
}
NgOtpInputModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
                ],
                declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
                exports: [NgOtpInputComponent],
                providers: [KeysPipe]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-otp-input.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Verification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"main_content_div\">\n    <ion-label class=\"head_lbl\">Angular OTP Input</ion-label>\n\n    <div class=\"check_div\">\n      <input type=\"checkbox\" class=\"check\" name=\"number-only\" id=\"number-only\" [(ngModel)]=\"config.allowNumbersOnly\"\n        (change)=\"onConfigChange()\">\n      <span>Allow Number Only</span>\n    </div>\n\n    <div class=\"check_div\">\n      <input type=\"checkbox\" class=\"check\" name=\"pass-input\" id=\"pass-input\" [(ngModel)]=\"config.isPasswordInput\"\n        (change)=\"onConfigChange()\">\n      <span>Password Input</span>\n    </div>\n\n    <div class=\"check_div\">\n      <input type=\"checkbox\" class=\"check\" name=\"disable-focus\" id=\"disable-focus\" [(ngModel)]=\"config.disableAutoFocus\"\n        (change)=\"onConfigChange()\">\n      <span>Disable Auto Focus</span>\n    </div>\n\n    <div class=\"form_div\">\n      <ion-label class=\"lbl\">Number of Inputs</ion-label>\n      <input type=\"number\" name=\"input-length\" [(ngModel)]=\"config.length\" min=\"1\" max=\"10\"\n        (ngModelChange)=\"onConfigChange()\">\n\n      <ion-label class=\"lbl\">Placeholder</ion-label>\n      <input type=\"text\" name=\"input-placeholder\" [(ngModel)]=\"config.placeholder\" maxlength=\"1\"\n        (change)=\"onConfigChange()\">\n\n      <ion-label class=\"lbl\">Update Value To</ion-label>\n      <input type=\"text\" #valInput name=\"input-update-val\" placeholder=\"Focus out to change\"\n        (change)=\"setVal(valInput.value)\" min=\"1\" max=\"10\">\n    </div>\n\n    <div class=\"card\">\n      <ion-label class=\"head_lbl\">Enter verification code</ion-label>\n      <ng-otp-input #ngOtpInput (onInputChange)=\"onOtpChange($event)\" *ngIf=\"showOtpComponent\" [config]=\"config\">\n      </ng-otp-input>\n      <span *ngIf=\"otp\" class=\"o-t-p\">Entered otp : {{otp}}</span>\n    </div>\n    \n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/verification/verification-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/verification/verification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VerificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function() { return VerificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verification.page */ "./src/app/pages/verification/verification.page.ts");




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/verification/verification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/verification/verification.module.ts ***!
  \***********************************************************/
/*! exports provided: VerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function() { return VerificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verification-routing.module */ "./src/app/pages/verification/verification-routing.module.ts");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification.page */ "./src/app/pages/verification/verification.page.ts");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/fesm2015/ng-otp-input.js");








let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificationPageRoutingModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"]
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]]
    })
], VerificationPageModule);



/***/ }),

/***/ "./src/app/pages/verification/verification.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/verification/verification.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .head_lbl {\n  font-size: 25px;\n  padding: 5px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.main_content_div .check_div {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: -webkit-box;\n  display: flex;\n}\n.main_content_div .check_div .check {\n  height: 20px;\n  width: 20px;\n}\n.main_content_div .check_div span {\n  margin-left: 20px;\n}\n.main_content_div .form_div .lbl {\n  margin-bottom: 5px;\n}\n.main_content_div .form_div input {\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid lightgrey;\n  height: 50px;\n  padding: 0 0.5rem;\n  margin-bottom: 10px;\n  background: #f3f3f3;\n}\n.main_content_div .card {\n  margin-top: 20px;\n  padding: 10px;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n  border-radius: 4px;\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .card span {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZpY2F0aW9uL0Q6XFxleHBlcnREZXZTb2x1dGlvbnNcXGlvbmljX2VycFxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFx2ZXJpZmljYXRpb25cXHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtBQ0NKO0FERUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0ZKO0FESUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0ZOO0FESUk7RUFDRSxpQkFBQTtBQ0ZOO0FET0k7RUFDRSxrQkFBQTtBQ0xOO0FEUUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNOTjtBRFVFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1JKO0FEVUk7RUFDRSxnQkFBQTtBQ1JOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5oZWFkX2xibCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmNoZWNrX2RpdntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5jaGVja3tcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgIH1cbiAgICBzcGFue1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZvcm1fZGl2e1xuICAgIC5sYmx7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICBcbiAgICBpbnB1dHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICB9XG4gIH1cblxuICAuY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNkNGQ0ZDUsIDAgMCAwIDFweCAjZDRkNGQ1O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHNwYW57XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgfVxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2hlY2tfZGl2IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jaGVja19kaXYgLmNoZWNrIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jaGVja19kaXYgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5sYmwge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNkNGQ0ZDUsIDAgMCAwIDFweCAjZDRkNGQ1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkIHNwYW4ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/verification/verification.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/verification/verification.page.ts ***!
  \*********************************************************/
/*! exports provided: VerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPage", function() { return VerificationPage; });
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

let VerificationPage = class VerificationPage {
    constructor() {
        this.showOtpComponent = true;
        this.config = {
            allowNumbersOnly: false,
            length: 3,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '50px',
                'height': '50px',
            }
        };
    }
    ngOnInit() {
    }
    onOtpChange(otp) {
        this.otp = otp;
    }
    setVal(val) {
        this.ngOtpInput.setValue(val);
    }
    onConfigChange() {
        this.showOtpComponent = false;
        this.otp = null;
        setTimeout(() => {
            this.showOtpComponent = true;
        }, 0);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngOtpInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VerificationPage.prototype, "ngOtpInput", void 0);
VerificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verification.page.scss */ "./src/app/pages/verification/verification.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VerificationPage);



/***/ })

}]);
//# sourceMappingURL=pages-verification-verification-module-es2015.js.map