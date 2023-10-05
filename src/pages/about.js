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

  const image = document.createElement("div");
  image.className = "about-us-image";

  container.appendChild(text);
  container.appendChild(image);

  return container;
}

export default function renderAbout() {
  const about = document.createElement("div");

  about.appendChild(createAboutUs());

  return about;
}
