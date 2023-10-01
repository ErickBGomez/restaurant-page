function createHero() {
  const heroContainer = document.createElement("div");
  heroContainer.className = "hero-bg";

  return heroContainer;
}

export default function renderHome() {
  const home = document.createElement("div");
  home.classList = "home";

  home.appendChild(createHero());

  return home;
}
