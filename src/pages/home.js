import feature1Svg from "../img/feature1.svg";
import feature2Svg from "../img/feature2.svg";
import feature3Svg from "../img/feature3.svg";

function createHero() {
  const heroContainer = document.createElement("div");
  heroContainer.className = "hero-container";

  const heroText = document.createElement("div");
  heroText.className = "hero-text";

  const heroTitle = document.createElement("h4");
  heroTitle.textContent = "Welcome to ";
  const restaurantTitleSpan = document.createElement("span");
  restaurantTitleSpan.className = "hero-restaurant";
  restaurantTitleSpan.textContent = "TITLE RESTAURANT";
  heroTitle.appendChild(restaurantTitleSpan);

  const heroSubtitle = document.createElement("h1");
  heroSubtitle.textContent = "Enjoy the best of ";
  const countrySubtitleSpan = document.createElement("span");
  countrySubtitleSpan.className = "hero-country";
  countrySubtitleSpan.textContent = "El Salvador";

  heroSubtitle.appendChild(countrySubtitleSpan);

  heroText.appendChild(heroTitle);
  heroText.appendChild(heroSubtitle);

  const heroButton = document.createElement("button");
  heroButton.textContent = "VIEW MENU";

  heroContainer.appendChild(heroText);
  heroContainer.append(heroButton);

  return heroContainer;
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
  const featuresContainer = document.createElement("div");
  featuresContainer.className = "features-container";

  featuresContainer.appendChild(
    addFeature(
      feature1Svg,
      "Open everyday",
      "From 6:00 am to 10:00 pm the 7 days of the week"
    )
  );
  featuresContainer.appendChild(
    addFeature(
      feature2Svg,
      "Easy-to-use platform",
      "Web page created using Webpack"
    )
  );
  featuresContainer.appendChild(
    addFeature(
      feature3Svg,
      "Great ambience",
      "The perfect place to enjoy with your friends and family"
    )
  );

  return featuresContainer;
}

export default function renderHome() {
  const home = document.createElement("div");
  home.classList = "home";

  home.appendChild(createHero());
  home.appendChild(createFeatures());

  return home;
}
