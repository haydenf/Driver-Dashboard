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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardPage; });
/* harmony import */ var _src_pages_Dashboard_DashboardView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/Dashboard/DashboardView */ "./src/pages/Dashboard/DashboardView.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/pages/dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_8__["createHttpLink"])({
  uri: '/graphql',
  fetch: node_fetch__WEBPACK_IMPORTED_MODULE_4___default.a
});
function DashboardPage(props) {
  // TODO if not logged in redirect to login
  if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('GofarDashboardToken') && js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('GofarDashboardUserId')) {
    __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
      to: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  } else {
    __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }

  const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_6___default.a({
    uri: 'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('GofarDashboardToken'),
      UserID: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('GofarDashboardUserId'),
      'X-API-KEY': 'da2-d5trhzrnqraznclr2teue2bmmu'
    },
    fetch: (node_fetch__WEBPACK_IMPORTED_MODULE_4___default())
  });
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_src_pages_Dashboard_DashboardView__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
}

DashboardPage.getInitialProps = ctx => {
  console.log(`Dashboard GetinitialProps`, ctx);
  return {
    cookiez: next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx) || ''
  };
};

/***/ }),

/***/ "./src/Components/AntdTable/AntdTableComponent.js":
/*!********************************************************!*\
  !*** ./src/Components/AntdTable/AntdTableComponent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/AntdTable/AntdTableComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class AntdTableComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      this.setState({
        filteredInfo: filters,
        sortedInfo: sorter
      });
    });

    _defineProperty(this, "clearFilters", () => {
      this.setState({
        filteredInfo: null
      });
    });

    _defineProperty(this, "clearAll", () => {
      this.setState({
        filteredInfo: null,
        sortedInfo: null
      });
    });

    _defineProperty(this, "setTimeSort", () => {
      this.setState({
        sortedInfo: {
          order: 'descend',
          columnKey: 'time'
        }
      });
    });

    _defineProperty(this, "setDistanceSort", () => {
      this.setState({
        sortedInfo: {
          order: 'descend',
          columnKey: 'time'
        }
      });
    });

    this.state = {
      filteredInfo: null,
      sortedInfo: null
    };
  }

  render() {
    const trips = this.props.tripData;
    {
      console.log(trips);
    }
    let {
      sortedInfo,
      filteredInfo
    } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: 'Time',
      dataIndex: 'startTime',
      key: 'startTime',
      sorter: (a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0,
      sortOrder: sortedInfo.columnKey === 'startTime' && sortedInfo.order
    }, {
      title: 'Distance',
      dataIndex: 'distance',
      key: 'distance',
      sorter: (a, b) => a.distance - b.distance,
      sortOrder: sortedInfo.columnKey === 'distance' && sortedInfo.order
    }, {
      title: 'Tags',
      dataIndex: 'tags',
      render: tags => __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, tags.map(tag => {
        let color = 'green';

        if (tag === 'vacation') {
          color = 'red';
        } else if (tag === 'busuiness') {
          color = 'blue';
        }

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
          color: color,
          key: tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, tag.toUpperCase());
      })),
      key: 'tagType',
      filters: [{
        text: 'busuiness',
        value: 'busuiness'
      }, {
        text: 'vacation',
        value: 'vacation'
      }],
      filteredValue: filteredInfo.tags || null,
      onFilter: (value, record) => record.tags.includes(value)
    }, {
      title: 'Start Location',
      dataIndex: 'startLocation',
      key: 'geoPoint',
      filters: [{
        text: 'Sydney',
        value: 'Sydney'
      }, {
        text: 'Brisbane',
        value: 'Brisbane'
      }],
      filteredValue: filteredInfo.startLocation || null,
      onFilter: (value, record) => record.startLocation.includes(value)
    }, {
      title: 'End Location',
      dataIndex: 'endlocation',
      key: 'endlocation',
      filters: [{
        text: 'Sydney',
        value: 'Sydney'
      }, {
        text: 'Brisbane',
        value: 'Brisbane'
      }],
      filteredValue: filteredInfo.endlocation || null,
      onFilter: (value, record) => record.endlocation.includes(value)
    }];
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("div", {
      className: "table-operations",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.setTimeSort,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Sort time"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.setDistanceSort,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Sort Distance"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clearFilters,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Clear filters"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clearAll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Clear filters and sorters")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      columns: columns,
      dataSource: trips,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AntdTableComponent);

/***/ }),

