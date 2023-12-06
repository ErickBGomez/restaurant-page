import feature1Svg from "../img/home/feature1.svg";
import feature2Svg from "../img/home/feature2.svg";
import feature3Svg from "../img/home/feature3.svg";
import aboutUsSummaryPng from "../img/home/about-us-summary.png";
// Dish images
import sopaDePolloImg from "../img/menu/sopa-de-pollo.jpg";
import lasagnaImg from "../img/menu/lasagna.jpg";
import horchata from "../img/menu/horchata.jpg";
import lonjaEmpanizadaImg from "../img/menu/lonja-empanizada.jpg";
import huevosRancherosImg from "../img/menu/huevos-rancheros.jpg";
import pupusasImg from "../img/menu/pupusas.jpg";
import chocolateImg from "../img/menu/chocolate.jpg";
import pescadoAlAjilloImg from "../img/menu/pescado-al-ajillo.jpg";
import carneALaPlanchaImg from "../img/menu/carne-a-la-plancha.jpg";

function createHero() {
  const container = document.createElement("div");
  container.className = "hero-container";

  const titles = document.createElement("div");
  titles.className = "hero-text";

  const title = document.createElement("h4");
  title.textContent = "Welcome to ";
  const restaurantSpan = document.createElement("span");
  restaurantSpan.className = "hero-restaurant";
  restaurantSpan.textContent = "TITLE RESTAURANT";
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
      feature1Svg,
      "Open everyday",
      "From 6:00 am to 10:00 pm the 7 days of the week"
    )
  );
  container.appendChild(
    addFeature(
      feature2Svg,
      "Easy-to-use platform",
      "Web page created using Webpack technologies"
    )
  );
  container.appendChild(
    addFeature(
      feature3Svg,
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

  gallery.appendChild(addDishSummaryContent(sopaDePolloImg));
  gallery.appendChild(addDishSummaryContent(lasagnaImg));
  gallery.appendChild(addDishSummaryContent(horchata));
  gallery.appendChild(addDishSummaryContent(lonjaEmpanizadaImg));
  gallery.appendChild(addDishSummaryContent(huevosRancherosImg));
  gallery.appendChild(addDishSummaryContent(pupusasImg));
  gallery.appendChild(addDishSummaryContent(chocolateImg));
  gallery.appendChild(addDishSummaryContent(pescadoAlAjilloImg));
  gallery.appendChild(addDishSummaryContent(carneALaPlanchaImg));

  const button = document.createElement("button");
  button.textContent = "VIEW MORE";

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

  infoSection.appendChild(titles);
  infoSection.appendChild(description);
  infoSection.appendChild(button);

  const image = new Image();
  image.src = aboutUsSummaryPng;
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

export default function renderHome() {
  const home = document.createElement("div");
  home.id = "home";

  home.appendChild(createHero());
  home.appendChild(createFeatures());
  home.appendChild(createDishSummary());
  home.appendChild(createAboutSummary());
  home.appendChild(createNewsletter());

  return home;
}
