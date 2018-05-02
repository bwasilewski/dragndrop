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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(1);


let obj = new __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */](document.getElementById('drag-list'))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DnD {
    constructor (el) {
        let that = this
        this.el = el;
        this.items = Array.from(this.el.children)

        this.items.forEach(item => {
            that.setupitem(item)
        })
        
        console.log('New DragNDrop instance created: ', el);
    }

    setupitem(item) {
        // create parent element and make it droppable
        let newparent = document.createElement('div')
        item.parentNode.insertBefore(newparent, item)
        newparent.appendChild(item)
        // make item draggable
        item.setAttribute('draggable', 'true')

        // set up event handlers
        item.addEventListener('dragstart', this.handledragstart)
        item.addEventListener('dragenter', this.handledragenter)
        item.addEventListener('dragover', this.handledrag)
        item.addEventListener('drop', this.handledrop)

        newparent.addEventListener('dragover', ev => {ev.preventDefault()})
        newparent.addEventListener('dragenter', ev => {ev.preventDefault()})
    }

    handledragstart(ev) {
        ev.dataTransfer.setData('text', '<div>Hello there</div>')
    }

    handledragenter(ev) {
        let target = ev.toElement.parentNode;

        console.log('Target: ', target)
    }

    handledrag(ev) {
        // console.log('Drag: ', ev)
    }

    handledrop(ev) {
        console.log('Drop: ', ev)
        let target = ev.toElement.parentNode
        target.innerHTML = ev.dataTransfer.getData('text')
        
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DnD;


/***/ })
/******/ ]);