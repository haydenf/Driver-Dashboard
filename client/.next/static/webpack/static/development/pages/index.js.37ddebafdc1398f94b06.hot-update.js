webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/js-cookie/src/js.cookie.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/index.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _src_pages_Login_LoginView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/pages/Login/LoginView */ "./src/pages/Login/LoginView.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function handleSuccessfulLogin(router) {
  return function (loginResult) {
    document.cookie = "GofarDashboardUserId=".concat(loginResult.userId, ";");
    document.cookie = "GofarDashboardToken=".concat(loginResult.authToken, ";");
    router.push('/dashboard');
  };
}

function LoginPage(props) {
  if (props.authToken) {
    return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
      to: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_4__["default"]({
    uri: 'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: props.authToken,
      'X-API-KEY': 'da2-d5trhzrnqraznclr2teue2bmmu'
    },
    fetch: (node_fetch__WEBPACK_IMPORTED_MODULE_2___default())
  });
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_5__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_src_pages_Login_LoginView__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    handleSuccessfulLogin: handleSuccessfulLogin(router),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
}

LoginPage.getInitialProps = ctx => {
  return {
    cookiez: next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx) || ''
  };
};

/***/ })

})
//# sourceMappingURL=index.js.37ddebafdc1398f94b06.hot-update.js.map