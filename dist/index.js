(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("wikomWizard", [], factory);
	else if(typeof exports === 'object')
		exports["wikomWizard"] = factory();
	else
		root["wikomWizard"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports) {

	/**
	 * Created by rouven on 13.06.17.
	 */
	
	import {initializeWizard, stepForward, stepBack, setError, stepForwardPreservingErrors} from './actions/wizardActions';
	import {INITIALIZE, DESTROY, STEP_FORWARD, STEP_BACK, SET_ERROR} from './actions/actionTypes';
	import wizardReducer from './reducers/wizardReducer';
	import Wizard from './components/Wizard';
	import Step from './components/Step';
	
	export default Wizard;
	
	export {
	    Wizard,
	    Step,
	    initializeWizard,
	    stepForward,
	    stepForwardPreservingErrors,
	    stepBack,
	    setError,
	    INITIALIZE,
	    DESTROY,
	    STEP_FORWARD,
	    STEP_BACK,
	    SET_ERROR,
	    wizardReducer
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=index.js.map