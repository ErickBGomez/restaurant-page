/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/sections/header.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHeader)
/* harmony export */ });
function createUserAndCart() {
  const userAndCart = document.createElement("div");
  userAndCart.className = "user-and-cart";
  const userIcon = document.createElement("i");
  userIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20 18.3C23.8453 18.3 26.9625 15.1828 26.9625 11.3375C26.9625 7.49222 23.8453 4.375 20 4.375C16.1547 4.375 13.0375 7.49222 13.0375 11.3375C13.0375 15.1828 16.1547 18.3 20 18.3Z" stroke="#25272C" stroke-width="2"/>
<path d="M34.0937 35.5312C34.0937 31.7934 32.6089 28.2086 29.9658 25.5655C27.3227 22.9224 23.7379 21.4375 20 21.4375C16.2621 21.4375 12.6773 22.9224 10.0342 25.5655C7.39112 28.2086 5.90625 31.7934 5.90625 35.5312H34.0937Z" stroke="#25272C" stroke-width="2"/>
</svg>`;
  const cartIcon = document.createElement("i");
  cartIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M2.88751 6.22501H9.58751L13.5688 23.6563H31.0563L35.1063 10.2188L10.4188 9.86876" stroke="#25272C" stroke-width="2"/>
<path d="M32.3313 27.7188H13.5438C13.2729 27.7247 13.0037 27.6758 12.7523 27.5749C12.5008 27.474 12.2725 27.3232 12.0809 27.1316C11.8893 26.9401 11.7386 26.7117 11.6377 26.4603C11.5367 26.2088 11.4878 25.9396 11.4938 25.6688C11.4938 23.6563 13.5688 23.6562 13.5688 23.6562" stroke="#25272C" stroke-width="2"/>
<path d="M15.5938 34.4625C16.8122 34.4625 17.8 33.4747 17.8 32.2562C17.8 31.0378 16.8122 30.05 15.5938 30.05C14.3753 30.05 13.3875 31.0378 13.3875 32.2562C13.3875 33.4747 14.3753 34.4625 15.5938 34.4625Z" stroke="#25272C" stroke-width="2"/>
<path d="M28.775 34.4625C29.9935 34.4625 30.9812 33.4747 30.9812 32.2562C30.9812 31.0378 29.9935 30.05 28.775 30.05C27.5565 30.05 26.5687 31.0378 26.5687 32.2562C26.5687 33.4747 27.5565 34.4625 28.775 34.4625Z" stroke="#25272C" stroke-width="2"/>
</svg>`;
  const cart = document.createElement("div");
  cart.textContent = "$0.00";

  userAndCart.appendChild(userIcon);
  userAndCart.appendChild(cartIcon);
  userAndCart.appendChild(cart);

  return userAndCart;
}

function addHeaderTab(label) {
  const tab = document.createElement("div");
  tab.className = "tab";
  tab.textContent = label;
  tab.dataset.contentTarget = label.toLowerCase();

  return tab;
}

function createHeaderTabs() {
  const tabs = document.createElement("div");
  tabs.className = "header-tabs";

  tabs.appendChild(addHeaderTab("HOME"));
  tabs.appendChild(addHeaderTab("MENU"));
  tabs.appendChild(addHeaderTab("ABOUT"));

  return tabs;
}

function createLogo() {
  const headerLogo = document.createElement("div");
  headerLogo.className = "logo";
  headerLogo.textContent = "Belén";
  return headerLogo;
}

