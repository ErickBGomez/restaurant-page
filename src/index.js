import "./style.css";

// Initialize content
const content = document.createElement("div");
content.id = "content";

// Header
const headerContainer = document.createElement("header");
const headerLogo = document.createElement("div");
headerLogo.classList.add("logo");
headerLogo.textContent = "Logo";

headerContainer.appendChild(headerLogo);

content.appendChild(headerContainer);

// Append content to body
document.body.appendChild(content);
