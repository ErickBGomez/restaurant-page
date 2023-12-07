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
  !*** ./src/sections/footer.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderFooter)
/* harmony export */ });
function createFooterInfo() {
  const footerInfoContainter = document.createElement("div");
  footerInfoContainter.classList.add("footer-info-container");

  const policiesContainer = document.createElement("div");
  policiesContainer.classList.add("footer-info");
  const policiesTitle = document.createElement("h4");
  policiesTitle.textContent = "POLICIES";

  const policiesText1 = document.createElement("a");
  policiesText1.textContent = "Terms Of Use";
  policiesText1.href = "#";
  const policiesText2 = document.createElement("a");
  policiesText2.textContent = "Privacy Policy";
  policiesText2.href = "#";

  policiesContainer.appendChild(policiesTitle);
  policiesContainer.appendChild(policiesText1);
  policiesContainer.appendChild(policiesText2);

  const socialsContainer = document.createElement("div");
  socialsContainer.classList.add("footer-info");
  const socialsTitle = document.createElement("h4");
  socialsTitle.textContent = "SOCIALS";

  const socialsText1 = document.createElement("a");
  socialsText1.textContent = "Facebook";
  socialsText1.href = "#";
  const socialsText2 = document.createElement("a");
  socialsText2.textContent = "Instagram";
  socialsText2.href = "https://www.instagram.com/erickbgomez/";
  socialsText2.target = "_blank";

  const socialsText3 = document.createElement("a");
  socialsText3.textContent = "X / Twitter";
  socialsText3.href = "https://twitter.com/ErickBGomez";
  socialsText3.target = "_blank";

  const socialsText4 = document.createElement("a");
  socialsText4.textContent = "LinkedIn";
  socialsText4.href = "https://www.linkedin.com/in/erickbgomez/";
  socialsText4.target = "_blank";

  socialsContainer.appendChild(socialsTitle);
  socialsContainer.appendChild(socialsText1);
  socialsContainer.appendChild(socialsText2);
  socialsContainer.appendChild(socialsText3);
  socialsContainer.appendChild(socialsText4);

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("footer-info");
  const contactTitle = document.createElement("h4");
  contactTitle.textContent = "CONTACT";

  const contactText1 = document.createElement("p");
  contactText1.textContent =
    "Metrocentro, Calle Los Sisimiles, San Salvador, El Salvador";
  const contactText2 = document.createElement("p");
  contactText2.textContent = "+503 2222-2222";

  contactContainer.appendChild(contactTitle);
  contactContainer.appendChild(contactText1);
  contactContainer.appendChild(contactText2);

  footerInfoContainter.appendChild(policiesContainer);
  footerInfoContainter.appendChild(socialsContainer);
  footerInfoContainter.appendChild(contactContainer);

  return footerInfoContainter;
}

function createFooterLogo() {
  const footerLogo = document.createElement("div");
  footerLogo.className = "logo footer-logo";
  footerLogo.textContent = "Belén";

  return footerLogo;
}

function createFooterUpper() {
  const footerUpper = document.createElement("div");
  footerUpper.classList.add("footer-upper");

  footerUpper.appendChild(createFooterLogo());
  footerUpper.appendChild(createFooterInfo());

  return footerUpper;
}

function createFooterLower() {
  const footerLower = document.createElement("div");
  footerLower.className = "footer-lower";

  const copyright = document.createElement("p");
  copyright.textContent = "Copyright © 2023. All Rights Reserved";

  const authorFooter = document.createElement("p");
  authorFooter.textContent = "Made by ";
  const authorLink = document.createElement("a");
  authorLink.textContent = "Erick B. Gómez";
  authorLink.href = "https://github.com/ErickBGomez";
  authorLink.target = "_blank";

  authorFooter.appendChild(authorLink);

  footerLower.appendChild(copyright);
  footerLower.appendChild(authorFooter);

  return footerLower;
}

