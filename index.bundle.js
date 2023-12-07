/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/home/hero-bg.jpeg */ "./src/img/home/hero-bg.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=K2D:wght@300;600;700&family=Kaushan+Script&family=Urbanist:wght@400;500;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  /* Colors */
  --primary: #fb4c4c;
  --secondary: #fe9696;
  --tertiary: #9b1c1c;
  --white: #f5f5f5;
  --black: #25272c;
  --black-75: #25272cc0;
  --black-50: #25272c80;
  --black-25: #25272c40;
  --black-10: #25272c1a;
  --black-5: #25272c0c;
  --white-input: #f9f9f9;
  --red-background: #ff52521f;

  /* Base font */
  font-size: 16px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Fonts */

p,
div {
  font-family: "Urbanist", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
}

button,
input {
  font-family: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "K2D", sans-serif;
  margin: 0;
}

h1,
h4,
h5,
h6 {
  font-weight: 700;
}

h1 {
  font-size: 1.802rem;
}

h2 {
  font-size: 1.602rem;
  font-weight: 600;
}

h3 {
  font-size: 1.424rem;
  font-weight: 300;
}

h4 {
  font-size: 1.266rem;
}

h5 {
  font-size: 1.125rem;
}

h6 {
  font-size: 1rem;
}

.logo {
  flex: 1;
  font-family: "Kaushan Script", cursive;
  font-size: 2.25rem;
  color: var(--primary);
  max-width: 211px;
}

body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  background-color: var(--white);
  color: var(--black);
}

input[type="text"] {
  color: var(--black);
  font-size: 1.15rem;
  box-sizing: border-box;
  background-color: var(--white-input);
  border: 2px solid var(--black-50);
  border-radius: 16px;
  padding: 14px 24px;

  transition: 100ms;
}

input[type="text"]:focus {
  outline: none;
  border-color: var(--secondary);
  box-shadow: 0 0 16px -4px var(--primary);

  transition: 100ms;
}

input::placeholder {
  color: var(--black-50);
}

button {
  color: var(--white);
  font-size: 1.15rem;
  font-weight: 800;

  background-color: var(--primary);
  border: none;
  border-radius: 8px;
  padding: 16px 24px;
  cursor: pointer;

  transition: background-color 200ms;
}

button:hover {
  background-color: var(--secondary);
  transition: background-color 200ms;
}

button:active {
  background-color: var(--tertiary);
}

button:focus {
  outline: none;
  border-color: var(--secondary);
  box-shadow: 0 0 16px 0px var(--primary);

  transition: 100ms;
}

a {
  text-decoration: none;
}

/* Header */
header {
  user-select: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  gap: 32px;
}

.header-tabs {
  flex: 2;
  max-width: 440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-tabs .tab {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  width: 104px;
  font-size: 1.2rem;
  border-bottom: 3px solid var(--white);
  transition: 300ms;
}

.header-tabs .tab.selected,
.header-tabs .tab:hover {
  border-bottom: 3px solid var(--primary);
  color: var(--primary);
  transition: 300ms;
}

.header-tabs .tab:not(.selected) {
  cursor: pointer;
}

.user-and-cart {
  flex: 1;
  display: flex;
  max-width: 211px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

/* Content */

#content {
  flex: 1 0 auto;
}

.section-titles {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.section-titles h3 {
  color: var(--black-75);
}

/* Content: Home */

.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#000000ad, #000000be),
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;
  background-size: 100%;
  height: 92vh;
  gap: 24px;
  color: var(--white);
}

.hero-text {
  text-align: center;
}

.hero-text h4,
.hero-text h1 {
  font-weight: 400;
}

.hero-restaurant {
  font-weight: 800;
}

.hero-country {
  font-family: "Kaushan Script";
}

.features-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--red-background);
  gap: 16px;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 272px;
  gap: 8px;
}

.feature h4 {
  color: var(--primary);
}

.dish-summary-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 80px;
}

.dish-gallery-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 250px));
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.gallery-element {
  background-color: var(--secondary);
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  aspect-ratio: 4/3;
  transition: 150ms;
}

.gallery-element:hover {
  opacity: 0.6;
  transition: 150ms;
}

.about-summary-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  background-color: var(--black-5);
}

.about-summary-container .info {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 48px;
  max-width: 30vw;
}

.about-summary-image {
  width: 350px;
}

.newsletter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
}

.newsletter-container p {
  max-width: 20vw;
}

.input-container {
  display: flex;
  justify-content: center;
  width: 55%;
  max-width: 546px;
  gap: 24px;
}

.input-container input[type="text"] {
  flex: 1;
}

/* Home content vertical padding */
.features-container,
.dish-summary-container,
.newsletter-container,
.about-summary-container {
  padding-top: 80px;
  padding-bottom: 80px;
}

/* Content: Menu */
.menu-tabs {
  display: flex;
  gap: 16px;
}

.menu-tabs .tab {
  font-size: 1.2rem;
  color: var(--black-50);
  padding: 8px 32px;
  justify-content: flex-start;
  border-radius: 100px;
  border: 2px solid var(--black-50);
  user-select: none;
  cursor: pointer;
  transition: 100ms;
}

.menu-tabs .tab:hover {
  border-color: var(--primary);
  color: var(--primary);
  transition: 100ms;
}

.menu-tabs .tab.selected {
  border-color: var(--primary);
  background-color: var(--primary);
  color: var(--white);
  font-weight: 500;
  transition: 100ms;
}

.dish-container {
  margin-top: 32px;
  background-color: var(--black-10);
}

.dish-grid {
  margin: 0 auto;
  display: grid;
  max-width: 1128px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  justify-content: center;
  gap: 32px;
}

.dish-card {
  border-radius: 16px;
  background-color: var(--white);
  user-select: none;
}

.dish-card .dish-image {
  background-color: var(--secondary);
  height: 200px;
  width: 100%;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
}

.dish-card .info {
  display: grid;
  padding: 16px 24px;
  grid-template-columns: repeat(2, auto);
  row-gap: 8px;
  align-items: center;
}

.dish-card .title {
  font-weight: 600;
  font-family: K2D, monospace;
  font-size: 1.4rem;
  grid-column: 1 / 3;
}

.dish-card .price {
  color: var(--black-75);
  font-size: 1.3rem;
}

.dish-card .add-cart {
  padding: 12px;
  justify-self: end;
}

.dish-card.hidden {
  display: none;
}

/* Menu content vertical padding */
#menu,
.dish-container {
  padding: 32px 0;
}

/* Content: About */
.about-us-container {
  display: flex;
  justify-content: space-between;
  background-color: var(--black);
  color: var(--white);
  gap: 64px;
}

.about-us-container,
.our-history-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
}

.about-us-image,
.our-history-image {
  width: 100%;
  min-width: 280px;
  max-width: 350px;
}

.about-text,
.our-history-text {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 560px;
}

.about-us-container h3 {
  color: var(--white);
}

.our-history-container {
  flex-direction: row-reverse;
}

.horizontal-divisor {
  position: relative;
  width: 8px;
  height: 8px;
  background-color: var(--primary);
  border-radius: 10px;
  margin: 0 auto;
}

.horizontal-divisor::after,
.horizontal-divisor::before {
  content: " ";
  position: absolute;
  top: 3px;
  width: 80px;
  height: 4px;
  border-radius: 10px;
  background-color: var(--primary);
}

.horizontal-divisor::after {
  left: 48px;
}
.horizontal-divisor::before {
  right: 48px;
}

.contact-title {
  text-align: center;
  margin-bottom: 80px;
}

.contact-grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: min-content min-content;
  column-gap: 80px;
  margin: 0 auto;
}

.contact-info-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-info {
  display: flex;
  gap: 16px;
  align-items: center;
  max-width: 300px;
}

.contact-info img {
  width: 32px;
}

.delivery-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: end;
}

.delivery-icons {
  display: flex;
  gap: 16px;
}

.contact-map {
  grid-column: 2 / 3;
  grid-row: 1 / -1;
  justify-self: end;
  align-self: center;
}

/* About us vertical padding */
.about-us-container,
.our-history-container,
.contact-container {
  padding: 130px 0;
}

/* Footer */
footer {
  background-color: var(--black);
  color: var(--white);
}

.footer-upper {
  display: flex;
  justify-content: space-between;
}

.footer-info-container {
  flex: 1;
  max-width: 743px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 220px;
}

.footer-info h4 {
  margin-bottom: 8px;
}

.footer-info a {
  display: block;
  color: var(--white);
}

.footer-logo {
  color: var(--white);
}

.footer-lower {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--white);
  box-sizing: content-box;
}

.footer-lower a {
  color: var(--primary);
}

.footer-upper,
.footer-lower {
  padding: 32px 0;
}

/* Page Paddings */
.features-container,
.dish-summary-container,
.about-summary-container,
.newsletter-container,
.menu-tabs,
.dish-container,
.about-us-container,
.our-history-container,
.contact-container,
footer {
  padding-left: 12.5vw;
  padding-right: 12.5vw;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=K2D:wght@300;600;700&family=Kaushan+Script&family=Urbanist:wght@400;500;800&display=swap\");\n\n:root {\n  /* Colors */\n  --primary: #fb4c4c;\n  --secondary: #fe9696;\n  --tertiary: #9b1c1c;\n  --white: #f5f5f5;\n  --black: #25272c;\n  --black-75: #25272cc0;\n  --black-50: #25272c80;\n  --black-25: #25272c40;\n  --black-10: #25272c1a;\n  --black-5: #25272c0c;\n  --white-input: #f9f9f9;\n  --red-background: #ff52521f;\n\n  /* Base font */\n  font-size: 16px;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Fonts */\n\np,\ndiv {\n  font-family: \"Urbanist\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  margin: 0;\n}\n\nbutton,\ninput {\n  font-family: inherit;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"K2D\", sans-serif;\n  margin: 0;\n}\n\nh1,\nh4,\nh5,\nh6 {\n  font-weight: 700;\n}\n\nh1 {\n  font-size: 1.802rem;\n}\n\nh2 {\n  font-size: 1.602rem;\n  font-weight: 600;\n}\n\nh3 {\n  font-size: 1.424rem;\n  font-weight: 300;\n}\n\nh4 {\n  font-size: 1.266rem;\n}\n\nh5 {\n  font-size: 1.125rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\n.logo {\n  flex: 1;\n  font-family: \"Kaushan Script\", cursive;\n  font-size: 2.25rem;\n  color: var(--primary);\n  max-width: 211px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  margin: 0;\n  background-color: var(--white);\n  color: var(--black);\n}\n\ninput[type=\"text\"] {\n  color: var(--black);\n  font-size: 1.15rem;\n  box-sizing: border-box;\n  background-color: var(--white-input);\n  border: 2px solid var(--black-50);\n  border-radius: 16px;\n  padding: 14px 24px;\n\n  transition: 100ms;\n}\n\ninput[type=\"text\"]:focus {\n  outline: none;\n  border-color: var(--secondary);\n  box-shadow: 0 0 16px -4px var(--primary);\n\n  transition: 100ms;\n}\n\ninput::placeholder {\n  color: var(--black-50);\n}\n\nbutton {\n  color: var(--white);\n  font-size: 1.15rem;\n  font-weight: 800;\n\n  background-color: var(--primary);\n  border: none;\n  border-radius: 8px;\n  padding: 16px 24px;\n  cursor: pointer;\n\n  transition: background-color 200ms;\n}\n\nbutton:hover {\n  background-color: var(--secondary);\n  transition: background-color 200ms;\n}\n\nbutton:active {\n  background-color: var(--tertiary);\n}\n\nbutton:focus {\n  outline: none;\n  border-color: var(--secondary);\n  box-shadow: 0 0 16px 0px var(--primary);\n\n  transition: 100ms;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header */\nheader {\n  user-select: none;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 32px;\n  gap: 32px;\n}\n\n.header-tabs {\n  flex: 2;\n  max-width: 440px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header-tabs .tab {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 0;\n  width: 104px;\n  font-size: 1.2rem;\n  border-bottom: 3px solid var(--white);\n  transition: 300ms;\n}\n\n.header-tabs .tab.selected,\n.header-tabs .tab:hover {\n  border-bottom: 3px solid var(--primary);\n  color: var(--primary);\n  transition: 300ms;\n}\n\n.header-tabs .tab:not(.selected) {\n  cursor: pointer;\n}\n\n.user-and-cart {\n  flex: 1;\n  display: flex;\n  max-width: 211px;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n\n/* Content */\n\n#content {\n  flex: 1 0 auto;\n}\n\n.section-titles {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.section-titles h3 {\n  color: var(--black-75);\n}\n\n/* Content: Home */\n\n.hero-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(#000000ad, #000000be),\n    url(img/home/hero-bg.jpeg) no-repeat;\n  background-size: 100%;\n  height: 92vh;\n  gap: 24px;\n  color: var(--white);\n}\n\n.hero-text {\n  text-align: center;\n}\n\n.hero-text h4,\n.hero-text h1 {\n  font-weight: 400;\n}\n\n.hero-restaurant {\n  font-weight: 800;\n}\n\n.hero-country {\n  font-family: \"Kaushan Script\";\n}\n\n.features-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--red-background);\n  gap: 16px;\n}\n\n.feature {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  max-width: 272px;\n  gap: 8px;\n}\n\n.feature h4 {\n  color: var(--primary);\n}\n\n.dish-summary-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  gap: 80px;\n}\n\n.dish-gallery-container {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(auto, 250px));\n  grid-template-rows: repeat(3, auto);\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n}\n\n.gallery-element {\n  background-color: var(--secondary);\n  cursor: pointer;\n  object-fit: cover;\n  width: 100%;\n  aspect-ratio: 4/3;\n  transition: 150ms;\n}\n\n.gallery-element:hover {\n  opacity: 0.6;\n  transition: 150ms;\n}\n\n.about-summary-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 64px;\n  background-color: var(--black-5);\n}\n\n.about-summary-container .info {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 48px;\n  max-width: 30vw;\n}\n\n.about-summary-image {\n  width: 350px;\n}\n\n.newsletter-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 32px;\n}\n\n.newsletter-container p {\n  max-width: 20vw;\n}\n\n.input-container {\n  display: flex;\n  justify-content: center;\n  width: 55%;\n  max-width: 546px;\n  gap: 24px;\n}\n\n.input-container input[type=\"text\"] {\n  flex: 1;\n}\n\n/* Home content vertical padding */\n.features-container,\n.dish-summary-container,\n.newsletter-container,\n.about-summary-container {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n\n/* Content: Menu */\n.menu-tabs {\n  display: flex;\n  gap: 16px;\n}\n\n.menu-tabs .tab {\n  font-size: 1.2rem;\n  color: var(--black-50);\n  padding: 8px 32px;\n  justify-content: flex-start;\n  border-radius: 100px;\n  border: 2px solid var(--black-50);\n  user-select: none;\n  cursor: pointer;\n  transition: 100ms;\n}\n\n.menu-tabs .tab:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  transition: 100ms;\n}\n\n.menu-tabs .tab.selected {\n  border-color: var(--primary);\n  background-color: var(--primary);\n  color: var(--white);\n  font-weight: 500;\n  transition: 100ms;\n}\n\n.dish-container {\n  margin-top: 32px;\n  background-color: var(--black-10);\n}\n\n.dish-grid {\n  margin: 0 auto;\n  display: grid;\n  max-width: 1128px;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  justify-content: center;\n  gap: 32px;\n}\n\n.dish-card {\n  border-radius: 16px;\n  background-color: var(--white);\n  user-select: none;\n}\n\n.dish-card .dish-image {\n  background-color: var(--secondary);\n  height: 200px;\n  width: 100%;\n  border-radius: 16px 16px 0 0;\n  object-fit: cover;\n}\n\n.dish-card .info {\n  display: grid;\n  padding: 16px 24px;\n  grid-template-columns: repeat(2, auto);\n  row-gap: 8px;\n  align-items: center;\n}\n\n.dish-card .title {\n  font-weight: 600;\n  font-family: K2D, monospace;\n  font-size: 1.4rem;\n  grid-column: 1 / 3;\n}\n\n.dish-card .price {\n  color: var(--black-75);\n  font-size: 1.3rem;\n}\n\n.dish-card .add-cart {\n  padding: 12px;\n  justify-self: end;\n}\n\n.dish-card.hidden {\n  display: none;\n}\n\n/* Menu content vertical padding */\n#menu,\n.dish-container {\n  padding: 32px 0;\n}\n\n/* Content: About */\n.about-us-container {\n  display: flex;\n  justify-content: space-between;\n  background-color: var(--black);\n  color: var(--white);\n  gap: 64px;\n}\n\n.about-us-container,\n.our-history-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 64px;\n}\n\n.about-us-image,\n.our-history-image {\n  width: 100%;\n  min-width: 280px;\n  max-width: 350px;\n}\n\n.about-text,\n.our-history-text {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  max-width: 560px;\n}\n\n.about-us-container h3 {\n  color: var(--white);\n}\n\n.our-history-container {\n  flex-direction: row-reverse;\n}\n\n.horizontal-divisor {\n  position: relative;\n  width: 8px;\n  height: 8px;\n  background-color: var(--primary);\n  border-radius: 10px;\n  margin: 0 auto;\n}\n\n.horizontal-divisor::after,\n.horizontal-divisor::before {\n  content: \" \";\n  position: absolute;\n  top: 3px;\n  width: 80px;\n  height: 4px;\n  border-radius: 10px;\n  background-color: var(--primary);\n}\n\n.horizontal-divisor::after {\n  left: 48px;\n}\n.horizontal-divisor::before {\n  right: 48px;\n}\n\n.contact-title {\n  text-align: center;\n  margin-bottom: 80px;\n}\n\n.contact-grid {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: min-content min-content;\n  column-gap: 80px;\n  margin: 0 auto;\n}\n\n.contact-info-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.contact-info {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  max-width: 300px;\n}\n\n.contact-info img {\n  width: 32px;\n}\n\n.delivery-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-self: end;\n}\n\n.delivery-icons {\n  display: flex;\n  gap: 16px;\n}\n\n.contact-map {\n  grid-column: 2 / 3;\n  grid-row: 1 / -1;\n  justify-self: end;\n  align-self: center;\n}\n\n/* About us vertical padding */\n.about-us-container,\n.our-history-container,\n.contact-container {\n  padding: 130px 0;\n}\n\n/* Footer */\nfooter {\n  background-color: var(--black);\n  color: var(--white);\n}\n\n.footer-upper {\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer-info-container {\n  flex: 1;\n  max-width: 743px;\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.footer-info {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 220px;\n}\n\n.footer-info h4 {\n  margin-bottom: 8px;\n}\n\n.footer-info a {\n  display: block;\n  color: var(--white);\n}\n\n.footer-logo {\n  color: var(--white);\n}\n\n.footer-lower {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid var(--white);\n  box-sizing: content-box;\n}\n\n.footer-lower a {\n  color: var(--primary);\n}\n\n.footer-upper,\n.footer-lower {\n  padding: 32px 0;\n}\n\n/* Page Paddings */\n.features-container,\n.dish-summary-container,\n.about-summary-container,\n.newsletter-container,\n.menu-tabs,\n.dish-container,\n.about-us-container,\n.our-history-container,\n.contact-container,\nfooter {\n  padding-left: 12.5vw;\n  padding-right: 12.5vw;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderAbout)
/* harmony export */ });
/* harmony import */ var _img_about_contact1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/about/contact1.svg */ "./src/img/about/contact1.svg");
/* harmony import */ var _img_about_contact2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/about/contact2.svg */ "./src/img/about/contact2.svg");
/* harmony import */ var _img_about_contact3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/about/contact3.svg */ "./src/img/about/contact3.svg");
/* harmony import */ var _img_about_delivery1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/about/delivery1.svg */ "./src/img/about/delivery1.svg");
/* harmony import */ var _img_about_delivery2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/about/delivery2.svg */ "./src/img/about/delivery2.svg");
/* harmony import */ var _img_about_about_us_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/about/about-us.png */ "./src/img/about/about-us.png");
/* harmony import */ var _img_about_our_history_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/about/our-history.png */ "./src/img/about/our-history.png");








