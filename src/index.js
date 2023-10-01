import "./style.css";

// Header
const header = document.createElement("header");

// Header: Logo
const headerLogo = document.createElement("div");
headerLogo.classList.add("logo");
headerLogo.textContent = "Logo";

// Header: Tabs
const tabs = document.createElement("div");
tabs.classList.add("tabs");
const homeTab = document.createElement("div");
homeTab.classList.add("tab");
homeTab.classList.add("selected");
homeTab.textContent = "HOME";
const menuTab = document.createElement("div");
menuTab.classList.add("tab");
menuTab.textContent = "MENU";
const aboutTab = document.createElement("div");
aboutTab.classList.add("tab");
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