function renderHeader() {
  const header = document.createElement("header");

  header.appendChild(createLogo());
  header.appendChild(createHeaderTabs());
  header.appendChild(createUserAndCart());

  document.body.appendChild(header);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zZWN0aW9ucy9oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJmdW5jdGlvbiBjcmVhdGVVc2VyQW5kQ2FydCgpIHtcbiAgY29uc3QgdXNlckFuZENhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1c2VyQW5kQ2FydC5jbGFzc05hbWUgPSBcInVzZXItYW5kLWNhcnRcIjtcbiAgY29uc3QgdXNlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgdXNlckljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgNDAgNDBcIiBmaWxsPVwibm9uZVwiPlxuPHBhdGggZD1cIk0yMCAxOC4zQzIzLjg0NTMgMTguMyAyNi45NjI1IDE1LjE4MjggMjYuOTYyNSAxMS4zMzc1QzI2Ljk2MjUgNy40OTIyMiAyMy44NDUzIDQuMzc1IDIwIDQuMzc1QzE2LjE1NDcgNC4zNzUgMTMuMDM3NSA3LjQ5MjIyIDEzLjAzNzUgMTEuMzM3NUMxMy4wMzc1IDE1LjE4MjggMTYuMTU0NyAxOC4zIDIwIDE4LjNaXCIgc3Ryb2tlPVwiIzI1MjcyQ1wiIHN0cm9rZS13aWR0aD1cIjJcIi8+XG48cGF0aCBkPVwiTTM0LjA5MzcgMzUuNTMxMkMzNC4wOTM3IDMxLjc5MzQgMzIuNjA4OSAyOC4yMDg2IDI5Ljk2NTggMjUuNTY1NUMyNy4zMjI3IDIyLjkyMjQgMjMuNzM3OSAyMS40Mzc1IDIwIDIxLjQzNzVDMTYuMjYyMSAyMS40Mzc1IDEyLjY3NzMgMjIuOTIyNCAxMC4wMzQyIDI1LjU2NTVDNy4zOTExMiAyOC4yMDg2IDUuOTA2MjUgMzEuNzkzNCA1LjkwNjI1IDM1LjUzMTJIMzQuMDkzN1pcIiBzdHJva2U9XCIjMjUyNzJDXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbjwvc3ZnPmA7XG4gIGNvbnN0IGNhcnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNhcnRJY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDQwIDQwXCIgZmlsbD1cIm5vbmVcIj5cbjxwYXRoIGQ9XCJNMi44ODc1MSA2LjIyNTAxSDkuNTg3NTFMMTMuNTY4OCAyMy42NTYzSDMxLjA1NjNMMzUuMTA2MyAxMC4yMTg4TDEwLjQxODggOS44Njg3NlwiIHN0cm9rZT1cIiMyNTI3MkNcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxuPHBhdGggZD1cIk0zMi4zMzEzIDI3LjcxODhIMTMuNTQzOEMxMy4yNzI5IDI3LjcyNDcgMTMuMDAzNyAyNy42NzU4IDEyLjc1MjMgMjcuNTc0OUMxMi41MDA4IDI3LjQ3NCAxMi4yNzI1IDI3LjMyMzIgMTIuMDgwOSAyNy4xMzE2QzExLjg4OTMgMjYuOTQwMSAxMS43Mzg2IDI2LjcxMTcgMTEuNjM3NyAyNi40NjAzQzExLjUzNjcgMjYuMjA4OCAxMS40ODc4IDI1LjkzOTYgMTEuNDkzOCAyNS42Njg4QzExLjQ5MzggMjMuNjU2MyAxMy41Njg4IDIzLjY1NjIgMTMuNTY4OCAyMy42NTYyXCIgc3Ryb2tlPVwiIzI1MjcyQ1wiIHN0cm9rZS13aWR0aD1cIjJcIi8+XG48cGF0aCBkPVwiTTE1LjU5MzggMzQuNDYyNUMxNi44MTIyIDM0LjQ2MjUgMTcuOCAzMy40NzQ3IDE3LjggMzIuMjU2MkMxNy44IDMxLjAzNzggMTYuODEyMiAzMC4wNSAxNS41OTM4IDMwLjA1QzE0LjM3NTMgMzAuMDUgMTMuMzg3NSAzMS4wMzc4IDEzLjM4NzUgMzIuMjU2MkMxMy4zODc1IDMzLjQ3NDcgMTQuMzc1MyAzNC40NjI1IDE1LjU5MzggMzQuNDYyNVpcIiBzdHJva2U9XCIjMjUyNzJDXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbjxwYXRoIGQ9XCJNMjguNzc1IDM0LjQ2MjVDMjkuOTkzNSAzNC40NjI1IDMwLjk4MTIgMzMuNDc0NyAzMC45ODEyIDMyLjI1NjJDMzAuOTgxMiAzMS4wMzc4IDI5Ljk5MzUgMzAuMDUgMjguNzc1IDMwLjA1QzI3LjU1NjUgMzAuMDUgMjYuNTY4NyAzMS4wMzc4IDI2LjU2ODcgMzIuMjU2MkMyNi41Njg3IDMzLjQ3NDcgMjcuNTU2NSAzNC40NjI1IDI4Ljc3NSAzNC40NjI1WlwiIHN0cm9rZT1cIiMyNTI3MkNcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxuPC9zdmc+YDtcbiAgY29uc3QgY2FydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcnQudGV4dENvbnRlbnQgPSBcIiQwLjAwXCI7XG5cbiAgdXNlckFuZENhcnQuYXBwZW5kQ2hpbGQodXNlckljb24pO1xuICB1c2VyQW5kQ2FydC5hcHBlbmRDaGlsZChjYXJ0SWNvbik7XG4gIHVzZXJBbmRDYXJ0LmFwcGVuZENoaWxkKGNhcnQpO1xuXG4gIHJldHVybiB1c2VyQW5kQ2FydDtcbn1cblxuZnVuY3Rpb24gYWRkSGVhZGVyVGFiKGxhYmVsKSB7XG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYi5jbGFzc05hbWUgPSBcInRhYlwiO1xuICB0YWIudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgdGFiLmRhdGFzZXQuY29udGVudFRhcmdldCA9IGxhYmVsLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIHRhYjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyVGFicygpIHtcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYnMuY2xhc3NOYW1lID0gXCJoZWFkZXItdGFic1wiO1xuXG4gIHRhYnMuYXBwZW5kQ2hpbGQoYWRkSGVhZGVyVGFiKFwiSE9NRVwiKSk7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoYWRkSGVhZGVyVGFiKFwiTUVOVVwiKSk7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoYWRkSGVhZGVyVGFiKFwiQUJPVVRcIikpO1xuXG4gIHJldHVybiB0YWJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2dvKCkge1xuICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyTG9nby5jbGFzc05hbWUgPSBcImxvZ29cIjtcbiAgaGVhZGVyTG9nby50ZXh0Q29udGVudCA9IFwiQmVsw6luXCI7XG4gIHJldHVybiBoZWFkZXJMb2dvO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUxvZ28oKSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJUYWJzKCkpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVXNlckFuZENhcnQoKSk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9