function addContactInfo(icon, text) {
  const info = document.createElement("div");
  info.className = "contact-info";

  const infoIcon = new Image();
  infoIcon.src = icon;

  const infoText = document.createElement("p");
  infoText.textContent = text;

  info.appendChild(infoIcon);
  info.appendChild(infoText);

  return info;
}

function createContact() {
  const container = document.createElement("div");
  container.classList = "contact-container";

  const titles = document.createElement("div");
  titles.className = "section-titles contact-title";

  const title = document.createElement("h3");
  title.textContent = "Contact";
  const subtitle = document.createElement("h1");
  subtitle.textContent = "Where you can find us";

  titles.appendChild(title);
  titles.appendChild(subtitle);

  const grid = document.createElement("div");
  grid.classList = "contact-grid";

  const infoContainer = document.createElement("div");
  infoContainer.className = "contact-info-container";

  infoContainer.appendChild(
    addContactInfo(
      _img_about_contact1_svg__WEBPACK_IMPORTED_MODULE_0__,
      "Metrocentro, Calle Los Sisimiles, San Salvador, El Salvador."
    )
  );
  infoContainer.appendChild(addContactInfo(_img_about_contact2_svg__WEBPACK_IMPORTED_MODULE_1__, "+503 2222-2222"));
  infoContainer.appendChild(addContactInfo(_img_about_contact3_svg__WEBPACK_IMPORTED_MODULE_2__, "6:00 am - 10:00 pm"));

  const delivery = document.createElement("div");
  delivery.classList = "delivery-container";

  const deliveryText = document.createElement("p");
  deliveryText.textContent = "Also available on:";

  const deliveryIcons = document.createElement("div");
  deliveryIcons.classList = "delivery-icons";

  const deliveryIcon1 = new Image();
  deliveryIcon1.src = _img_about_delivery1_svg__WEBPACK_IMPORTED_MODULE_3__;
  const deliveryIcon2 = new Image();
  deliveryIcon2.src = _img_about_delivery2_svg__WEBPACK_IMPORTED_MODULE_4__;

  deliveryIcons.appendChild(deliveryIcon1);
  deliveryIcons.appendChild(deliveryIcon2);

  delivery.appendChild(deliveryText);
  delivery.appendChild(deliveryIcons);

  const map = document.createElement("div");
  map.classList = "contact-map";
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2011900486755!2d-89.21421542408206!3d13.706261386680909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63312cffdc0e23%3A0xfd208b3a87cfb4d9!2sMetrocentro%20San%20Salvador!5e0!3m2!1sen!2ssv!4v1701823342557!5m2!1sen!2ssv" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  grid.appendChild(infoContainer);
  grid.appendChild(delivery);
  grid.appendChild(map);

  container.appendChild(titles);
  container.appendChild(grid);

  return container;
}

function createHorizontalDivisor() {
  const divisor = document.createElement("div");
  divisor.className = "horizontal-divisor";

  return divisor;
}

function createOurHistory() {
  const container = document.createElement("div");
  container.className = "our-history-container";

  const text = document.createElement("div");
  text.className = "our-history-text";

  const titles = document.createElement("div");
  titles.className = "section-titles";

  const title = document.createElement("h3");
  title.textContent = "Our History";
  const subtitle = document.createElement("h1");
  subtitle.textContent = "How Everything Started";

  titles.appendChild(title);
  titles.appendChild(subtitle);

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet consectetur. Diam diam ornare nunc scelerisque amet. Eget nulla pellentesque vivamus ut a. Fermentum cursus praesent tempus condimentum ullamcorper risus nulla vulputate. Convallis dui tincidunt mattis faucibus purus egestas eu diam eget.";

  text.appendChild(titles);
  text.appendChild(description);

  const image = new Image();
  image.src = _img_about_our_history_png__WEBPACK_IMPORTED_MODULE_6__;
  image.classList = "our-history-image";

  container.appendChild(text);
  container.appendChild(image);

  return container;
}

function createAboutUs() {
  const container = document.createElement("div");
  container.className = "about-us-container";

  const text = document.createElement("div");
  text.className = "about-text";

  const titles = document.createElement("div");
  titles.className = "section-titles";

  const title = document.createElement("h3");
  title.textContent = "About Us";
  const subtitle = document.createElement("h1");
  subtitle.textContent = "Know Our Passions";

  titles.appendChild(title);
  titles.appendChild(subtitle);

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet consectetur. Diam diam ornare nunc scelerisque amet. Eget nulla pellentesque vivamus ut a. Fermentum cursus praesent tempus condimentum ullamcorper risus nulla vulputate. Convallis dui tincidunt mattis faucibus purus egestas eu diam eget.";

  text.appendChild(titles);
  text.appendChild(description);

  const image = new Image();
  image.src = _img_about_about_us_png__WEBPACK_IMPORTED_MODULE_5__;
  image.className = "about-us-image";

  container.appendChild(text);
  container.appendChild(image);

  return container;
}

function renderAbout() {
  const about = document.createElement("div");

  about.appendChild(createAboutUs());
  about.appendChild(createOurHistory());
  about.appendChild(createHorizontalDivisor());
  about.appendChild(createContact());

  return about;
}


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _img_home_feature1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/home/feature1.svg */ "./src/img/home/feature1.svg");
/* harmony import */ var _img_home_feature2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/home/feature2.svg */ "./src/img/home/feature2.svg");
/* harmony import */ var _img_home_feature3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/home/feature3.svg */ "./src/img/home/feature3.svg");
/* harmony import */ var _img_home_about_us_summary_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/home/about-us-summary.png */ "./src/img/home/about-us-summary.png");
/* harmony import */ var _img_menu_sopa_de_pollo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/menu/sopa-de-pollo.jpg */ "./src/img/menu/sopa-de-pollo.jpg");
/* harmony import */ var _img_menu_lasagna_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/menu/lasagna.jpg */ "./src/img/menu/lasagna.jpg");
/* harmony import */ var _img_menu_horchata_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/menu/horchata.jpg */ "./src/img/menu/horchata.jpg");
/* harmony import */ var _img_menu_lonja_empanizada_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/menu/lonja-empanizada.jpg */ "./src/img/menu/lonja-empanizada.jpg");
/* harmony import */ var _img_menu_huevos_rancheros_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/menu/huevos-rancheros.jpg */ "./src/img/menu/huevos-rancheros.jpg");
/* harmony import */ var _img_menu_pupusas_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/menu/pupusas.jpg */ "./src/img/menu/pupusas.jpg");
/* harmony import */ var _img_menu_chocolate_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/menu/chocolate.jpg */ "./src/img/menu/chocolate.jpg");
/* harmony import */ var _img_menu_pescado_al_ajillo_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/menu/pescado-al-ajillo.jpg */ "./src/img/menu/pescado-al-ajillo.jpg");
/* harmony import */ var _img_menu_carne_a_la_plancha_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/menu/carne-a-la-plancha.jpg */ "./src/img/menu/carne-a-la-plancha.jpg");
/* harmony import */ var _sections_content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sections/content */ "./src/sections/content.js");




// Dish images









// External functions


function createHero() {
  const container = document.createElement("div");
  container.className = "hero-container";

  const titles = document.createElement("div");
  titles.className = "hero-text";

  const title = document.createElement("h4");
  title.textContent = "Welcome to ";
  const restaurantSpan = document.createElement("span");
  restaurantSpan.className = "hero-restaurant";
  restaurantSpan.textContent = "BELÉN'S RESTAURANT";
  title.appendChild(restaurantSpan);

  const subtitle = document.createElement("h1");
  subtitle.textContent = "Enjoy the best of ";
  const countrySpan = document.createElement("span");
  countrySpan.className = "hero-country";
  countrySpan.textContent = "El Salvador";

  subtitle.appendChild(countrySpan);

  titles.appendChild(title);
  titles.appendChild(subtitle);

  const button = document.createElement("button");
  button.textContent = "VIEW MENU";
  button.dataset.target = "menu";

  container.appendChild(titles);
  container.append(button);

  return container;
}

// function to add features section
function addFeature(iconPath, title, description) {
  const feature = document.createElement("div");
  feature.className = "feature";

  const featureImage = new Image();
  featureImage.src = iconPath;

  const featureTitle = document.createElement("h4");
  featureTitle.textContent = title;

  const featureDescription = document.createElement("p");
  featureDescription.textContent = description;

  feature.appendChild(featureImage);
  feature.appendChild(featureTitle);
  feature.appendChild(featureDescription);

  return feature;
}

function createFeatures() {
  const container = document.createElement("div");
  container.className = "features-container";

  container.appendChild(
    addFeature(
      _img_home_feature1_svg__WEBPACK_IMPORTED_MODULE_0__,
      "Open everyday",
      "From 6:00 am to 10:00 pm the 7 days of the week"
    )
  );
  container.appendChild(
    addFeature(
      _img_home_feature2_svg__WEBPACK_IMPORTED_MODULE_1__,
      "Easy-to-use platform",
      "Web page created using Webpack technologies"
    )
  );
  container.appendChild(
    addFeature(
      _img_home_feature3_svg__WEBPACK_IMPORTED_MODULE_2__,
      "Great ambience",
      "The perfect place to enjoy with your friends and family"
    )
  );

  return container;
}

function addDishSummaryContent(image) {
  const galleryElement = new Image();
  galleryElement.src = image;
  galleryElement.classList = "gallery-element";

  return galleryElement;
}

function createDishSummary() {
  const container = document.createElement("div");
  container.className = "dish-summary-container";

  const titles = document.createElement("div");
  titles.className = "section-titles";

  const title = document.createElement("h3");
  title.textContent = "Our menu";

  const subtitle = document.createElement("h1");
  subtitle.textContent = "Discover your new favorite dish";

  titles.appendChild(title);
  titles.appendChild(subtitle);

  const gallery = document.createElement("div");
  gallery.className = "dish-gallery-container";

  gallery.appendChild(addDishSummaryContent(_img_menu_sopa_de_pollo_jpg__WEBPACK_IMPORTED_MODULE_4__));
  gallery.appendChild(addDishSummaryContent(_img_menu_lasagna_jpg__WEBPACK_IMPORTED_MODULE_5__));
  gallery.appendChild(addDishSummaryContent(_img_menu_horchata_jpg__WEBPACK_IMPORTED_MODULE_6__));
  gallery.appendChild(addDishSummaryContent(_img_menu_lonja_empanizada_jpg__WEBPACK_IMPORTED_MODULE_7__));
  gallery.appendChild(addDishSummaryContent(_img_menu_huevos_rancheros_jpg__WEBPACK_IMPORTED_MODULE_8__));
  gallery.appendChild(addDishSummaryContent(_img_menu_pupusas_jpg__WEBPACK_IMPORTED_MODULE_9__));
  gallery.appendChild(addDishSummaryContent(_img_menu_chocolate_jpg__WEBPACK_IMPORTED_MODULE_10__));
  gallery.appendChild(addDishSummaryContent(_img_menu_pescado_al_ajillo_jpg__WEBPACK_IMPORTED_MODULE_11__));
  gallery.appendChild(addDishSummaryContent(_img_menu_carne_a_la_plancha_jpg__WEBPACK_IMPORTED_MODULE_12__));

  const button = document.createElement("button");
  button.textContent = "VIEW MORE";
  button.dataset.target = "menu";

  container.appendChild(titles);
  container.appendChild(gallery);
  container.appendChild(button);

  return container;
}

