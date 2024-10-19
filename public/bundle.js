/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Managers/BaseManager.ts":
/*!*************************************!*\
  !*** ./src/Managers/BaseManager.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseManager: () => (/* binding */ BaseManager)\n/* harmony export */ });\nclass BaseManager {\n    constructor() {\n        this.tasks = [];\n    }\n    add(model) {\n        this.tasks.push(model);\n    }\n    remove(id) {\n        const index = this.tasks.findIndex((task) => task.getId() === id);\n        if (index > -1) {\n            this.tasks.splice(index, 1);\n            this.printAll;\n        }\n    }\n    update(model) {\n        const index = this.tasks.findIndex((task) => task.getId() === model.getId());\n        if (index > -1) {\n            this.tasks[index] = model;\n        }\n    }\n    complete(model) {\n        model.setStatus(\"completed\");\n    }\n    printAll() {\n        const list = document.getElementById(\"tasksList\");\n        list.innerHTML = \"\";\n        this.tasks.forEach((task) => {\n            const taskLi = document.createElement(\"li\");\n            taskLi.innerHTML = task.getTitle();\n            list.appendChild(taskLi);\n        });\n        console.log(this.tasks);\n    }\n}\n\n\n//# sourceURL=webpack://todo/./src/Managers/BaseManager.ts?");

/***/ }),

/***/ "./src/Managers/TaskManager.ts":
/*!*************************************!*\
  !*** ./src/Managers/TaskManager.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskManager: () => (/* binding */ TaskManager)\n/* harmony export */ });\n/* harmony import */ var _BaseManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseManager */ \"./src/Managers/BaseManager.ts\");\n\nclass TaskManager extends _BaseManager__WEBPACK_IMPORTED_MODULE_0__.BaseManager {\n}\n\n\n//# sourceURL=webpack://todo/./src/Managers/TaskManager.ts?");

/***/ }),

/***/ "./src/Models/BaseModel.ts":
/*!*********************************!*\
  !*** ./src/Models/BaseModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseModel: () => (/* binding */ BaseModel)\n/* harmony export */ });\nclass BaseModel {\n    constructor(title) {\n        this.title = title;\n        this.id = crypto.randomUUID();\n        this.status = \"created\";\n        this.date = new Date();\n    }\n    getTitle() {\n        return this.title;\n    }\n    getStatus() {\n        return this.status;\n    }\n    getDate() {\n        return this.date;\n    }\n    getId() {\n        return this.id;\n    }\n    setId(id) {\n        this.id = id;\n    }\n    setTitle(title) {\n        this.title = title;\n    }\n    setStatus(status) {\n        this.status = status;\n    }\n    setDate(date) {\n        this.date = date;\n    }\n}\n\n\n//# sourceURL=webpack://todo/./src/Models/BaseModel.ts?");

/***/ }),

/***/ "./src/Models/Task.ts":
/*!****************************!*\
  !*** ./src/Models/Task.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ \"./src/Models/BaseModel.ts\");\n\nclass Task extends _BaseModel__WEBPACK_IMPORTED_MODULE_0__.BaseModel {\n    constructor(title, userID) {\n        super(title);\n        this.userId = userID;\n    }\n}\n\n\n//# sourceURL=webpack://todo/./src/Models/Task.ts?");

/***/ }),

/***/ "./src/Models/User.ts":
/*!****************************!*\
  !*** ./src/Models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ \"./src/Models/BaseModel.ts\");\n\nclass User extends _BaseModel__WEBPACK_IMPORTED_MODULE_0__.BaseModel {\n}\n\n\n//# sourceURL=webpack://todo/./src/Models/User.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Managers_TaskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Managers/TaskManager */ \"./src/Managers/TaskManager.ts\");\n/* harmony import */ var _Models_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/Task */ \"./src/Models/Task.ts\");\n/* harmony import */ var _Models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/User */ \"./src/Models/User.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst taskManager = new _Managers_TaskManager__WEBPACK_IMPORTED_MODULE_0__.TaskManager();\n//-----------Funkcijos skirtos Event Listeneriams----------\nfunction createTask() {\n    const taskElement = document.getElementById(\"newTaskInput\");\n    const newTaskTitle = taskElement.value;\n    const kamPriklauso = new _Models_User__WEBPACK_IMPORTED_MODULE_2__.User(\"Tautvydas\");\n    const taskItem = new _Models_Task__WEBPACK_IMPORTED_MODULE_1__.Task(newTaskTitle, kamPriklauso.getId());\n    taskManager.add(taskItem);\n    taskManager.printAll();\n}\nfunction PrintAllTasaks() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const tasks = yield fetch(\"db/tasks.json\");\n        const tasksJson = yield tasks.json();\n        tasksJson.forEach((taskData) => {\n            const taskItem = new _Models_Task__WEBPACK_IMPORTED_MODULE_1__.Task(taskData.title, taskData.kamPriklauso);\n            taskManager.add(taskItem);\n            console.log(taskItem);\n        });\n        taskManager.printAll();\n    });\n}\n//----------Event Listeners----------\nconst getButton = document.getElementById(\"createButton\");\ngetButton.addEventListener(\"click\", createTask);\ndocument.addEventListener(\"DOMContentLoaded\", PrintAllTasaks);\n\n\n//# sourceURL=webpack://todo/./src/main.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;