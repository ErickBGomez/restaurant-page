import "./style.css";

// Header
const header = document.createElement("header");
const headerLogo = document.createElement("div");
headerLogo.classList.add("logo");
headerLogo.textContent = "Logo";

header.appendChild(headerLogo);

// Content
const content = document.createElement("div");
content.id = "content";

// Footer
const footer = document.createElement("footer");

// Append content to body
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);
