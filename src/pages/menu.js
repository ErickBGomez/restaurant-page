function addDishCard(title, category, price) {
  const card = document.createElement("div");
  card.className = "dish-card";
  card.dataset.category = category;

  const image = document.createElement("div");
  image.className = "dish-image";

  const infoContainer = document.createElement("div");
  infoContainer.className = "info";

  const cardTitle = document.createElement("div");
  cardTitle.className = "title";
  cardTitle.textContent = title;

  const cardPrice = document.createElement("div");
  cardPrice.className = "price";
  cardPrice.textContent = price;

  const addCartButton = document.createElement("button");
  addCartButton.className = "add-cart";
  addCartButton.textContent = "Add To Cart";

  infoContainer.appendChild(cardTitle);
  infoContainer.appendChild(cardPrice);
  infoContainer.appendChild(addCartButton);

  card.appendChild(image);
  card.appendChild(infoContainer);

  return card;
}

function filterMenu(menu, filter = "all") {
  const dishGrid = menu.querySelector(".dish-grid");

  dishGrid.dataset.filter = filter.toLowerCase();

  for (const dish of dishGrid.childNodes) {
    dish.classList.remove("hidden");

    if (
      dish.dataset.category !== dishGrid.dataset.filter &&
      dishGrid.dataset.filter !== "all"
    ) {
      dish.classList.add("hidden");
    }
  }
}

function createDishContainer() {
  const container = document.createElement("div");
  container.className = "dish-container";

  const dishGrid = document.createElement("div");
  dishGrid.className = "dish-grid";

  // Replace this to selected menu tab
  dishGrid.appendChild(
    addDishCard("Huevos con frijoles", "breakfast", "$9.99")
  );
  dishGrid.appendChild(
    addDishCard("Platanos salcochados", "breakfast", "$4.30")
  );
  dishGrid.appendChild(addDishCard("Huevos rancheros", "breakfast", "$4.39"));
  dishGrid.appendChild(addDishCard("Casamiento", "breakfast", "$6.59"));
  dishGrid.appendChild(addDishCard("Sopa de pollo", "lunch", "$10.99"));
  dishGrid.appendChild(addDishCard("Carne a la plancha", "lunch", "$12.50"));
  dishGrid.appendChild(addDishCard("Lasaña", "lunch", "$8.50"));
  dishGrid.appendChild(addDishCard("Lonja empanizada", "lunch", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "lunch", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "lunch", "$9.99"));
  dishGrid.appendChild(addDishCard("Pupusas", "dinner", "$0.60"));
  dishGrid.appendChild(addDishCard("Riguas", "dinner", "$9.99"));
  dishGrid.appendChild(addDishCard("Nuegados", "desserts", "$3.65"));
  dishGrid.appendChild(addDishCard("Peperecha", "desserts", "$1.15"));
  dishGrid.appendChild(addDishCard("Semita", "desserts", "$2.67"));
  dishGrid.appendChild(addDishCard("Salpor", "desserts", "$1.98"));
  dishGrid.appendChild(addDishCard("Viejitas", "desserts", "$1.10"));
  dishGrid.appendChild(addDishCard("Café", "drinks", "$0.75"));
  dishGrid.appendChild(addDishCard("Chocolate", "drinks", "$0.80"));
  dishGrid.appendChild(addDishCard("Horchata", "drinks", "$1.00"));
  dishGrid.appendChild(addDishCard("Cebada", "drinks", "$1.15"));
  dishGrid.appendChild(addDishCard("Soda", "drinks", "$1.25"));

  container.appendChild(dishGrid);

  return container;
}

function addMenuTab(tabLabel) {
  const tab = document.createElement("div");
  tab.className = "tab";
  tab.dataset.tabCategory = tabLabel.toLowerCase();
  tab.textContent = tabLabel;

  return tab;
}

function createMenuTabs() {
  const tabs = document.createElement("div");
  tabs.className = "menu-tabs";

  tabs.appendChild(addMenuTab("All"));
  tabs.appendChild(addMenuTab("Breakfast"));
  tabs.appendChild(addMenuTab("Lunch"));
  tabs.appendChild(addMenuTab("Dinner"));
  tabs.appendChild(addMenuTab("Desserts"));
  tabs.appendChild(addMenuTab("Drinks"));

  return tabs;
}

export default function renderMenu() {
  const menu = document.createElement("div");
  menu.id = "menu";

  menu.appendChild(createMenuTabs());
  menu.appendChild(createDishContainer());

  filterMenu(menu);

  addMenuTabEvents(menu);

  return menu;
}

function addMenuTabEvents(menu) {
  const menuTabs = menu.querySelectorAll(".menu-tabs .tab");

  for (const tab of menuTabs) {
    tab.addEventListener("click", (e) =>
      filterMenu(menu, e.target.dataset.tabCategory)
    );
  }
}
