/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
/**
 * Pythagoras' theorem, is a fundamental relation in Euclidean geometry among the three sides of a right triangle.
 * c^2 = a^2 + b^2
 * a	=	side of right triangle
 * b	=	side of right triangle
 * c	=	hypotenuse
 * @param {Integer} x1
 * @param {Integer} y1
 * @param {Integer} x2
 * @param {Integer} y2
 * @returns distance between two points
 */


function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
/**
 * @param {Circle} c Circle
 * @param {Array<Circle>} cs circles array
 * @returns boolean
 */


function noIntersection(c, cs) {
  var _iterator = _createForOfIteratorHelper(cs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var c2 = _step.value;
      if (distance(c.x, c.y, c2.x, c2.y) < c.radius + c2.radius) return false;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
}

function randomUnfilled(imageData) {
  var pdata = imageData.data;
  var possibilities = [];

  for (var i = 0; i < pdata.length / 4; i++) {
    if (pdata[i] == 0 && pdata[i + 1] == 0 && pdata[i + 2] == 0 && pdata[i + 3] == 0) {
      possibilities.push({
        x: i % imageData.width,
        y: Math.floor(i / imageData.width)
      });
    }
  }

  var pi = Math.floor(Math.random() * possibilities.length);
  console.log(possibilities[pi]);
  return possibilities[pi];
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  noIntersection: noIntersection,
  randomUnfilled: randomUnfilled
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']; // Event Listeners

addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
}); // Objects

var Circle = /*#__PURE__*/function () {
  function Circle(x, y, radius, color) {
    _classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.velocity = {
      x: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(0.3, 0.5),
      y: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(0.3, 0.5)
    };
    this.radius = radius;
    this.color = color;
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = this.color;
      c.stroke();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update(circles) {
      this.draw();

      for (var i = 0; i < circles.length; i++) {
        var _c = circles[i];
        if (this === _c) continue;

        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.distance)(_c.x, _c.y, this.x, this.y) - _c.radius + this.radius < 0) {
          console.log('collided');
        }
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
    }
  }]);

  return Circle;
}(); // Implementation


var circles = [];

function init() {
  circles = [];

  for (var i = 0; i < 100; i++) {
    var radius = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(8, 30);
    var x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(radius, canvas.width - radius);
    var y = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(radius, canvas.height - radius);
    var color = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomColor)(colors);
    var add = true;

    if (i !== 0) {
      var count = 0;

      for (var j = 0; j < circles.length; j++) {
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.noIntersection)(new Circle(x, y, radius, color), circles)) {
          x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(radius, canvas.width - radius);
          y = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(radius, canvas.height - radius);
          count++;
          if (count < 10) j = -1;else add = false;
        } else {
          add = true;
          break;
        }
      }
    }

    if (add) circles.push(new Circle(x, y, radius, color));
  }
} // Animation Loop


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height); // c.fillText('IbsanjU', mouse.x, mouse.y)

  circles.forEach(function (object) {
    object.update(circles);
  });
} // let maxR = 50
// setInterval(() => {
// 	// c.clearRect(0, 0, canvas.width, canvas.height)
// 	const imageData = c.getImageData(0, 0, canvas.width, canvas.height)
// 	const p = randomUnfilled(imageData)
// 	let r = 1
// 	while (noIntersection({ x: p.x + r, y: p.y + r, r: r }, circles) && r < maxR) {
// 		r++
// 	}
// 	circles.push(new Circle(p.x, p.y, r - 1, randomColor(colors)))
// }, 1000)


init();
animate();
})();

/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map