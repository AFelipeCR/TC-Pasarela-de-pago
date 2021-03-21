(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "Kzwn":
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: 'buy/:ID', loadChildren: () => Promise.all(/*! import() | buy-product-buy-product-module */[__webpack_require__.e("default~bill-bill-module~buy-product-buy-product-module~list-products-list-products-module~process-p~a1748329"), __webpack_require__.e("default~buy-product-buy-product-module~process-process-module"), __webpack_require__.e("buy-product-buy-product-module")]).then(__webpack_require__.bind(null, /*! ./buy-product/buy-product.module */ "GFcw")).then(m => m.BuyProductModule) },
    { path: '', loadChildren: () => Promise.all(/*! import() | list-products-list-products-module */[__webpack_require__.e("default~bill-bill-module~buy-product-buy-product-module~list-products-list-products-module~process-p~a1748329"), __webpack_require__.e("list-products-list-products-module")]).then(__webpack_require__.bind(null, /*! ./list-products/list-products.module */ "MESS")).then(m => m.ListProductsModule) }
];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "a1ig":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-routing.module */ "Kzwn");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "fdtU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProductsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _products_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProductsRoutingModule"]] }); })();


/***/ }),

/***/ "fdtU":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 1, vars: 0, template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=pages-products-products-module.js.map