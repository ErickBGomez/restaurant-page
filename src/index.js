import "./style.css";

// Header
const header = document.createElement("header");

// Header: Logo
const headerLogo = document.createElement("div");
headerLogo.classList.add("logo");
headerLogo.textContent = "Logo";

// Header: Tabs
const tabs = document.createElement("div");
const homeTab = document.createElement("div");
homeTab.textContent = "HOME";
const menuTab = document.createElement("div");
menuTab.textContent = "MENU";
const aboutTab = document.createElement("div");
aboutTab.textContent = "ABOUT";

tabs.appendChild(homeTab);
tabs.appendChild(menuTab);
tabs.appendChild(aboutTab);

// Header: User and cart
const userAndCart = document.createElement("div");
const userIcon = document.createElement("i");
const cartIcon = document.createElement("i");
const cart = document.createElement("div");
cart.textContent = "$0.00";

userAndCart.appendChild(userIcon);
userAndCart.appendChild(cartIcon);
userAndCart.appendChild(cart);

// Append to header
header.appendChild(headerLogo);
header.appendChild(tabs);
header.appendChild(userAndCart);

// Content
const content = document.createElement("div");
content.id = "content";

// Footer
const footer = document.createElement("footer");

// Append containers to body
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);