function renderFooter() {
  const footer = document.createElement("footer");

  footer.appendChild(createFooterUpper());
  footer.appendChild(createFooterLower());

  document.body.appendChild(footer);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2VjdGlvbnMvZm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gY3JlYXRlRm9vdGVySW5mbygpIHtcbiAgY29uc3QgZm9vdGVySW5mb0NvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJJbmZvQ29udGFpbnRlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWluZm8tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHBvbGljaWVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcG9saWNpZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1pbmZvXCIpO1xuICBjb25zdCBwb2xpY2llc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBwb2xpY2llc1RpdGxlLnRleHRDb250ZW50ID0gXCJQT0xJQ0lFU1wiO1xuXG4gIGNvbnN0IHBvbGljaWVzVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgcG9saWNpZXNUZXh0MS50ZXh0Q29udGVudCA9IFwiVGVybXMgT2YgVXNlXCI7XG4gIHBvbGljaWVzVGV4dDEuaHJlZiA9IFwiI1wiO1xuICBjb25zdCBwb2xpY2llc1RleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHBvbGljaWVzVGV4dDIudGV4dENvbnRlbnQgPSBcIlByaXZhY3kgUG9saWN5XCI7XG4gIHBvbGljaWVzVGV4dDIuaHJlZiA9IFwiI1wiO1xuXG4gIHBvbGljaWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvbGljaWVzVGl0bGUpO1xuICBwb2xpY2llc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwb2xpY2llc1RleHQxKTtcbiAgcG9saWNpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocG9saWNpZXNUZXh0Mik7XG5cbiAgY29uc3Qgc29jaWFsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNvY2lhbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1pbmZvXCIpO1xuICBjb25zdCBzb2NpYWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIHNvY2lhbHNUaXRsZS50ZXh0Q29udGVudCA9IFwiU09DSUFMU1wiO1xuXG4gIGNvbnN0IHNvY2lhbHNUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBzb2NpYWxzVGV4dDEudGV4dENvbnRlbnQgPSBcIkZhY2Vib29rXCI7XG4gIHNvY2lhbHNUZXh0MS5ocmVmID0gXCIjXCI7XG4gIGNvbnN0IHNvY2lhbHNUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBzb2NpYWxzVGV4dDIudGV4dENvbnRlbnQgPSBcIkluc3RhZ3JhbVwiO1xuICBzb2NpYWxzVGV4dDIuaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lcmlja2Jnb21lei9cIjtcbiAgc29jaWFsc1RleHQyLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgY29uc3Qgc29jaWFsc1RleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHNvY2lhbHNUZXh0My50ZXh0Q29udGVudCA9IFwiWCAvIFR3aXR0ZXJcIjtcbiAgc29jaWFsc1RleHQzLmhyZWYgPSBcImh0dHBzOi8vdHdpdHRlci5jb20vRXJpY2tCR29tZXpcIjtcbiAgc29jaWFsc1RleHQzLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgY29uc3Qgc29jaWFsc1RleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHNvY2lhbHNUZXh0NC50ZXh0Q29udGVudCA9IFwiTGlua2VkSW5cIjtcbiAgc29jaWFsc1RleHQ0LmhyZWYgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lcmlja2Jnb21lei9cIjtcbiAgc29jaWFsc1RleHQ0LnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgc29jaWFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzb2NpYWxzVGl0bGUpO1xuICBzb2NpYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvY2lhbHNUZXh0MSk7XG4gIHNvY2lhbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc29jaWFsc1RleHQyKTtcbiAgc29jaWFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzb2NpYWxzVGV4dDMpO1xuICBzb2NpYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvY2lhbHNUZXh0NCk7XG5cbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1pbmZvXCIpO1xuICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xuXG4gIGNvbnN0IGNvbnRhY3RUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0VGV4dDEudGV4dENvbnRlbnQgPVxuICAgIFwiTWV0cm9jZW50cm8sIENhbGxlIExvcyBTaXNpbWlsZXMsIFNhbiBTYWx2YWRvciwgRWwgU2FsdmFkb3JcIjtcbiAgY29uc3QgY29udGFjdFRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRhY3RUZXh0Mi50ZXh0Q29udGVudCA9IFwiKzUwMyAyMjIyLTIyMjJcIjtcblxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQxKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VGV4dDIpO1xuXG4gIGZvb3RlckluZm9Db250YWludGVyLmFwcGVuZENoaWxkKHBvbGljaWVzQ29udGFpbmVyKTtcbiAgZm9vdGVySW5mb0NvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoc29jaWFsc0NvbnRhaW5lcik7XG4gIGZvb3RlckluZm9Db250YWludGVyLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuXG4gIHJldHVybiBmb290ZXJJbmZvQ29udGFpbnRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyTG9nbygpIHtcbiAgY29uc3QgZm9vdGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlckxvZ28uY2xhc3NOYW1lID0gXCJsb2dvIGZvb3Rlci1sb2dvXCI7XG4gIGZvb3RlckxvZ28udGV4dENvbnRlbnQgPSBcIkJlbMOpblwiO1xuXG4gIHJldHVybiBmb290ZXJMb2dvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXJVcHBlcigpIHtcbiAgY29uc3QgZm9vdGVyVXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJVcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLXVwcGVyXCIpO1xuXG4gIGZvb3RlclVwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlckxvZ28oKSk7XG4gIGZvb3RlclVwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlckluZm8oKSk7XG5cbiAgcmV0dXJuIGZvb3RlclVwcGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXJMb3dlcigpIHtcbiAgY29uc3QgZm9vdGVyTG93ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJMb3dlci5jbGFzc05hbWUgPSBcImZvb3Rlci1sb3dlclwiO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIzLiBBbGwgUmlnaHRzIFJlc2VydmVkXCI7XG5cbiAgY29uc3QgYXV0aG9yRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGF1dGhvckZvb3Rlci50ZXh0Q29udGVudCA9IFwiTWFkZSBieSBcIjtcbiAgY29uc3QgYXV0aG9yTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhdXRob3JMaW5rLnRleHRDb250ZW50ID0gXCJFcmljayBCLiBHw7NtZXpcIjtcbiAgYXV0aG9yTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vRXJpY2tCR29tZXpcIjtcbiAgYXV0aG9yTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gIGF1dGhvckZvb3Rlci5hcHBlbmRDaGlsZChhdXRob3JMaW5rKTtcblxuICBmb290ZXJMb3dlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICBmb290ZXJMb3dlci5hcHBlbmRDaGlsZChhdXRob3JGb290ZXIpO1xuXG4gIHJldHVybiBmb290ZXJMb3dlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXJVcHBlcigpKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3Rlckxvd2VyKCkpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==