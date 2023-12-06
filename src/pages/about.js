import contact1Svg from "../img/about/contact1.svg";
import contact2Svg from "../img/about/contact2.svg";
import contact3Svg from "../img/about/contact3.svg";
import delivery1Svg from "../img/about/delivery1.svg";
import delivery2Svg from "../img/about/delivery2.svg";
import aboutUsPng from "../img/about/about-us.png";
import ourHistoryPng from "../img/about/our-history.png";

function addContactInfo(icon, text) {
  const info = document.createElement("div");
  info.className = "contact-info";

  const infoIcon = new Image();
  infoIcon.src = icon;

  const infoText = document.createElement("p");
  infoText.textContent = text;

  info.appendChild(infoIcon);
  info.appendChild(infoText);

  return info;
}

function createContact() {
  const container = document.createElement("div");
  container.classList = "contact-container";

  const titles = document.createElement("div");
  titles.className = "section-titles contact-title";

  const title = document.createElement("h3");
  title.textContent = "Contact";
  const subtitle = document.createElement("h1");
  subtitle.textContent = "Where you can find us";

  titles.appendChild(title);
  titles.appendChild(subtitle);

  const grid = document.createElement("div");
  grid.classList = "contact-grid";

  const infoContainer = document.createElement("div");
  infoContainer.className = "contact-info-container";

  infoContainer.appendChild(
    addContactInfo(
      contact1Svg,
      "Metrocentro, Calle Los Sisimiles, San Salvador, El Salvador."
    )
  );
  infoContainer.appendChild(addContactInfo(contact2Svg, "+503 2222-2222"));
  infoContainer.appendChild(addContactInfo(contact3Svg, "6:00 am - 10:00 pm"));

  const delivery = document.createElement("div");
  delivery.classList = "delivery-container";

  const deliveryText = document.createElement("p");
  deliveryText.textContent = "Also available on:";

  const deliveryIcons = document.createElement("div");
  deliveryIcons.classList = "delivery-icons";

  const deliveryIcon1 = new Image();
  deliveryIcon1.src = delivery1Svg;
  const deliveryIcon2 = new Image();
  deliveryIcon2.src = delivery2Svg;

  deliveryIcons.appendChild(deliveryIcon1);
  deliveryIcons.appendChild(deliveryIcon2);

  delivery.appendChild(deliveryText);
  delivery.appendChild(deliveryIcons);

  const map = document.createElement("div");
  map.classList = "contact-map";
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2011900486755!2d-89.21421542408206!3d13.706261386680909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63312cffdc0e23%3A0xfd208b3a87cfb4d9!2sMetrocentro%20San%20Salvador!5e0!3m2!1sen!2ssv!4v1701823342557!5m2!1sen!2ssv" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  grid.appendChild(infoContainer);
  grid.appendChild(delivery);
  grid.appendChild(map);

  container.appendChild(titles);
  container.appendChild(grid);

  return container;
}

function createHorizontalDivisor() {
  const divisor = document.createElement("div");
  divisor.className = "horizontal-divisor";

  return divisor;
}

function createOurHistory() {
  const container = document.createElement("div");
  container.className = "our-history-container";

  const text = document.createElement("div");
  text.className = "our-history-text";

  const titles = document.createElement("div");
  titles.className = "section-titles";

  const title = document.createElement("h3");
  title.textContent = "Our History";
  const subtitle = document.createElement("h1");
  subtitle.textContent = "How Everything Started";

  titles.appendChild(title);
  titles.appendChild(subtitle);

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet consectetur. Diam diam ornare nunc scelerisque amet. Eget nulla pellentesque vivamus ut a. Fermentum cursus praesent tempus condimentum ullamcorper risus nulla vulputate. Convallis dui tincidunt mattis faucibus purus egestas eu diam eget.";

  text.appendChild(titles);
  text.appendChild(description);

  const image = new Image();
  image.src = ourHistoryPng;
  image.classList = "our-history-image";

  container.appendChild(text);
  container.appendChild(image);

  return container;
}

function createAboutUs() {
  const container = document.createElement("div");
  container.className = "about-us-container";

  const text = document.createElement("div");
  text.className = "about-text";

  const titles = document.createElement("div");
  titles.className = "section-titles";

  const title = document.createElement("h3");
  title.textContent = "About Us";
  const subtitle = document.createElement("h1");
  subtitle.textContent = "Know Our Passions";

  titles.appendChild(title);
  titles.appendChild(subtitle);

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet consectetur. Diam diam ornare nunc scelerisque amet. Eget nulla pellentesque vivamus ut a. Fermentum cursus praesent tempus condimentum ullamcorper risus nulla vulputate. Convallis dui tincidunt mattis faucibus purus egestas eu diam eget.";

  text.appendChild(titles);
  text.appendChild(description);

  const image = new Image();
  image.src = aboutUsPng;
  image.className = "about-us-image";

  container.appendChild(text);
  container.appendChild(image);

  return container;
}

export default function renderAbout() {
  const about = document.createElement("div");

  about.appendChild(createAboutUs());
  about.appendChild(createOurHistory());
  about.appendChild(createHorizontalDivisor());
  about.appendChild(createContact());

  return about;
}
