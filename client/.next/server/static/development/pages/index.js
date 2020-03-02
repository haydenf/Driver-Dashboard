module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_pages_Login_LoginView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/pages/Login/LoginView */ "./src/pages/Login/LoginView.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function handleSuccessfulLogin(router) {
  return function (loginResult) {
    document.cookie = `GofarDashboardUserId=${loginResult.userId};`;
    document.cookie = `GofarDashboardToken=${loginResult.authToken};`;
    router.push('/dashboard');
  };
}

function LoginPage(props) {
  if (props.authToken) {
    return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
      to: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_3___default.a({
    uri: 'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: props.authToken,
      'X-API-KEY': 'da2-d5trhzrnqraznclr2teue2bmmu'
    },
    fetch: (node_fetch__WEBPACK_IMPORTED_MODULE_1___default())
  });
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_src_pages_Login_LoginView__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
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
    cookiez: next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx) || ''
  };
};

/***/ }),

/***/ "./src/Components/LoadingSpinner.js":
/*!******************************************!*\
  !*** ./src/Components/LoadingSpinner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/LoadingSpinner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LoadingSpinner = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dimmer"], {
  active: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Loader"], {
  size: "massive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Loading")));

/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./src/Components/Login/LoginForm.js":
/*!*******************************************!*\
  !*** ./src/Components/Login/LoginForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Images/GoFarlogo.png */ "./src/Images/GoFarlogo.png");
/* harmony import */ var _Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Login/LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LoginForm = props => {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    textAlign: "center",
    style: {
      height: "100vh"
    },
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    style: {
      maxWidth: 450
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h2",
    color: "teal",
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _Images_GoFarlogo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    style: {
      width: "30%",
      height: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    stacked: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    icon: "user",
    iconPosition: "left",
    placeholder: "E-mail address",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    icon: "lock",
    iconPosition: "left",
    placeholder: "Password",
    type: "password",
    onChange: e => setPassword(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: e => {
      props.handleLogin(email, password);
      e.preventDefault();
    },
    color: "blue",
    fluid: true,
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Login"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "New to us? ", __jsx("a", {
    href: "/#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Sign Up"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/Images/GoFarlogo.png":
/*!**********************************!*\
  !*** ./src/Images/GoFarlogo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAbCAYAAACTMQajAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4MGY1OGQ2MC0yYjQ1LTQ0NjctOTQ5ZS05OTgzMDBhMmRmYjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUFCQTg5MzFFNTlCMTFFODhEQTNFOTA0RjQ2NENFQkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUFCQTg5MzBFNTlCMTFFODhEQTNFOTA0RjQ2NENFQkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozZTRkYzVhOC1lNzBhLTQ0NDUtOTNjYy01ODdlN2IzZWRiMGYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjOTU0NjVmYS05YTE4LWQzNGEtOGI3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"

/***/ }),

/***/ "./src/Images/loginHeroImage.jpg":
/*!***************************************!*\
  !*** ./src/Images/loginHeroImage.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/loginHeroImage-1de59b2db4154bd5fbe226ac253b07d0.jpg";

/***/ }),

/***/ "./src/pages/Login/LoginView.js":
/*!**************************************!*\
  !*** ./src/pages/Login/LoginView.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Login_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Login/LoginForm */ "./src/Components/Login/LoginForm.js");
/* harmony import */ var _Images_loginHeroImage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Images/loginHeroImage.jpg */ "./src/Images/loginHeroImage.jpg");
/* harmony import */ var _Images_loginHeroImage_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Images_loginHeroImage_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/LoadingSpinner */ "./src/Components/LoadingSpinner.js");
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../queries/queries */ "./src/queries/queries.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/pages/Login/LoginView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 // import 'semantic-ui-css/semantic.min.css';
// import '../src/styles/App.css';

const renderBody = executeLogin => {
  return __jsx(_Components_Login_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleLogin: (email, password) => {
      executeLogin({
        variables: {
          email,
          password
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  });
};

const LoginView = props => {
  const [executeLogin, {
    loading,
    data
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useLazyQuery"])(_queries_queries__WEBPACK_IMPORTED_MODULE_5__["LOGIN_QUERY"]);
  const enteredInvalidPassword = data && data.login && !data.login.successful;

  if (!loading && data && data.login && data.login.successful) {
    props.handleSuccessfulLogin({
      authToken: data.login.authToken,
      userId: data.login.userId
    });

    __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      path: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "bg-image",
    style: {
      backgroundImage: `url(${_Images_loginHeroImage_jpg__WEBPACK_IMPORTED_MODULE_3___default.a})`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, enteredInvalidPassword && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Invalid Password"), loading && __jsx(_Components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), renderBody(executeLogin)));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginView);

/***/ }),

/***/ "./src/queries/queries.js":
/*!********************************!*\
  !*** ./src/queries/queries.js ***!
  \********************************/
/*! exports provided: getCarsQuery, getUserDataQuery, getDashboardAllDataQuery, LOGIN_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCarsQuery", function() { return getCarsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserDataQuery", function() { return getUserDataQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashboardAllDataQuery", function() { return getDashboardAllDataQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_QUERY", function() { return LOGIN_QUERY; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);

const LOGIN_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      authToken
      successful
    }
  }
`;
const getCarsQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  {
    cars {
      carName
      id
    }
  }
`;
const getUserDataQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  {
    userData {
      id
      firstName
      cars {
        displayName
        model
        make
        id
      }
    }
  }
`;
const getDashboardAllDataQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getDataForCar($vehicleId: ID!) {
    car(id: $vehicleId) {
      displayName
      odometer
      make
      model
      refillData {
        litres
        totalCost
        odometerKms
        timestamp
        location {
          lat
          lng
        }
      }
      odometerAtRefill
      lastFillUp
      lastFillUpTime
      lastLocation {
        lat
        lng
      }
      fuelLeft
      travelSince
      diagnosticIssue {
        code
        isActive
      }
      businessRatio
      businessTotal
      averageSpeed
      travelDistanceTotal
      travelDistanceThisYear
      timeInCar
      emissions
      fuelEconomy
      timeTraveled
      recentTrip {
        id
        score
        litres
        litresPerHundredKm
        distance
        averageSpeed
        durationInSeconds
        startTime
        endTime
        tags {
          name
          id
          tagType
        }
      }
      trips {
        litres
        litresPerHundredKm
        distance
        averageSpeed
        durationInSeconds
        startTime
        endTime
        tags {
          name
          id
          tagType
        }
        startLocation {
          displayName
        }
        endLocation {
          displayName
        }
      }
      parkedVehicle {
        name
        location {
          lat
          lng
        }
        timestamp
      }
    }
  }
`;


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/phillip/Desktop/work/Driver-Dashboard/client/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map