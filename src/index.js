import "./style.css";
import renderHeader from "./pages/header.js";

// Header: User and cart

// Append to header
renderHeader();

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
footerInfoContainter.classList.add("footer-info-container");

const policiesContainer = document.createElement("div");
policiesContainer.classList.add("footer-info");
const policiesTitle = document.createElement("h4");
policiesTitle.textContent = "POLICIES";

const policiesText1 = document.createElement("p");
policiesText1.textContent = "Terms Of Use";
const policiesText2 = document.createElement("p");
policiesText2.textContent = "Privacy Policy";

policiesContainer.appendChild(policiesTitle);
policiesContainer.appendChild(policiesText1);
policiesContainer.appendChild(policiesText2);

const socialsContainer = document.createElement("div");
socialsContainer.classList.add("footer-info");
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
contactContainer.classList.add("footer-info");
const contactTitle = document.createElement("h4");
contactTitle.textContent = "CONTACT";

const contactText1 = document.createElement("p");
contactText1.textContent =
  "Metrocentro, Calle Los Sisimiles, San Salvador, El Salvador";
const contactText2 = document.createElement("p");
contactText2.textContent = "+503 2222-2222";

contactContainer.appendChild(contactTitle);
contactContainer.appendChild(contactText1);
contactContainer.appendChild(contactText2);

footerInfoContainter.appendChild(policiesContainer);
footerInfoContainter.appendChild(socialsContainer);
footerInfoContainter.appendChild(contactContainer);

footerUpper.appendChild(footerLogo);
footerUpper.appendChild(footerInfoContainter);

const footerLower = document.createElement("div");
footerLower.classList.add("footer-lower");

const copyright = document.createElement("p");
copyright.textContent = "Copyright © 2023. All Rights Reserved";

const authorFooter = document.createElement("p");
authorFooter.textContent = "Made by ";
const authorLink = document.createElement("a");
authorLink.textContent = "Erick B. Gómez";
authorLink.href = "https://github.com/ErickBGomez";
authorLink.target = "_blank";

authorFooter.appendChild(authorLink);

footerLower.appendChild(copyright);
footerLower.appendChild(authorFooter);

footer.appendChild(footerUpper);
footer.appendChild(footerLower);

// Append containers to body
document.body.appendChild(content);
document.body.appendChild(footer);
