import feature1Svg from "../img/feature1.svg";
import feature2Svg from "../img/feature2.svg";
import feature3Svg from "../img/feature3.svg";

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
      "Web page created using Webpack"
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

function createDishSummary() {
  const container = document.createElement("div");
  container.className = "dish-summary-container";

  const titles = document.createElement("div");
  titles.className = "dish-summary-titles";

  const title = document.createElement("h3");
  title.textContent = "Our menu";

  const subtitle = document.createElement("h1");
  subtitle.textContent = "Discover your new favorite dish";

  titles.appendChild(title);
  titles.appendChild(subtitle);

  const gallery = document.createElement("div");
  gallery.className = "dish-gallery-container";

  for (let i = 0; i < 9; i++) {
    const galleryElement = document.createElement("div");
    gallery.appendChild(galleryElement);
  }

  const button = document.createElement("button");
  button.textContent = "VIEW MORE";

  container.appendChild(titles);
  container.appendChild(gallery);
  container.appendChild(button);

  return container;
}

export default function renderHome() {
  const home = document.createElement("div");
  home.classList = "home";

  home.appendChild(createHero());
  home.appendChild(createFeatures());
  home.appendChild(createDishSummary());

  return home;
}
