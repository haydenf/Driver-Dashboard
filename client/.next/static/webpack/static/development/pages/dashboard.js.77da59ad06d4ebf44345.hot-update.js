webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/Components/GoogleMap/GoogleMap.js":
/*!***********************************************!*\
  !*** ./src/Components/GoogleMap/GoogleMap.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Google_Secret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Google_Secret */ "./src/Components/GoogleMap/Google_Secret.js");
var _jsxFileName = "/home/phillip/Desktop/work/Driver-Dashboard/client/src/Components/GoogleMap/GoogleMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




console.log("Coming from google maps", _Google_Secret__WEBPACK_IMPORTED_MODULE_3__["default"]);

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
      style: {
        width: "85%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      icon: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      color: "red",
      name: "map marker alternate",
      size: "1.5rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), "Parking Location"), __jsx("div", {
      className: "ui embed",
      style: {
        maxWidth: "100vw",
        paddingBottom: "45%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
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
        lineNumber: 45
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: "".concat(_Google_Secret__WEBPACK_IMPORTED_MODULE_3__["default"])
})(SimpleMap));

/***/ })

})
//# sourceMappingURL=dashboard.js.77da59ad06d4ebf44345.hot-update.js.map