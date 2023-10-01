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
userAndCart.classList.add("user-and-cart");
const userIcon = document.createElement("i");
userIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20 18.3C23.8453 18.3 26.9625 15.1828 26.9625 11.3375C26.9625 7.49222 23.8453 4.375 20 4.375C16.1547 4.375 13.0375 7.49222 13.0375 11.3375C13.0375 15.1828 16.1547 18.3 20 18.3Z" stroke="#25272C" stroke-width="2"/>
<path d="M34.0937 35.5312C34.0937 31.7934 32.6089 28.2086 29.9658 25.5655C27.3227 22.9224 23.7379 21.4375 20 21.4375C16.2621 21.4375 12.6773 22.9224 10.0342 25.5655C7.39112 28.2086 5.90625 31.7934 5.90625 35.5312H34.0937Z" stroke="#25272C" stroke-width="2"/>
</svg>`;
const cartIcon = document.createElement("i");
cartIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M2.88751 6.22501H9.58751L13.5688 23.6563H31.0563L35.1063 10.2188L10.4188 9.86876" stroke="#25272C" stroke-width="2"/>
<path d="M32.3313 27.7188H13.5438C13.2729 27.7247 13.0037 27.6758 12.7523 27.5749C12.5008 27.474 12.2725 27.3232 12.0809 27.1316C11.8893 26.9401 11.7386 26.7117 11.6377 26.4603C11.5367 26.2088 11.4878 25.9396 11.4938 25.6688C11.4938 23.6563 13.5688 23.6562 13.5688 23.6562" stroke="#25272C" stroke-width="2"/>
<path d="M15.5938 34.4625C16.8122 34.4625 17.8 33.4747 17.8 32.2562C17.8 31.0378 16.8122 30.05 15.5938 30.05C14.3753 30.05 13.3875 31.0378 13.3875 32.2562C13.3875 33.4747 14.3753 34.4625 15.5938 34.4625Z" stroke="#25272C" stroke-width="2"/>
<path d="M28.775 34.4625C29.9935 34.4625 30.9812 33.4747 30.9812 32.2562C30.9812 31.0378 29.9935 30.05 28.775 30.05C27.5565 30.05 26.5687 31.0378 26.5687 32.2562C26.5687 33.4747 27.5565 34.4625 28.775 34.4625Z" stroke="#25272C" stroke-width="2"/>
</svg>`;
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

// Footer: upper info
const footerUpper = document.createElement("div");
footerUpper.classList.add("footer-upper");

const footerLogo = document.createElement("div");
footerLogo.classList.add("logo");
footerLogo.classList.add("footer-logo");
footerLogo.textContent = "Logo";

const footerInfoContainter = document.createElement("div");
footerInfoContainter.classList.add("footer-info");

const policiesContainer = document.createElement("div");
policiesContainer.classList.add("footer-policies");
const policiesTitle = document.createElement("h4");
policiesTitle.textContent = "POLICIES";

const policiesText1 = document.createElement("div");
policiesText1.textContent = "Terms Of Use";
const policiesText2 = document.createElement("div");
policiesText2.textContent = "Privacy Policy";

policiesContainer.appendChild(policiesTitle);
policiesContainer.appendChild(policiesText1);
policiesContainer.appendChild(policiesText2);

const socialsContainer = document.createElement("div");
socialsContainer.classList.add("footer-socials");
const socialsTitle = document.createElement("h4");
socialsTitle.textContent = "SOCIALS";

const socialsText1 = document.createElement("a");
socialsText1.textContent = "Facebook";
socialsText1.href = "#";
const socialsText2 = document.createElement("a");
socialsText2.textContent = "Instagram";
socialsText2.href = "https://www.instagram.com/erickbgomez/";
socialsText2.target = "_blank";

const socialsText3 = document.createElement("a");
socialsText3.textContent = "X / Twitter";
socialsText3.href = "https://twitter.com/ErickBGomez";
socialsText3.target = "_blank";

const socialsText4 = document.createElement("a");
socialsText4.textContent = "LinkedIn";
socialsText4.href = "https://www.linkedin.com/in/erickbgomez/";
socialsText4.target = "_blank";

socialsContainer.appendChild(socialsTitle);
socialsContainer.appendChild(socialsText1);
socialsContainer.appendChild(socialsText2);
socialsContainer.appendChild(socialsText3);
socialsContainer.appendChild(socialsText4);

const contactContainer = document.createElement("div");
contactContainer.classList.add("footer-contact");
const contactTitle = document.createElement("h4");
contactTitle.textContent = "CONTACT";

const contactText1 = document.createElement("div");
contactText1.textContent =
  "Metrocentro, Calle Los Sisimiles, San Salvador, El Salvador";
const contactText2 = document.createElement("div");
contactText2.textContent = "+503 2222-2222";

contactContainer.appendChild(contactTitle);
contactContainer.appendChild(contactText1);
contactContainer.appendChild(contactText2);

footerInfoContainter.appendChild(policiesContainer);
footerInfoContainter.appendChild(socialsContainer);
footerInfoContainter.appendChild(contactContainer);

footerUpper.appendChild(footerLogo);
footerUpper.appendChild(footerInfoContainter);
footer.appendChild(footerUpper);

// Append containers to body
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);
