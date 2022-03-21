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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack://myportfolio/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n  const blockAccordeon = document.querySelector(\".feature-list\");\r\n  const accordeonBtns = blockAccordeon.querySelectorAll(\".feature__link\");\r\n  const featureSub = blockAccordeon.querySelectorAll(\".feature-sub\");\r\n\r\n  /* accordeonBtns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      accordeonBtns.forEach((btnItem, index) => {\r\n        if (btnItem === btn) {\r\n          btnItem.classList.toggle(\"feature__link_active\");\r\n\r\n          featureSub[index].classList.toggle(\"hidden\");\r\n        } else {\r\n          btnItem.classList.remove(\"feature__link_active\");\r\n          featureSub[index].classList.add(\"hidden\");\r\n        }\r\n      });\r\n    });\r\n  });*/\r\n  accordeonBtns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      accordeonBtns.forEach((button, index) => {\r\n        if (button === btn) {\r\n          button.classList.toggle(\"feature__link_active\");\r\n          button.nextElementSibling.classList.toggle(\"hidden\");\r\n        } else {\r\n          button.classList.remove(\"feature__link_active\");\r\n          button.nextElementSibling.classList.add(\"hidden\");\r\n        }\r\n      });\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\r\n\n\n//# sourceURL=webpack://myportfolio/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".humburger-menu\");\r\n  const blockMenu = document.querySelector(\".menu\");\r\n  const showMenu = () => {\r\n    if (blockMenu.classList.contains(\"menu-active\")) {\r\n      menuBtn.classList.remove(\"humburger-menu-active\");\r\n      blockMenu.classList.remove(\"menu-active\");\r\n    } else {\r\n      menuBtn.classList.add(\"humburger-menu-active\");\r\n      blockMenu.classList.add(\"menu-active\");\r\n    }\r\n  };\r\n  document.addEventListener(\"click\", (event) => {\r\n    if (\r\n      event.target === menuBtn ||\r\n      event.target.closest(\".menu-list__link\") ||\r\n      event.target == !blockMenu\r\n    ) {\r\n      showMenu();\r\n    } else if (event.target === blockMenu) {\r\n      menuBtn.classList.add(\"humburger-menu-active\");\r\n      blockMenu.classList.add(\"menu-active\");\r\n    } else {\r\n      menuBtn.classList.remove(\"humburger-menu-active\");\r\n      blockMenu.classList.remove(\"menu-active\");\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://myportfolio/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const openModalBtns = document.querySelectorAll(\".more\");\r\n  const modal = document.querySelector(\".modal\");\r\n  const modalClose = modal.querySelector(\".modal__close\");\r\n  const overlay = modal.querySelector(\".overlay\");\r\n  const showModal = () => {\r\n    if (modal.classList.contains(\"hidden\")) {\r\n      modal.classList.remove(\"hidden\");\r\n    } else {\r\n      modal.classList.add(\"hidden\");\r\n    }\r\n  };\r\n  openModalBtns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", showModal);\r\n  });\r\n  modal.addEventListener(\"click\", (event) => {\r\n    if (\r\n      event.target == modalClose ||\r\n      (event.target == overlay &&\r\n        !event.target.classList.contains(\"modal-wrapper\"))\r\n    ) {\r\n      showModal();\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack://myportfolio/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  document.addEventListener(\"click\", (event) => {\r\n    if (\r\n      event.target.closest(\".menu-list__link\") ||\r\n      event.target.closest(\".main__button\") ||\r\n      event.target.closest(\".main__scroll\")\r\n    ) {\r\n      event.preventDefault();\r\n      const ID = event.target.getAttribute(\"href\").substr(1);\r\n      //ID секция до которой мы прокручиваем экран при клике на ссылку\r\n      const section = document.getElementById(ID);\r\n      if (section) {\r\n        seamless.scrollIntoView(section, {\r\n          behavior: \"smooth\",\r\n          block: \"start\",\r\n          inline: \"center\",\r\n        });\r\n      }\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack://myportfolio/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n  const cl = console.log;\r\n  const forms = document.querySelectorAll(\"form\");\r\n  forms.forEach((itemForm) => {\r\n    itemForm.addEventListener(\"submit\", (event) => {\r\n      event.preventDefault();\r\n\r\n      const formData = new FormData(itemForm);\r\n      const body = {};\r\n\r\n      formData.append(\"form\", itemForm.classList.value);\r\n\r\n      formData.forEach((value, field) => {\r\n        body[field] = value;\r\n      });\r\n      fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n        method: \"POST\",\r\n        body: JSON.stringify(body), //передаем данные в свойство body наш объект\r\n        //используем метод stringify , который отдает данные в виде строки\r\n        headers: {\r\n          \"Content-type\": \"application/json; charset=UTF-8\",\r\n        },\r\n      })\r\n        .then((response) => {\r\n          //в response -объект, ответ от сервера, внутри есть\r\n          //набор свойств\r\n          //Headers, body , status: 200 при успешном запросе .которыми мы можем пользоваться\r\n\r\n          //при успешной отправке posts данных сервер отдает ответ 201 и в условии обрабатываем его\r\n          if (\r\n            response.ok /*response.status === 200 || response.status === 201*/\r\n          ) {\r\n            return response.json(); //метод json() для вывода читабельного вида\r\n          } else {\r\n            throw new Error(response.status);\r\n          } //в  else исключаем ошибки\r\n        })\r\n        //метод then отработает тогда ,\r\n        //когда данны полностью дойдут\r\n\r\n        .then((data) => {\r\n          alert(\"Спасибо, ваши данные отправлены! \"); //здесь показывать модальные окна или редиректить на ругие страницы\r\n          //далее очищаем форму после отправки от тех данных, которые ввел пользователь\r\n        })\r\n\r\n        .catch((error) => {\r\n          alert(\"Произошла ошибка \" + error.message);\r\n        }) //метод, который в параметр принимает саму ошибку\r\n        .finally(() => {\r\n          itemForm.reset();\r\n        });\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack://myportfolio/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const blockTabsBtns = document.querySelector(\".design-list\");\r\n\r\n  const getConditionTabBtn = () => {\r\n    const tabsBtn = document.querySelectorAll(\".design-list__item\");\r\n    tabsBtn.forEach((item) => {\r\n      if (item.classList.contains(\"design-list__item_active\")) {\r\n        item.classList.remove(\"design-list__item_active\");\r\n      } else {\r\n        item.classList.add(\"design-list__item_active\");\r\n      }\r\n    });\r\n  };\r\n  const showElemBlockDesign = () => {\r\n    const blockDesign = document.querySelector(\".design-wrapper\");\r\n    const itemBlockDesign = blockDesign.querySelectorAll(\"[data-tabs-field]\");\r\n    itemBlockDesign.forEach((item) => {\r\n      if (item.classList.contains(\"hidden\")) {\r\n        item.classList.remove(\"hidden\");\r\n      } else {\r\n        item.classList.add(\"hidden\");\r\n      }\r\n    });\r\n  };\r\n  blockTabsBtns.addEventListener(\"click\", (event) => {\r\n    getConditionTabBtn();\r\n    showElemBlockDesign();\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack://myportfolio/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = () => {\r\n  const cl = console.log;\r\n  //текущее время\r\n  /*const updateClock = () => {\r\n    const blockTimer = document.querySelector(\".timer__time\");\r\n    const date = new Date();\r\n    const hours = date.getHours();\r\n    const min = date.getMinutes();\r\n    const sec = date.getSeconds();\r\n    const formatHours = hours < 10 ? \"0\" + hours : hours;\r\n    const formatmin = min < 10 ? \"0\" + min : min;\r\n    const formatsec = sec < 10 ? \"0\" + sec : sec;\r\n    blockTimer.textContent = `${formatHours}:${formatmin}:${formatsec}`;\r\n  };\r\n\r\n  setInterval(updateClock, 500);*/\r\n  //ТАЙМЕР ОТСЧЕТА ОБРАТНОГО Времени\r\n  const deadline = \"31 march 2022\";\r\n  let interval;\r\n  const countdownTimer = () => {\r\n    const blockTimer = document.querySelector(\".timer__time\");\r\n    //получая дату в милисекундах\r\n    //мы можем высчитать разницу времени\r\n    //в милисекундах необходимую дату дедлайна\r\n    //и времени в милисекундах актуальной(действующей) даты\r\n    //таким образом\r\n    //из получившейся даты\r\n    //мы сможем доставать\r\n    //необходимые нам часы, минуты, секунды\r\n    //и выводить их на экран\r\n    const date = new Date().getTime(); //кол-во милисекунд с 1 января 1970 г.\r\n    const dateDeadline = new Date(deadline).getTime(); //в new Date передаем дату окончания\r\n    //вычитаем дату текущую из даты дедлайна и переводим полученную разность в секунды\r\n    const timeRemaining = (dateDeadline - date) / 1000;\r\n    //переводим timeRemaining дату в часы\r\n    const hours = timeRemaining / 60 / 60;\r\n    //округляем кол-во часов до ближайшего меньшего числа\r\n    const roundHours = Math.floor(hours);\r\n    //высчитаем минуты с округлением и с выносом всех часов для этого применяем % 60\r\n    const minutes = Math.floor((timeRemaining / 60) % 60);\r\n    //считаем секунды\r\n    const seconds = Math.floor(timeRemaining % 60);\r\n\r\n    //получаем дни из timeRemaining\r\n    const days = Math.floor(roundHours / 24);\r\n    //получаем остатки часов не более 24 часов\r\n    const nigthHours = roundHours % 60  - 36;\r\n\r\n      const formatHours = nigthHours < 10 ? \"0\" + nigthHours : nigthHours;\r\n      const formatmin = minutes < 10 ? \"0\" + minutes : minutes;\r\n      const formatsec = seconds < 10 ? \"0\" + seconds : seconds;\r\n      blockTimer.textContent = `${days} дн.  ${formatHours}:${formatmin}:${formatsec}`;\r\n   \r\n    if (timeRemaining <= 0) {\r\n      clearInterval(interval);\r\n      blockTimer.textContent = `0 дн. 00:00:00`;\r\n    }\r\n  };\r\n  interval = setInterval(countdownTimer, 500);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack://myportfolio/./src/modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;