function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-input-mask-input-mask-module"], {
  /***/
  "./node_modules/ngx-mask/fesm2015/ngx-mask.js":
  /*!****************************************************!*\
    !*** ./node_modules/ngx-mask/fesm2015/ngx-mask.js ***!
    \****************************************************/

  /*! exports provided: INITIAL_CONFIG, MaskApplierService, MaskDirective, MaskPipe, MaskService, NEW_CONFIG, NgxMaskModule, _configFactory, config, initialConfig, timeMasks, withoutValidation */

  /***/
  function node_modulesNgxMaskFesm2015NgxMaskJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INITIAL_CONFIG", function () {
      return INITIAL_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaskApplierService", function () {
      return MaskApplierService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaskDirective", function () {
      return MaskDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaskPipe", function () {
      return MaskPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaskService", function () {
      return MaskService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NEW_CONFIG", function () {
      return NEW_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMaskModule", function () {
      return NgxMaskModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_configFactory", function () {
      return _configFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialConfig", function () {
      return initialConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "timeMasks", function () {
      return timeMasks;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "withoutValidation", function () {
      return withoutValidation;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function IConfig() {}

    if (false) {}
    /** @type {?} */


    var config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('config');
    /** @type {?} */

    var NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NEW_CONFIG');
    /** @type {?} */

    var INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('INITIAL_CONFIG');
    /** @type {?} */

    var initialConfig = {
      suffix: '',
      prefix: '',
      thousandSeparator: ' ',
      decimalMarker: '.',
      clearIfNotMatch: false,
      showTemplate: false,
      showMaskTyped: false,
      placeHolderCharacter: '_',
      dropSpecialCharacters: true,
      hiddenInput: undefined,
      shownMaskExpression: '',
      separatorLimit: '',
      validation: true,
      // tslint:disable-next-line: quotemark
      specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
      patterns: {
        '0': {
          pattern: new RegExp('\\d')
        },
        '9': {
          pattern: new RegExp('\\d'),
          optional: true
        },
        X: {
          pattern: new RegExp('\\d'),
          symbol: '*'
        },
        A: {
          pattern: new RegExp('[a-zA-Z0-9]')
        },
        S: {
          pattern: new RegExp('[a-zA-Z]')
        },
        d: {
          pattern: new RegExp('\\d')
        },
        m: {
          pattern: new RegExp('\\d')
        },
        M: {
          pattern: new RegExp('\\d')
        },
        H: {
          pattern: new RegExp('\\d')
        },
        h: {
          pattern: new RegExp('\\d')
        },
        s: {
          pattern: new RegExp('\\d')
        }
      }
    };
    /** @type {?} */

    var timeMasks = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];
    /** @type {?} */

    var withoutValidation = ['percent', 'Hh', 's0', 'm0', 'separator', 'd0/M0/0000', 'd0/M0', 'd0', 'M0'];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MaskApplierService = /*#__PURE__*/function () {
      /**
       * @param {?} _config
       */
      function MaskApplierService(_config) {
        var _this = this;

        _classCallCheck(this, MaskApplierService);

        this._config = _config;
        this.maskExpression = '';
        this.actualValue = '';
        this.shownMaskExpression = '';

        this._formatWithSeparators =
        /**
        * @param {?} str
        * @param {?} thousandSeparatorChar
        * @param {?} decimalChar
        * @param {?} precision
        * @return {?}
        */
        function (str, thousandSeparatorChar, decimalChar, precision) {
          /** @type {?} */
          var x = str.split(decimalChar);
          /** @type {?} */

          var decimals = x.length > 1 ? "".concat(decimalChar).concat(x[1]) : '';
          /** @type {?} */

          var res = x[0];
          /** @type {?} */

          var separatorLimit = _this.separatorLimit.replace(/\s/g, '');

          if (separatorLimit && +separatorLimit) {
            if (res[0] === '-') {
              res = "-".concat(res.slice(1, res.length).slice(0, separatorLimit.length));
            } else {
              res = res.slice(0, separatorLimit.length);
            }
          }
          /** @type {?} */


          var rgx = /(\d+)(\d{3})/;

          while (rgx.test(res)) {
            res = res.replace(rgx, '$1' + thousandSeparatorChar + '$2');
          }

          if (precision === undefined) {
            return res + decimals;
          } else if (precision === 0) {
            return res;
          }

          return res + decimals.substr(0, precision + 1);
        };

        this.percentage =
        /**
        * @param {?} str
        * @return {?}
        */
        function (str) {
          return Number(str) >= 0 && Number(str) <= 100;
        };

        this.getPrecision =
        /**
        * @param {?} maskExpression
        * @return {?}
        */
        function (maskExpression) {
          /** @type {?} */
          var x = maskExpression.split('.');

          if (x.length > 1) {
            return Number(x[x.length - 1]);
          }

          return Infinity;
        };

        this.checkInputPrecision =
        /**
        * @param {?} inputValue
        * @param {?} precision
        * @param {?} decimalMarker
        * @return {?}
        */
        function (inputValue, precision, decimalMarker) {
          if (precision < Infinity) {
            /** @type {?} */
            var precisionRegEx = new RegExp(_this._charToRegExpExpression(decimalMarker) + "\\d{".concat(precision, "}.*$"));
            /** @type {?} */

            var precisionMatch = inputValue.match(precisionRegEx);

            if (precisionMatch && precisionMatch[0].length - 1 > precision) {
              inputValue = inputValue.substring(0, inputValue.length - 1);
            } else if (precision === 0 && inputValue.endsWith(decimalMarker)) {
              inputValue = inputValue.substring(0, inputValue.length - 1);
            }
          }

          return inputValue;
        };

        this._shift = new Set();
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.suffix = this._config.suffix;
        this.thousandSeparator = this._config.thousandSeparator;
        this.decimalMarker = this._config.decimalMarker;
        this.hiddenInput = this._config.hiddenInput;
        this.showMaskTyped = this._config.showMaskTyped;
        this.placeHolderCharacter = this._config.placeHolderCharacter;
        this.validation = this._config.validation;
        this.separatorLimit = this._config.separatorLimit;
      }
      /**
       * @param {?} inputValue
       * @param {?} maskAndPattern
       * @return {?}
       */


      _createClass(MaskApplierService, [{
        key: "applyMaskWithPattern",
        value: function applyMaskWithPattern(inputValue, maskAndPattern) {
          var _maskAndPattern = _slicedToArray(maskAndPattern, 2),
              mask = _maskAndPattern[0],
              customPattern = _maskAndPattern[1];

          this.customPattern = customPattern;
          return this.applyMask(inputValue, mask);
        }
        /**
         * @param {?} inputValue
         * @param {?} maskExpression
         * @param {?=} position
         * @param {?=} cb
         * @return {?}
         */

      }, {
        key: "applyMask",
        value: function applyMask(inputValue, maskExpression) {
          var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] :
          /**
          * @return {?}
          */
          function () {};

          if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
            return '';
          }
          /** @type {?} */


          var cursor = 0;
          /** @type {?} */

          var result = '';
          /** @type {?} */

          var multi = false;
          /** @type {?} */

          var backspaceShift = false;
          /** @type {?} */

          var shift = 1;
          /** @type {?} */

          var stepBack = false;

          if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
          }

          if (!!this.suffix && inputValue.endsWith(this.suffix)) {
            inputValue = inputValue.slice(0, inputValue.length - this.suffix.length);
          }
          /** @type {?} */


          var inputArray = inputValue.toString().split('');

          if (maskExpression === 'IP') {
            this.ipError = !!(inputArray.filter(
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return i === '.';
            }).length < 3 && inputArray.length < 7);
            maskExpression = '099.099.099.099';
          }

          if (maskExpression.startsWith('percent')) {
            if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)) {
              inputValue = this._stripToDecimal(inputValue);
              /** @type {?} */

              var precision = this.getPrecision(maskExpression);
              inputValue = this.checkInputPrecision(inputValue, precision, '.');
            }

            if (inputValue.indexOf('.') > 0 && !this.percentage(inputValue.substring(0, inputValue.indexOf('.')))) {
              /** @type {?} */
              var base = inputValue.substring(0, inputValue.indexOf('.') - 1);
              inputValue = "".concat(base).concat(inputValue.substring(inputValue.indexOf('.'), inputValue.length));
            }

            if (this.percentage(inputValue)) {
              result = inputValue;
            } else {
              result = inputValue.substring(0, inputValue.length - 1);
            }
          } else if (maskExpression.startsWith('separator')) {
            if (inputValue.match('[wа-яА-Я]') || inputValue.match('[ЁёА-я]') || inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\[\]:";<>.?\/]/) || inputValue.match('[^A-Za-z0-9,]')) {
              inputValue = this._stripToDecimal(inputValue);
            }

            inputValue = inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== this.decimalMarker ? inputValue.slice(1, inputValue.length) : inputValue; // TODO: we had different rexexps here for the different cases... but tests dont seam to bother - check this
            //  separator: no COMMA, dot-sep: no SPACE, COMMA OK, comma-sep: no SPACE, COMMA OK

            /** @type {?} */

            var thousandSeperatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);
            /** @type {?} */


            var decimalMarkerEscaped = this._charToRegExpExpression(this.decimalMarker);
            /** @type {?} */


            var invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,";<>?\\/'.replace(thousandSeperatorCharEscaped, '').replace(decimalMarkerEscaped, '');
            /** @type {?} */

            var invalidCharRegexp = new RegExp('[' + invalidChars + ']');

            if (inputValue.match(invalidCharRegexp)) {
              inputValue = inputValue.substring(0, inputValue.length - 1);
            }
            /** @type {?} */


            var _precision = this.getPrecision(maskExpression);

            inputValue = this.checkInputPrecision(inputValue, _precision, this.decimalMarker);
            /** @type {?} */

            var strForSep = inputValue.replace(new RegExp(thousandSeperatorCharEscaped, 'g'), '');
            result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, _precision);
            /** @type {?} */

            var commaShift = result.indexOf(',') - inputValue.indexOf(',');
            /** @type {?} */

            var shiftStep = result.length - inputValue.length;

            if (shiftStep > 0 && result[position] !== ',') {
              backspaceShift = true;
              /** @type {?} */

              var _shift = 0;

              do {
                this._shift.add(position + _shift);

                _shift++;
              } while (_shift < shiftStep);
            } else if (commaShift !== 0 && position > 0 && !(result.indexOf(',') >= position && position > 3) || !(result.indexOf('.') >= position && position > 3) && shiftStep <= 0) {
              this._shift.clear();

              backspaceShift = true;
              shift = shiftStep;
              position += shiftStep;

              this._shift.add(position);
            } else {
              this._shift.clear();
            }
          } else {
            for ( // tslint:disable-next-line
            var i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i]) {
              if (cursor === maskExpression.length) {
                break;
              }

              if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                result += inputSymbol;
                cursor += 2;
              } else if (maskExpression[cursor + 1] === '*' && multi && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
                multi = false;
              } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '*') {
                result += inputSymbol;
                multi = true;
              } else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
              } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) || this.hiddenInput && this.maskAvailablePatterns[maskExpression[cursor]] && this.maskAvailablePatterns[maskExpression[cursor]].symbol === inputSymbol) {
                if (maskExpression[cursor] === 'H') {
                  if (Number(inputSymbol) > 2) {
                    cursor += 1;
                    /** @type {?} */

                    var _shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                    this._shift.add(_shiftStep + this.prefix.length || 0);

                    i--;
                    continue;
                  }
                }

                if (maskExpression[cursor] === 'h') {
                  if (result === '2' && Number(inputSymbol) > 3) {
                    cursor += 1;
                    i--;
                    continue;
                  }
                }

                if (maskExpression[cursor] === 'm') {
                  if (Number(inputSymbol) > 5) {
                    cursor += 1;
                    /** @type {?} */

                    var _shiftStep2 = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                    this._shift.add(_shiftStep2 + this.prefix.length || 0);

                    i--;
                    continue;
                  }
                }

                if (maskExpression[cursor] === 's') {
                  if (Number(inputSymbol) > 5) {
                    cursor += 1;
                    /** @type {?} */

                    var _shiftStep3 = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                    this._shift.add(_shiftStep3 + this.prefix.length || 0);

                    i--;
                    continue;
                  }
                }
                /** @type {?} */


                var daysCount = 31;

                if (maskExpression[cursor] === 'd') {
                  if (Number(inputValue.slice(cursor, cursor + 2)) > daysCount || inputValue[cursor + 1] === '/') {
                    cursor += 1;
                    /** @type {?} */

                    var _shiftStep4 = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                    this._shift.add(_shiftStep4 + this.prefix.length || 0);

                    i--;
                    continue;
                  }
                }

                if (maskExpression[cursor] === 'M') {
                  /** @type {?} */
                  var monthsCount = 12; // mask without day

                  /** @type {?} */

                  var withoutDays = cursor === 0 && (Number(inputSymbol) > 2 || Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/'); // day<10 && month<12 for input

                  /** @type {?} */

                  var day1monthInput = inputValue.slice(cursor - 3, cursor - 1).includes('/') && (inputValue[cursor - 2] === '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount && inputValue[cursor] !== '/' || inputValue[cursor] === '/' || inputValue[cursor - 3] === '/' && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount && inputValue[cursor - 1] !== '/' || inputValue[cursor - 1] === '/'); // 10<day<31 && month<12 for input

                  /** @type {?} */

                  var day2monthInput = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] === '/' && (Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/'); // day<10 && month<12 for paste whole data

                  /** @type {?} */

                  var day1monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) > daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && !inputValue.slice(cursor - 2, cursor).includes('/') && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount; // 10<day<31 && month<12 for paste whole data

                  /** @type {?} */

                  var day2monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] !== '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount;

                  if (withoutDays || day1monthInput || day2monthInput || day1monthPaste || day2monthPaste) {
                    cursor += 1;
                    /** @type {?} */

                    var _shiftStep5 = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                    this._shift.add(_shiftStep5 + this.prefix.length || 0);

                    i--;
                    continue;
                  }
                }

                result += inputSymbol;
                cursor++;
              } else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                result += maskExpression[cursor];
                cursor++;
                /** @type {?} */

                var _shiftStep6 = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                this._shift.add(_shiftStep6 + this.prefix.length || 0);

                i--;
              } else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 && this.maskAvailablePatterns[maskExpression[cursor]] && this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                if (!!inputArray[cursor] && maskExpression !== '099.099.099.099') {
                  result += inputArray[cursor];
                }

                cursor++;
                i--;
              } else if (this.maskExpression[cursor + 1] === '*' && this._findSpecialChar(this.maskExpression[cursor + 2]) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
                cursor += 3;
                result += inputSymbol;
              } else if (this.maskExpression[cursor + 1] === '?' && this._findSpecialChar(this.maskExpression[cursor + 2]) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
                cursor += 3;
                result += inputSymbol;
              } else if (this.showMaskTyped && this.maskSpecialCharacters.indexOf(inputSymbol) < 0 && inputSymbol !== this.placeHolderCharacter) {
                stepBack = true;
              }
            }
          }

          if (result.length + 1 === maskExpression.length && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
          }
          /** @type {?} */


          var newPosition = position + 1;

          while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
          }
          /** @type {?} */


          var actualShift = this._shift.has(position) ? shift : 0;

          if (stepBack) {
            actualShift--;
          }

          cb(actualShift, backspaceShift);

          if (shift < 0) {
            this._shift.clear();
          }
          /** @type {?} */


          var res = "".concat(this.prefix).concat(result).concat(this.suffix);

          if (result.length === 0) {
            res = "".concat(this.prefix).concat(result);
          }

          return res;
        }
        /**
         * @param {?} inputSymbol
         * @return {?}
         */

      }, {
        key: "_findSpecialChar",
        value: function _findSpecialChar(inputSymbol) {
          return this.maskSpecialCharacters.find(
          /**
          * @param {?} val
          * @return {?}
          */
          function (val) {
            return val === inputSymbol;
          });
        }
        /**
         * @protected
         * @param {?} inputSymbol
         * @param {?} maskSymbol
         * @return {?}
         */

      }, {
        key: "_checkSymbolMask",
        value: function _checkSymbolMask(inputSymbol, maskSymbol) {
          this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
          return this.maskAvailablePatterns[maskSymbol] && this.maskAvailablePatterns[maskSymbol].pattern && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
        }
        /**
         * @private
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "_stripToDecimal",
        value: function _stripToDecimal(str) {
          return str.split('').filter(
          /**
          * @param {?} i
          * @param {?} idx
          * @return {?}
          */
          function (i, idx) {
            return i.match('^-?\\d') || i === '.' || i === ',' || i === '-' && idx === 0;
          }).join('');
        }
        /**
         * @private
         * @param {?} char
         * @return {?}
         */

      }, {
        key: "_charToRegExpExpression",
        value: function _charToRegExpExpression(char) {
          /** @type {?} */
          var charsToEscape = '[\\^$.|?*+()';
          return char === ' ' ? '\\s' : charsToEscape.indexOf(char) >= 0 ? '\\' + char : char;
        }
      }]);

      return MaskApplierService;
    }();

    MaskApplierService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    MaskApplierService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [config]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MaskService = /*#__PURE__*/function (_MaskApplierService) {
      _inherits(MaskService, _MaskApplierService);

      /**
       * @param {?} document
       * @param {?} _config
       * @param {?} _elementRef
       * @param {?} _renderer
       */
      function MaskService(document, _config, _elementRef, _renderer) {
        var _this2;

        _classCallCheck(this, MaskService);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MaskService).call(this, _config));
        _this2.document = document;
        _this2._config = _config;
        _this2._elementRef = _elementRef;
        _this2._renderer = _renderer;
        _this2.maskExpression = '';
        _this2.isNumberValue = false;
        _this2.showMaskTyped = false;
        _this2.placeHolderCharacter = '_';
        _this2.maskIsShown = '';
        _this2.selStart = null;
        _this2.selEnd = null;

        _this2.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        _this2._formElement = _this2._elementRef.nativeElement;
        return _this2;
      } // tslint:disable-next-line:cyclomatic-complexity

      /**
       * @param {?} inputValue
       * @param {?} maskExpression
       * @param {?=} position
       * @param {?=} cb
       * @return {?}
       */


      _createClass(MaskService, [{
        key: "applyMask",
        value: function applyMask(inputValue, maskExpression) {
          var _this3 = this;

          var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] :
          /**
          * @return {?}
          */
          function () {};

          if (!maskExpression) {
            return inputValue;
          }

          this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';

          if (this.maskExpression === 'IP' && this.showMaskTyped) {
            this.maskIsShown = this.showMaskInInput(inputValue || '#');
          }

          if (!inputValue && this.showMaskTyped) {
            this.formControlResult(this.prefix);
            return this.prefix + this.maskIsShown;
          }
          /** @type {?} */


          var getSymbol = !!inputValue && typeof this.selStart === 'number' ? inputValue[this.selStart] : '';
          /** @type {?} */

          var newInputValue = '';

          if (this.hiddenInput !== undefined) {
            /** @type {?} */
            var actualResult = this.actualValue.split(''); // tslint:disable no-unused-expression

            inputValue !== '' && actualResult.length ? typeof this.selStart === 'number' && typeof this.selEnd === 'number' ? inputValue.length > actualResult.length ? actualResult.splice(this.selStart, 0, getSymbol) : inputValue.length < actualResult.length ? actualResult.length - inputValue.length === 1 ? actualResult.splice(this.selStart - 1, 1) : actualResult.splice(this.selStart, this.selEnd - this.selStart) : null : null : actualResult = []; // tslint:enable no-unused-expression

            newInputValue = this.actualValue.length ? this.shiftTypedSymbols(actualResult.join('')) : inputValue;
          }

          newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;
          /** @type {?} */

          var result = _get(_getPrototypeOf(MaskService.prototype), "applyMask", this).call(this, newInputValue, maskExpression, position, cb);

          this.actualValue = this.getActualValue(result); // handle some separator implications:
          // a.) adjust decimalMarker default (. -> ,) if thousandSeparator is a dot

          if (this.thousandSeparator === '.' && this.decimalMarker === '.') {
            this.decimalMarker = ',';
          } // b) remove decimal marker from list of special characters to mask


          if (this.maskExpression.startsWith('separator') && this.dropSpecialCharacters === true) {
            this.maskSpecialCharacters = this.maskSpecialCharacters.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item !== _this3.decimalMarker;
            });
          }

          this.formControlResult(result);

          if (!this.showMaskTyped) {
            if (this.hiddenInput) {
              return result && result.length ? this.hideInput(result, this.maskExpression) : result;
            }

            return result;
          }
          /** @type {?} */


          var resLen = result.length;
          /** @type {?} */

          var prefNmask = this.prefix + this.maskIsShown;
          return result + (this.maskExpression === 'IP' ? prefNmask : prefNmask.slice(resLen));
        }
        /**
         * @param {?=} position
         * @param {?=} cb
         * @return {?}
         */

      }, {
        key: "applyValueChanges",
        value: function applyValueChanges() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :
          /**
          * @return {?}
          */
          function () {};
          this._formElement.value = this.applyMask(this._formElement.value, this.maskExpression, position, cb);

          if (this._formElement === this.document.activeElement) {
            return;
          }

          this.clearIfNotMatchFn();
        }
        /**
         * @param {?} inputValue
         * @param {?} maskExpression
         * @return {?}
         */

      }, {
        key: "hideInput",
        value: function hideInput(inputValue, maskExpression) {
          var _this4 = this;

          return inputValue.split('').map(
          /**
          * @param {?} curr
          * @param {?} index
          * @return {?}
          */
          function (curr, index) {
            if (_this4.maskAvailablePatterns && _this4.maskAvailablePatterns[maskExpression[index]] && _this4.maskAvailablePatterns[maskExpression[index]].symbol) {
              return _this4.maskAvailablePatterns[maskExpression[index]].symbol;
            }

            return curr;
          }).join('');
        } // this function is not necessary, it checks result against maskExpression

        /**
         * @param {?} res
         * @return {?}
         */

      }, {
        key: "getActualValue",
        value: function getActualValue(res) {
          var _this5 = this;

          /** @type {?} */
          var compare = res.split('').filter(
          /**
          * @param {?} symbol
          * @param {?} i
          * @return {?}
          */
          function (symbol, i) {
            return _this5._checkSymbolMask(symbol, _this5.maskExpression[i]) || _this5.maskSpecialCharacters.includes(_this5.maskExpression[i]) && symbol === _this5.maskExpression[i];
          });

          if (compare.join('') === res) {
            return compare.join('');
          }

          return res;
        }
        /**
         * @param {?} inputValue
         * @return {?}
         */

      }, {
        key: "shiftTypedSymbols",
        value: function shiftTypedSymbols(inputValue) {
          var _this6 = this;

          /** @type {?} */
          var symbolToReplace = '';
          /** @type {?} */

          var newInputValue = inputValue && inputValue.split('').map(
          /**
          * @param {?} currSymbol
          * @param {?} index
          * @return {?}
          */
          function (currSymbol, index) {
            if (_this6.maskSpecialCharacters.includes(inputValue[index + 1]) && inputValue[index + 1] !== _this6.maskExpression[index + 1]) {
              symbolToReplace = currSymbol;
              return inputValue[index + 1];
            }

            if (symbolToReplace.length) {
              /** @type {?} */
              var replaceSymbol = symbolToReplace;
              symbolToReplace = '';
              return replaceSymbol;
            }

            return currSymbol;
          }) || [];
          return newInputValue.join('');
        }
        /**
         * @param {?=} inputVal
         * @return {?}
         */

      }, {
        key: "showMaskInInput",
        value: function showMaskInInput(inputVal) {
          if (this.showMaskTyped && !!this.shownMaskExpression) {
            if (this.maskExpression.length !== this.shownMaskExpression.length) {
              throw new Error('Mask expression must match mask placeholder length');
            } else {
              return this.shownMaskExpression;
            }
          } else if (this.showMaskTyped) {
            if (inputVal) {
              return this._checkForIp(inputVal);
            }

            return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
          }

          return '';
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearIfNotMatchFn",
        value: function clearIfNotMatchFn() {
          if (this.clearIfNotMatch && this.prefix.length + this.maskExpression.length + this.suffix.length !== this._formElement.value.replace(/_/g, '').length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
          }
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "checkSpecialCharAmount",

        /**
         * @param {?} mask
         * @return {?}
         */
        value: function checkSpecialCharAmount(mask) {
          var _this7 = this;

          /** @type {?} */
          var chars = mask.split('').filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return _this7._findSpecialChar(item);
          });
          return chars.length;
        }
        /**
         * @private
         * @param {?} inputVal
         * @return {?}
         */

      }, {
        key: "_checkForIp",
        value: function _checkForIp(inputVal) {
          if (inputVal === '#') {
            return "".concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter);
          }
          /** @type {?} */


          var arr = [];

          for (var i = 0; i < inputVal.length; i++) {
            if (inputVal[i].match('\\d')) {
              arr.push(inputVal[i]);
            }
          }

          if (arr.length <= 3) {
            return "".concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter);
          }

          if (arr.length > 3 && arr.length <= 6) {
            return "".concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter);
          }

          if (arr.length > 6 && arr.length <= 9) {
            return this.placeHolderCharacter;
          }

          if (arr.length > 9 && arr.length <= 12) {
            return '';
          }

          return '';
        }
        /**
         * @private
         * @param {?} inputValue
         * @return {?}
         */

      }, {
        key: "formControlResult",
        value: function formControlResult(inputValue) {
          if (Array.isArray(this.dropSpecialCharacters)) {
            this.onChange(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters));
          } else if (this.dropSpecialCharacters) {
            this.onChange(this._checkSymbols(inputValue));
          } else {
            this.onChange(this._removeSuffix(this._removePrefix(inputValue)));
          }
        }
        /**
         * @private
         * @param {?} value
         * @param {?} specialCharactersForRemove
         * @return {?}
         */

      }, {
        key: "_removeMask",
        value: function _removeMask(value, specialCharactersForRemove) {
          return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_removePrefix",
        value: function _removePrefix(value) {
          if (!this.prefix) {
            return value;
          }

          return value ? value.replace(this.prefix, '') : value;
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_removeSuffix",
        value: function _removeSuffix(value) {
          if (!this.suffix) {
            return value;
          }

          return value ? value.replace(this.suffix, '') : value;
        }
        /**
         * @private
         * @param {?} result
         * @return {?}
         */

      }, {
        key: "_retrieveSeparatorValue",
        value: function _retrieveSeparatorValue(result) {
          return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters);
        }
        /**
         * @private
         * @param {?} specialCharactersForRemove
         * @return {?}
         */

      }, {
        key: "_regExpForRemove",
        value: function _regExpForRemove(specialCharactersForRemove) {
          return new RegExp(specialCharactersForRemove.map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return "\\".concat(item);
          }).join('|'), 'gi');
        }
        /**
         * @private
         * @param {?} result
         * @return {?}
         */

      }, {
        key: "_checkSymbols",
        value: function _checkSymbols(result) {
          if (result === '') {
            return result;
          }
          /** @type {?} */


          var separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);
          /** @type {?} */


          var separatorValue = this._retrieveSeparatorValue(result);

          if (this.decimalMarker !== '.') {
            separatorValue = separatorValue.replace(this.decimalMarker, '.');
          }

          if (this.isNumberValue) {
            if (separatorPrecision) {
              if (result === this.decimalMarker) {
                return null;
              }

              return this._checkPrecision(this.maskExpression, separatorValue);
            } else {
              return Number(separatorValue);
            }
          } else {
            return separatorValue;
          }
        } // TODO should think about helpers or separting decimal precision to own property

        /**
         * @private
         * @param {?} maskExpretion
         * @return {?}
         */

      }, {
        key: "_retrieveSeparatorPrecision",
        value: function _retrieveSeparatorPrecision(maskExpretion) {
          /** @type {?} */
          var matcher = maskExpretion.match(new RegExp("^separator\\.([^d]*)"));
          return matcher ? Number(matcher[1]) : null;
        }
        /**
         * @private
         * @param {?} separatorExpression
         * @param {?} separatorValue
         * @return {?}
         */

      }, {
        key: "_checkPrecision",
        value: function _checkPrecision(separatorExpression, separatorValue) {
          if (separatorExpression.indexOf('2') > 0) {
            return Number(separatorValue).toFixed(2);
          }

          return Number(separatorValue);
        }
      }, {
        key: "formElementProperty",
        set: function set(_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              value = _ref2[1];

          this._renderer.setProperty(this._formElement, name, value);
        }
      }]);

      return MaskService;
    }(MaskApplierService);

    MaskService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    MaskService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [config]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable deprecation


    var MaskDirective = /*#__PURE__*/function () {
      /**
       * @param {?} document
       * @param {?} _maskService
       * @param {?} _config
       */
      function MaskDirective(document, _maskService, _config) {
        _classCallCheck(this, MaskDirective);

        this.document = document;
        this._maskService = _maskService;
        this._config = _config;
        this.maskExpression = '';
        this.specialCharacters = [];
        this.patterns = {};
        this.prefix = '';
        this.suffix = '';
        this.thousandSeparator = ' ';
        this.decimalMarker = '.';
        this.dropSpecialCharacters = null;
        this.hiddenInput = null;
        this.showMaskTyped = null;
        this.placeHolderCharacter = null;
        this.shownMaskExpression = null;
        this.showTemplate = null;
        this.clearIfNotMatch = null;
        this.validation = null;
        this.separatorLimit = null;
        this._maskValue = '';
        this._position = null;

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this.onTouch =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(MaskDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var maskExpression = changes.maskExpression,
              specialCharacters = changes.specialCharacters,
              patterns = changes.patterns,
              prefix = changes.prefix,
              suffix = changes.suffix,
              thousandSeparator = changes.thousandSeparator,
              decimalMarker = changes.decimalMarker,
              dropSpecialCharacters = changes.dropSpecialCharacters,
              hiddenInput = changes.hiddenInput,
              showMaskTyped = changes.showMaskTyped,
              placeHolderCharacter = changes.placeHolderCharacter,
              shownMaskExpression = changes.shownMaskExpression,
              showTemplate = changes.showTemplate,
              clearIfNotMatch = changes.clearIfNotMatch,
              validation = changes.validation,
              separatorLimit = changes.separatorLimit;

          if (maskExpression) {
            this._maskValue = changes.maskExpression.currentValue || '';
          }

          if (specialCharacters) {
            if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
              return;
            } else {
              this._maskService.maskSpecialCharacters = changes.specialCharacters.currentValue || [];
            }
          } // Only overwrite the mask available patterns if a pattern has actually been passed in


          if (patterns && patterns.currentValue) {
            this._maskService.maskAvailablePatterns = patterns.currentValue;
          }

          if (prefix) {
            this._maskService.prefix = prefix.currentValue;
          }

          if (suffix) {
            this._maskService.suffix = suffix.currentValue;
          }

          if (thousandSeparator) {
            this._maskService.thousandSeparator = thousandSeparator.currentValue;
          }

          if (decimalMarker) {
            this._maskService.decimalMarker = decimalMarker.currentValue;
          }

          if (dropSpecialCharacters) {
            this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
          }

          if (hiddenInput) {
            this._maskService.hiddenInput = hiddenInput.currentValue;
          }

          if (showMaskTyped) {
            this._maskService.showMaskTyped = showMaskTyped.currentValue;
          }

          if (placeHolderCharacter) {
            this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
          }

          if (shownMaskExpression) {
            this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
          }

          if (showTemplate) {
            this._maskService.showTemplate = showTemplate.currentValue;
          }

          if (clearIfNotMatch) {
            this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
          }

          if (validation) {
            this._maskService.validation = validation.currentValue;
          }

          if (separatorLimit) {
            this._maskService.separatorLimit = separatorLimit.currentValue;
          }

          this._applyMask();
        } // tslint:disable-next-line: cyclomatic-complexity

        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(_ref3) {
          var _this8 = this;

          var value = _ref3.value;

          if (!this._maskService.validation) {
            return null;
          }

          if (this._maskService.ipError) {
            return {
              'Mask error': true
            };
          }

          if (this._maskValue.startsWith('separator')) {
            return null;
          }

          if (withoutValidation.includes(this._maskValue)) {
            return null;
          }

          if (this._maskService.clearIfNotMatch) {
            return null;
          }

          if (timeMasks.includes(this._maskValue)) {
            return this._validateTime(value);
          }

          if (value && value.toString().length >= 1) {
            /** @type {?} */
            var counterOfOpt = 0;

            var _loop = function _loop(key) {
              if (_this8._maskService.maskAvailablePatterns[key].optional && _this8._maskService.maskAvailablePatterns[key].optional === true) {
                if (_this8._maskValue.indexOf(key) !== _this8._maskValue.lastIndexOf(key)) {
                  /** @type {?} */
                  var opt = _this8._maskValue.split('').filter(
                  /**
                  * @param {?} i
                  * @return {?}
                  */
                  function (i) {
                    return i === key;
                  }).join('');

                  counterOfOpt += opt.length;
                } else if (_this8._maskValue.indexOf(key) !== -1) {
                  counterOfOpt++;
                }

                if (_this8._maskValue.indexOf(key) !== -1 && value.toString().length >= _this8._maskValue.indexOf(key)) {
                  return {
                    v: null
                  };
                }

                if (counterOfOpt === _this8._maskValue.length) {
                  return {
                    v: null
                  };
                }
              }
            };

            for (var key in this._maskService.maskAvailablePatterns) {
              var _ret = _loop(key);

              if (typeof _ret === "object") return _ret.v;
            }

            if (this._maskValue.indexOf('{') === 1 && value.toString().length === this._maskValue.length + Number(this._maskValue.split('{')[1].split('}')[0]) - 4) {
              return null;
            }

            if (this._maskValue.indexOf('*') === 1 || this._maskValue.indexOf('?') === 1) {
              return null;
            } else if (this._maskValue.indexOf('*') > 1 && value.toString().length < this._maskValue.indexOf('*') || this._maskValue.indexOf('?') > 1 && value.toString().length < this._maskValue.indexOf('?') || this._maskValue.indexOf('{') === 1) {
              return {
                'Mask error': true
              };
            }

            if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
              /** @type {?} */
              var length = this._maskService.dropSpecialCharacters ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - counterOfOpt : this._maskValue.length - counterOfOpt;

              if (value.toString().length < length) {
                return {
                  'Mask error': true
                };
              }
            }
          }

          return null;
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onInput",
        value: function onInput(e) {
          /** @type {?} */
          var el =
          /** @type {?} */
          e.target;
          this._inputValue = el.value;

          if (!this._maskValue) {
            this.onChange(el.value);
            return;
          }
          /** @type {?} */


          var position = el.selectionStart === 1 ?
          /** @type {?} */
          el.selectionStart + this._maskService.prefix.length :
          /** @type {?} */
          el.selectionStart;
          /** @type {?} */

          var caretShift = 0;
          /** @type {?} */

          var backspaceShift = false;

          this._maskService.applyValueChanges(position,
          /**
          * @param {?} shift
          * @param {?} _backspaceShift
          * @return {?}
          */
          function (shift, _backspaceShift) {
            caretShift = shift;
            backspaceShift = _backspaceShift;
          }); // only set the selection if the element is active


          if (this.document.activeElement !== el) {
            return;
          }

          this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
          /** @type {?} */

          var positionToApply = this._position ? this._inputValue.length + position + caretShift : position + (this._code === 'Backspace' && !backspaceShift ? 0 : caretShift);
          el.setSelectionRange(positionToApply, positionToApply);

          if ((this.maskExpression.includes('H') || this.maskExpression.includes('M')) && caretShift === 0) {
            el.setSelectionRange(
            /** @type {?} */
            el.selectionStart + 1,
            /** @type {?} */
            el.selectionStart + 1);
          }

          this._position = null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onBlur",
        value: function onBlur() {
          this._maskService.clearIfNotMatchFn();

          this.onTouch();
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onFocus",
        value: function onFocus(e) {
          /** @type {?} */
          var el =
          /** @type {?} */
          e.target;
          /** @type {?} */

          var posStart = 0;
          /** @type {?} */

          var posEnd = 0;
          if (el !== null && el.selectionStart !== null && el.selectionStart === el.selectionEnd && el.selectionStart > this._maskService.prefix.length && // tslint:disable-next-line

          /** @type {?} */
          e.keyCode !== 38) if (this._maskService.showMaskTyped) {
            // We are showing the mask in the input
            this._maskService.maskIsShown = this._maskService.showMaskInInput();

            if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
              // the input ONLY contains the mask, so position the cursor at the start
              el.focus();
              el.setSelectionRange(posStart, posEnd);
            } else {
              // the input contains some characters already
              if (el.selectionStart > this._maskService.actualValue.length) {
                // if the user clicked beyond our value's length, position the cursor at the end of our value
                el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
              }
            }
          }
          /** @type {?} */

          var nextValue = !el.value || el.value === this._maskService.prefix ? this._maskService.prefix + this._maskService.maskIsShown : el.value;
          /** Fix of cursor position jumping to end in most browsers no matter where cursor is inserted onFocus */

          if (el.value !== nextValue) {
            el.value = nextValue;
          }
          /** fix of cursor position with prefix when mouse click occur */


          if ((
          /** @type {?} */
          el.selectionStart ||
          /** @type {?} */
          el.selectionEnd) <= this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
          }
        } // tslint:disable-next-line: cyclomatic-complexity

        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
          this._code = e.code ? e.code : e.key;
          /** @type {?} */

          var el =
          /** @type {?} */
          e.target;
          this._inputValue = el.value;

          if (e.keyCode === 38) {
            e.preventDefault();
          }

          if (e.keyCode === 37 || e.keyCode === 8 || e.keyCode === 46) {
            if (e.keyCode === 8 && el.value.length === 0) {
              el.selectionStart = el.selectionEnd;
            }

            if (e.keyCode === 8 &&
            /** @type {?} */
            el.selectionStart !== 0) {
              // If specialChars is false, (shouldn't ever happen) then set to the defaults
              this.specialCharacters = this.specialCharacters || this._config.specialCharacters;

              if (this.prefix.length > 1 &&
              /** @type {?} */
              el.selectionStart <= this.prefix.length) {
                el.setSelectionRange(this.prefix.length, this.prefix.length);
              } else {
                if (this._inputValue.length !==
                /** @type {?} */
                el.selectionStart &&
                /** @type {?} */
                el.selectionStart !== 1) {
                  while (this.specialCharacters.includes(this._inputValue[
                  /** @type {?} */
                  el.selectionStart - 1].toString()) && (this.prefix.length >= 1 &&
                  /** @type {?} */
                  el.selectionStart > this.prefix.length || this.prefix.length === 0)) {
                    el.setSelectionRange(
                    /** @type {?} */
                    el.selectionStart - 1,
                    /** @type {?} */
                    el.selectionStart - 1);
                  }
                }

                this.suffixCheckOnPressDelete(e.keyCode, el);
              }
            }

            this.suffixCheckOnPressDelete(e.keyCode, el);

            if (this._maskService.prefix.length &&
            /** @type {?} */
            el.selectionStart <= this._maskService.prefix.length &&
            /** @type {?} */
            el.selectionEnd <= this._maskService.prefix.length) {
              e.preventDefault();
            }
            /** @type {?} */


            var cursorStart = el.selectionStart; // this.onFocus(e);

            if (e.keyCode === 8 && !el.readOnly && cursorStart === 0 && el.selectionEnd === el.value.length && el.value.length !== 0) {
              this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;

              this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
            }
          }

          if (!!this.suffix && this.suffix.length > 1 && this._inputValue.length - this.suffix.length <
          /** @type {?} */
          el.selectionStart) {
            el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
          }

          this._maskService.selStart = el.selectionStart;
          this._maskService.selEnd = el.selectionEnd;
        }
        /**
         * It writes the value in the input
         * @param {?} inputValue
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(inputValue) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/

          /** @this {!MaskDirective} */
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (inputValue === undefined) {
                      inputValue = '';
                    }

                    if (typeof inputValue === 'number') {
                      inputValue = String(inputValue);
                      inputValue = this.decimalMarker !== '.' ? inputValue.replace('.', this.decimalMarker) : inputValue;
                      this._maskService.isNumberValue = true;
                    }

                    inputValue && this._maskService.maskExpression || this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped) ? this._maskService.formElementProperty = ['value', this._maskService.applyMask(inputValue, this._maskService.maskExpression)] : this._maskService.formElementProperty = ['value', inputValue];
                    this._inputValue = inputValue;

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
          this._maskService.onChange = this.onChange;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouch = fn;
        }
        /**
         * @param {?} keyCode
         * @param {?} el
         * @return {?}
         */

      }, {
        key: "suffixCheckOnPressDelete",
        value: function suffixCheckOnPressDelete(keyCode, el) {
          if (keyCode === 46 && this.suffix.length > 0) {
            if (this._inputValue.length - this.suffix.length <=
            /** @type {?} */
            el.selectionStart) {
              el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
            }
          }

          if (keyCode === 8) {
            if (this.suffix.length > 1 && this._inputValue.length - this.suffix.length <
            /** @type {?} */
            el.selectionStart) {
              el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
            }

            if (this.suffix.length === 1 && this._inputValue.length ===
            /** @type {?} */
            el.selectionStart) {
              el.setSelectionRange(
              /** @type {?} */
              el.selectionStart - 1,
              /** @type {?} */
              el.selectionStart - 1);
            }
          }
        }
        /**
         * It disables the input element
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._maskService.formElementProperty = ['disabled', isDisabled];
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onModelChange",
        value: function onModelChange(e) {
          if (!e) {
            this._maskService.actualValue = '';
          }
        }
        /**
         * @private
         * @param {?} maskExp
         * @return {?}
         */

      }, {
        key: "_repeatPatternSymbols",
        value: function _repeatPatternSymbols(maskExp) {
          var _this9 = this;

          return maskExp.match(/{[0-9]+}/) && maskExp.split('').reduce(
          /**
          * @param {?} accum
          * @param {?} currval
          * @param {?} index
          * @return {?}
          */
          function (accum, currval, index) {
            _this9._start = currval === '{' ? index : _this9._start;

            if (currval !== '}') {
              return _this9._maskService._findSpecialChar(currval) ? accum + currval : accum;
            }

            _this9._end = index;
            /** @type {?} */

            var repeatNumber = Number(maskExp.slice(_this9._start + 1, _this9._end));
            /** @type {?} */

            var repaceWith = new Array(repeatNumber + 1).join(maskExp[_this9._start - 1]);
            return accum + repaceWith;
          }, '') || maskExp;
        } // tslint:disable-next-line:no-any

        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_applyMask",
        value: function _applyMask() {
          this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '');
          this._maskService.formElementProperty = ['value', this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)];
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_validateTime",
        value: function _validateTime(value) {
          /** @type {?} */
          var rowMaskLen = this._maskValue.split('').filter(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s !== ':';
          }).length;

          if (+value[value.length - 1] === 0 && value.length < rowMaskLen) {
            return {
              'Mask error': true
            };
          }

          if (value.length <= rowMaskLen - 2) {
            return {
              'Mask error': true
            };
          }

          return null;
        }
      }]);

      return MaskDirective;
    }();

    MaskDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mask]',
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MaskDirective;
          }),
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MaskDirective;
          }),
          multi: true
        }, MaskService]
      }]
    }];
    /** @nocollapse */

    MaskDirective.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: MaskService
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [config]
        }]
      }];
    };

    MaskDirective.propDecorators = {
      maskExpression: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['mask']
      }],
      specialCharacters: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      patterns: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      prefix: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      suffix: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      thousandSeparator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      decimalMarker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dropSpecialCharacters: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hiddenInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showMaskTyped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placeHolderCharacter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      shownMaskExpression: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clearIfNotMatch: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      validation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      separatorLimit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['input', ['$event']]
      }],
      onBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['blur']
      }],
      onFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click', ['$event']]
      }],
      onKeyDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['keydown', ['$event']]
      }],
      onModelChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['ngModelChange', ['$event']]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MaskPipe = /*#__PURE__*/function () {
      /**
       * @param {?} _maskService
       */
      function MaskPipe(_maskService) {
        _classCallCheck(this, MaskPipe);

        this._maskService = _maskService;
      }
      /**
       * @param {?} value
       * @param {?} mask
       * @param {?=} thousandSeparator
       * @return {?}
       */


      _createClass(MaskPipe, [{
        key: "transform",
        value: function transform(value, mask) {
          var thousandSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          if (!value && typeof value !== 'number') {
            return '';
          }

          if (thousandSeparator) {
            this._maskService.thousandSeparator = thousandSeparator;
          }

          if (typeof mask === 'string') {
            return this._maskService.applyMask("".concat(value), mask);
          }

          return this._maskService.applyMaskWithPattern("".concat(value), mask);
        }
      }]);

      return MaskPipe;
    }();

    MaskPipe.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
      args: [{
        name: 'mask',
        pure: true
      }]
    }];
    /** @nocollapse */

    MaskPipe.ctorParameters = function () {
      return [{
        type: MaskApplierService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgxMaskModule = /*#__PURE__*/function () {
      function NgxMaskModule() {
        _classCallCheck(this, NgxMaskModule);
      }

      _createClass(NgxMaskModule, null, [{
        key: "forRoot",

        /**
         * @param {?=} configValue
         * @return {?}
         */
        value: function forRoot(configValue) {
          return {
            ngModule: NgxMaskModule,
            providers: [{
              provide: NEW_CONFIG,
              useValue: configValue
            }, {
              provide: INITIAL_CONFIG,
              useValue: initialConfig
            }, {
              provide: config,
              useFactory: _configFactory,
              deps: [INITIAL_CONFIG, NEW_CONFIG]
            }, MaskApplierService]
          };
        }
        /**
         * @param {?=} _configValue
         * @return {?}
         */

      }, {
        key: "forChild",
        value: function forChild(_configValue) {
          return {
            ngModule: NgxMaskModule
          };
        }
      }]);

      return NgxMaskModule;
    }();

    NgxMaskModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        exports: [MaskDirective, MaskPipe],
        declarations: [MaskDirective, MaskPipe]
      }]
    }];
    /**
     * \@internal
     * @param {?} initConfig
     * @param {?} configValue
     * @return {?}
     */

    function _configFactory(initConfig, configValue) {
      return configValue instanceof Function ? Object.assign({}, initConfig, configValue()) : Object.assign({}, initConfig, configValue);
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire() {
      throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
    }

    function unwrapExports(x) {
      return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
      return module = {
        exports: {}
      }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace(n) {
      return n && n['default'] || n;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    (
    /**
    * @return {?}
    */
    function () {
      if (!commonjsGlobal.KeyboardEvent) {
        commonjsGlobal.KeyboardEvent =
        /**
        * @param {?} _eventType
        * @param {?} _init
        * @return {?}
        */
        function (_eventType, _init) {};
      }
    })();

    var customKeyboardEvent = {};
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-mask.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input-mask/input-mask.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input-mask/input-mask.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInputMaskInputMaskPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Input Mask</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <input type=\"text\" [specialCharacters]=\"[ '[' ,']' , '\\\\' ]\" mask=\"[00]\\[000]\" />\n  <br>\n  <input type=\"text\" prefix=\"+7\" mask=\"(000) 000 00 00\" />\n  <br>\n  <input type=\"text\" suffix=\"$\" mask=\"0000\" />\n  <br>\n  <input type=\"text\" [dropSpecialCharacters]=\"false\" mask=\"000-000.00\" />\n  <br>\n  <input mask=\"(000) 000-0000\" prefix=\"+7\" [showMaskTyped]=\"true\" />\n  <br>\n  <input mask=\"(000) 000-0000\" prefix=\"+7\" [showMaskTyped]=\"true\" placeHolderCharacter=\"*\" />\n  <br>\n  <input type=\"text\" mask=\"separator.2\" />\n  <br>\n  <input type=\"text\" mask=\"00 00\" [validation]=\"true\" />\n  <br>\n  <input placeholder=\"Secure input\" [hiddenInput]=\"true\" mask=\"XXX/X0/0000\" />\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/input-mask/input-mask-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/input-mask/input-mask-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: InputMaskPageRoutingModule */

  /***/
  function srcAppPagesInputMaskInputMaskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputMaskPageRoutingModule", function () {
      return InputMaskPageRoutingModule;
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


    var _input_mask_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./input-mask.page */
    "./src/app/pages/input-mask/input-mask.page.ts");

    var routes = [{
      path: '',
      component: _input_mask_page__WEBPACK_IMPORTED_MODULE_3__["InputMaskPage"]
    }];

    var InputMaskPageRoutingModule = function InputMaskPageRoutingModule() {
      _classCallCheck(this, InputMaskPageRoutingModule);
    };

    InputMaskPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InputMaskPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/input-mask/input-mask.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/input-mask/input-mask.module.ts ***!
    \*******************************************************/

  /*! exports provided: InputMaskPageModule */

  /***/
  function srcAppPagesInputMaskInputMaskModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputMaskPageModule", function () {
      return InputMaskPageModule;
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


    var _input_mask_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./input-mask-routing.module */
    "./src/app/pages/input-mask/input-mask-routing.module.ts");
    /* harmony import */


    var _input_mask_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./input-mask.page */
    "./src/app/pages/input-mask/input-mask.page.ts");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/fesm2015/ngx-mask.js"); //https://www.npmjs.com/package/ngx-mask
    // var options: Partial<IConfig> | (() => Partial<IConfig>);


    var InputMaskPageModule = function InputMaskPageModule() {
      _classCallCheck(this, InputMaskPageModule);
    };

    InputMaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _input_mask_routing_module__WEBPACK_IMPORTED_MODULE_5__["InputMaskPageRoutingModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()],
      declarations: [_input_mask_page__WEBPACK_IMPORTED_MODULE_6__["InputMaskPage"]]
    })], InputMaskPageModule);
    /***/
  },

  /***/
  "./src/app/pages/input-mask/input-mask.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/input-mask/input-mask.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInputMaskInputMaskPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input {\n  border-radius: 5px;\n  height: 50px;\n  background: #f3f3f3;\n  margin-bottom: 15px;\n  border: 1px solid lightgray;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5wdXQtbWFzay9EOlxcZXhwZXJ0RGV2U29sdXRpb25zXFxpb25pY19lcnBcXEFwcF9jb2RlL3NyY1xcYXBwXFxwYWdlc1xcaW5wdXQtbWFza1xcaW5wdXQtbWFzay5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2lucHV0LW1hc2svaW5wdXQtbWFzay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnB1dC1tYXNrL2lucHV0LW1hc2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHdpZHRoOiAxMDAlO1xufSIsImlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/input-mask/input-mask.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/input-mask/input-mask.page.ts ***!
    \*****************************************************/

  /*! exports provided: InputMaskPage */

  /***/
  function srcAppPagesInputMaskInputMaskPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputMaskPage", function () {
      return InputMaskPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var InputMaskPage = /*#__PURE__*/function () {
      function InputMaskPage() {
        _classCallCheck(this, InputMaskPage);
      }

      _createClass(InputMaskPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InputMaskPage;
    }();

    InputMaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-input-mask',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./input-mask.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input-mask/input-mask.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./input-mask.page.scss */
      "./src/app/pages/input-mask/input-mask.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], InputMaskPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-input-mask-input-mask-module-es5.js.map