/***/ "./src/Components/CarData.js":
/*!***********************************!*\
  !*** ./src/Components/CarData.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queries/queries */ "./src/queries/queries.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/Components/LoadingSpinner.js");
/* harmony import */ var _Card_LastFillUpCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card/LastFillUpCard */ "./src/Components/Card/LastFillUpCard.js");
/* harmony import */ var _Card_FuelLeftCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card/FuelLeftCard */ "./src/Components/Card/FuelLeftCard.js");
/* harmony import */ var _Card_DiagnosticCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Card/DiagnosticCard */ "./src/Components/Card/DiagnosticCard.js");
/* harmony import */ var _Card_BusinessRatioCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Card/BusinessRatioCard */ "./src/Components/Card/BusinessRatioCard.js");
/* harmony import */ var _Card_AverageSpeedCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Card/AverageSpeedCard */ "./src/Components/Card/AverageSpeedCard.js");
/* harmony import */ var _Card_TravelDistanceTotalCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Card/TravelDistanceTotalCard */ "./src/Components/Card/TravelDistanceTotalCard.js");
/* harmony import */ var _Card_TimeInCarCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Card/TimeInCarCard */ "./src/Components/Card/TimeInCarCard.js");
/* harmony import */ var _Card_EmissionsCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Card/EmissionsCard */ "./src/Components/Card/EmissionsCard.js");
/* harmony import */ var _Card_FuelEconomyCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Card/FuelEconomyCard */ "./src/Components/Card/FuelEconomyCard.js");
/* harmony import */ var _GoogleMap_GoogleMap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GoogleMap/GoogleMap */ "./src/Components/GoogleMap/GoogleMap.js");
/* harmony import */ var _AntdTable_AntdTableComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AntdTable/AntdTableComponent */ "./src/Components/AntdTable/AntdTableComponent.js");
/* harmony import */ var _TripList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TripList */ "./src/Components/TripList.js");
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/CarData.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















function CarData(props) {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_queries__WEBPACK_IMPORTED_MODULE_2__["getDashboardAllDataQuery"], {
    variables: {
      vehicleId: props.vehicleIdState.value
    }
  });

  if (loading) {
    return __jsx(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  } else if (error) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Error! ", error);
  } else {
    return __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, console.log(data.car), __jsx(_TripList__WEBPACK_IMPORTED_MODULE_16__["default"], {
      trips: data.car.trips,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx(_Card_LastFillUpCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      lastFillUpData: data.car.refillData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx(_Card_FuelLeftCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fuelLeft: data.car.fuelLeft,
      travelSince: data.car.recentTrip,
      lastRefillOdo: data.car.refillData,
      currentOdo: data.car.odometer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx(_Card_DiagnosticCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      diagnosticIssue: data.car.diagnosticIssue // diagnosticDetail={data.car.diagnosticDetail}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx(_Card_BusinessRatioCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
      businessRatio: data.car.businessRatio,
      businessTotal: data.car.businessTotal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_GoogleMap_GoogleMap__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(_Card_AverageSpeedCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
      speed: data.car.averageSpeed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx(_Card_TravelDistanceTotalCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
      distanceTotal: data.car.travelDistanceTotal,
      distanceTotalThisYear: data.car.travelDistanceThisYear,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx(_Card_TimeInCarCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
      timeInCar: data.car.timeInCar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }))), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(_Card_EmissionsCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
      emission: data.car.emissions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), __jsx(_Card_FuelEconomyCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
      fuelEconomy: data.car.fuelEconomy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }))), __jsx("div", {
      className: "ui container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx(_AntdTable_AntdTableComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
      tripData: data.car.trips,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })));
  }
}

/***/ }),

