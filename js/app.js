webpackJsonp([0],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \".core/Form\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(2);




window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;
window.Form = __WEBPACK_IMPORTED_MODULE_0__core_Form___default.a;

new __WEBPACK_IMPORTED_MODULE_2_vue__["default"]({
    el: '#projects-app',
    data: {
        form: new __WEBPACK_IMPORTED_MODULE_0__core_Form___default.a({
            name: '',
            description: ''
        })
    },
    methods: {
        onSubmit: function onSubmit() {
            console.log("Submitting Stuff: ", this.form);
            this.form.submit('post', '/projects.json').then(function (response) {
                return alert("Yeeehaaah");
            }).catch(function (errors) {
                for (var e in errors) {
                    console.log("Error: ", e);
                }
            });
        }
    }
});

/***/ })

},[26]);