/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sections/content.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zZWN0aW9ucy9jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRhY3QxU3ZnIGZyb20gXCIuLi9pbWcvYWJvdXQvY29udGFjdDEuc3ZnXCI7XG5pbXBvcnQgY29udGFjdDJTdmcgZnJvbSBcIi4uL2ltZy9hYm91dC9jb250YWN0Mi5zdmdcIjtcbmltcG9ydCBjb250YWN0M1N2ZyBmcm9tIFwiLi4vaW1nL2Fib3V0L2NvbnRhY3QzLnN2Z1wiO1xuaW1wb3J0IGRlbGl2ZXJ5MVN2ZyBmcm9tIFwiLi4vaW1nL2Fib3V0L2RlbGl2ZXJ5MS5zdmdcIjtcbmltcG9ydCBkZWxpdmVyeTJTdmcgZnJvbSBcIi4uL2ltZy9hYm91dC9kZWxpdmVyeTIuc3ZnXCI7XG5pbXBvcnQgYWJvdXRVc1BuZyBmcm9tIFwiLi4vaW1nL2Fib3V0L2Fib3V0LXVzLnBuZ1wiO1xuaW1wb3J0IG91ckhpc3RvcnlQbmcgZnJvbSBcIi4uL2ltZy9hYm91dC9vdXItaGlzdG9yeS5wbmdcIjtcblxuZnVuY3Rpb24gYWRkQ29udGFjdEluZm8oaWNvbiwgdGV4dCkge1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc05hbWUgPSBcImNvbnRhY3QtaW5mb1wiO1xuXG4gIGNvbnN0IGluZm9JY29uID0gbmV3IEltYWdlKCk7XG4gIGluZm9JY29uLnNyYyA9IGljb247XG5cbiAgY29uc3QgaW5mb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mb1RleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mb0ljb24pO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm9UZXh0KTtcblxuICByZXR1cm4gaW5mbztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdCA9IFwiY29udGFjdC1jb250YWluZXJcIjtcblxuICBjb25zdCB0aXRsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZXMuY2xhc3NOYW1lID0gXCJzZWN0aW9uLXRpdGxlcyBjb250YWN0LXRpdGxlXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiV2hlcmUgeW91IGNhbiBmaW5kIHVzXCI7XG5cbiAgdGl0bGVzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGl0bGVzLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JpZC5jbGFzc0xpc3QgPSBcImNvbnRhY3QtZ3JpZFwiO1xuXG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFjdC1pbmZvLWNvbnRhaW5lclwiO1xuXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgYWRkQ29udGFjdEluZm8oXG4gICAgICBjb250YWN0MVN2ZyxcbiAgICAgIFwiTWV0cm9jZW50cm8sIENhbGxlIExvcyBTaXNpbWlsZXMsIFNhbiBTYWx2YWRvciwgRWwgU2FsdmFkb3IuXCJcbiAgICApXG4gICk7XG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQ29udGFjdEluZm8oY29udGFjdDJTdmcsIFwiKzUwMyAyMjIyLTIyMjJcIikpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZENvbnRhY3RJbmZvKGNvbnRhY3QzU3ZnLCBcIjY6MDAgYW0gLSAxMDowMCBwbVwiKSk7XG5cbiAgY29uc3QgZGVsaXZlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWxpdmVyeS5jbGFzc0xpc3QgPSBcImRlbGl2ZXJ5LWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IGRlbGl2ZXJ5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZWxpdmVyeVRleHQudGV4dENvbnRlbnQgPSBcIkFsc28gYXZhaWxhYmxlIG9uOlwiO1xuXG4gIGNvbnN0IGRlbGl2ZXJ5SWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWxpdmVyeUljb25zLmNsYXNzTGlzdCA9IFwiZGVsaXZlcnktaWNvbnNcIjtcblxuICBjb25zdCBkZWxpdmVyeUljb24xID0gbmV3IEltYWdlKCk7XG4gIGRlbGl2ZXJ5SWNvbjEuc3JjID0gZGVsaXZlcnkxU3ZnO1xuICBjb25zdCBkZWxpdmVyeUljb24yID0gbmV3IEltYWdlKCk7XG4gIGRlbGl2ZXJ5SWNvbjIuc3JjID0gZGVsaXZlcnkyU3ZnO1xuXG4gIGRlbGl2ZXJ5SWNvbnMuYXBwZW5kQ2hpbGQoZGVsaXZlcnlJY29uMSk7XG4gIGRlbGl2ZXJ5SWNvbnMuYXBwZW5kQ2hpbGQoZGVsaXZlcnlJY29uMik7XG5cbiAgZGVsaXZlcnkuYXBwZW5kQ2hpbGQoZGVsaXZlcnlUZXh0KTtcbiAgZGVsaXZlcnkuYXBwZW5kQ2hpbGQoZGVsaXZlcnlJY29ucyk7XG5cbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFwLmNsYXNzTGlzdCA9IFwiY29udGFjdC1tYXBcIjtcbiAgbWFwLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM4NzYuMjAxMTkwMDQ4Njc1NSEyZC04OS4yMTQyMTU0MjQwODIwNiEzZDEzLjcwNjI2MTM4NjY4MDkwOSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4OGY2MzMxMmNmZmRjMGUyMyUzQTB4ZmQyMDhiM2E4N2NmYjRkOSEyc01ldHJvY2VudHJvJTIwU2FuJTIwU2FsdmFkb3IhNWUwITNtMiExc2VuITJzc3YhNHYxNzAxODIzMzQyNTU3ITVtMiExc2VuITJzc3ZcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjMwMFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+YDtcblxuICBncmlkLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuICBncmlkLmFwcGVuZENoaWxkKGRlbGl2ZXJ5KTtcbiAgZ3JpZC5hcHBlbmRDaGlsZChtYXApO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZXMpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9yaXpvbnRhbERpdmlzb3IoKSB7XG4gIGNvbnN0IGRpdmlzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZpc29yLmNsYXNzTmFtZSA9IFwiaG9yaXpvbnRhbC1kaXZpc29yXCI7XG5cbiAgcmV0dXJuIGRpdmlzb3I7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU91ckhpc3RvcnkoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm91ci1oaXN0b3J5LWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZXh0LmNsYXNzTmFtZSA9IFwib3VyLWhpc3RvcnktdGV4dFwiO1xuXG4gIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlcy5jbGFzc05hbWUgPSBcInNlY3Rpb24tdGl0bGVzXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgSGlzdG9yeVwiO1xuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIkhvdyBFdmVyeXRoaW5nIFN0YXJ0ZWRcIjtcblxuICB0aXRsZXMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0aXRsZXMuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLiBEaWFtIGRpYW0gb3JuYXJlIG51bmMgc2NlbGVyaXNxdWUgYW1ldC4gRWdldCBudWxsYSBwZWxsZW50ZXNxdWUgdml2YW11cyB1dCBhLiBGZXJtZW50dW0gY3Vyc3VzIHByYWVzZW50IHRlbXB1cyBjb25kaW1lbnR1bSB1bGxhbWNvcnBlciByaXN1cyBudWxsYSB2dWxwdXRhdGUuIENvbnZhbGxpcyBkdWkgdGluY2lkdW50IG1hdHRpcyBmYXVjaWJ1cyBwdXJ1cyBlZ2VzdGFzIGV1IGRpYW0gZWdldC5cIjtcblxuICB0ZXh0LmFwcGVuZENoaWxkKHRpdGxlcyk7XG4gIHRleHQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IG91ckhpc3RvcnlQbmc7XG4gIGltYWdlLmNsYXNzTGlzdCA9IFwib3VyLWhpc3RvcnktaW1hZ2VcIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWJvdXRVcygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWJvdXQtdXMtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHQuY2xhc3NOYW1lID0gXCJhYm91dC10ZXh0XCI7XG5cbiAgY29uc3QgdGl0bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVzLmNsYXNzTmFtZSA9IFwic2VjdGlvbi10aXRsZXNcIjtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiS25vdyBPdXIgUGFzc2lvbnNcIjtcblxuICB0aXRsZXMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0aXRsZXMuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLiBEaWFtIGRpYW0gb3JuYXJlIG51bmMgc2NlbGVyaXNxdWUgYW1ldC4gRWdldCBudWxsYSBwZWxsZW50ZXNxdWUgdml2YW11cyB1dCBhLiBGZXJtZW50dW0gY3Vyc3VzIHByYWVzZW50IHRlbXB1cyBjb25kaW1lbnR1bSB1bGxhbWNvcnBlciByaXN1cyBudWxsYSB2dWxwdXRhdGUuIENvbnZhbGxpcyBkdWkgdGluY2lkdW50IG1hdHRpcyBmYXVjaWJ1cyBwdXJ1cyBlZ2VzdGFzIGV1IGRpYW0gZWdldC5cIjtcblxuICB0ZXh0LmFwcGVuZENoaWxkKHRpdGxlcyk7XG4gIHRleHQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IGFib3V0VXNQbmc7XG4gIGltYWdlLmNsYXNzTmFtZSA9IFwiYWJvdXQtdXMtaW1hZ2VcIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQWJvdXQoKSB7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBhYm91dC5hcHBlbmRDaGlsZChjcmVhdGVBYm91dFVzKCkpO1xuICBhYm91dC5hcHBlbmRDaGlsZChjcmVhdGVPdXJIaXN0b3J5KCkpO1xuICBhYm91dC5hcHBlbmRDaGlsZChjcmVhdGVIb3Jpem9udGFsRGl2aXNvcigpKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcblxuICByZXR1cm4gYWJvdXQ7XG59XG4iLCJpbXBvcnQgZmVhdHVyZTFTdmcgZnJvbSBcIi4uL2ltZy9ob21lL2ZlYXR1cmUxLnN2Z1wiO1xuaW1wb3J0IGZlYXR1cmUyU3ZnIGZyb20gXCIuLi9pbWcvaG9tZS9mZWF0dXJlMi5zdmdcIjtcbmltcG9ydCBmZWF0dXJlM1N2ZyBmcm9tIFwiLi4vaW1nL2hvbWUvZmVhdHVyZTMuc3ZnXCI7XG5pbXBvcnQgYWJvdXRVc1N1bW1hcnlQbmcgZnJvbSBcIi4uL2ltZy9ob21lL2Fib3V0LXVzLXN1bW1hcnkucG5nXCI7XG4vLyBEaXNoIGltYWdlc1xuaW1wb3J0IHNvcGFEZVBvbGxvSW1nIGZyb20gXCIuLi9pbWcvbWVudS9zb3BhLWRlLXBvbGxvLmpwZ1wiO1xuaW1wb3J0IGxhc2FnbmFJbWcgZnJvbSBcIi4uL2ltZy9tZW51L2xhc2FnbmEuanBnXCI7XG5pbXBvcnQgaG9yY2hhdGEgZnJvbSBcIi4uL2ltZy9tZW51L2hvcmNoYXRhLmpwZ1wiO1xuaW1wb3J0IGxvbmphRW1wYW5pemFkYUltZyBmcm9tIFwiLi4vaW1nL21lbnUvbG9uamEtZW1wYW5pemFkYS5qcGdcIjtcbmltcG9ydCBodWV2b3NSYW5jaGVyb3NJbWcgZnJvbSBcIi4uL2ltZy9tZW51L2h1ZXZvcy1yYW5jaGVyb3MuanBnXCI7XG5pbXBvcnQgcHVwdXNhc0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvcHVwdXNhcy5qcGdcIjtcbmltcG9ydCBjaG9jb2xhdGVJbWcgZnJvbSBcIi4uL2ltZy9tZW51L2Nob2NvbGF0ZS5qcGdcIjtcbmltcG9ydCBwZXNjYWRvQWxBamlsbG9JbWcgZnJvbSBcIi4uL2ltZy9tZW51L3Blc2NhZG8tYWwtYWppbGxvLmpwZ1wiO1xuaW1wb3J0IGNhcm5lQUxhUGxhbmNoYUltZyBmcm9tIFwiLi4vaW1nL21lbnUvY2FybmUtYS1sYS1wbGFuY2hhLmpwZ1wiO1xuLy8gRXh0ZXJuYWwgZnVuY3Rpb25zXG5pbXBvcnQgeyBjaGFuZ2VDb250ZW50IH0gZnJvbSBcIi4uL3NlY3Rpb25zL2NvbnRlbnRcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVybygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaGVyby1jb250YWluZXJcIjtcblxuICBjb25zdCB0aXRsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZXMuY2xhc3NOYW1lID0gXCJoZXJvLXRleHRcIjtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gXCI7XG4gIGNvbnN0IHJlc3RhdXJhbnRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHJlc3RhdXJhbnRTcGFuLmNsYXNzTmFtZSA9IFwiaGVyby1yZXN0YXVyYW50XCI7XG4gIHJlc3RhdXJhbnRTcGFuLnRleHRDb250ZW50ID0gXCJCRUzDiU4nUyBSRVNUQVVSQU5UXCI7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRTcGFuKTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIkVuam95IHRoZSBiZXN0IG9mIFwiO1xuICBjb25zdCBjb3VudHJ5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb3VudHJ5U3Bhbi5jbGFzc05hbWUgPSBcImhlcm8tY291bnRyeVwiO1xuICBjb3VudHJ5U3Bhbi50ZXh0Q29udGVudCA9IFwiRWwgU2FsdmFkb3JcIjtcblxuICBzdWJ0aXRsZS5hcHBlbmRDaGlsZChjb3VudHJ5U3Bhbik7XG5cbiAgdGl0bGVzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGl0bGVzLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlZJRVcgTUVOVVwiO1xuICBidXR0b24uZGF0YXNldC50YXJnZXQgPSBcIm1lbnVcIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVzKTtcbiAgY29udGFpbmVyLmFwcGVuZChidXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGFkZCBmZWF0dXJlcyBzZWN0aW9uXG5mdW5jdGlvbiBhZGRGZWF0dXJlKGljb25QYXRoLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgZmVhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZlYXR1cmUuY2xhc3NOYW1lID0gXCJmZWF0dXJlXCI7XG5cbiAgY29uc3QgZmVhdHVyZUltYWdlID0gbmV3IEltYWdlKCk7XG4gIGZlYXR1cmVJbWFnZS5zcmMgPSBpY29uUGF0aDtcblxuICBjb25zdCBmZWF0dXJlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGZlYXR1cmVUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gIGNvbnN0IGZlYXR1cmVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmZWF0dXJlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICBmZWF0dXJlLmFwcGVuZENoaWxkKGZlYXR1cmVJbWFnZSk7XG4gIGZlYXR1cmUuYXBwZW5kQ2hpbGQoZmVhdHVyZVRpdGxlKTtcbiAgZmVhdHVyZS5hcHBlbmRDaGlsZChmZWF0dXJlRGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiBmZWF0dXJlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGZWF0dXJlcygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZmVhdHVyZXMtY29udGFpbmVyXCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGFkZEZlYXR1cmUoXG4gICAgICBmZWF0dXJlMVN2ZyxcbiAgICAgIFwiT3BlbiBldmVyeWRheVwiLFxuICAgICAgXCJGcm9tIDY6MDAgYW0gdG8gMTA6MDAgcG0gdGhlIDcgZGF5cyBvZiB0aGUgd2Vla1wiXG4gICAgKVxuICApO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRmVhdHVyZShcbiAgICAgIGZlYXR1cmUyU3ZnLFxuICAgICAgXCJFYXN5LXRvLXVzZSBwbGF0Zm9ybVwiLFxuICAgICAgXCJXZWIgcGFnZSBjcmVhdGVkIHVzaW5nIFdlYnBhY2sgdGVjaG5vbG9naWVzXCJcbiAgICApXG4gICk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBhZGRGZWF0dXJlKFxuICAgICAgZmVhdHVyZTNTdmcsXG4gICAgICBcIkdyZWF0IGFtYmllbmNlXCIsXG4gICAgICBcIlRoZSBwZXJmZWN0IHBsYWNlIHRvIGVuam95IHdpdGggeW91ciBmcmllbmRzIGFuZCBmYW1pbHlcIlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBhZGREaXNoU3VtbWFyeUNvbnRlbnQoaW1hZ2UpIHtcbiAgY29uc3QgZ2FsbGVyeUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgZ2FsbGVyeUVsZW1lbnQuc3JjID0gaW1hZ2U7XG4gIGdhbGxlcnlFbGVtZW50LmNsYXNzTGlzdCA9IFwiZ2FsbGVyeS1lbGVtZW50XCI7XG5cbiAgcmV0dXJuIGdhbGxlcnlFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXNoU3VtbWFyeSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZGlzaC1zdW1tYXJ5LWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlcy5jbGFzc05hbWUgPSBcInNlY3Rpb24tdGl0bGVzXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgbWVudVwiO1xuXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiRGlzY292ZXIgeW91ciBuZXcgZmF2b3JpdGUgZGlzaFwiO1xuXG4gIHRpdGxlcy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHRpdGxlcy5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdhbGxlcnkuY2xhc3NOYW1lID0gXCJkaXNoLWdhbGxlcnktY29udGFpbmVyXCI7XG5cbiAgZ2FsbGVyeS5hcHBlbmRDaGlsZChhZGREaXNoU3VtbWFyeUNvbnRlbnQoc29wYURlUG9sbG9JbWcpKTtcbiAgZ2FsbGVyeS5hcHBlbmRDaGlsZChhZGREaXNoU3VtbWFyeUNvbnRlbnQobGFzYWduYUltZykpO1xuICBnYWxsZXJ5LmFwcGVuZENoaWxkKGFkZERpc2hTdW1tYXJ5Q29udGVudChob3JjaGF0YSkpO1xuICBnYWxsZXJ5LmFwcGVuZENoaWxkKGFkZERpc2hTdW1tYXJ5Q29udGVudChsb25qYUVtcGFuaXphZGFJbWcpKTtcbiAgZ2FsbGVyeS5hcHBlbmRDaGlsZChhZGREaXNoU3VtbWFyeUNvbnRlbnQoaHVldm9zUmFuY2hlcm9zSW1nKSk7XG4gIGdhbGxlcnkuYXBwZW5kQ2hpbGQoYWRkRGlzaFN1bW1hcnlDb250ZW50KHB1cHVzYXNJbWcpKTtcbiAgZ2FsbGVyeS5hcHBlbmRDaGlsZChhZGREaXNoU3VtbWFyeUNvbnRlbnQoY2hvY29sYXRlSW1nKSk7XG4gIGdhbGxlcnkuYXBwZW5kQ2hpbGQoYWRkRGlzaFN1bW1hcnlDb250ZW50KHBlc2NhZG9BbEFqaWxsb0ltZykpO1xuICBnYWxsZXJ5LmFwcGVuZENoaWxkKGFkZERpc2hTdW1tYXJ5Q29udGVudChjYXJuZUFMYVBsYW5jaGFJbWcpKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlZJRVcgTU9SRVwiO1xuICBidXR0b24uZGF0YXNldC50YXJnZXQgPSBcIm1lbnVcIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVzKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbGxlcnkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBYm91dFN1bW1hcnkoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImFib3V0LXN1bW1hcnktY29udGFpbmVyXCI7XG5cbiAgY29uc3QgaW5mb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvU2VjdGlvbi5jbGFzc0xpc3QgPSBcImluZm9cIjtcblxuICBjb25zdCB0aXRsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZXMuY2xhc3NMaXN0ID0gXCJzZWN0aW9uLXRpdGxlc1wiO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiS25vdyBvdXIgcGFzc2lvbnNcIjtcblxuICB0aXRsZXMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0aXRsZXMuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gdmVzdGlidWx1bSwgdmVsaXQgZXQgc2NlbGVyaXNxdWUgdmVzdGlidWx1bSwgbmliaCB1cm5hIHVsdHJpY2llcyBuaXNsLCBpZCB0aW5jaWR1bnQgcXVhbSBuZXF1ZSBuZWMgbWFzc2EuXCI7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJMRUFSTiBNT1JFXCI7XG4gIGJ1dHRvbi5kYXRhc2V0LnRhcmdldCA9IFwiYWJvdXRcIjtcblxuICBpbmZvU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZXMpO1xuICBpbmZvU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gYWJvdXRVc1N1bW1hcnlQbmc7XG4gIGltYWdlLmNsYXNzTGlzdCA9IFwiYWJvdXQtc3VtbWFyeS1pbWFnZVwiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvU2VjdGlvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3c2xldHRlcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdCA9IFwibmV3c2xldHRlci1jb250YWluZXJcIjtcblxuICBjb25zdCB0aXRsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZXMuY2xhc3NMaXN0ID0gXCJzZWN0aW9uLXRpdGxlc1wiO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk5ld3NsZXR0ZXJcIjtcbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gXCJOZXZlciBtaXNzIHVwIG91ciBsYXRlc3QgdXBkYXRlc1wiO1xuXG4gIHRpdGxlcy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHRpdGxlcy5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiRXZlcnkgU3VuZGF5IHJlY2VpdmUgbm90aWNlcyBvZiBuZXcgZGlzaGVzLCBwcm9tb3Rpb25zIGFuZCBsaXZlIGV2ZW50cyFcIjtcblxuICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdCA9IFwiaW5wdXQtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0ZXh0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICB0ZXh0SW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHlvdXIgZW1haWxcIjtcbiAgY29uc3QgYnV0dG9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b25JbnB1dC50ZXh0Q29udGVudCA9IFwiU0lHTiBJTlwiO1xuXG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRJbnB1dCk7XG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbklucHV0KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVzKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5pZCA9IFwiaG9tZVwiO1xuXG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlSGVybygpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVGZWF0dXJlcygpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVEaXNoU3VtbWFyeSgpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVBYm91dFN1bW1hcnkoKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3c2xldHRlcigpKTtcblxuICBhZGRCdXR0b25FdmVudHMoaG9tZSk7XG5cbiAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGFkZEJ1dHRvbkV2ZW50cyhob21lKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBob21lLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25bZGF0YS10YXJnZXRdXCIpO1xuXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgIGNoYW5nZUNvbnRlbnQoYnV0dG9uLmRhdGFzZXQudGFyZ2V0KVxuICAgICk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGh1ZXZvc0NvbkZyaWpvbGVzSW1nIGZyb20gXCIuLi9pbWcvbWVudS9odWV2b3MtY29uLWZyaWpvbGVzLmpwZ1wiO1xuaW1wb3J0IHBsYXRhbm9zRnJpdG9zSW1nIGZyb20gXCIuLi9pbWcvbWVudS9wbGF0YW5vcy1mcml0b3MuanBnXCI7XG5pbXBvcnQgaHVldm9zUmFuY2hlcm9zSW1nIGZyb20gXCIuLi9pbWcvbWVudS9odWV2b3MtcmFuY2hlcm9zLmpwZ1wiO1xuaW1wb3J0IGNhc2FtaWVudG9JbWcgZnJvbSBcIi4uL2ltZy9tZW51L2Nhc2FtaWVudG8uanBnXCI7XG5pbXBvcnQgc29wYURlUG9sbG9JbWcgZnJvbSBcIi4uL2ltZy9tZW51L3NvcGEtZGUtcG9sbG8uanBnXCI7XG5pbXBvcnQgY2FybmVBTGFQbGFuY2hhSW1nIGZyb20gXCIuLi9pbWcvbWVudS9jYXJuZS1hLWxhLXBsYW5jaGEuanBnXCI7XG5pbXBvcnQgbGFzYWduYUltZyBmcm9tIFwiLi4vaW1nL21lbnUvbGFzYWduYS5qcGdcIjtcbmltcG9ydCBsb25qYUVtcGFuaXphZGFJbWcgZnJvbSBcIi4uL2ltZy9tZW51L2xvbmphLWVtcGFuaXphZGEuanBnXCI7XG5pbXBvcnQgaGFtYnVyZ3Vlc2FJbWcgZnJvbSBcIi4uL2ltZy9tZW51L2hhbWJ1cmd1ZXNhLmpwZ1wiO1xuaW1wb3J0IHBlc2NhZG9BbEFqaWxsb0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvcGVzY2Fkby1hbC1hamlsbG8uanBnXCI7XG5pbXBvcnQgcHVwdXNhc0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvcHVwdXNhcy5qcGdcIjtcbmltcG9ydCByaWd1YXNJbWcgZnJvbSBcIi4uL2ltZy9tZW51L3JpZ3Vhcy5qcGdcIjtcbmltcG9ydCB0YW1hbGVzSW1nIGZyb20gXCIuLi9pbWcvbWVudS90YW1hbGVzLmpwZ1wiO1xuaW1wb3J0IG51ZWdhZG9zSW1nIGZyb20gXCIuLi9pbWcvbWVudS9udWVnYWRvcy5qcGdcIjtcbmltcG9ydCBwZXBlcmVjaGFzSW1nIGZyb20gXCIuLi9pbWcvbWVudS9wZXBlcmVjaGFzLmpwZ1wiO1xuaW1wb3J0IHNlbWl0YUltZyBmcm9tIFwiLi4vaW1nL21lbnUvc2VtaXRhLmpwZ1wiO1xuaW1wb3J0IHNhbHBvcmVzSW1nIGZyb20gXCIuLi9pbWcvbWVudS9zYWxwb3Jlcy5qcGdcIjtcbmltcG9ydCB2aWVqaXRhc0ltZyBmcm9tIFwiLi4vaW1nL21lbnUvdmllaml0YXMuanBnXCI7XG5pbXBvcnQgY2FmZUltZyBmcm9tIFwiLi4vaW1nL21lbnUvY2FmZS5qcGdcIjtcbmltcG9ydCBjaG9jb2xhdGVJbWcgZnJvbSBcIi4uL2ltZy9tZW51L2Nob2NvbGF0ZS5qcGdcIjtcbmltcG9ydCBob3JjaGF0YUltZyBmcm9tIFwiLi4vaW1nL21lbnUvaG9yY2hhdGEuanBnXCI7XG5pbXBvcnQgc29kYUltZyBmcm9tIFwiLi4vaW1nL21lbnUvc29kYS5qcGdcIjtcblxuZnVuY3Rpb24gYWRkRGlzaENhcmQodGl0bGUsIGNhdGVnb3J5LCBwcmljZSwgaW1hZ2UpIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQuY2xhc3NOYW1lID0gXCJkaXNoLWNhcmRcIjtcbiAgY2FyZC5kYXRhc2V0LmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG5cbiAgY29uc3QgY2FyZEltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNhcmRJbWFnZS5zcmMgPSBpbWFnZTtcbiAgY2FyZEltYWdlLmNsYXNzTmFtZSA9IFwiZGlzaC1pbWFnZVwiO1xuXG4gIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW5mb1wiO1xuXG4gIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRUaXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gIGNvbnN0IGNhcmRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRQcmljZS5jbGFzc05hbWUgPSBcInByaWNlXCI7XG4gIGNhcmRQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gIGNvbnN0IGFkZENhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRDYXJ0QnV0dG9uLmNsYXNzTmFtZSA9IFwiYWRkLWNhcnRcIjtcbiAgYWRkQ2FydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRvIENhcnRcIjtcblxuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFByaWNlKTtcbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRDYXJ0QnV0dG9uKTtcblxuICBjYXJkLmFwcGVuZENoaWxkKGNhcmRJbWFnZSk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIGZpbHRlck1lbnUobWVudSwgZmlsdGVyID0gXCJhbGxcIikge1xuICBjb25zdCBkaXNoR3JpZCA9IG1lbnUucXVlcnlTZWxlY3RvcihcIi5kaXNoLWdyaWRcIik7XG4gIGNvbnN0IGRpc2hlcyA9IGRpc2hHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGlzaC1jYXJkXCIpO1xuICBjb25zdCBtZW51VGFicyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXRhYnMgLnRhYlwiKTtcblxuICBkaXNoR3JpZC5kYXRhc2V0LmZpbHRlciA9IGZpbHRlci50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEZpbHRlciBkaXNoZXNcbiAgZGlzaGVzLmZvckVhY2goKGRpc2gpID0+IHtcbiAgICBkaXNoLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgICBpZiAoXG4gICAgICBkaXNoLmRhdGFzZXQuY2F0ZWdvcnkgIT09IGRpc2hHcmlkLmRhdGFzZXQuZmlsdGVyICYmXG4gICAgICBkaXNoR3JpZC5kYXRhc2V0LmZpbHRlciAhPT0gXCJhbGxcIlxuICAgIClcbiAgICAgIGRpc2guY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSk7XG5cbiAgLy8gU2VsZWN0IHRhYlxuICBtZW51VGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuXG4gICAgaWYgKHRhYi5kYXRhc2V0LnRhYkNhdGVnb3J5ID09IGRpc2hHcmlkLmRhdGFzZXQuZmlsdGVyKVxuICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc2hDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImRpc2gtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgZGlzaEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXNoR3JpZC5jbGFzc05hbWUgPSBcImRpc2gtZ3JpZFwiO1xuXG4gIC8vIFJlcGxhY2UgdGhpcyB0byBzZWxlY3RlZCBtZW51IHRhYlxuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcbiAgICAgIFwiSHVldm9zIGNvbiBmcmlqb2xlc1wiLFxuICAgICAgXCJicmVha2Zhc3RcIixcbiAgICAgIFwiJDkuOTlcIixcbiAgICAgIGh1ZXZvc0NvbkZyaWpvbGVzSW1nXG4gICAgKVxuICApO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIlBsYXRhbm9zIGZyaXRvc1wiLCBcImJyZWFrZmFzdFwiLCBcIiQ0LjMwXCIsIHBsYXRhbm9zRnJpdG9zSW1nKVxuICApO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIkh1ZXZvcyByYW5jaGVyb3NcIiwgXCJicmVha2Zhc3RcIiwgXCIkNC4zOVwiLCBodWV2b3NSYW5jaGVyb3NJbWcpXG4gICk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKFxuICAgIGFkZERpc2hDYXJkKFwiQ2FzYW1pZW50b1wiLCBcImJyZWFrZmFzdFwiLCBcIiQ2LjU5XCIsIGNhc2FtaWVudG9JbWcpXG4gICk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKFxuICAgIGFkZERpc2hDYXJkKFwiU29wYSBkZSBwb2xsb1wiLCBcImx1bmNoXCIsIFwiJDEwLjk5XCIsIHNvcGFEZVBvbGxvSW1nKVxuICApO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIkNhcm5lIGEgbGEgcGxhbmNoYVwiLCBcImx1bmNoXCIsIFwiJDEyLjUwXCIsIGNhcm5lQUxhUGxhbmNoYUltZylcbiAgKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoYWRkRGlzaENhcmQoXCJMYXNhw7FhXCIsIFwibHVuY2hcIiwgXCIkOC41MFwiLCBsYXNhZ25hSW1nKSk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKFxuICAgIGFkZERpc2hDYXJkKFwiTG9uamEgZW1wYW5pemFkYVwiLCBcImx1bmNoXCIsIFwiJDkuOTlcIiwgbG9uamFFbXBhbml6YWRhSW1nKVxuICApO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIkhhbWJ1cmd1ZXNhc1wiLCBcImx1bmNoXCIsIFwiJDkuOTlcIiwgaGFtYnVyZ3Vlc2FJbWcpXG4gICk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKFxuICAgIGFkZERpc2hDYXJkKFwiUGVzY2FkbyBhbCBhamlsbG9cIiwgXCJsdW5jaFwiLCBcIiQ5Ljk5XCIsIHBlc2NhZG9BbEFqaWxsb0ltZylcbiAgKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoYWRkRGlzaENhcmQoXCJQdXB1c2FzXCIsIFwiZGlubmVyXCIsIFwiJDAuNjBcIiwgcHVwdXNhc0ltZykpO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChhZGREaXNoQ2FyZChcIlJpZ3Vhc1wiLCBcImRpbm5lclwiLCBcIiQyLjk5XCIsIHJpZ3Vhc0ltZykpO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChhZGREaXNoQ2FyZChcIlRhbWFsZXNcIiwgXCJkaW5uZXJcIiwgXCIkMy41OVwiLCB0YW1hbGVzSW1nKSk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKFxuICAgIGFkZERpc2hDYXJkKFwiTnVlZ2Fkb3NcIiwgXCJkZXNzZXJ0c1wiLCBcIiQzLjY1XCIsIG51ZWdhZG9zSW1nKVxuICApO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIlBlcGVyZWNoYVwiLCBcImRlc3NlcnRzXCIsIFwiJDEuMTVcIiwgcGVwZXJlY2hhc0ltZylcbiAgKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoYWRkRGlzaENhcmQoXCJTZW1pdGFcIiwgXCJkZXNzZXJ0c1wiLCBcIiQyLjY3XCIsIHNlbWl0YUltZykpO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChcbiAgICBhZGREaXNoQ2FyZChcIlNhbHBvcmVzXCIsIFwiZGVzc2VydHNcIiwgXCIkMS45OFwiLCBzYWxwb3Jlc0ltZylcbiAgKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkRGlzaENhcmQoXCJWaWVqaXRhc1wiLCBcImRlc3NlcnRzXCIsIFwiJDEuMTBcIiwgdmllaml0YXNJbWcpXG4gICk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKGFkZERpc2hDYXJkKFwiQ2Fmw6lcIiwgXCJkcmlua3NcIiwgXCIkMC43NVwiLCBjYWZlSW1nKSk7XG4gIGRpc2hHcmlkLmFwcGVuZENoaWxkKFxuICAgIGFkZERpc2hDYXJkKFwiQ2hvY29sYXRlXCIsIFwiZHJpbmtzXCIsIFwiJDAuODBcIiwgY2hvY29sYXRlSW1nKVxuICApO1xuICBkaXNoR3JpZC5hcHBlbmRDaGlsZChhZGREaXNoQ2FyZChcIkhvcmNoYXRhXCIsIFwiZHJpbmtzXCIsIFwiJDEuMDBcIiwgaG9yY2hhdGFJbWcpKTtcbiAgZGlzaEdyaWQuYXBwZW5kQ2hpbGQoYWRkRGlzaENhcmQoXCJTb2RhXCIsIFwiZHJpbmtzXCIsIFwiJDEuMjVcIiwgc29kYUltZykpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNoR3JpZCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYWRkTWVudVRhYih0YWJMYWJlbCkge1xuICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWIuY2xhc3NOYW1lID0gXCJ0YWJcIjtcbiAgdGFiLmRhdGFzZXQudGFiQ2F0ZWdvcnkgPSB0YWJMYWJlbC50b0xvd2VyQ2FzZSgpO1xuICB0YWIudGV4dENvbnRlbnQgPSB0YWJMYWJlbDtcblxuICByZXR1cm4gdGFiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51VGFicygpIHtcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYnMuY2xhc3NOYW1lID0gXCJtZW51LXRhYnNcIjtcblxuICB0YWJzLmFwcGVuZENoaWxkKGFkZE1lbnVUYWIoXCJBbGxcIikpO1xuICB0YWJzLmFwcGVuZENoaWxkKGFkZE1lbnVUYWIoXCJCcmVha2Zhc3RcIikpO1xuICB0YWJzLmFwcGVuZENoaWxkKGFkZE1lbnVUYWIoXCJMdW5jaFwiKSk7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoYWRkTWVudVRhYihcIkRpbm5lclwiKSk7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoYWRkTWVudVRhYihcIkRlc3NlcnRzXCIpKTtcbiAgdGFicy5hcHBlbmRDaGlsZChhZGRNZW51VGFiKFwiRHJpbmtzXCIpKTtcblxuICByZXR1cm4gdGFicztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuaWQgPSBcIm1lbnVcIjtcblxuICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVUYWJzKCkpO1xuICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZURpc2hDb250YWluZXIoKSk7XG5cbiAgZmlsdGVyTWVudShtZW51KTtcblxuICBhZGRNZW51VGFiRXZlbnRzKG1lbnUpO1xuXG4gIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBhZGRNZW51VGFiRXZlbnRzKG1lbnUpIHtcbiAgY29uc3QgbWVudVRhYnMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS10YWJzIC50YWJcIik7XG5cbiAgZm9yIChjb25zdCB0YWIgb2YgbWVudVRhYnMpIHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PlxuICAgICAgZmlsdGVyTWVudShtZW51LCBlLnRhcmdldC5kYXRhc2V0LnRhYkNhdGVnb3J5KVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCByZW5kZXJIb21lIGZyb20gXCIuLi9wYWdlcy9ob21lLmpzXCI7XG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi4vcGFnZXMvbWVudS5qc1wiO1xuaW1wb3J0IHJlbmRlckFib3V0IGZyb20gXCIuLi9wYWdlcy9hYm91dC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGNoYW5nZUNvbnRlbnQoXCJob21lXCIpO1xuXG4gIHRhYnNFdmVudCgpO1xufVxuXG5mdW5jdGlvbiB0YWJzRXZlbnQoKSB7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlci10YWJzIC50YWJcIik7XG5cbiAgZm9yIChjb25zdCB0YWIgb2YgdGFicykge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+XG4gICAgICBjaGFuZ2VDb250ZW50KGUudGFyZ2V0LmRhdGFzZXQuY29udGVudFRhcmdldClcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb250ZW50KG5ld0NvbnRlbnQpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpO1xuICBsZXQgY2FsbGJhY2s7XG5cbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIC8vIFNldCBjb250ZW50IGNhbGxiYWNrIGZ1bmN0aW9uIGRlcGVuZGluZyBvZiBuZXdDb250ZW50IHZhbHVlXG4gIGlmIChuZXdDb250ZW50ID09IFwiaG9tZVwiKSB7XG4gICAgY2FsbGJhY2sgPSByZW5kZXJIb21lO1xuICB9IGVsc2UgaWYgKG5ld0NvbnRlbnQgPT0gXCJtZW51XCIpIHtcbiAgICBjYWxsYmFjayA9IHJlbmRlck1lbnU7XG4gIH0gZWxzZSBpZiAobmV3Q29udGVudCA9PSBcImFib3V0XCIpIHtcbiAgICBjYWxsYmFjayA9IHJlbmRlckFib3V0O1xuICB9XG5cbiAgLy8gU2V0IGFjdGl2ZSB0YWIgd2hlbiBpbnZva2luZyBmdW5jdGlvblxuICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG4gICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICBpZiAodGFiLmRhdGFzZXQuY29udGVudFRhcmdldCA9PSBuZXdDb250ZW50KSB0YWIuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjYWxsYmFjaygpKTtcblxuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2VjdGlvbnMvY29udGVudC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==