import renderHome from "../pages/home.js";
import renderMenu from "../pages/menu.js";
import renderAbout from "../pages/about.js";

export default function renderContent() {
  const content = document.createElement("div");
  content.id = "content";

  // content.appendChild(renderHome());
  // content.appendChild(renderMenu());
  content.appendChild(renderAbout());

  document.body.appendChild(content);
}
