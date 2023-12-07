function createFooterInfo() {
  const footerInfoContainter = document.createElement("div");
  footerInfoContainter.classList.add("footer-info-container");

  const policiesContainer = document.createElement("div");
  policiesContainer.classList.add("footer-info");
  const policiesTitle = document.createElement("h4");
  policiesTitle.textContent = "POLICIES";

  const policiesText1 = document.createElement("a");
  policiesText1.textContent = "Terms Of Use";
  policiesText1.href = "#";
  const policiesText2 = document.createElement("a");
  policiesText2.textContent = "Privacy Policy";
  policiesText2.href = "#";

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

  return footerInfoContainter;
}

function createFooterLogo() {
  const footerLogo = document.createElement("div");
  footerLogo.className = "logo footer-logo";
  footerLogo.textContent = "Belén";

  return footerLogo;
}

function createFooterUpper() {
  const footerUpper = document.createElement("div");
  footerUpper.classList.add("footer-upper");

  footerUpper.appendChild(createFooterLogo());
  footerUpper.appendChild(createFooterInfo());

  return footerUpper;
}

function createFooterLower() {
  const footerLower = document.createElement("div");
  footerLower.className = "footer-lower";

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

  return footerLower;
}

export default function renderFooter() {
  const footer = document.createElement("footer");

  footer.appendChild(createFooterUpper());
  footer.appendChild(createFooterLower());

  document.body.appendChild(footer);
}
