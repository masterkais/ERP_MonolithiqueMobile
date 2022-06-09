(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Categories-list-category-list-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Categories/list-category/list-category.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Categories/list-category/list-category.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"addtocart()\" class=\"ion-button custom-class\" color=\"red\"  fill=\"solid\">\r\n        <ion-icon name=\"cart\" style=\"color: white\"></ion-icon>\r\n        <ion-badge color=\"danger\" >{{charge_compteur()}}</ion-badge>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">Catégories</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main_content_div\" *ngFor=\"let item of category_list\">\r\n\r\n    <div class=\"card_div\">\r\n      <div class=\"second_div\">\r\n        <ion-label class=\"name_lbl\">{{item.getname()}}</ion-label>\r\n\r\n        <ion-label class=\"price_lbl\">{{item.getdescription()}}</ion-label>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <ion-button style=\"width: 200px\" size=\"large\" fill=\"outline\" shape=\"round\" (click)=\"goListProduct(item.getid(),item.getname())\">\r\n          Voir les produits\r\n        </ion-button>\r\n\r\n        <!--<ion-icon name=\"heart-outline\">Brand</ion-icon>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/Categories/list-category/list-category-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/Categories/list-category/list-category-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ListCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoryPageRoutingModule", function() { return ListCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-category.page */ "./src/app/pages/Categories/list-category/list-category.page.ts");




const routes = [
    {
        path: '',
        component: _list_category_page__WEBPACK_IMPORTED_MODULE_3__["ListCategoryPage"]
    }
];
let ListCategoryPageRoutingModule = class ListCategoryPageRoutingModule {
};
ListCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/Categories/list-category/list-category.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/Categories/list-category/list-category.module.ts ***!
  \************************************************************************/
/*! exports provided: ListCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoryPageModule", function() { return ListCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _list_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-category-routing.module */ "./src/app/pages/Categories/list-category/list-category-routing.module.ts");
/* harmony import */ var _list_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-category.page */ "./src/app/pages/Categories/list-category/list-category.page.ts");







let ListCategoryPageModule = class ListCategoryPageModule {
};
ListCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListCategoryPageRoutingModule"]
        ],
        declarations: [_list_category_page__WEBPACK_IMPORTED_MODULE_6__["ListCategoryPage"]]
    })
], ListCategoryPageModule);



/***/ }),

/***/ "./src/app/pages/Categories/list-category/list-category.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/Categories/list-category/list-category.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n  margin-top: 5px;\n}\n.main_content_div .card_div {\n  width: 100%;\n  padding: 10px;\n  border-bottom: 0.5px solid #E8E8E8;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.main_content_div .card_div .back_image {\n  width: 50px;\n  height: 50px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  min-width: 50px;\n}\n.main_content_div .card_div .second_div {\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n}\n.main_content_div .card_div .second_div .price_lbl {\n  font-weight: 700;\n}\n.main_content_div .card_div .second_div .name_lbl {\n  font-weight: 400;\n}\n.main_content_div .card_div .second_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 20px;\n  color: #29b507;\n  padding: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.main_content_div .card_div .second_div ion-button {\n  position: absolute;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n.ion-button {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n.ion-button.custom-class::part(native) {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQ2F0ZWdvcmllcy9saXN0LWNhdGVnb3J5L0M6XFxVc2Vyc1xcQVNVU1xcRG93bmxvYWRzXFxBcHBfY29kZVxcQXBwX2NvZGUvc3JjXFxhcHBcXHBhZ2VzXFxDYXRlZ29yaWVzXFxsaXN0LWNhdGVnb3J5XFxsaXN0LWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvQ2F0ZWdvcmllcy9saXN0LWNhdGVnb3J5L2xpc3QtY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0FKO0FERUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FOO0FERUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FOO0FERU07RUFDRSxnQkFBQTtBQ0FSO0FERU07RUFDRSxnQkFBQTtBQ0FSO0FER007RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQ0RSO0FESU07RUFDRSxrQkFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0hSO0FEV0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1JGO0FEV0E7RUFDRSxpQkFBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvQ2F0ZWdvcmllcy9saXN0LWNhdGVnb3J5L2xpc3QtY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmRfZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0U4RThFODtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgIC5iYWNrX2ltYWdle1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnNlY29uZF9kaXZ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5wcmljZV9sYmx7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgfVxyXG4gICAgICAubmFtZV9sYmx7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICMyOWI1MDc7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMyOWI1MDc7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICM3M0QyNUM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xyXG59XHJcbi5pb24tYnV0dG9uLmN1c3RvbS1jbGFzczo6cGFydChuYXRpdmUpIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNFOEU4RTg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5uYW1lX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyOWI1MDc7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzI5YjUwNztcbiAgLS1ib3JkZXItY29sb3I6ICM3M0QyNUM7XG59XG5cbi5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/Categories/list-category/list-category.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/Categories/list-category/list-category.page.ts ***!
  \**********************************************************************/
/*! exports provided: ListCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoryPage", function() { return ListCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modals_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modals/Category */ "./src/app/modals/Category.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/rest/environnement.model */ "./src/app/services/rest/environnement.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let ListCategoryPage = class ListCategoryPage {
    constructor(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.category_list = [];
    }
    ngOnInit() {
        this.getallCategory();
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
    listCategory() {
        return this.http.get(_services_rest_environnement_model__WEBPACK_IMPORTED_MODULE_4__["environmentApi"].host + "/api/category/categorys");
    }
    getallCategory() {
        var cat, i, j;
        this.listCategory().subscribe((data) => {
            let info = data;
            //alert(info[0]['id']);
            // alert(info.length);
            //  this.product_list=data;
            //const info = JSON.parse(data.data);
            if (info.length > 0) {
                for (i = 0; i < info.length; i++) {
                    cat = new _modals_Category__WEBPACK_IMPORTED_MODULE_2__["Category"]();
                    cat.setid(info[i]['id']);
                    cat.setname(info[i]['name']);
                    cat.setdescription(info[i]['description']);
                    cat.setidBrand(info[i]['idBrand']);
                    this.category_list.push(cat);
                }
            }
        });
        //   if(this.img_list.length>0) {
        //  }
        // }
        /* else {
         // this.util.showToast(`${info.data.message}`, 'danger', 'bottom');
         }*/
    }
    addtocart() {
        this.navCtrl.navigateRoot(['my-cart']);
    }
    goListProduct(idcateg, nomcateg) {
        let navigationExtras = {
            queryParams: {
                idcateg: idcateg,
                nomcateg: nomcateg,
            }
        };
        this.navCtrl.navigateForward(['product-list'], navigationExtras);
    }
};
ListCategoryPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
ListCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Categories/list-category/list-category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-category.page.scss */ "./src/app/pages/Categories/list-category/list-category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], ListCategoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-Categories-list-category-list-category-module-es2015.js.map