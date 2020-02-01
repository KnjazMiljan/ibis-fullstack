/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/customLogin.js":
/*!*************************************!*\
  !*** ./resources/js/customLogin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  $(\"#password\")[0].placeholder = \"Password\";\n  $('#togglePasswordVisibility')[0].title = \"Show\";\n  $('#togglePasswordVisibility').on('click', function () {\n    var passwordInputType = $(\"input#password\")[0].type;\n\n    if (passwordInputType === \"password\") {\n      $(this)[0].title = 'Hide';\n      $('#fa-eye').hide();\n      $('#fa-eye-slash').show();\n      $(\"input#password\")[0].type = \"text\";\n    } else {\n      $(this)[0].title = 'Show';\n      $('#fa-eye').show();\n      $('#fa-eye-slash').hide();\n      $(\"input#password\")[0].type = \"password\";\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY3VzdG9tTG9naW4uanM/OTFkOSJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInBsYWNlaG9sZGVyIiwidGl0bGUiLCJvbiIsInBhc3N3b3JkSW5wdXRUeXBlIiwidHlwZSIsImhpZGUiLCJzaG93Il0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCRixHQUFDLENBQUMsV0FBRCxDQUFELENBQWUsQ0FBZixFQUFrQkcsV0FBbEIsR0FBZ0MsVUFBaEM7QUFDQUgsR0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0IsQ0FBL0IsRUFBa0NJLEtBQWxDLEdBQTBDLE1BQTFDO0FBRUFKLEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCSyxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFXO0FBQ2xELFFBQUlDLGlCQUFpQixHQUFHTixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixDQUFwQixFQUF1Qk8sSUFBL0M7O0FBQ0EsUUFBSUQsaUJBQWlCLEtBQUssVUFBMUIsRUFBc0M7QUFDbENOLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxDQUFSLEVBQVdJLEtBQVgsR0FBbUIsTUFBbkI7QUFDQUosT0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhUSxJQUFiO0FBQ0FSLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJTLElBQW5CO0FBQ0FULE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLENBQXBCLEVBQXVCTyxJQUF2QixHQUE4QixNQUE5QjtBQUNILEtBTEQsTUFLTztBQUNIUCxPQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixFQUFXSSxLQUFYLEdBQW1CLE1BQW5CO0FBQ0FKLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVMsSUFBYjtBQUNBVCxPQUFDLENBQUMsZUFBRCxDQUFELENBQW1CUSxJQUFuQjtBQUNBUixPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixDQUFwQixFQUF1Qk8sSUFBdkIsR0FBOEIsVUFBOUI7QUFDSDtBQUNKLEdBYkQ7QUFjSCxDQWxCRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jdXN0b21Mb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiI3Bhc3N3b3JkXCIpWzBdLnBsYWNlaG9sZGVyID0gXCJQYXNzd29yZFwiO1xuICAgICQoJyN0b2dnbGVQYXNzd29yZFZpc2liaWxpdHknKVswXS50aXRsZSA9IFwiU2hvd1wiO1xuXG4gICAgJCgnI3RvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcGFzc3dvcmRJbnB1dFR5cGUgPSAkKFwiaW5wdXQjcGFzc3dvcmRcIilbMF0udHlwZTtcbiAgICAgICAgaWYgKHBhc3N3b3JkSW5wdXRUeXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgICQodGhpcylbMF0udGl0bGUgPSAnSGlkZSc7XG4gICAgICAgICAgICAkKCcjZmEtZXllJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnI2ZhLWV5ZS1zbGFzaCcpLnNob3coKTtcbiAgICAgICAgICAgICQoXCJpbnB1dCNwYXNzd29yZFwiKVswXS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpWzBdLnRpdGxlID0gJ1Nob3cnO1xuICAgICAgICAgICAgJCgnI2ZhLWV5ZScpLnNob3coKTtcbiAgICAgICAgICAgICQoJyNmYS1leWUtc2xhc2gnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiaW5wdXQjcGFzc3dvcmRcIilbMF0udHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/customLogin.js\n");

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** multi ./resources/js/customLogin.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/miljan/laravel_practice/ibis_full_stack/resources/js/customLogin.js */"./resources/js/customLogin.js");


/***/ })

/******/ });