/***/ "./src/Components/CarList.js":
/*!***********************************!*\
  !*** ./src/Components/CarList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/queries */ "./src/queries/queries.js");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/Components/LoadingSpinner.js");
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/CarList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function displayCars(data) {
  return data.cars.map(car => {
    return {
      value: car.id,
      label: `${car.displayName} ${car.make} (${car.model})`
    };
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_queries__WEBPACK_IMPORTED_MODULE_3__["getUserDataQuery"]);

  if (loading) {
    return __jsx(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  } else if (error) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Error! ", error);
  } else {
    return __jsx("div", {
      style: {
        padding: '10px 140px 0px 140px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
      placeholder: 'Select a vehicle',
      onChange: props.vehicleSelection,
      options: displayCars(data.userData),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  }
});

/***/ }),

/***/ "./src/Components/Card/AverageSpeedCard.js":
/*!*************************************************!*\
  !*** ./src/Components/Card/AverageSpeedCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/AverageSpeedCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AverageSpeedCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "yellow",
      name: "shipping fast",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Average Speed"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, this.props.speed, " km/hr")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AverageSpeedCard);

/***/ }),

/***/ "./src/Components/Card/BusinessRatioCard.js":
/*!**************************************************!*\
  !*** ./src/Components/Card/BusinessRatioCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/BusinessRatioCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class BusinessRatioCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "blue",
      name: "handshake",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Business Travel"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.businessRatio, "%"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, this.props.businessTotal, " km")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BusinessRatioCard);

/***/ }),

/***/ "./src/Components/Card/DiagnosticCard.js":
/*!***********************************************!*\
  !*** ./src/Components/Card/DiagnosticCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/DiagnosticCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DiagnosticCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render(props) {
    if (this.props.diagnosticIssue[0] === undefined || this.props.diagnosticIssue[0] === null) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        circular: true,
        inverted: true,
        color: "red",
        name: "wrench",
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Diagnostic Issues"), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "No Data")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx("a", {
        href: "/#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.diagnosticDetail))));
    } else {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        circular: true,
        inverted: true,
        color: "red",
        name: "wrench",
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Diagnostic Issues"), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.props.diagnosticIssue[0].code)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("a", {
        href: "/#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.props.diagnosticDetail))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DiagnosticCard);

/***/ }),

/***/ "./src/Components/Card/EmissionsCard.js":
/*!**********************************************!*\
  !*** ./src/Components/Card/EmissionsCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/EmissionsCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class EmissionsCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "green",
      name: "tree",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Emissions"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.emission, "kg C0", __jsx("sub", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "2")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmissionsCard);

/***/ }),

/***/ "./src/Components/Card/FuelEconomyCard.js":
/*!************************************************!*\
  !*** ./src/Components/Card/FuelEconomyCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/FuelEconomyCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class FuelEconomyCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "violet",
      name: "dollar sign",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Fuel Economy"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, this.props.fuelEconomy, "/100km")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FuelEconomyCard);

/***/ }),

/***/ "./src/Components/Card/FuelLeftCard.js":
/*!*********************************************!*\
  !*** ./src/Components/Card/FuelLeftCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/FuelLeftCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class FuelLeftCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render(props) {
    if (!this.props.lastRefillOdo[0]) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        circular: true,
        inverted: true,
        color: "orange",
        name: "tachometer alternate",
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "You have no data")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }))));
    } else {
      this.odometer = this.props.currentOdo;
      this.lastRefillOdo = this.props.lastRefillOdo[0].odometerKms;
      this.kmSinceLastRefill = this.odometer - this.lastRefillOdo;
      this.kmSinceLastRefillRounded = Math.floor(this.kmSinceLastRefill);
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        circular: true,
        inverted: true,
        color: "orange",
        name: "tachometer alternate",
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Estimated Fuel Left"), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.props.fuelLeft, " km")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " ", this.kmSinceLastRefillRounded, " km (since last fill up) "))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FuelLeftCard);

/***/ }),

/***/ "./src/Components/Card/LastFillUpCard.js":
/*!***********************************************!*\
  !*** ./src/Components/Card/LastFillUpCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reverse_geocode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reverse-geocode */ "reverse-geocode");