function createAboutSummary() {
  const container = document.createElement("div");
  container.className = "about-summary-container";

  const infoSection = document.createElement("div");
  infoSection.classList = "info";

  const titles = document.createElement("div");
  titles.classList = "section-titles";
  const title = document.createElement("h3");
  title.textContent = "About Us";
  const subtitle = document.createElement("h1");
  subtitle.textContent = "Know our passions";

  titles.appendChild(title);
  titles.appendChild(subtitle);

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum, velit et scelerisque vestibulum, nibh urna ultricies nisl, id tincidunt quam neque nec massa.";

  const button = document.createElement("button");
  button.textContent = "LEARN MORE";
  button.dataset.target = "about";

  infoSection.appendChild(titles);
  infoSection.appendChild(description);
  infoSection.appendChild(button);

  const image = new Image();
  image.src = _img_home_about_us_summary_png__WEBPACK_IMPORTED_MODULE_3__;
  image.classList = "about-summary-image";

  container.appendChild(infoSection);
  container.appendChild(image);

  return container;
}

function createNewsletter() {
  const container = document.createElement("div");
  container.classList = "newsletter-container";

  const titles = document.createElement("div");
  titles.classList = "section-titles";
  const title = document.createElement("h3");
  title.textContent = "Newsletter";
  const subtitle = document.createElement("h1");
  subtitle.textContent = "Never miss up our latest updates";

  titles.appendChild(title);
  titles.appendChild(subtitle);

  const description = document.createElement("p");
  description.textContent =
    "Every Sunday receive notices of new dishes, promotions and live events!";

  const inputContainer = document.createElement("div");
  inputContainer.classList = "input-container";

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = "Enter your email";
  const buttonInput = document.createElement("button");
  buttonInput.textContent = "SIGN IN";

  inputContainer.appendChild(textInput);
  inputContainer.appendChild(buttonInput);

  container.appendChild(titles);
  container.appendChild(description);
  container.appendChild(inputContainer);

  return container;
}

function renderHome() {
  const home = document.createElement("div");
  home.id = "home";

  home.appendChild(createHero());
  home.appendChild(createFeatures());
  home.appendChild(createDishSummary());
  home.appendChild(createAboutSummary());
  home.appendChild(createNewsletter());

  addButtonEvents(home);

  return home;
}

function addButtonEvents(home) {
  const buttons = home.querySelectorAll("button[data-target]");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      (0,_sections_content__WEBPACK_IMPORTED_MODULE_13__.changeContent)(button.dataset.target)
    );
  });
}


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _img_menu_huevos_con_frijoles_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/menu/huevos-con-frijoles.jpg */ "./src/img/menu/huevos-con-frijoles.jpg");
/* harmony import */ var _img_menu_platanos_fritos_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/menu/platanos-fritos.jpg */ "./src/img/menu/platanos-fritos.jpg");
/* harmony import */ var _img_menu_huevos_rancheros_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/menu/huevos-rancheros.jpg */ "./src/img/menu/huevos-rancheros.jpg");
/* harmony import */ var _img_menu_casamiento_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/menu/casamiento.jpg */ "./src/img/menu/casamiento.jpg");
/* harmony import */ var _img_menu_sopa_de_pollo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/menu/sopa-de-pollo.jpg */ "./src/img/menu/sopa-de-pollo.jpg");
/* harmony import */ var _img_menu_carne_a_la_plancha_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/menu/carne-a-la-plancha.jpg */ "./src/img/menu/carne-a-la-plancha.jpg");
/* harmony import */ var _img_menu_lasagna_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/menu/lasagna.jpg */ "./src/img/menu/lasagna.jpg");
/* harmony import */ var _img_menu_lonja_empanizada_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/menu/lonja-empanizada.jpg */ "./src/img/menu/lonja-empanizada.jpg");
/* harmony import */ var _img_menu_hamburguesa_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/menu/hamburguesa.jpg */ "./src/img/menu/hamburguesa.jpg");
/* harmony import */ var _img_menu_pescado_al_ajillo_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/menu/pescado-al-ajillo.jpg */ "./src/img/menu/pescado-al-ajillo.jpg");
/* harmony import */ var _img_menu_pupusas_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/menu/pupusas.jpg */ "./src/img/menu/pupusas.jpg");
/* harmony import */ var _img_menu_riguas_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/menu/riguas.jpg */ "./src/img/menu/riguas.jpg");
/* harmony import */ var _img_menu_tamales_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/menu/tamales.jpg */ "./src/img/menu/tamales.jpg");
/* harmony import */ var _img_menu_nuegados_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/menu/nuegados.jpg */ "./src/img/menu/nuegados.jpg");
/* harmony import */ var _img_menu_peperechas_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/menu/peperechas.jpg */ "./src/img/menu/peperechas.jpg");
/* harmony import */ var _img_menu_semita_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/menu/semita.jpg */ "./src/img/menu/semita.jpg");
/* harmony import */ var _img_menu_salpores_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/menu/salpores.jpg */ "./src/img/menu/salpores.jpg");
/* harmony import */ var _img_menu_viejitas_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/menu/viejitas.jpg */ "./src/img/menu/viejitas.jpg");
/* harmony import */ var _img_menu_cafe_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/menu/cafe.jpg */ "./src/img/menu/cafe.jpg");
/* harmony import */ var _img_menu_chocolate_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/menu/chocolate.jpg */ "./src/img/menu/chocolate.jpg");
/* harmony import */ var _img_menu_horchata_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/menu/horchata.jpg */ "./src/img/menu/horchata.jpg");
/* harmony import */ var _img_menu_soda_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/menu/soda.jpg */ "./src/img/menu/soda.jpg");























function addDishCard(title, category, price, image) {
  const card = document.createElement("div");
  card.className = "dish-card";
  card.dataset.category = category;

  const cardImage = new Image();
  cardImage.src = image;
  cardImage.className = "dish-image";

  const infoContainer = document.createElement("div");
  infoContainer.className = "info";

  const cardTitle = document.createElement("div");
  cardTitle.className = "title";
  cardTitle.textContent = title;

  const cardPrice = document.createElement("div");
  cardPrice.className = "price";
  cardPrice.textContent = price;

  const addCartButton = document.createElement("button");
  addCartButton.className = "add-cart";
  addCartButton.textContent = "Add To Cart";

  infoContainer.appendChild(cardTitle);
  infoContainer.appendChild(cardPrice);
  infoContainer.appendChild(addCartButton);

  card.appendChild(cardImage);
  card.appendChild(infoContainer);

  return card;
}

function filterMenu(menu, filter = "all") {
  const dishGrid = menu.querySelector(".dish-grid");
  const dishes = dishGrid.querySelectorAll(".dish-card");
  const menuTabs = menu.querySelectorAll(".menu-tabs .tab");

  dishGrid.dataset.filter = filter.toLowerCase();

  // Filter dishes
  dishes.forEach((dish) => {
    dish.classList.remove("hidden");

    if (
      dish.dataset.category !== dishGrid.dataset.filter &&
      dishGrid.dataset.filter !== "all"
    )
      dish.classList.add("hidden");
  });

  // Select tab
  menuTabs.forEach((tab) => {
    tab.classList.remove("selected");

    if (tab.dataset.tabCategory == dishGrid.dataset.filter)
      tab.classList.add("selected");
  });
}

function createDishContainer() {
  const container = document.createElement("div");
  container.className = "dish-container";

  const dishGrid = document.createElement("div");
  dishGrid.className = "dish-grid";

  // Replace this to selected menu tab
  dishGrid.appendChild(
    addDishCard(
      "Huevos con frijoles",
      "breakfast",
      "$9.99",
      _img_menu_huevos_con_frijoles_jpg__WEBPACK_IMPORTED_MODULE_0__
    )
  );
  dishGrid.appendChild(
    addDishCard("Platanos fritos", "breakfast", "$4.30", _img_menu_platanos_fritos_jpg__WEBPACK_IMPORTED_MODULE_1__)
  );
  dishGrid.appendChild(
    addDishCard("Huevos rancheros", "breakfast", "$4.39", _img_menu_huevos_rancheros_jpg__WEBPACK_IMPORTED_MODULE_2__)
  );
  dishGrid.appendChild(
    addDishCard("Casamiento", "breakfast", "$6.59", _img_menu_casamiento_jpg__WEBPACK_IMPORTED_MODULE_3__)
  );
  dishGrid.appendChild(
    addDishCard("Sopa de pollo", "lunch", "$10.99", _img_menu_sopa_de_pollo_jpg__WEBPACK_IMPORTED_MODULE_4__)
  );
  dishGrid.appendChild(
    addDishCard("Carne a la plancha", "lunch", "$12.50", _img_menu_carne_a_la_plancha_jpg__WEBPACK_IMPORTED_MODULE_5__)
  );
  dishGrid.appendChild(addDishCard("Lasaña", "lunch", "$8.50", _img_menu_lasagna_jpg__WEBPACK_IMPORTED_MODULE_6__));
  dishGrid.appendChild(
    addDishCard("Lonja empanizada", "lunch", "$9.99", _img_menu_lonja_empanizada_jpg__WEBPACK_IMPORTED_MODULE_7__)
  );
  dishGrid.appendChild(
    addDishCard("Hamburguesas", "lunch", "$9.99", _img_menu_hamburguesa_jpg__WEBPACK_IMPORTED_MODULE_8__)
  );
  dishGrid.appendChild(
    addDishCard("Pescado al ajillo", "lunch", "$9.99", _img_menu_pescado_al_ajillo_jpg__WEBPACK_IMPORTED_MODULE_9__)
  );
  dishGrid.appendChild(addDishCard("Pupusas", "dinner", "$0.60", _img_menu_pupusas_jpg__WEBPACK_IMPORTED_MODULE_10__));
  dishGrid.appendChild(addDishCard("Riguas", "dinner", "$2.99", _img_menu_riguas_jpg__WEBPACK_IMPORTED_MODULE_11__));
  dishGrid.appendChild(addDishCard("Tamales", "dinner", "$3.59", _img_menu_tamales_jpg__WEBPACK_IMPORTED_MODULE_12__));
  dishGrid.appendChild(
    addDishCard("Nuegados", "desserts", "$3.65", _img_menu_nuegados_jpg__WEBPACK_IMPORTED_MODULE_13__)
  );
  dishGrid.appendChild(
    addDishCard("Peperecha", "desserts", "$1.15", _img_menu_peperechas_jpg__WEBPACK_IMPORTED_MODULE_14__)
  );
  dishGrid.appendChild(addDishCard("Semita", "desserts", "$2.67", _img_menu_semita_jpg__WEBPACK_IMPORTED_MODULE_15__));
  dishGrid.appendChild(
    addDishCard("Salpores", "desserts", "$1.98", _img_menu_salpores_jpg__WEBPACK_IMPORTED_MODULE_16__)
  );
  dishGrid.appendChild(
    addDishCard("Viejitas", "desserts", "$1.10", _img_menu_viejitas_jpg__WEBPACK_IMPORTED_MODULE_17__)
  );
  dishGrid.appendChild(addDishCard("Café", "drinks", "$0.75", _img_menu_cafe_jpg__WEBPACK_IMPORTED_MODULE_18__));
  dishGrid.appendChild(
    addDishCard("Chocolate", "drinks", "$0.80", _img_menu_chocolate_jpg__WEBPACK_IMPORTED_MODULE_19__)
  );
  dishGrid.appendChild(addDishCard("Horchata", "drinks", "$1.00", _img_menu_horchata_jpg__WEBPACK_IMPORTED_MODULE_20__));
  dishGrid.appendChild(addDishCard("Soda", "drinks", "$1.25", _img_menu_soda_jpg__WEBPACK_IMPORTED_MODULE_21__));

  container.appendChild(dishGrid);

  return container;
}

function addMenuTab(tabLabel) {
  const tab = document.createElement("div");
  tab.className = "tab";
  tab.dataset.tabCategory = tabLabel.toLowerCase();
  tab.textContent = tabLabel;

  return tab;
}

function createMenuTabs() {
  const tabs = document.createElement("div");
  tabs.className = "menu-tabs";

  tabs.appendChild(addMenuTab("All"));
  tabs.appendChild(addMenuTab("Breakfast"));
  tabs.appendChild(addMenuTab("Lunch"));
  tabs.appendChild(addMenuTab("Dinner"));
  tabs.appendChild(addMenuTab("Desserts"));
  tabs.appendChild(addMenuTab("Drinks"));

  return tabs;
}

function renderMenu() {
  const menu = document.createElement("div");
  menu.id = "menu";

  menu.appendChild(createMenuTabs());
  menu.appendChild(createDishContainer());

  filterMenu(menu);

  addMenuTabEvents(menu);

  return menu;
}

function addMenuTabEvents(menu) {
  const menuTabs = menu.querySelectorAll(".menu-tabs .tab");

  for (const tab of menuTabs) {
    tab.addEventListener("click", (e) =>
      filterMenu(menu, e.target.dataset.tabCategory)
    );
  }
}


/***/ }),

/***/ "./src/sections/content.js":
/*!*********************************!*\
  !*** ./src/sections/content.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeContent: () => (/* binding */ changeContent),
/* harmony export */   renderContent: () => (/* binding */ renderContent)
/* harmony export */ });
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/menu.js */ "./src/pages/menu.js");
/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/about.js */ "./src/pages/about.js");




function renderContent() {
  const content = document.createElement("div");
  content.id = "content";

  document.body.appendChild(content);

  changeContent("home");

  tabsEvent();
}

function tabsEvent() {
  const tabs = document.querySelectorAll(".header-tabs .tab");

  for (const tab of tabs) {
    tab.addEventListener("click", (e) =>
      changeContent(e.target.dataset.contentTarget)
    );
  }
}

function changeContent(newContent) {
  const content = document.querySelector("#content");
  const tabs = document.querySelectorAll(".tab");
  let callback;

  content.innerHTML = "";

  // Set content callback function depending of newContent value
  if (newContent == "home") {
    callback = _pages_home_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  } else if (newContent == "menu") {
    callback = _pages_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  } else if (newContent == "about") {
    callback = _pages_about_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  }

  // Set active tab when invoking function
  for (const tab of tabs) {
    tab.classList.remove("selected");
    if (tab.dataset.contentTarget == newContent) tab.classList.add("selected");
  }

  content.appendChild(callback());

  window.scrollTo(0, 0);
}


/***/ }),

/***/ "./src/sections/footer.js":
/*!********************************!*\
  !*** ./src/sections/footer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/sections/header.js":
/*!********************************!*\
  !*** ./src/sections/header.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/img/about/about-us.png":
/*!************************************!*\
  !*** ./src/img/about/about-us.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d9a0a65fdcf19bc1718.png";

/***/ }),

/***/ "./src/img/about/contact1.svg":
/*!************************************!*\
  !*** ./src/img/about/contact1.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c3c01649fa444a013b1.svg";

/***/ }),

/***/ "./src/img/about/contact2.svg":
/*!************************************!*\
  !*** ./src/img/about/contact2.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "545e73051f3326d08317.svg";

/***/ }),

/***/ "./src/img/about/contact3.svg":
/*!************************************!*\
  !*** ./src/img/about/contact3.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4c77e97edd8f8d0e62c.svg";

/***/ }),

/***/ "./src/img/about/delivery1.svg":
/*!*************************************!*\
  !*** ./src/img/about/delivery1.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58ed63d030fbd6fdf5ea.svg";

/***/ }),

/***/ "./src/img/about/delivery2.svg":
/*!*************************************!*\
  !*** ./src/img/about/delivery2.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90d30b8c080ac24b33dc.svg";

/***/ }),

/***/ "./src/img/about/our-history.png":
/*!***************************************!*\
  !*** ./src/img/about/our-history.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd0bafbc86bbec0e68ac.png";

/***/ }),

/***/ "./src/img/home/about-us-summary.png":
/*!*******************************************!*\
  !*** ./src/img/home/about-us-summary.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4ecff481962bfbca3af.png";

/***/ }),

/***/ "./src/img/home/feature1.svg":
/*!***********************************!*\
  !*** ./src/img/home/feature1.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f96cda1d136f1b8f297.svg";

/***/ }),

