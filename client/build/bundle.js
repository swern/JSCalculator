/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Calculator = __webpack_require__(1);
	
	window.onload = function(){
	  main();
	}
	
	function main(){
	  this.calc = new Calculator();
	  // console.log("webpack app started");
	  var equals = document.getElementById('equals');
	  var textBox = document.getElementById('text-box')
	  console.log(equals);
	
	  equals.addEventListener('click',function(){
	    console.log("button clicked!");
	    // textBox.value = eval(textBox.value).toFixed(4);
	    textBox.value = this.calc.answer(textBox.value);
	  }.bind(this))
	  // console.log("Sam is God");
	  }
	
	
	  

/***/ },
/* 1 */
/***/ function(module, exports) {

	var Calculator = function(){
	  this.result = 0;
	}
	
	Calculator.prototype = {
	
	  answer: function(response){
	    console.log(response)
	    try {
	      var sum = eval(response);
	        this.result = parseFloat((sum).toFixed(8));
	          return this.result;
	        }
	    catch(err) {
	        // alert("Syntax Error");
	        return this.result;
	        }
	  
	  }
	}
	  
	
	
	
	module.exports = Calculator;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map