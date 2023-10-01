import renderHome from "../pages/home.js";

export default function renderContent() {
  const content = document.createElement("div");
  content.id = "content";

  content.appendChild(renderHome());

  document.body.appendChild(content);
}