/* harmony import */ var reverse_geocode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reverse_geocode__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/LastFillUpCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class LastFillUpCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render(props) {
    if (this.props.lastFillUpData[0] === undefined || this.props.lastFillUpData[0] === null) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        float: "left",
        circular: true,
        inverted: true,
        color: "teal",
        name: "battery high",
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, " You have no data ")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }))));
    } else {
      this.lat = this.props.lastFillUpData[0].location.lat;
      this.lng = this.props.lastFillUpData[0].location.lng;
      this.time = new Date(this.props.lastFillUpData[0].timestamp);
      this.reverseGeo = reverse_geocode__WEBPACK_IMPORTED_MODULE_2___default.a.lookup(this.lat, this.lng, 'au');
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "data-cards-r1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        float: "left",
        circular: true,
        inverted: true,
        color: "teal",
        name: "battery high",
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx("div", {
        className: "data-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Litres input last fillup "), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.props.lastFillUpData[0].litres, " L")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        extra: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Last refill"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Time: ", this.time.toDateString()), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Location: ", this.reverseGeo.city))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LastFillUpCard);

/***/ }),

/***/ "./src/Components/Card/TimeInCarCard.js":
/*!**********************************************!*\
  !*** ./src/Components/Card/TimeInCarCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/TimeInCarCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class TimeInCarCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "grey",
      name: "car",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Time in Car (this year)"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.timeInCar, " Hours")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TimeInCarCard);

/***/ }),

/***/ "./src/Components/Card/TravelDistanceTotalCard.js":
/*!********************************************************!*\
  !*** ./src/Components/Card/TravelDistanceTotalCard.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Card/TravelDistanceTotalCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class TravelDistanceTotalCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "data-cards-r1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      circular: true,
      inverted: true,
      color: "brown",
      name: "road",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "data-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Total Distance"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.distanceTotal, " km"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, this.props.distanceTotalThisYear, " km")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TravelDistanceTotalCard);

/***/ }),

/***/ "./src/Components/DashboardHeader.js":
/*!*******************************************!*\
  !*** ./src/Components/DashboardHeader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queries/queries */ "./src/queries/queries.js");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/Components/LoadingSpinner.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/DashboardHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function DashboardHeader(props) {
  const {
    loading: carLoading,
    error: carError,
    data: carData
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_queries__WEBPACK_IMPORTED_MODULE_2__["getDashboardAllDataQuery"], {
    variables: {
      vehicleId: props.vehicleIdState.value
    }
  });
  const {
    error: userError,
    data: userData
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_queries_queries__WEBPACK_IMPORTED_MODULE_2__["getUserDataQuery"]);

  if (carLoading) {
    return __jsx(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  } else if (carError, userError) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Error! ", (carError, userError));
  } else {
    return __jsx("div", {
      className: "hero-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      as: "h1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Welcome back ", userData.userData.firstName, "!"), __jsx("div", {
      className: "hero-img-car-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("h3", {
      style: {
        color: '#fff'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, carData.car.make, " ", carData.car.model, "'s Lifetime Statistics from GOFAR"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      hidden: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Group, {
      size: "mini",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, carData.car.trips.length), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, " Total trips ")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, carData.car.travelDistanceTotal, " KM"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Total Distance")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, carData.car.timeInCar, " "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Time in Car (hrs) ")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Value, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, Math.floor(carData.car.odometer), " KM"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Statistic"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Current Odometer")))));
  }
}

/***/ }),

