function addTab(tabLabel) {
  const tab = document.createElement("div");
  tab.className = "tab";
  tab.textContent = tabLabel;

  return tab;
}

function createMenuTabs() {
  const tabs = document.createElement("div");
  tabs.className = "menu-tabs";

  const allTab = document.createElement("div");

  tabs.appendChild(addTab("All"));
  tabs.appendChild(addTab("Breakfast"));
  tabs.appendChild(addTab("Lunch"));
  tabs.appendChild(addTab("Dinner"));
  tabs.appendChild(addTab("Desserts"));
  tabs.appendChild(addTab("Drinks"));

  return tabs;
}

export default function renderMenu() {
  const menu = document.createElement("div");
  menu.id = "menu";

  menu.appendChild(createMenuTabs());

  return menu;
}
