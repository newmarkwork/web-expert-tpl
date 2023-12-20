/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/modules/accordeon.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/accordeon.js ***!
  \******************************************/
/***/ (() => {

var accordeons = document.querySelectorAll('.accordeon');

if (accordeons) {
  accordeons.forEach(function (accordeon) {
    var headers = accordeon.querySelectorAll('.accordeon__item-header');

    var onClickHandler = function onClickHandler(evt) {
      var isOpened = !evt.currentTarget.classList.contains('collapsed');
      headers.forEach(function (header) {
        !header.classList.contains('collapsed') ? header.classList.add('collapsed') : null;
      });
      isOpened ? evt.currentTarget.classList.add('collapsed') : evt.currentTarget.classList.remove('collapsed');
    };

    headers.forEach(function (header) {
      header.addEventListener('click', onClickHandler);
    });
  });
}

/***/ }),

/***/ "./src/scripts/modules/mesh-animation.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/mesh-animation.js ***!
  \***********************************************/
/***/ (() => {

var resizeReset = function resizeReset() {
  w = canvasBody.width = window.innerWidth;
  h = canvasBody.height = window.innerHeight;
};

var opts = {
  particleColor: "rgb(240,240,240)",
  lineColor: "rgb(240,240,240)",
  particleAmount: 60,
  defaultSpeed: .3,
  variantSpeed: 1,
  defaultRadius: 2,
  variantRadius: 2,
  linkRadius: 200
};
window.addEventListener("resize", function () {
  deBouncer();
});

var deBouncer = function deBouncer() {
  clearTimeout(tid);
  tid = setTimeout(function () {
    resizeReset();
  }, delay);
};

var checkDistance = function checkDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

var linkPoints = function linkPoints(point1, hubs) {
  for (var i = 0; i < hubs.length; i++) {
    var distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
    var opacity = 1 - distance / opts.linkRadius;

    if (opacity > 0) {
      drawArea.lineWidth = 0.5;
      drawArea.strokeStyle = "rgba(".concat(rgb[0], ", ").concat(rgb[1], ", ").concat(rgb[2], ", ").concat(opacity, ")");
      drawArea.beginPath();
      drawArea.moveTo(point1.x, point1.y);
      drawArea.lineTo(hubs[i].x, hubs[i].y);
      drawArea.closePath();
      drawArea.stroke();
    }
  }
};

Particle = function Particle(xPos, yPos) {
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
  this.directionAngle = Math.floor(Math.random() * 360);
  this.color = opts.particleColor;
  this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
  this.vector = {
    x: Math.cos(this.directionAngle) * this.speed,
    y: Math.sin(this.directionAngle) * this.speed
  };

  this.update = function () {
    this.border();
    this.x += this.vector.x;
    this.y += this.vector.y;
  };

  this.border = function () {
    if (this.x >= w || this.x <= 0) {
      this.vector.x *= -1;
    }

    if (this.y >= h || this.y <= 0) {
      this.vector.y *= -1;
    }

    if (this.x > w) this.x = w;
    if (this.y > h) this.y = h;
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
  };

  this.draw = function () {
    drawArea.beginPath();
    drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    drawArea.closePath();
    drawArea.fillStyle = this.color;
    drawArea.fill();
  };
};

function setup() {
  particles = [];
  resizeReset();

  for (var i = 0; i < opts.particleAmount; i++) {
    particles.push(new Particle());
  }

  window.requestAnimationFrame(loop);
}

function loop() {
  window.requestAnimationFrame(loop);
  drawArea.clearRect(0, 0, w, h);

  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }

  for (var _i = 0; _i < particles.length; _i++) {
    linkPoints(particles[_i], particles);
  }
}

var canvasBody = document.getElementById("canvas"),
    drawArea = canvasBody.getContext("2d");
var delay = 200,
    tid,
    rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();

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
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordeon */ "./src/scripts/modules/accordeon.js");
/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_accordeon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_mesh_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mesh-animation */ "./src/scripts/modules/mesh-animation.js");
/* harmony import */ var _modules_mesh_animation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_mesh_animation__WEBPACK_IMPORTED_MODULE_1__);
//import ./modules/test;
 // import "./modules/swiper";


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map