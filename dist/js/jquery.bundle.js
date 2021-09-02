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
/******/ 	__webpack_require__.p = "/dist/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/sources/jqueryDependent.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/sources/jqueryDependent.js":
/*!*******************************************!*\
  !*** ./src/js/sources/jqueryDependent.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  $(".single--carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoPlay: true,
    prevArrow: "<button class=' slick-prev '><i class=\"bi bi-chevron-left\"></i></button>",
    nextArrow: "<button class=' slick-next '><i class=\"bi bi-chevron-right\"></i></button>"
  });
  $(".newarrivals .carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    autoPlay: false,
    prevArrow: "<button class=' slick-prev '><i class=\"bi bi-chevron-left\"></i></button>",
    nextArrow: "<button class=' slick-next '><i class=\"bi bi-chevron-right\"></i></button>"
  });
  $(".dropdown-toggle").dropdown();
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
    prevArrow: "<button class=' slick-prev '><i class=\"bi bi-chevron-left\"></i></button>",
    nextArrow: "<button class=' slick-next '><i class=\"bi bi-chevron-right\"></i></button>"
  });
  $(".slider-nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
    centerPadding: 0
  });
  $(".dec").click(function () {
    var qtyNode = $(this).next();
    var qty = qtyNode.val();

    if (qty > 1) {
      qtyNode.val(--qty);
      $(".inc").removeClass("disabled");
    } else {
      $(this).addClass("disabled");
    }
  });
  $(".inc").click(function () {
    var qtyNode = $(this).prev();
    var max = qtyNode.attr("max");
    max = parseInt(max);
    var qty = qtyNode.val();

    if (qty < max) {
      qtyNode.val(++qty);
      $(".dec").removeClass("disabled");
    } else {
      $(this).addClass("disabled");
    }
  });
  $(".comment--section .readmore").click(function (e) {
    if ($(this).parent().hasClass("active")) {
      $(this).text("Read More");
    } else {
      $(this).text("Read Less");
    }

    $(this).parent().toggleClass("active");
  });
  $("#checkout form").submit(function (e) {
    e.preventDefault();
    $("#checkout").removeClass("show active");
    $("#payment").addClass("show active");
    $("a[data-bs-target='#checkout']").removeClass("active");
    $("a[data-bs-target='#payment']").addClass("active");
    $(".indicator .w-50").addClass("w-75");
  });
  $("#backtocheckout").click(function (e) {
    e.preventDefault();
    $("#checkout").addClass("show active");
    $("#payment").removeClass("show active");
    $("a[data-bs-target='#checkout']").addClass("active");
    $("a[data-bs-target='#payment']").removeClass("active");
    $(".indicator .w-50").removeClass("w-75");
  });
  $("#payment form").submit(function (e) {
    e.preventDefault();
    window.location = "./orderComplete";
  });
  $("#form--signup").submit(function (e) {
    e.preventDefault();
    $(this).hide("fast");
    $(this).next().show("fast");
    var ph = $("#phnum--signup").val();

    if (ph) {
      $("#label--ph").text(ph[0] + ph[1] + "XXXXXX" + ph[8] + ph[9]);
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=jquery.bundle.js.map