/***/ "./src/Components/Footer.js":
/*!**********************************!*\
  !*** ./src/Components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => {
  return __jsx("div", {
    className: "footer-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "media-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.facebook.com/GoFarCar/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    className: "icon-color",
    size: "big",
    name: "facebook official",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://twitter.com/gofarcar",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    size: "big",
    className: "icon-color",
    name: "twitter square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://www.youtube.com/c/GofarCar",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    size: "big",
    className: "icon-color",
    name: "youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://www.linkedin.com/company/gofar/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    size: "big",
    className: "icon-color",
    name: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }))), __jsx("div", {
    className: "resources-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/features/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Features"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/about-us/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "About Us"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/fleets-government-corporations/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Fleets,Governments,Coporations"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/blog/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Blog"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/press-reviews/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Press & Reviews", ' ')), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/support/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Support"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/privacy-policy/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Privacy Policy"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/legal/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Legal"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/terms/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Terms"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    as: "a",
    href: "https://www.gofar.co/shipping-refunds/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Shipping & Refund Policy"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/Components/GoogleMap/GoogleMap.js":
/*!***********************************************!*\
  !*** ./src/Components/GoogleMap/GoogleMap.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "google-maps-react");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/GoogleMap/GoogleMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class SimpleMap extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 },
  //   //   { latitude: 47.359423, longitude: -122.021071 },
  //   //   { latitude: 47.2052192687988, longitude: -121.988426208496 },
  //   //   { latitude: 47.6307081, longitude: -122.1434325 },
  //   //   { latitude: 47.3084488, longitude: -122.2140121 },
  //   //   { latitude: 47.5524695, longitude: -122.0425407 }]
  //   // }
  // }
  // displayMarkers = () => {
  //   //TODO;
  //   // return parkData.features.map(park => {
  //   //   return (
  //   //     <Marker
  //   //       key={park.properties.PARK_ID}
  //   //       position={{
  //   //         lat: park.geometry.coordinates[1],
  //   //         lng: park.geometry.coordinates[0]
  //   //       }}
  //   //       onClick={() => console.log("You clicked me!")}
  //   //     />
  //   //   );
  //   // });
  // };
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      icon: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      color: "red",
      name: "map marker alternate",
      size: "big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), "Parking Location"), __jsx("div", {
      className: "ui embed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Map"], {
      google: this.props.google,
      zoom: 9,
      initialCenter: {
        lat: 45.4211,
        lng: -75.6903
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: `${process.env.REACT_APP_GOOGLE_KEY}`
})(SimpleMap));

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

/***/ "./src/Components/TripList.js":
/*!************************************!*\
  !*** ./src/Components/TripList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_Dashboard_DashboardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Dashboard/DashboardView */ "./src/pages/Dashboard/DashboardView.js");
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/TripList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function TripData({
  trips
}) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (TripData);

/***/ }),

/***/ "./src/pages/Dashboard/DashboardView.js":
/*!**********************************************!*\
  !*** ./src/pages/Dashboard/DashboardView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_CarList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/CarList */ "./src/Components/CarList.js");
/* harmony import */ var _Components_DashboardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/DashboardHeader */ "./src/Components/DashboardHeader.js");
/* harmony import */ var _Components_CarData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/CarData */ "./src/Components/CarData.js");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Footer */ "./src/Components/Footer.js");
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/pages/Dashboard/DashboardView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function DashboardView() {
  const {
    0: vehicleIdSelectionState,
    1: setVehicleIdSelectionState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const selectVehicle = vehicleIdSelectionState => {
    setVehicleIdSelectionState(vehicleIdSelectionState);
  };

  if (vehicleIdSelectionState != null) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Components_DashboardHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      vehicleIdState: vehicleIdSelectionState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx(_Components_CarList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      vehicleSelection: selectVehicle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx(_Components_CarData__WEBPACK_IMPORTED_MODULE_3__["default"], {
      vehicleIdState: vehicleIdSelectionState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Components_CarList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      vehicleSelection: selectVehicle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("div", {
      style: {
        height: '500px',
        textAlign: 'center',
        paddingTop: '50px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "You have to choose a vehicle"), __jsx("img", {
      src: "https://media.giphy.com/media/xT3i0ZscbtF5DvLrGg/giphy.gif",
      alt: "Patrick-Gif",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), __jsx(_Components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  }
}

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
      diagnosticDetail
      businessRatio
      businessTotal
      averageSpeed
      travelDistanceTotal
      travelDistanceThisYear
      timeInCar
      emissions
      fuelEconomy
      lifeLitresPerHundredKm {
        litresPerHundredKm
      }
      parking {
        lat
        lng
      }
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
          geoPoint {
            lat
            lng
          }
        }
        endLocation {
          geoPoint {
            lat
            lng
          }
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

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/phillip/Desktop/work/Driver-Dashboard/client/pages/dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "google-maps-react":
/*!************************************!*\
  !*** external "google-maps-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

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

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "reverse-geocode":
/*!**********************************!*\
  !*** external "reverse-geocode" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reverse-geocode");

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
//# sourceMappingURL=dashboard.js.map