/***/ "./src/img/home/feature2.svg":
/*!***********************************!*\
  !*** ./src/img/home/feature2.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "519ca1a1229eb4561f15.svg";

/***/ }),

/***/ "./src/img/home/feature3.svg":
/*!***********************************!*\
  !*** ./src/img/home/feature3.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3acd81e9ca0624417f6.svg";

/***/ }),

/***/ "./src/img/home/hero-bg.jpeg":
/*!***********************************!*\
  !*** ./src/img/home/hero-bg.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c24e8480e70c72e0983.jpeg";

/***/ }),

/***/ "./src/img/menu/cafe.jpg":
/*!*******************************!*\
  !*** ./src/img/menu/cafe.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1127e1ac9d50834853ac.jpg";

/***/ }),

/***/ "./src/img/menu/carne-a-la-plancha.jpg":
/*!*********************************************!*\
  !*** ./src/img/menu/carne-a-la-plancha.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8db6ef0961eb44ab8883.jpg";

/***/ }),

/***/ "./src/img/menu/casamiento.jpg":
/*!*************************************!*\
  !*** ./src/img/menu/casamiento.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6822414f4a6c749a18fa.jpg";

/***/ }),

/***/ "./src/img/menu/chocolate.jpg":
/*!************************************!*\
  !*** ./src/img/menu/chocolate.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "580a44ff2975866c7b82.jpg";

/***/ }),

/***/ "./src/img/menu/hamburguesa.jpg":
/*!**************************************!*\
  !*** ./src/img/menu/hamburguesa.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5c9c5e6f056975132b0.jpg";

/***/ }),

/***/ "./src/img/menu/horchata.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/horchata.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a20faf563352ee9229bb.jpg";

/***/ }),

/***/ "./src/img/menu/huevos-con-frijoles.jpg":
/*!**********************************************!*\
  !*** ./src/img/menu/huevos-con-frijoles.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9cf796f28ecbfdea257.jpg";

/***/ }),

/***/ "./src/img/menu/huevos-rancheros.jpg":
/*!*******************************************!*\
  !*** ./src/img/menu/huevos-rancheros.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa801b3ad2d4da3a9e3d.jpg";

/***/ }),

/***/ "./src/img/menu/lasagna.jpg":
/*!**********************************!*\
  !*** ./src/img/menu/lasagna.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75ade8de8587d6aa86cb.jpg";

/***/ }),

/***/ "./src/img/menu/lonja-empanizada.jpg":
/*!*******************************************!*\
  !*** ./src/img/menu/lonja-empanizada.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9ae5a45602ef78128c9.jpg";

/***/ }),

/***/ "./src/img/menu/nuegados.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/nuegados.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c80456afc1046acf8e59.jpg";

/***/ }),

/***/ "./src/img/menu/peperechas.jpg":
/*!*************************************!*\
  !*** ./src/img/menu/peperechas.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d8772dbfc51f2a67934.jpg";

/***/ }),

/***/ "./src/img/menu/pescado-al-ajillo.jpg":
/*!********************************************!*\
  !*** ./src/img/menu/pescado-al-ajillo.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df43f831273f87060fc0.jpg";

/***/ }),

/***/ "./src/img/menu/platanos-fritos.jpg":
/*!******************************************!*\
  !*** ./src/img/menu/platanos-fritos.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0fd67cdabc15e669b63.jpg";

/***/ }),

/***/ "./src/img/menu/pupusas.jpg":
/*!**********************************!*\
  !*** ./src/img/menu/pupusas.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "818000f02a645f502878.jpg";

/***/ }),

/***/ "./src/img/menu/riguas.jpg":
/*!*********************************!*\
  !*** ./src/img/menu/riguas.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a6107f5e97cf162a0aa.jpg";

/***/ }),

/***/ "./src/img/menu/salpores.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/salpores.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bf1a9bdf12cc6f45845.jpg";

/***/ }),

/***/ "./src/img/menu/semita.jpg":
/*!*********************************!*\
  !*** ./src/img/menu/semita.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdb4bde5ca40d5e89b9d.jpg";

/***/ }),

/***/ "./src/img/menu/soda.jpg":
/*!*******************************!*\
  !*** ./src/img/menu/soda.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2942b1ad24820ce5e6bc.jpg";

/***/ }),

/***/ "./src/img/menu/sopa-de-pollo.jpg":
/*!****************************************!*\
  !*** ./src/img/menu/sopa-de-pollo.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fa7164ff01c5b14f051.jpg";

/***/ }),

/***/ "./src/img/menu/tamales.jpg":
/*!**********************************!*\
  !*** ./src/img/menu/tamales.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f758b23f74753495b62.jpg";

/***/ }),

/***/ "./src/img/menu/viejitas.jpg":
/*!***********************************!*\
  !*** ./src/img/menu/viejitas.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "534f8d7175ebe5a2d3ee.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sections_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/header.js */ "./src/sections/header.js");
/* harmony import */ var _sections_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/footer.js */ "./src/sections/footer.js");
/* harmony import */ var _sections_content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/content.js */ "./src/sections/content.js");





