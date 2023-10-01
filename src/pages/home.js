function createHero() {
  const heroContainer = document.createElement("div");
  heroContainer.className = "hero-container";

  const heroText = document.createElement("div");

  const heroTitle = document.createElement("h2");
  heroTitle.textContent = "Welcome to ";
  const restaurantTitleSpan = document.createElement("span");
  restaurantTitleSpan.textContent = "TITLE RESTAURANT";
  heroTitle.appendChild(restaurantTitleSpan);

  const heroSubtitle = document.createElement("h1");
  heroSubtitle.textContent = "Enjoy the best of ";
  const countrySubtitleSpan = document.createElement("span");
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

export default function renderHome() {
  const home = document.createElement("div");
  home.classList = "home";

  home.appendChild(createHero());

  return home;
}
