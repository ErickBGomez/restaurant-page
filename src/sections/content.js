import renderHome from "../pages/home.js";
import renderMenu from "../pages/menu.js";
import renderAbout from "../pages/about.js";

export default function renderContent() {
  const content = document.createElement("div");
  content.id = "content";

  document.body.appendChild(content);

  changeContent("home");

  tabsEvent();
}

function tabsEvent() {
  const tabs = document.querySelectorAll(".header-tabs .tab");

  for (const tab of tabs) {
    tab.addEventListener("click", (e) =>
      changeContent(e.target.dataset.contentTarget)
    );
  }
}

function changeContent(newContent) {
  const content = document.querySelector("#content");
  const tabs = document.querySelectorAll(".tab");
  let callback;

  content.innerHTML = "";

  // Set content callback function depending of newContent value
  if (newContent == "home") {
    callback = renderHome;
  } else if (newContent == "menu") {
    callback = renderMenu;
  } else if (newContent == "about") {
    callback = renderAbout;
  }

  // Set active tab when invoking function
  for (const tab of tabs) {
    tab.classList.remove("selected");
    if (tab.dataset.contentTarget == newContent) tab.classList.add("selected");
  }

  content.appendChild(callback());
}