(0,_sections_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_sections_content_js__WEBPACK_IMPORTED_MODULE_3__.renderContent)();
(0,_sections_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsNEdBQTRHLElBQUksbURBQW1ELElBQUksa0JBQWtCO0FBQ3pMLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1DQUFtQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxXQUFXLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLFVBQVUsWUFBWSxXQUFXLE1BQU0sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksU0FBUyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksT0FBTyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksUUFBUSxZ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QUNBOztBQUVBO0FBQ0E7QUFDQSxzV0FBc1c7O0FBRXRXO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyx1REFBYTtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxvREFBVTtBQUN4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlLbUQ7QUFDQTtBQUNBO0FBQ2M7QUFDakU7QUFDMkQ7QUFDVjtBQUNEO0FBQ2tCO0FBQ0E7QUFDakI7QUFDSTtBQUNjO0FBQ0M7QUFDcEU7QUFDb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sbURBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1E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QUFDN0UsOERBQThELGdEQUFPOztBQUVyRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RNMEM7QUFDQTtBQUNFOztBQUVyQztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxzREFBVTtBQUN6QixJQUFJO0FBQ0osZUFBZSxzREFBVTtBQUN6QixJQUFJO0FBQ0osZUFBZSx1REFBVztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMkI7QUFDQTtBQUNNOztBQUV0RCwrREFBWTtBQUNaLG1FQUFhO0FBQ2IsK0RBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NlY3Rpb25zL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NlY3Rpb25zL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2VjdGlvbnMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWcvaG9tZS9oZXJvLWJnLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUsyRDp3Z2h0QDMwMDs2MDA7NzAwJmZhbWlseT1LYXVzaGFuK1NjcmlwdCZmYW1pbHk9VXJiYW5pc3Q6d2dodEA0MDA7NTAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC8qIENvbG9ycyAqL1xuICAtLXByaW1hcnk6ICNmYjRjNGM7XG4gIC0tc2Vjb25kYXJ5OiAjZmU5Njk2O1xuICAtLXRlcnRpYXJ5OiAjOWIxYzFjO1xuICAtLXdoaXRlOiAjZjVmNWY1O1xuICAtLWJsYWNrOiAjMjUyNzJjO1xuICAtLWJsYWNrLTc1OiAjMjUyNzJjYzA7XG4gIC0tYmxhY2stNTA6ICMyNTI3MmM4MDtcbiAgLS1ibGFjay0yNTogIzI1MjcyYzQwO1xuICAtLWJsYWNrLTEwOiAjMjUyNzJjMWE7XG4gIC0tYmxhY2stNTogIzI1MjcyYzBjO1xuICAtLXdoaXRlLWlucHV0OiAjZjlmOWY5O1xuICAtLXJlZC1iYWNrZ3JvdW5kOiAjZmY1MjUyMWY7XG5cbiAgLyogQmFzZSBmb250ICovXG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogRm9udHMgKi9cblxucCxcbmRpdiB7XG4gIGZvbnQtZmFtaWx5OiBcIlVyYmFuaXN0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG5idXR0b24sXG5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LWZhbWlseTogXCJLMkRcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMSxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjgwMnJlbTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNjAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMS40MjRyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxLjI2NnJlbTtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmxvZ28ge1xuICBmbGV4OiAxO1xuICBmb250LWZhbWlseTogXCJLYXVzaGFuIFNjcmlwdFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgbWF4LXdpZHRoOiAyMTFweDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtaW5wdXQpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjay01MCk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDE0cHggMjRweDtcblxuICB0cmFuc2l0aW9uOiAxMDBtcztcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxNnB4IC00cHggdmFyKC0tcHJpbWFyeSk7XG5cbiAgdHJhbnNpdGlvbjogMTAwbXM7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjay01MCk7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgYm94LXNoYWRvdzogMCAwIDE2cHggMHB4IHZhcigtLXByaW1hcnkpO1xuXG4gIHRyYW5zaXRpb246IDEwMG1zO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBIZWFkZXIgKi9cbmhlYWRlciB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIGdhcDogMzJweDtcbn1cblxuLmhlYWRlci10YWJzIHtcbiAgZmxleDogMjtcbiAgbWF4LXdpZHRoOiA0NDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLXRhYnMgLnRhYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgd2lkdGg6IDEwNHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG59XG5cbi5oZWFkZXItdGFicyAudGFiLnNlbGVjdGVkLFxuLmhlYWRlci10YWJzIC50YWI6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG59XG5cbi5oZWFkZXItdGFicyAudGFiOm5vdCguc2VsZWN0ZWQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlci1hbmQtY2FydCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMjExcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi8qIENvbnRlbnQgKi9cblxuI2NvbnRlbnQge1xuICBmbGV4OiAxIDAgYXV0bztcbn1cblxuLnNlY3Rpb24tdGl0bGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlcyBoMyB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjay03NSk7XG59XG5cbi8qIENvbnRlbnQ6IEhvbWUgKi9cblxuLmhlcm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDAwMDAwYWQsICMwMDAwMDBiZSksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBoZWlnaHQ6IDkydmg7XG4gIGdhcDogMjRweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLmhlcm8tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlcm8tdGV4dCBoNCxcbi5oZXJvLXRleHQgaDEge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaGVyby1yZXN0YXVyYW50IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmhlcm8tY291bnRyeSB7XG4gIGZvbnQtZmFtaWx5OiBcIkthdXNoYW4gU2NyaXB0XCI7XG59XG5cbi5mZWF0dXJlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWNrZ3JvdW5kKTtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uZmVhdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMjcycHg7XG4gIGdhcDogOHB4O1xufVxuXG4uZmVhdHVyZSBoNCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmRpc2gtc3VtbWFyeS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDgwcHg7XG59XG5cbi5kaXNoLWdhbGxlcnktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KGF1dG8sIDI1MHB4KSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uZ2FsbGVyeS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogNC8zO1xuICB0cmFuc2l0aW9uOiAxNTBtcztcbn1cblxuLmdhbGxlcnktZWxlbWVudDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogMTUwbXM7XG59XG5cbi5hYm91dC1zdW1tYXJ5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay01KTtcbn1cblxuLmFib3V0LXN1bW1hcnktY29udGFpbmVyIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBnYXA6IDQ4cHg7XG4gIG1heC13aWR0aDogMzB2dztcbn1cblxuLmFib3V0LXN1bW1hcnktaW1hZ2Uge1xuICB3aWR0aDogMzUwcHg7XG59XG5cbi5uZXdzbGV0dGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiAzMnB4O1xufVxuXG4ubmV3c2xldHRlci1jb250YWluZXIgcCB7XG4gIG1heC13aWR0aDogMjB2dztcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNTUlO1xuICBtYXgtd2lkdGg6IDU0NnB4O1xuICBnYXA6IDI0cHg7XG59XG5cbi5pbnB1dC1jb250YWluZXIgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBmbGV4OiAxO1xufVxuXG4vKiBIb21lIGNvbnRlbnQgdmVydGljYWwgcGFkZGluZyAqL1xuLmZlYXR1cmVzLWNvbnRhaW5lcixcbi5kaXNoLXN1bW1hcnktY29udGFpbmVyLFxuLm5ld3NsZXR0ZXItY29udGFpbmVyLFxuLmFib3V0LXN1bW1hcnktY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4vKiBDb250ZW50OiBNZW51ICovXG4ubWVudS10YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ubWVudS10YWJzIC50YWIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLWJsYWNrLTUwKTtcbiAgcGFkZGluZzogOHB4IDMycHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrLTUwKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMTAwbXM7XG59XG5cbi5tZW51LXRhYnMgLnRhYjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgdHJhbnNpdGlvbjogMTAwbXM7XG59XG5cbi5tZW51LXRhYnMgLnRhYi5zZWxlY3RlZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiAxMDBtcztcbn1cblxuLmRpc2gtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stMTApO1xufVxuXG4uZGlzaC1ncmlkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1heC13aWR0aDogMTEyOHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNjBweCwgMWZyKSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMycHg7XG59XG5cbi5kaXNoLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZGlzaC1jYXJkIC5kaXNoLWltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uZGlzaC1jYXJkIC5pbmZvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgcm93LWdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGlzaC1jYXJkIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBLMkQsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbn1cblxuLmRpc2gtY2FyZCAucHJpY2Uge1xuICBjb2xvcjogdmFyKC0tYmxhY2stNzUpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmRpc2gtY2FyZCAuYWRkLWNhcnQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmRpc2gtY2FyZC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBNZW51IGNvbnRlbnQgdmVydGljYWwgcGFkZGluZyAqL1xuI21lbnUsXG4uZGlzaC1jb250YWluZXIge1xuICBwYWRkaW5nOiAzMnB4IDA7XG59XG5cbi8qIENvbnRlbnQ6IEFib3V0ICovXG4uYWJvdXQtdXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGdhcDogNjRweDtcbn1cblxuLmFib3V0LXVzLWNvbnRhaW5lcixcbi5vdXItaGlzdG9yeS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogNjRweDtcbn1cblxuLmFib3V0LXVzLWltYWdlLFxuLm91ci1oaXN0b3J5LWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG5cbi5hYm91dC10ZXh0LFxuLm91ci1oaXN0b3J5LXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMycHg7XG4gIG1heC13aWR0aDogNTYwcHg7XG59XG5cbi5hYm91dC11cy1jb250YWluZXIgaDMge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4ub3VyLWhpc3RvcnktY29udGFpbmVyIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uaG9yaXpvbnRhbC1kaXZpc29yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaG9yaXpvbnRhbC1kaXZpc29yOjphZnRlcixcbi5ob3Jpem9udGFsLWRpdmlzb3I6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uaG9yaXpvbnRhbC1kaXZpc29yOjphZnRlciB7XG4gIGxlZnQ6IDQ4cHg7XG59XG4uaG9yaXpvbnRhbC1kaXZpc29yOjpiZWZvcmUge1xuICByaWdodDogNDhweDtcbn1cblxuLmNvbnRhY3QtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5jb250YWN0LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgY29sdW1uLWdhcDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jb250YWN0LWluZm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4uY29udGFjdC1pbmZvIGltZyB7XG4gIHdpZHRoOiAzMnB4O1xufVxuXG4uZGVsaXZlcnktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLXNlbGY6IGVuZDtcbn1cblxuLmRlbGl2ZXJ5LWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uY29udGFjdC1tYXAge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGdyaWQtcm93OiAxIC8gLTE7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi8qIEFib3V0IHVzIHZlcnRpY2FsIHBhZGRpbmcgKi9cbi5hYm91dC11cy1jb250YWluZXIsXG4ub3VyLWhpc3RvcnktY29udGFpbmVyLFxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTMwcHggMDtcbn1cblxuLyogRm9vdGVyICovXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5mb290ZXItdXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mb290ZXItaW5mby1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBtYXgtd2lkdGg6IDc0M3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbn1cblxuLmZvb3Rlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIG1heC13aWR0aDogMjIwcHg7XG59XG5cbi5mb290ZXItaW5mbyBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmZvb3Rlci1pbmZvIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLmZvb3Rlci1sb2dvIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLmZvb3Rlci1sb3dlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi5mb290ZXItbG93ZXIgYSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmZvb3Rlci11cHBlcixcbi5mb290ZXItbG93ZXIge1xuICBwYWRkaW5nOiAzMnB4IDA7XG59XG5cbi8qIFBhZ2UgUGFkZGluZ3MgKi9cbi5mZWF0dXJlcy1jb250YWluZXIsXG4uZGlzaC1zdW1tYXJ5LWNvbnRhaW5lcixcbi5hYm91dC1zdW1tYXJ5LWNvbnRhaW5lcixcbi5uZXdzbGV0dGVyLWNvbnRhaW5lcixcbi5tZW51LXRhYnMsXG4uZGlzaC1jb250YWluZXIsXG4uYWJvdXQtdXMtY29udGFpbmVyLFxuLm91ci1oaXN0b3J5LWNvbnRhaW5lcixcbi5jb250YWN0LWNvbnRhaW5lcixcbmZvb3RlciB7XG4gIHBhZGRpbmctbGVmdDogMTIuNXZ3O1xuICBwYWRkaW5nLXJpZ2h0OiAxMi41dnc7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QiwyQkFBMkI7O0VBRTNCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUEsVUFBVTs7QUFFVjs7RUFFRSxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBOzs7Ozs7RUFNRSw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBOzs7O0VBSUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLHNDQUFzQztF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QztFQUMzQyxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUEsOEJBQThCO0FBQzlCOzs7RUFHRSxnQkFBZ0I7QUFDbEI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQjs7Ozs7Ozs7OztFQVVFLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SzJEOndnaHRAMzAwOzYwMDs3MDAmZmFtaWx5PUthdXNoYW4rU2NyaXB0JmZhbWlseT1VcmJhbmlzdDp3Z2h0QDQwMDs1MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC8qIENvbG9ycyAqL1xcbiAgLS1wcmltYXJ5OiAjZmI0YzRjO1xcbiAgLS1zZWNvbmRhcnk6ICNmZTk2OTY7XFxuICAtLXRlcnRpYXJ5OiAjOWIxYzFjO1xcbiAgLS13aGl0ZTogI2Y1ZjVmNTtcXG4gIC0tYmxhY2s6ICMyNTI3MmM7XFxuICAtLWJsYWNrLTc1OiAjMjUyNzJjYzA7XFxuICAtLWJsYWNrLTUwOiAjMjUyNzJjODA7XFxuICAtLWJsYWNrLTI1OiAjMjUyNzJjNDA7XFxuICAtLWJsYWNrLTEwOiAjMjUyNzJjMWE7XFxuICAtLWJsYWNrLTU6ICMyNTI3MmMwYztcXG4gIC0td2hpdGUtaW5wdXQ6ICNmOWY5Zjk7XFxuICAtLXJlZC1iYWNrZ3JvdW5kOiAjZmY1MjUyMWY7XFxuXFxuICAvKiBCYXNlIGZvbnQgKi9cXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogRm9udHMgKi9cXG5cXG5wLFxcbmRpdiB7XFxuICBmb250LWZhbWlseTogXFxcIlVyYmFuaXN0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLMkRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuODAycmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNjAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjQyNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNjZyZW07XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZmxleDogMTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgbWF4LXdpZHRoOiAyMTFweDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1pbnB1dCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjay01MCk7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgcGFkZGluZzogMTRweCAyNHB4O1xcblxcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgYm94LXNoYWRvdzogMCAwIDE2cHggLTRweCB2YXIoLS1wcmltYXJ5KTtcXG5cXG4gIHRyYW5zaXRpb246IDEwMG1zO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrLTUwKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNnB4IDBweCB2YXIoLS1wcmltYXJ5KTtcXG5cXG4gIHRyYW5zaXRpb246IDEwMG1zO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcXG4gIGdhcDogMzJweDtcXG59XFxuXFxuLmhlYWRlci10YWJzIHtcXG4gIGZsZXg6IDI7XFxuICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItdGFicyAudGFiIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMDtcXG4gIHdpZHRoOiAxMDRweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG5cXG4uaGVhZGVyLXRhYnMgLnRhYi5zZWxlY3RlZCxcXG4uaGVhZGVyLXRhYnMgLnRhYjpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG59XFxuXFxuLmhlYWRlci10YWJzIC50YWI6bm90KC5zZWxlY3RlZCkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udXNlci1hbmQtY2FydCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC13aWR0aDogMjExcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi8qIENvbnRlbnQgKi9cXG5cXG4jY29udGVudCB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlcyBoMyB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2stNzUpO1xcbn1cXG5cXG4vKiBDb250ZW50OiBIb21lICovXFxuXFxuLmhlcm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDAwMDBhZCwgIzAwMDAwMGJlKSxcXG4gICAgdXJsKGltZy9ob21lL2hlcm8tYmcuanBlZykgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgaGVpZ2h0OiA5MnZoO1xcbiAgZ2FwOiAyNHB4O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZXJvLXRleHQgaDQsXFxuLmhlcm8tdGV4dCBoMSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVyby1yZXN0YXVyYW50IHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5oZXJvLWNvdW50cnkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXVzaGFuIFNjcmlwdFxcXCI7XFxufVxcblxcbi5mZWF0dXJlcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFja2dyb3VuZCk7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5mZWF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAyNzJweDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uZmVhdHVyZSBoNCB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5kaXNoLXN1bW1hcnktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ2FwOiA4MHB4O1xcbn1cXG5cXG4uZGlzaC1nYWxsZXJ5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KGF1dG8sIDI1MHB4KSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmdhbGxlcnktZWxlbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogNC8zO1xcbiAgdHJhbnNpdGlvbjogMTUwbXM7XFxufVxcblxcbi5nYWxsZXJ5LWVsZW1lbnQ6aG92ZXIge1xcbiAgb3BhY2l0eTogMC42O1xcbiAgdHJhbnNpdGlvbjogMTUwbXM7XFxufVxcblxcbi5hYm91dC1zdW1tYXJ5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLTUpO1xcbn1cXG5cXG4uYWJvdXQtc3VtbWFyeS1jb250YWluZXIgLmluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDQ4cHg7XFxuICBtYXgtd2lkdGg6IDMwdnc7XFxufVxcblxcbi5hYm91dC1zdW1tYXJ5LWltYWdlIHtcXG4gIHdpZHRoOiAzNTBweDtcXG59XFxuXFxuLm5ld3NsZXR0ZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdhcDogMzJweDtcXG59XFxuXFxuLm5ld3NsZXR0ZXItY29udGFpbmVyIHAge1xcbiAgbWF4LXdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA1NSU7XFxuICBtYXgtd2lkdGg6IDU0NnB4O1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKiBIb21lIGNvbnRlbnQgdmVydGljYWwgcGFkZGluZyAqL1xcbi5mZWF0dXJlcy1jb250YWluZXIsXFxuLmRpc2gtc3VtbWFyeS1jb250YWluZXIsXFxuLm5ld3NsZXR0ZXItY29udGFpbmVyLFxcbi5hYm91dC1zdW1tYXJ5LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4vKiBDb250ZW50OiBNZW51ICovXFxuLm1lbnUtdGFicyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4ubWVudS10YWJzIC50YWIge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tYmxhY2stNTApO1xcbiAgcGFkZGluZzogOHB4IDMycHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrLTUwKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxufVxcblxcbi5tZW51LXRhYnMgLnRhYjpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxufVxcblxcbi5tZW51LXRhYnMgLnRhYi5zZWxlY3RlZCB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRyYW5zaXRpb246IDEwMG1zO1xcbn1cXG5cXG4uZGlzaC1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLTEwKTtcXG59XFxuXFxuLmRpc2gtZ3JpZCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXgtd2lkdGg6IDExMjhweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4uZGlzaC1jYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmRpc2gtY2FyZCAuZGlzaC1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uZGlzaC1jYXJkIC5pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIHJvdy1nYXA6IDhweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXNoLWNhcmQgLnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogSzJELCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLmRpc2gtY2FyZCAucHJpY2Uge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrLTc1KTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uZGlzaC1jYXJkIC5hZGQtY2FydCB7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5kaXNoLWNhcmQuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIE1lbnUgY29udGVudCB2ZXJ0aWNhbCBwYWRkaW5nICovXFxuI21lbnUsXFxuLmRpc2gtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDMycHggMDtcXG59XFxuXFxuLyogQ29udGVudDogQWJvdXQgKi9cXG4uYWJvdXQtdXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZ2FwOiA2NHB4O1xcbn1cXG5cXG4uYWJvdXQtdXMtY29udGFpbmVyLFxcbi5vdXItaGlzdG9yeS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDY0cHg7XFxufVxcblxcbi5hYm91dC11cy1pbWFnZSxcXG4ub3VyLWhpc3RvcnktaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDI4MHB4O1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG59XFxuXFxuLmFib3V0LXRleHQsXFxuLm91ci1oaXN0b3J5LXRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMycHg7XFxuICBtYXgtd2lkdGg6IDU2MHB4O1xcbn1cXG5cXG4uYWJvdXQtdXMtY29udGFpbmVyIGgzIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5vdXItaGlzdG9yeS1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1kaXZpc29yIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1kaXZpc29yOjphZnRlcixcXG4uaG9yaXpvbnRhbC1kaXZpc29yOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1kaXZpc29yOjphZnRlciB7XFxuICBsZWZ0OiA0OHB4O1xcbn1cXG4uaG9yaXpvbnRhbC1kaXZpc29yOjpiZWZvcmUge1xcbiAgcmlnaHQ6IDQ4cHg7XFxufVxcblxcbi5jb250YWN0LXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XFxufVxcblxcbi5jb250YWN0LWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gIGNvbHVtbi1nYXA6IDgwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNvbnRhY3QtaW5mby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIGltZyB7XFxuICB3aWR0aDogMzJweDtcXG59XFxuXFxuLmRlbGl2ZXJ5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4uZGVsaXZlcnktaWNvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmNvbnRhY3QtbWFwIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogQWJvdXQgdXMgdmVydGljYWwgcGFkZGluZyAqL1xcbi5hYm91dC11cy1jb250YWluZXIsXFxuLm91ci1oaXN0b3J5LWNvbnRhaW5lcixcXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTMwcHggMDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5mb290ZXItdXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvb3Rlci1pbmZvLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgbWF4LXdpZHRoOiA3NDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5mb290ZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbiAgbWF4LXdpZHRoOiAyMjBweDtcXG59XFxuXFxuLmZvb3Rlci1pbmZvIGg0IHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmZvb3Rlci1pbmZvIGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uZm9vdGVyLWxvZ28ge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmZvb3Rlci1sb3dlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4uZm9vdGVyLWxvd2VyIGEge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uZm9vdGVyLXVwcGVyLFxcbi5mb290ZXItbG93ZXIge1xcbiAgcGFkZGluZzogMzJweCAwO1xcbn1cXG5cXG4vKiBQYWdlIFBhZGRpbmdzICovXFxuLmZlYXR1cmVzLWNvbnRhaW5lcixcXG4uZGlzaC1zdW1tYXJ5LWNvbnRhaW5lcixcXG4uYWJvdXQtc3VtbWFyeS1jb250YWluZXIsXFxuLm5ld3NsZXR0ZXItY29udGFpbmVyLFxcbi5tZW51LXRhYnMsXFxuLmRpc2gtY29udGFpbmVyLFxcbi5hYm91dC11cy1jb250YWluZXIsXFxuLm91ci1oaXN0b3J5LWNvbnRhaW5lcixcXG4uY29udGFjdC1jb250YWluZXIsXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmctbGVmdDogMTIuNXZ3O1xcbiAgcGFkZGluZy1yaWdodDogMTIuNXZ3O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjb250YWN0MVN2ZyBmcm9tIFwiLi4vaW1nL2Fib3V0L2NvbnRhY3QxLnN2Z1wiO1xuaW1wb3J0IGNvbnRhY3QyU3ZnIGZyb20gXCIuLi9pbWcvYWJvdXQvY29udGFjdDIuc3ZnXCI7XG5pbXBvcnQgY29udGFjdDNTdmcgZnJvbSBcIi4uL2ltZy9hYm91dC9jb250YWN0My5zdmdcIjtcbmltcG9ydCBkZWxpdmVyeTFTdmcgZnJvbSBcIi4uL2ltZy9hYm91dC9kZWxpdmVyeTEuc3ZnXCI7XG5pbXBvcnQgZGVsaXZlcnkyU3ZnIGZyb20gXCIuLi9pbWcvYWJvdXQvZGVsaXZlcnkyLnN2Z1wiO1xuaW1wb3J0IGFib3V0VXNQbmcgZnJvbSBcIi4uL2ltZy9hYm91dC9hYm91dC11cy5wbmdcIjtcbmltcG9ydCBvdXJIaXN0b3J5UG5nIGZyb20gXCIuLi9pbWcvYWJvdXQvb3VyLWhpc3RvcnkucG5nXCI7XG5cbmZ1bmN0aW9uIGFkZENvbnRhY3RJbmZvKGljb24sIHRleHQpIHtcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm8uY2xhc3NOYW1lID0gXCJjb250YWN0LWluZm9cIjtcblxuICBjb25zdCBpbmZvSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBpbmZvSWNvbi5zcmMgPSBpY29uO1xuXG4gIGNvbnN0IGluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm9UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcblxuICBpbmZvLmFwcGVuZENoaWxkKGluZm9JY29uKTtcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvVGV4dCk7XG5cbiAgcmV0dXJuIGluZm87XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImNvbnRhY3QtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgdGl0bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVzLmNsYXNzTmFtZSA9IFwic2VjdGlvbi10aXRsZXMgY29udGFjdC10aXRsZVwiO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIldoZXJlIHlvdSBjYW4gZmluZCB1c1wiO1xuXG4gIHRpdGxlcy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHRpdGxlcy5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQuY2xhc3NMaXN0ID0gXCJjb250YWN0LWdyaWRcIjtcblxuICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRhY3QtaW5mby1jb250YWluZXJcIjtcblxuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGFkZENvbnRhY3RJbmZvKFxuICAgICAgY29udGFjdDFTdmcsXG4gICAgICBcIk1ldHJvY2VudHJvLCBDYWxsZSBMb3MgU2lzaW1pbGVzLCBTYW4gU2FsdmFkb3IsIEVsIFNhbHZhZG9yLlwiXG4gICAgKVxuICApO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZENvbnRhY3RJbmZvKGNvbnRhY3QyU3ZnLCBcIis1MDMgMjIyMi0yMjIyXCIpKTtcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRDb250YWN0SW5mbyhjb250YWN0M1N2ZywgXCI2OjAwIGFtIC0gMTA6MDAgcG1cIikpO1xuXG4gIGNvbnN0IGRlbGl2ZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVsaXZlcnkuY2xhc3NMaXN0ID0gXCJkZWxpdmVyeS1jb250YWluZXJcIjtcblxuICBjb25zdCBkZWxpdmVyeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVsaXZlcnlUZXh0LnRleHRDb250ZW50ID0gXCJBbHNvIGF2YWlsYWJsZSBvbjpcIjtcblxuICBjb25zdCBkZWxpdmVyeUljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVsaXZlcnlJY29ucy5jbGFzc0xpc3QgPSBcImRlbGl2ZXJ5LWljb25zXCI7XG5cbiAgY29uc3QgZGVsaXZlcnlJY29uMSA9IG5ldyBJbWFnZSgpO1xuICBkZWxpdmVyeUljb24xLnNyYyA9IGRlbGl2ZXJ5MVN2ZztcbiAgY29uc3QgZGVsaXZlcnlJY29uMiA9IG5ldyBJbWFnZSgpO1xuICBkZWxpdmVyeUljb24yLnNyYyA9IGRlbGl2ZXJ5MlN2ZztcblxuICBkZWxpdmVyeUljb25zLmFwcGVuZENoaWxkKGRlbGl2ZXJ5SWNvbjEpO1xuICBkZWxpdmVyeUljb25zLmFwcGVuZENoaWxkKGRlbGl2ZXJ5SWNvbjIpO1xuXG4gIGRlbGl2ZXJ5LmFwcGVuZENoaWxkKGRlbGl2ZXJ5VGV4dCk7XG4gIGRlbGl2ZXJ5LmFwcGVuZENoaWxkKGRlbGl2ZXJ5SWNvbnMpO1xuXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1hcC5jbGFzc0xpc3QgPSBcImNvbnRhY3QtbWFwXCI7XG4gIG1hcC5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzODc2LjIwMTE5MDA0ODY3NTUhMmQtODkuMjE0MjE1NDI0MDgyMDYhM2QxMy43MDYyNjEzODY2ODA5MDkhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDhmNjMzMTJjZmZkYzBlMjMlM0EweGZkMjA4YjNhODdjZmI0ZDkhMnNNZXRyb2NlbnRybyUyMFNhbiUyMFNhbHZhZG9yITVlMCEzbTIhMXNlbiEyc3N2ITR2MTcwMTgyMzM0MjU1NyE1bTIhMXNlbiEyc3N2XCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzMDBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPmA7XG5cbiAgZ3JpZC5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcbiAgZ3JpZC5hcHBlbmRDaGlsZChkZWxpdmVyeSk7XG4gIGdyaWQuYXBwZW5kQ2hpbGQobWFwKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVzKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvcml6b250YWxEaXZpc29yKCkge1xuICBjb25zdCBkaXZpc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2aXNvci5jbGFzc05hbWUgPSBcImhvcml6b250YWwtZGl2aXNvclwiO1xuXG4gIHJldHVybiBkaXZpc29yO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPdXJIaXN0b3J5KCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJvdXItaGlzdG9yeS1jb250YWluZXJcIjtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGV4dC5jbGFzc05hbWUgPSBcIm91ci1oaXN0b3J5LXRleHRcIjtcblxuICBjb25zdCB0aXRsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZXMuY2xhc3NOYW1lID0gXCJzZWN0aW9uLXRpdGxlc1wiO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIEhpc3RvcnlcIjtcbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gXCJIb3cgRXZlcnl0aGluZyBTdGFydGVkXCI7XG5cbiAgdGl0bGVzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGl0bGVzLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci4gRGlhbSBkaWFtIG9ybmFyZSBudW5jIHNjZWxlcmlzcXVlIGFtZXQuIEVnZXQgbnVsbGEgcGVsbGVudGVzcXVlIHZpdmFtdXMgdXQgYS4gRmVybWVudHVtIGN1cnN1cyBwcmFlc2VudCB0ZW1wdXMgY29uZGltZW50dW0gdWxsYW1jb3JwZXIgcmlzdXMgbnVsbGEgdnVscHV0YXRlLiBDb252YWxsaXMgZHVpIHRpbmNpZHVudCBtYXR0aXMgZmF1Y2lidXMgcHVydXMgZWdlc3RhcyBldSBkaWFtIGVnZXQuXCI7XG5cbiAgdGV4dC5hcHBlbmRDaGlsZCh0aXRsZXMpO1xuICB0ZXh0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBvdXJIaXN0b3J5UG5nO1xuICBpbWFnZS5jbGFzc0xpc3QgPSBcIm91ci1oaXN0b3J5LWltYWdlXCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFib3V0VXMoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImFib3V0LXVzLWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZXh0LmNsYXNzTmFtZSA9IFwiYWJvdXQtdGV4dFwiO1xuXG4gIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlcy5jbGFzc05hbWUgPSBcInNlY3Rpb24tdGl0bGVzXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIktub3cgT3VyIFBhc3Npb25zXCI7XG5cbiAgdGl0bGVzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGl0bGVzLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci4gRGlhbSBkaWFtIG9ybmFyZSBudW5jIHNjZWxlcmlzcXVlIGFtZXQuIEVnZXQgbnVsbGEgcGVsbGVudGVzcXVlIHZpdmFtdXMgdXQgYS4gRmVybWVudHVtIGN1cnN1cyBwcmFlc2VudCB0ZW1wdXMgY29uZGltZW50dW0gdWxsYW1jb3JwZXIgcmlzdXMgbnVsbGEgdnVscHV0YXRlLiBDb252YWxsaXMgZHVpIHRpbmNpZHVudCBtYXR0aXMgZmF1Y2lidXMgcHVydXMgZWdlc3RhcyBldSBkaWFtIGVnZXQuXCI7XG5cbiAgdGV4dC5hcHBlbmRDaGlsZCh0aXRsZXMpO1xuICB0ZXh0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBhYm91dFVzUG5nO1xuICBpbWFnZS5jbGFzc05hbWUgPSBcImFib3V0LXVzLWltYWdlXCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFib3V0KCkge1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgYWJvdXQuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRVcygpKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoY3JlYXRlT3VySGlzdG9yeSgpKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9yaXpvbnRhbERpdmlzb3IoKSk7XG4gIGFib3V0LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG5cbiAgcmV0dXJuIGFib3V0O1xufVxuIiwiaW1wb3J0IGZlYXR1cmUxU3ZnIGZyb20gXCIuLi9pbWcvaG9tZS9mZWF0dXJlMS5zdmdcIjtcbmltcG9ydCBmZWF0dXJlMlN2ZyBmcm9tIFwiLi4vaW1nL2hvbWUvZmVhdHVyZTIuc3ZnXCI7XG5pbXBvcnQgZmVhdHVyZTNTdmcgZnJvbSBcIi4uL2ltZy9ob21lL2ZlYXR1cmUzLnN2Z1wiO1xuaW1wb3J0IGFib3V0VXNTdW1tYXJ5UG5nIGZyb20gXCIuLi9pbWcvaG9tZS9hYm91dC11cy1zdW1tYXJ5LnBuZ1wiO1xuLy8gRGlzaCBpbWFnZXNcbmltcG9ydCBzb3BhRGVQb2xsb0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvc29wYS1kZS1wb2xsby5qcGdcIjtcbmltcG9ydCBsYXNhZ25hSW1nIGZyb20gXCIuLi9pbWcvbWVudS9sYXNhZ25hLmpwZ1wiO1xuaW1wb3J0IGhvcmNoYXRhIGZyb20gXCIuLi9pbWcvbWVudS9ob3JjaGF0YS5qcGdcIjtcbmltcG9ydCBsb25qYUVtcGFuaXphZGFJbWcgZnJvbSBcIi4uL2ltZy9tZW51L2xvbmphLWVtcGFuaXphZGEuanBnXCI7XG5pbXBvcnQgaHVldm9zUmFuY2hlcm9zSW1nIGZyb20gXCIuLi9pbWcvbWVudS9odWV2b3MtcmFuY2hlcm9zLmpwZ1wiO1xuaW1wb3J0IHB1cHVzYXNJbWcgZnJvbSBcIi4uL2ltZy9tZW51L3B1cHVzYXMuanBnXCI7XG5pbXBvcnQgY2hvY29sYXRlSW1nIGZyb20gXCIuLi9pbWcvbWVudS9jaG9jb2xhdGUuanBnXCI7XG5pbXBvcnQgcGVzY2Fkb0FsQWppbGxvSW1nIGZyb20gXCIuLi9pbWcvbWVudS9wZXNjYWRvLWFsLWFqaWxsby5qcGdcIjtcbmltcG9ydCBjYXJuZUFMYVBsYW5jaGFJbWcgZnJvbSBcIi4uL2ltZy9tZW51L2Nhcm5lLWEtbGEtcGxhbmNoYS5qcGdcIjtcbi8vIEV4dGVybmFsIGZ1bmN0aW9uc1xuaW1wb3J0IHsgY2hhbmdlQ29udGVudCB9IGZyb20gXCIuLi9zZWN0aW9ucy9jb250ZW50XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlcm8oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImhlcm8tY29udGFpbmVyXCI7XG5cbiAgY29uc3QgdGl0bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVzLmNsYXNzTmFtZSA9IFwiaGVyby10ZXh0XCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIFwiO1xuICBjb25zdCByZXN0YXVyYW50U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICByZXN0YXVyYW50U3Bhbi5jbGFzc05hbWUgPSBcImhlcm8tcmVzdGF1cmFudFwiO1xuICByZXN0YXVyYW50U3Bhbi50ZXh0Q29udGVudCA9IFwiQkVMw4lOJ1MgUkVTVEFVUkFOVFwiO1xuICB0aXRsZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50U3Bhbik7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gXCJFbmpveSB0aGUgYmVzdCBvZiBcIjtcbiAgY29uc3QgY291bnRyeVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY291bnRyeVNwYW4uY2xhc3NOYW1lID0gXCJoZXJvLWNvdW50cnlcIjtcbiAgY291bnRyeVNwYW4udGV4dENvbnRlbnQgPSBcIkVsIFNhbHZhZG9yXCI7XG5cbiAgc3VidGl0bGUuYXBwZW5kQ2hpbGQoY291bnRyeVNwYW4pO1xuXG4gIHRpdGxlcy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHRpdGxlcy5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJWSUVXIE1FTlVcIjtcbiAgYnV0dG9uLmRhdGFzZXQudGFyZ2V0ID0gXCJtZW51XCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlcyk7XG4gIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBmdW5jdGlvbiB0byBhZGQgZmVhdHVyZXMgc2VjdGlvblxuZnVuY3Rpb24gYWRkRmVhdHVyZShpY29uUGF0aCwgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IGZlYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmZWF0dXJlLmNsYXNzTmFtZSA9IFwiZmVhdHVyZVwiO1xuXG4gIGNvbnN0IGZlYXR1cmVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBmZWF0dXJlSW1hZ2Uuc3JjID0gaWNvblBhdGg7XG5cbiAgY29uc3QgZmVhdHVyZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBmZWF0dXJlVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICBjb25zdCBmZWF0dXJlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZmVhdHVyZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgZmVhdHVyZS5hcHBlbmRDaGlsZChmZWF0dXJlSW1hZ2UpO1xuICBmZWF0dXJlLmFwcGVuZENoaWxkKGZlYXR1cmVUaXRsZSk7XG4gIGZlYXR1cmUuYXBwZW5kQ2hpbGQoZmVhdHVyZURlc2NyaXB0aW9uKTtcblxuICByZXR1cm4gZmVhdHVyZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmVhdHVyZXMoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZlYXR1cmVzLWNvbnRhaW5lclwiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBhZGRGZWF0dXJlKFxuICAgICAgZmVhdHVyZTFTdmcsXG4gICAgICBcIk9wZW4gZXZlcnlkYXlcIixcbiAgICAgIFwiRnJvbSA2OjAwIGFtIHRvIDEwOjAwIHBtIHRoZSA3IGRheXMgb2YgdGhlIHdlZWtcIlxuICAgIClcbiAgKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGFkZEZlYXR1cmUoXG4gICAgICBmZWF0dXJlMlN2ZyxcbiAgICAgIFwiRWFzeS10by11c2UgcGxhdGZvcm1cIixcbiAgICAgIFwiV2ViIHBhZ2UgY3JlYXRlZCB1c2luZyBXZWJwYWNrIHRlY2hub2xvZ2llc1wiXG4gICAgKVxuICApO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRmVhdHVyZShcbiAgICAgIGZlYXR1cmUzU3ZnLFxuICAgICAgXCJHcmVhdCBhbWJpZW5jZVwiLFxuICAgICAgXCJUaGUgcGVyZmVjdCBwbGFjZSB0byBlbmpveSB3aXRoIHlvdXIgZnJpZW5kcyBhbmQgZmFtaWx5XCJcbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYWRkRGlzaFN1bW1hcnlDb250ZW50KGltYWdlKSB7XG4gIGNvbnN0IGdhbGxlcnlFbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gIGdhbGxlcnlFbGVtZW50LnNyYyA9IGltYWdlO1xuICBnYWxsZXJ5RWxlbWVudC5jbGFzc0xpc3QgPSBcImdhbGxlcnktZWxlbWVudFwiO1xuXG4gIHJldHVybiBnYWxsZXJ5RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzaFN1bW1hcnkoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImRpc2gtc3VtbWFyeS1jb250YWluZXJcIjtcblxuICBjb25zdCB0aXRsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZXMuY2xhc3NOYW1lID0gXCJzZWN0aW9uLXRpdGxlc1wiO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIG1lbnVcIjtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIkRpc2NvdmVyIHlvdXIgbmV3IGZhdm9yaXRlIGRpc2hcIjtcblxuICB0aXRsZXMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0aXRsZXMuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYWxsZXJ5LmNsYXNzTmFtZSA9IFwiZGlzaC1nYWxsZXJ5LWNvbnRhaW5lclwiO1xuXG4gIGdhbGxlcnkuYXBwZW5kQ2hpbGQoYWRkRGlzaFN1bW1hcnlDb250ZW50KHNvcGFEZVBvbGxvSW1nKSk7XG4gIGdhbGxlcnkuYXBwZW5kQ2hpbGQoYWRkRGlzaFN1bW1hcnlDb250ZW50KGxhc2FnbmFJbWcpKTtcbiAgZ2FsbGVyeS5hcHBlbmRDaGlsZChhZGREaXNoU3VtbWFyeUNvbnRlbnQoaG9yY2hhdGEpKTtcbiAgZ2FsbGVyeS5hcHBlbmRDaGlsZChhZGREaXNoU3VtbWFyeUNvbnRlbnQobG9uamFFbXBhbml6YWRhSW1nKSk7XG4gIGdhbGxlcnkuYXBwZW5kQ2hpbGQoYWRkRGlzaFN1bW1hcnlDb250ZW50KGh1ZXZvc1JhbmNoZXJvc0ltZykpO1xuICBnYWxsZXJ5LmFwcGVuZENoaWxkKGFkZERpc2hTdW1tYXJ5Q29udGVudChwdXB1c2FzSW1nKSk7XG4gIGdhbGxlcnkuYXBwZW5kQ2hpbGQoYWRkRGlzaFN1bW1hcnlDb250ZW50KGNob2NvbGF0ZUltZykpO1xuICBnYWxsZXJ5LmFwcGVuZENoaWxkKGFkZERpc2hTdW1tYXJ5Q29udGVudChwZXNjYWRvQWxBamlsbG9JbWcpKTtcbiAgZ2FsbGVyeS5hcHBlbmRDaGlsZChhZGREaXNoU3VtbWFyeUNvbnRlbnQoY2FybmVBTGFQbGFuY2hhSW1nKSk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJWSUVXIE1PUkVcIjtcbiAgYnV0dG9uLmRhdGFzZXQudGFyZ2V0ID0gXCJtZW51XCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlcyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnYWxsZXJ5KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWJvdXRTdW1tYXJ5KCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJhYm91dC1zdW1tYXJ5LWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IGluZm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb1NlY3Rpb24uY2xhc3NMaXN0ID0gXCJpbmZvXCI7XG5cbiAgY29uc3QgdGl0bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVzLmNsYXNzTGlzdCA9IFwic2VjdGlvbi10aXRsZXNcIjtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIktub3cgb3VyIHBhc3Npb25zXCI7XG5cbiAgdGl0bGVzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGl0bGVzLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWZXN0aWJ1bHVtIHZlc3RpYnVsdW0sIHZlbGl0IGV0IHNjZWxlcmlzcXVlIHZlc3RpYnVsdW0sIG5pYmggdXJuYSB1bHRyaWNpZXMgbmlzbCwgaWQgdGluY2lkdW50IHF1YW0gbmVxdWUgbmVjIG1hc3NhLlwiO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTEVBUk4gTU9SRVwiO1xuICBidXR0b24uZGF0YXNldC50YXJnZXQgPSBcImFib3V0XCI7XG5cbiAgaW5mb1NlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVzKTtcbiAgaW5mb1NlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBpbmZvU2VjdGlvbi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IGFib3V0VXNTdW1tYXJ5UG5nO1xuICBpbWFnZS5jbGFzc0xpc3QgPSBcImFib3V0LXN1bW1hcnktaW1hZ2VcIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb1NlY3Rpb24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld3NsZXR0ZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QgPSBcIm5ld3NsZXR0ZXItY29udGFpbmVyXCI7XG5cbiAgY29uc3QgdGl0bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVzLmNsYXNzTGlzdCA9IFwic2VjdGlvbi10aXRsZXNcIjtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJOZXdzbGV0dGVyXCI7XG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiTmV2ZXIgbWlzcyB1cCBvdXIgbGF0ZXN0IHVwZGF0ZXNcIjtcblxuICB0aXRsZXMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0aXRsZXMuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIkV2ZXJ5IFN1bmRheSByZWNlaXZlIG5vdGljZXMgb2YgbmV3IGRpc2hlcywgcHJvbW90aW9ucyBhbmQgbGl2ZSBldmVudHMhXCI7XG5cbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QgPSBcImlucHV0LWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGV4dElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgdGV4dElucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB5b3VyIGVtYWlsXCI7XG4gIGNvbnN0IGJ1dHRvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uSW5wdXQudGV4dENvbnRlbnQgPSBcIlNJR04gSU5cIjtcblxuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25JbnB1dCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlcyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuaWQgPSBcImhvbWVcIjtcblxuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZUhlcm8oKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlRmVhdHVyZXMoKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlRGlzaFN1bW1hcnkoKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRTdW1tYXJ5KCkpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZU5ld3NsZXR0ZXIoKSk7XG5cbiAgYWRkQnV0dG9uRXZlbnRzKGhvbWUpO1xuXG4gIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBhZGRCdXR0b25FdmVudHMoaG9tZSkge1xuICBjb25zdCBidXR0b25zID0gaG9tZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uW2RhdGEtdGFyZ2V0XVwiKTtcblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+XG4gICAgICBjaGFuZ2VDb250ZW50KGJ1dHRvbi5kYXRhc2V0LnRhcmdldClcbiAgICApO1xuICB9KTtcbn1cbiIsImltcG9ydCBodWV2b3NDb25Gcmlqb2xlc0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvaHVldm9zLWNvbi1mcmlqb2xlcy5qcGdcIjtcbmltcG9ydCBwbGF0YW5vc0ZyaXRvc0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvcGxhdGFub3MtZnJpdG9zLmpwZ1wiO1xuaW1wb3J0IGh1ZXZvc1JhbmNoZXJvc0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvaHVldm9zLXJhbmNoZXJvcy5qcGdcIjtcbmltcG9ydCBjYXNhbWllbnRvSW1nIGZyb20gXCIuLi9pbWcvbWVudS9jYXNhbWllbnRvLmpwZ1wiO1xuaW1wb3J0IHNvcGFEZVBvbGxvSW1nIGZyb20gXCIuLi9pbWcvbWVudS9zb3BhLWRlLXBvbGxvLmpwZ1wiO1xuaW1wb3J0IGNhcm5lQUxhUGxhbmNoYUltZyBmcm9tIFwiLi4vaW1nL21lbnUvY2FybmUtYS1sYS1wbGFuY2hhLmpwZ1wiO1xuaW1wb3J0IGxhc2FnbmFJbWcgZnJvbSBcIi4uL2ltZy9tZW51L2xhc2FnbmEuanBnXCI7XG5pbXBvcnQgbG9uamFFbXBhbml6YWRhSW1nIGZyb20gXCIuLi9pbWcvbWVudS9sb25qYS1lbXBhbml6YWRhLmpwZ1wiO1xuaW1wb3J0IGhhbWJ1cmd1ZXNhSW1nIGZyb20gXCIuLi9pbWcvbWVudS9oYW1idXJndWVzYS5qcGdcIjtcbmltcG9ydCBwZXNjYWRvQWxBamlsbG9JbWcgZnJvbSBcIi4uL2ltZy9tZW51L3Blc2NhZG8tYWwtYWppbGxvLmpwZ1wiO1xuaW1wb3J0IHB1cHVzYXNJbWcgZnJvbSBcIi4uL2ltZy9tZW51L3B1cHVzYXMuanBnXCI7XG5pbXBvcnQgcmlndWFzSW1nIGZyb20gXCIuLi9pbWcvbWVudS9yaWd1YXMuanBnXCI7XG5pbXBvcnQgdGFtYWxlc0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvdGFtYWxlcy5qcGdcIjtcbmltcG9ydCBudWVnYWRvc0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvbnVlZ2Fkb3MuanBnXCI7XG5pbXBvcnQgcGVwZXJlY2hhc0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvcGVwZXJlY2hhcy5qcGdcIjtcbmltcG9ydCBzZW1pdGFJbWcgZnJvbSBcIi4uL2ltZy9tZW51L3NlbWl0YS5qcGdcIjtcbmltcG9ydCBzYWxwb3Jlc0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvc2FscG9yZXMuanBnXCI7XG5pbXBvcnQgdmllaml0YXNJbWcgZnJvbSBcIi4uL2ltZy9tZW51L3ZpZWppdGFzLmpwZ1wiO1xuaW1wb3J0IGNhZmVJbWcgZnJvbSBcIi4uL2ltZy9tZW51L2NhZmUuanBnXCI7XG5pbXBvcnQgY2hvY29sYXRlSW1nIGZyb20gXCIuLi9pbWcvbWVudS9jaG9jb2xhdGUuanBnXCI7XG5pbXBvcnQgaG9yY2hhdGFJbWcgZnJvbSBcIi4uL2ltZy9tZW51L2hvcmNoYXRhLmpwZ1wiO1xuaW1wb3J0IHNvZGFJbWcgZnJvbSBcIi4uL2ltZy9tZW51L3NvZGEuanBnXCI7XG5cbmZ1bmN0aW9uIGFkZERpc2hDYXJkKHRpdGxlLCBjYXRlZ29yeSwgcHJpY2UsIGltYWdlKSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTmFtZSA9IFwiZGlzaC1jYXJkXCI7XG4gIGNhcmQuZGF0YXNldC5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuXG4gIGNvbnN0IGNhcmRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjYXJkSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gIGNhcmRJbWFnZS5jbGFzc05hbWUgPSBcImRpc2gtaW1hZ2VcIjtcblxuICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImluZm9cIjtcblxuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkVGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICBjb25zdCBjYXJkUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkUHJpY2UuY2xhc3NOYW1lID0gXCJwcmljZVwiO1xuICBjYXJkUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICBjb25zdCBhZGRDYXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQ2FydEJ1dHRvbi5jbGFzc05hbWUgPSBcImFkZC1jYXJ0XCI7XG4gIGFkZENhcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUbyBDYXJ0XCI7XG5cbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRQcmljZSk7XG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQ2FydEJ1dHRvbik7XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xuICBjYXJkLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJNZW51KG1lbnUsIGZpbHRlciA9IFwiYWxsXCIpIHtcbiAgY29uc3QgZGlzaEdyaWQgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzaC1ncmlkXCIpO1xuICBjb25zdCBkaXNoZXMgPSBkaXNoR3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRpc2gtY2FyZFwiKTtcbiAgY29uc3QgbWVudVRhYnMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS10YWJzIC50YWJcIik7XG5cbiAgZGlzaEdyaWQuZGF0YXNldC5maWx0ZXIgPSBmaWx0ZXIudG9Mb3dlckNhc2UoKTtcblxuICAvLyBGaWx0ZXIgZGlzaGVzXG4gIGRpc2hlcy5mb3JFYWNoKChkaXNoKSA9PiB7XG4gICAgZGlzaC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gICAgaWYgKFxuICAgICAgZGlzaC5kYXRhc2V0LmNhdGVnb3J5ICE9PSBkaXNoR3JpZC5kYXRhc2V0LmZpbHRlciAmJlxuICAgICAgZGlzaEdyaWQuZGF0YXNldC5maWx0ZXIgIT09IFwiYWxsXCJcbiAgICApXG4gICAgICBkaXNoLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gIC8vIFNlbGVjdCB0YWJcbiAgbWVudVRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcblxuICAgIGlmICh0YWIuZGF0YXNldC50YWJDYXRlZ29yeSA9PSBkaXNoR3JpZC5kYXRhc2V0LmZpbHRlcilcbiAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXNoQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJkaXNoLWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IGRpc2hHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGlzaEdyaWQuY2xhc3NOYW1lID0gXCJkaXNoLWdyaWRcIjtcblxuICAvLyBSZXBsYWNlIHRoaXMgdG8gc2VsZWN0ZWQgbWVudSB0YWJcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRGlzaENhcmQoXG4gICAgICBcIkh1ZXZvcyBjb24gZnJpam9sZXNcIixcbiAgICAgIFwiYnJlYWtmYXN0XCIsXG4gICAgICBcIiQ5Ljk5XCIsXG4gICAgICBodWV2b3NDb25Gcmlqb2xlc0ltZ1xuICAgIClcbiAgKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRGlzaENhcmQoXCJQbGF0YW5vcyBmcml0b3NcIiwgXCJicmVha2Zhc3RcIiwgXCIkNC4zMFwiLCBwbGF0YW5vc0ZyaXRvc0ltZylcbiAgKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRGlzaENhcmQoXCJIdWV2b3MgcmFuY2hlcm9zXCIsIFwiYnJlYWtmYXN0XCIsIFwiJDQuMzlcIiwgaHVldm9zUmFuY2hlcm9zSW1nKVxuICApO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIkNhc2FtaWVudG9cIiwgXCJicmVha2Zhc3RcIiwgXCIkNi41OVwiLCBjYXNhbWllbnRvSW1nKVxuICApO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIlNvcGEgZGUgcG9sbG9cIiwgXCJsdW5jaFwiLCBcIiQxMC45OVwiLCBzb3BhRGVQb2xsb0ltZylcbiAgKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRGlzaENhcmQoXCJDYXJuZSBhIGxhIHBsYW5jaGFcIiwgXCJsdW5jaFwiLCBcIiQxMi41MFwiLCBjYXJuZUFMYVBsYW5jaGFJbWcpXG4gICk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKGFkZERpc2hDYXJkKFwiTGFzYcOxYVwiLCBcImx1bmNoXCIsIFwiJDguNTBcIiwgbGFzYWduYUltZykpO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIkxvbmphIGVtcGFuaXphZGFcIiwgXCJsdW5jaFwiLCBcIiQ5Ljk5XCIsIGxvbmphRW1wYW5pemFkYUltZylcbiAgKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRGlzaENhcmQoXCJIYW1idXJndWVzYXNcIiwgXCJsdW5jaFwiLCBcIiQ5Ljk5XCIsIGhhbWJ1cmd1ZXNhSW1nKVxuICApO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIlBlc2NhZG8gYWwgYWppbGxvXCIsIFwibHVuY2hcIiwgXCIkOS45OVwiLCBwZXNjYWRvQWxBamlsbG9JbWcpXG4gICk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKGFkZERpc2hDYXJkKFwiUHVwdXNhc1wiLCBcImRpbm5lclwiLCBcIiQwLjYwXCIsIHB1cHVzYXNJbWcpKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoYWRkRGlzaENhcmQoXCJSaWd1YXNcIiwgXCJkaW5uZXJcIiwgXCIkMi45OVwiLCByaWd1YXNJbWcpKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoYWRkRGlzaENhcmQoXCJUYW1hbGVzXCIsIFwiZGlubmVyXCIsIFwiJDMuNTlcIiwgdGFtYWxlc0ltZykpO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIk51ZWdhZG9zXCIsIFwiZGVzc2VydHNcIiwgXCIkMy42NVwiLCBudWVnYWRvc0ltZylcbiAgKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRGlzaENhcmQoXCJQZXBlcmVjaGFcIiwgXCJkZXNzZXJ0c1wiLCBcIiQxLjE1XCIsIHBlcGVyZWNoYXNJbWcpXG4gICk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKGFkZERpc2hDYXJkKFwiU2VtaXRhXCIsIFwiZGVzc2VydHNcIiwgXCIkMi42N1wiLCBzZW1pdGFJbWcpKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRGlzaENhcmQoXCJTYWxwb3Jlc1wiLCBcImRlc3NlcnRzXCIsIFwiJDEuOThcIiwgc2FscG9yZXNJbWcpXG4gICk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKFxuICAgIGFkZERpc2hDYXJkKFwiVmllaml0YXNcIiwgXCJkZXNzZXJ0c1wiLCBcIiQxLjEwXCIsIHZpZWppdGFzSW1nKVxuICApO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChhZGREaXNoQ2FyZChcIkNhZsOpXCIsIFwiZHJpbmtzXCIsIFwiJDAuNzVcIiwgY2FmZUltZykpO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIkNob2NvbGF0ZVwiLCBcImRyaW5rc1wiLCBcIiQwLjgwXCIsIGNob2NvbGF0ZUltZylcbiAgKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoYWRkRGlzaENhcmQoXCJIb3JjaGF0YVwiLCBcImRyaW5rc1wiLCBcIiQxLjAwXCIsIGhvcmNoYXRhSW1nKSk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKGFkZERpc2hDYXJkKFwiU29kYVwiLCBcImRyaW5rc1wiLCBcIiQxLjI1XCIsIHNvZGFJbWcpKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzaEdyaWQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGFkZE1lbnVUYWIodGFiTGFiZWwpIHtcbiAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFiLmNsYXNzTmFtZSA9IFwidGFiXCI7XG4gIHRhYi5kYXRhc2V0LnRhYkNhdGVnb3J5ID0gdGFiTGFiZWwudG9Mb3dlckNhc2UoKTtcbiAgdGFiLnRleHRDb250ZW50ID0gdGFiTGFiZWw7XG5cbiAgcmV0dXJuIHRhYjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudVRhYnMoKSB7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJzLmNsYXNzTmFtZSA9IFwibWVudS10YWJzXCI7XG5cbiAgdGFicy5hcHBlbmRDaGlsZChhZGRNZW51VGFiKFwiQWxsXCIpKTtcbiAgdGFicy5hcHBlbmRDaGlsZChhZGRNZW51VGFiKFwiQnJlYWtmYXN0XCIpKTtcbiAgdGFicy5hcHBlbmRDaGlsZChhZGRNZW51VGFiKFwiTHVuY2hcIikpO1xuICB0YWJzLmFwcGVuZENoaWxkKGFkZE1lbnVUYWIoXCJEaW5uZXJcIikpO1xuICB0YWJzLmFwcGVuZENoaWxkKGFkZE1lbnVUYWIoXCJEZXNzZXJ0c1wiKSk7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoYWRkTWVudVRhYihcIkRyaW5rc1wiKSk7XG5cbiAgcmV0dXJuIHRhYnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmlkID0gXCJtZW51XCI7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51VGFicygpKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVEaXNoQ29udGFpbmVyKCkpO1xuXG4gIGZpbHRlck1lbnUobWVudSk7XG5cbiAgYWRkTWVudVRhYkV2ZW50cyhtZW51KTtcblxuICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gYWRkTWVudVRhYkV2ZW50cyhtZW51KSB7XG4gIGNvbnN0IG1lbnVUYWJzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtdGFicyAudGFiXCIpO1xuXG4gIGZvciAoY29uc3QgdGFiIG9mIG1lbnVUYWJzKSB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgIGZpbHRlck1lbnUobWVudSwgZS50YXJnZXQuZGF0YXNldC50YWJDYXRlZ29yeSlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgcmVuZGVySG9tZSBmcm9tIFwiLi4vcGFnZXMvaG9tZS5qc1wiO1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSBcIi4uL3BhZ2VzL21lbnUuanNcIjtcbmltcG9ydCByZW5kZXJBYm91dCBmcm9tIFwiLi4vcGFnZXMvYWJvdXQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBjaGFuZ2VDb250ZW50KFwiaG9tZVwiKTtcblxuICB0YWJzRXZlbnQoKTtcbn1cblxuZnVuY3Rpb24gdGFic0V2ZW50KCkge1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXItdGFicyAudGFiXCIpO1xuXG4gIGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PlxuICAgICAgY2hhbmdlQ29udGVudChlLnRhcmdldC5kYXRhc2V0LmNvbnRlbnRUYXJnZXQpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29udGVudChuZXdDb250ZW50KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKTtcbiAgbGV0IGNhbGxiYWNrO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBTZXQgY29udGVudCBjYWxsYmFjayBmdW5jdGlvbiBkZXBlbmRpbmcgb2YgbmV3Q29udGVudCB2YWx1ZVxuICBpZiAobmV3Q29udGVudCA9PSBcImhvbWVcIikge1xuICAgIGNhbGxiYWNrID0gcmVuZGVySG9tZTtcbiAgfSBlbHNlIGlmIChuZXdDb250ZW50ID09IFwibWVudVwiKSB7XG4gICAgY2FsbGJhY2sgPSByZW5kZXJNZW51O1xuICB9IGVsc2UgaWYgKG5ld0NvbnRlbnQgPT0gXCJhYm91dFwiKSB7XG4gICAgY2FsbGJhY2sgPSByZW5kZXJBYm91dDtcbiAgfVxuXG4gIC8vIFNldCBhY3RpdmUgdGFiIHdoZW4gaW52b2tpbmcgZnVuY3Rpb25cbiAgZm9yIChjb25zdCB0YWIgb2YgdGFicykge1xuICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgaWYgKHRhYi5kYXRhc2V0LmNvbnRlbnRUYXJnZXQgPT0gbmV3Q29udGVudCkgdGFiLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FsbGJhY2soKSk7XG5cbiAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xufVxuIiwiZnVuY3Rpb24gY3JlYXRlRm9vdGVySW5mbygpIHtcbiAgY29uc3QgZm9vdGVySW5mb0NvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJJbmZvQ29udGFpbnRlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWluZm8tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHBvbGljaWVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcG9saWNpZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1pbmZvXCIpO1xuICBjb25zdCBwb2xpY2llc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBwb2xpY2llc1RpdGxlLnRleHRDb250ZW50ID0gXCJQT0xJQ0lFU1wiO1xuXG4gIGNvbnN0IHBvbGljaWVzVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgcG9saWNpZXNUZXh0MS50ZXh0Q29udGVudCA9IFwiVGVybXMgT2YgVXNlXCI7XG4gIHBvbGljaWVzVGV4dDEuaHJlZiA9IFwiI1wiO1xuICBjb25zdCBwb2xpY2llc1RleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHBvbGljaWVzVGV4dDIudGV4dENvbnRlbnQgPSBcIlByaXZhY3kgUG9saWN5XCI7XG4gIHBvbGljaWVzVGV4dDIuaHJlZiA9IFwiI1wiO1xuXG4gIHBvbGljaWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvbGljaWVzVGl0bGUpO1xuICBwb2xpY2llc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwb2xpY2llc1RleHQxKTtcbiAgcG9saWNpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocG9saWNpZXNUZXh0Mik7XG5cbiAgY29uc3Qgc29jaWFsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNvY2lhbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1pbmZvXCIpO1xuICBjb25zdCBzb2NpYWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIHNvY2lhbHNUaXRsZS50ZXh0Q29udGVudCA9IFwiU09DSUFMU1wiO1xuXG4gIGNvbnN0IHNvY2lhbHNUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBzb2NpYWxzVGV4dDEudGV4dENvbnRlbnQgPSBcIkZhY2Vib29rXCI7XG4gIHNvY2lhbHNUZXh0MS5ocmVmID0gXCIjXCI7XG4gIGNvbnN0IHNvY2lhbHNUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBzb2NpYWxzVGV4dDIudGV4dENvbnRlbnQgPSBcIkluc3RhZ3JhbVwiO1xuICBzb2NpYWxzVGV4dDIuaHJlZiA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lcmlja2Jnb21lei9cIjtcbiAgc29jaWFsc1RleHQyLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgY29uc3Qgc29jaWFsc1RleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHNvY2lhbHNUZXh0My50ZXh0Q29udGVudCA9IFwiWCAvIFR3aXR0ZXJcIjtcbiAgc29jaWFsc1RleHQzLmhyZWYgPSBcImh0dHBzOi8vdHdpdHRlci5jb20vRXJpY2tCR29tZXpcIjtcbiAgc29jaWFsc1RleHQzLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgY29uc3Qgc29jaWFsc1RleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHNvY2lhbHNUZXh0NC50ZXh0Q29udGVudCA9IFwiTGlua2VkSW5cIjtcbiAgc29jaWFsc1RleHQ0LmhyZWYgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lcmlja2Jnb21lei9cIjtcbiAgc29jaWFsc1RleHQ0LnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgc29jaWFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzb2NpYWxzVGl0bGUpO1xuICBzb2NpYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvY2lhbHNUZXh0MSk7XG4gIHNvY2lhbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc29jaWFsc1RleHQyKTtcbiAgc29jaWFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzb2NpYWxzVGV4dDMpO1xuICBzb2NpYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvY2lhbHNUZXh0NCk7XG5cbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1pbmZvXCIpO1xuICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xuXG4gIGNvbnN0IGNvbnRhY3RUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0VGV4dDEudGV4dENvbnRlbnQgPVxuICAgIFwiTWV0cm9jZW50cm8sIENhbGxlIExvcyBTaXNpbWlsZXMsIFNhbiBTYWx2YWRvciwgRWwgU2FsdmFkb3JcIjtcbiAgY29uc3QgY29udGFjdFRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRhY3RUZXh0Mi50ZXh0Q29udGVudCA9IFwiKzUwMyAyMjIyLTIyMjJcIjtcblxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQxKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VGV4dDIpO1xuXG4gIGZvb3RlckluZm9Db250YWludGVyLmFwcGVuZENoaWxkKHBvbGljaWVzQ29udGFpbmVyKTtcbiAgZm9vdGVySW5mb0NvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoc29jaWFsc0NvbnRhaW5lcik7XG4gIGZvb3RlckluZm9Db250YWludGVyLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuXG4gIHJldHVybiBmb290ZXJJbmZvQ29udGFpbnRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyTG9nbygpIHtcbiAgY29uc3QgZm9vdGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlckxvZ28uY2xhc3NOYW1lID0gXCJsb2dvIGZvb3Rlci1sb2dvXCI7XG4gIGZvb3RlckxvZ28udGV4dENvbnRlbnQgPSBcIkJlbMOpblwiO1xuXG4gIHJldHVybiBmb290ZXJMb2dvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXJVcHBlcigpIHtcbiAgY29uc3QgZm9vdGVyVXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJVcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLXVwcGVyXCIpO1xuXG4gIGZvb3RlclVwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlckxvZ28oKSk7XG4gIGZvb3RlclVwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlckluZm8oKSk7XG5cbiAgcmV0dXJuIGZvb3RlclVwcGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXJMb3dlcigpIHtcbiAgY29uc3QgZm9vdGVyTG93ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJMb3dlci5jbGFzc05hbWUgPSBcImZvb3Rlci1sb3dlclwiO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIzLiBBbGwgUmlnaHRzIFJlc2VydmVkXCI7XG5cbiAgY29uc3QgYXV0aG9yRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGF1dGhvckZvb3Rlci50ZXh0Q29udGVudCA9IFwiTWFkZSBieSBcIjtcbiAgY29uc3QgYXV0aG9yTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhdXRob3JMaW5rLnRleHRDb250ZW50ID0gXCJFcmljayBCLiBHw7NtZXpcIjtcbiAgYXV0aG9yTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vRXJpY2tCR29tZXpcIjtcbiAgYXV0aG9yTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gIGF1dGhvckZvb3Rlci5hcHBlbmRDaGlsZChhdXRob3JMaW5rKTtcblxuICBmb290ZXJMb3dlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICBmb290ZXJMb3dlci5hcHBlbmRDaGlsZChhdXRob3JGb290ZXIpO1xuXG4gIHJldHVybiBmb290ZXJMb3dlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXJVcHBlcigpKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3Rlckxvd2VyKCkpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cbiIsImZ1bmN0aW9uIGNyZWF0ZVVzZXJBbmRDYXJ0KCkge1xuICBjb25zdCB1c2VyQW5kQ2FydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVzZXJBbmRDYXJ0LmNsYXNzTmFtZSA9IFwidXNlci1hbmQtY2FydFwiO1xuICBjb25zdCB1c2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICB1c2VySWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCA0MCA0MFwiIGZpbGw9XCJub25lXCI+XG48cGF0aCBkPVwiTTIwIDE4LjNDMjMuODQ1MyAxOC4zIDI2Ljk2MjUgMTUuMTgyOCAyNi45NjI1IDExLjMzNzVDMjYuOTYyNSA3LjQ5MjIyIDIzLjg0NTMgNC4zNzUgMjAgNC4zNzVDMTYuMTU0NyA0LjM3NSAxMy4wMzc1IDcuNDkyMjIgMTMuMDM3NSAxMS4zMzc1QzEzLjAzNzUgMTUuMTgyOCAxNi4xNTQ3IDE4LjMgMjAgMTguM1pcIiBzdHJva2U9XCIjMjUyNzJDXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbjxwYXRoIGQ9XCJNMzQuMDkzNyAzNS41MzEyQzM0LjA5MzcgMzEuNzkzNCAzMi42MDg5IDI4LjIwODYgMjkuOTY1OCAyNS41NjU1QzI3LjMyMjcgMjIuOTIyNCAyMy43Mzc5IDIxLjQzNzUgMjAgMjEuNDM3NUMxNi4yNjIxIDIxLjQzNzUgMTIuNjc3MyAyMi45MjI0IDEwLjAzNDIgMjUuNTY1NUM3LjM5MTEyIDI4LjIwODYgNS45MDYyNSAzMS43OTM0IDUuOTA2MjUgMzUuNTMxMkgzNC4wOTM3WlwiIHN0cm9rZT1cIiMyNTI3MkNcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxuPC9zdmc+YDtcbiAgY29uc3QgY2FydEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgY2FydEljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgNDAgNDBcIiBmaWxsPVwibm9uZVwiPlxuPHBhdGggZD1cIk0yLjg4NzUxIDYuMjI1MDFIOS41ODc1MUwxMy41Njg4IDIzLjY1NjNIMzEuMDU2M0wzNS4xMDYzIDEwLjIxODhMMTAuNDE4OCA5Ljg2ODc2XCIgc3Ryb2tlPVwiIzI1MjcyQ1wiIHN0cm9rZS13aWR0aD1cIjJcIi8+XG48cGF0aCBkPVwiTTMyLjMzMTMgMjcuNzE4OEgxMy41NDM4QzEzLjI3MjkgMjcuNzI0NyAxMy4wMDM3IDI3LjY3NTggMTIuNzUyMyAyNy41NzQ5QzEyLjUwMDggMjcuNDc0IDEyLjI3MjUgMjcuMzIzMiAxMi4wODA5IDI3LjEzMTZDMTEuODg5MyAyNi45NDAxIDExLjczODYgMjYuNzExNyAxMS42Mzc3IDI2LjQ2MDNDMTEuNTM2NyAyNi4yMDg4IDExLjQ4NzggMjUuOTM5NiAxMS40OTM4IDI1LjY2ODhDMTEuNDkzOCAyMy42NTYzIDEzLjU2ODggMjMuNjU2MiAxMy41Njg4IDIzLjY1NjJcIiBzdHJva2U9XCIjMjUyNzJDXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbjxwYXRoIGQ9XCJNMTUuNTkzOCAzNC40NjI1QzE2LjgxMjIgMzQuNDYyNSAxNy44IDMzLjQ3NDcgMTcuOCAzMi4yNTYyQzE3LjggMzEuMDM3OCAxNi44MTIyIDMwLjA1IDE1LjU5MzggMzAuMDVDMTQuMzc1MyAzMC4wNSAxMy4zODc1IDMxLjAzNzggMTMuMzg3NSAzMi4yNTYyQzEzLjM4NzUgMzMuNDc0NyAxNC4zNzUzIDM0LjQ2MjUgMTUuNTkzOCAzNC40NjI1WlwiIHN0cm9rZT1cIiMyNTI3MkNcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxuPHBhdGggZD1cIk0yOC43NzUgMzQuNDYyNUMyOS45OTM1IDM0LjQ2MjUgMzAuOTgxMiAzMy40NzQ3IDMwLjk4MTIgMzIuMjU2MkMzMC45ODEyIDMxLjAzNzggMjkuOTkzNSAzMC4wNSAyOC43NzUgMzAuMDVDMjcuNTU2NSAzMC4wNSAyNi41Njg3IDMxLjAzNzggMjYuNTY4NyAzMi4yNTYyQzI2LjU2ODcgMzMuNDc0NyAyNy41NTY1IDM0LjQ2MjUgMjguNzc1IDM0LjQ2MjVaXCIgc3Ryb2tlPVwiIzI1MjcyQ1wiIHN0cm9rZS13aWR0aD1cIjJcIi8+XG48L3N2Zz5gO1xuICBjb25zdCBjYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FydC50ZXh0Q29udGVudCA9IFwiJDAuMDBcIjtcblxuICB1c2VyQW5kQ2FydC5hcHBlbmRDaGlsZCh1c2VySWNvbik7XG4gIHVzZXJBbmRDYXJ0LmFwcGVuZENoaWxkKGNhcnRJY29uKTtcbiAgdXNlckFuZENhcnQuYXBwZW5kQ2hpbGQoY2FydCk7XG5cbiAgcmV0dXJuIHVzZXJBbmRDYXJ0O1xufVxuXG5mdW5jdGlvbiBhZGRIZWFkZXJUYWIobGFiZWwpIHtcbiAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFiLmNsYXNzTmFtZSA9IFwidGFiXCI7XG4gIHRhYi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICB0YWIuZGF0YXNldC5jb250ZW50VGFyZ2V0ID0gbGFiZWwudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4gdGFiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJUYWJzKCkge1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFicy5jbGFzc05hbWUgPSBcImhlYWRlci10YWJzXCI7XG5cbiAgdGFicy5hcHBlbmRDaGlsZChhZGRIZWFkZXJUYWIoXCJIT01FXCIpKTtcbiAgdGFicy5hcHBlbmRDaGlsZChhZGRIZWFkZXJUYWIoXCJNRU5VXCIpKTtcbiAgdGFicy5hcHBlbmRDaGlsZChhZGRIZWFkZXJUYWIoXCJBQk9VVFwiKSk7XG5cbiAgcmV0dXJuIHRhYnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ28oKSB7XG4gIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJMb2dvLmNsYXNzTmFtZSA9IFwibG9nb1wiO1xuICBoZWFkZXJMb2dvLnRleHRDb250ZW50ID0gXCJCZWzDqW5cIjtcbiAgcmV0dXJuIGhlYWRlckxvZ287XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTG9nbygpKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlclRhYnMoKSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVVc2VyQW5kQ2FydCgpKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHJlbmRlckhlYWRlciBmcm9tIFwiLi9zZWN0aW9ucy9oZWFkZXIuanNcIjtcbmltcG9ydCByZW5kZXJGb290ZXIgZnJvbSBcIi4vc2VjdGlvbnMvZm9vdGVyLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJDb250ZW50IH0gZnJvbSBcIi4vc2VjdGlvbnMvY29udGVudC5qc1wiO1xuXG5yZW5kZXJIZWFkZXIoKTtcbnJlbmRlckNvbnRlbnQoKTtcbnJlbmRlckZvb3RlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9