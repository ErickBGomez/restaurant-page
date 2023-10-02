import renderHome from "../pages/home.js";
import renderMenu from "../pages/menu.js";

export default function renderContent() {
  const content = document.createElement("div");
  content.id = "content";

  // content.appendChild(renderHome());
  content.appendChild(renderMenu());

  document.body.appendChild(content);
}
