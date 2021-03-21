(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payments-payments-module"],{

/***/ "MLe0":
/*!******************************************************!*\
  !*** ./src/app/pages/payments/payments.component.ts ***!
  \******************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PaymentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) { return new (t || PaymentsComponent)(); };
PaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentsComponent, selectors: [["app-payments"]], decls: 1, vars: 0, template: function PaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "WmLo":
/*!***********************************************************!*\
  !*** ./src/app/pages/payments/payments-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PaymentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsRoutingModule", function() { return PaymentsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: 'bill/:ID', loadChildren: () => Promise.all(/*! import() | bill-bill-module */[__webpack_require__.e("default~bill-bill-module~buy-product-buy-product-module~list-products-list-products-module~process-p~a1748329"), __webpack_require__.e("bill-bill-module")]).then(__webpack_require__.bind(null, /*! ./bill/bill.module */ "6O5j")).then(m => m.BillModule) },
    { path: ':ID/:QN', loadChildren: () => Promise.all(/*! import() | process-process-module */[__webpack_require__.e("default~bill-bill-module~buy-product-buy-product-module~list-products-list-products-module~process-p~a1748329"), __webpack_require__.e("default~buy-product-buy-product-module~process-process-module"), __webpack_require__.e("process-process-module")]).then(__webpack_require__.bind(null, /*! ./process/process.module */ "vnUM")).then(m => m.ProcessModule) }
];
class PaymentsRoutingModule {
}
PaymentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PaymentsRoutingModule });
PaymentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PaymentsRoutingModule_Factory(t) { return new (t || PaymentsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "cvkL":
/*!***************************************************!*\
  !*** ./src/app/pages/payments/payments.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsModule", function() { return PaymentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments-routing.module */ "WmLo");
/* harmony import */ var _payments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payments.component */ "MLe0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PaymentsModule {
}
PaymentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PaymentsModule });
PaymentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PaymentsModule_Factory(t) { return new (t || PaymentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_1__["PaymentsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PaymentsModule, { declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_2__["PaymentsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _payments_routing_module__WEBPACK_IMPORTED_MODULE_1__["PaymentsRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-payments-payments-module.js.map