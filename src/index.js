import "./style.css";
import renderHeader from "./pages/header.js";
import renderFooter from "./pages/footer.js";

renderHeader();
renderFooter();

// Content
const content = document.createElement("div");
content.id = "content";

// Append containers to body
document.body.appendChild(content);
