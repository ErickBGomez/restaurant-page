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

function filterMenu(dishGrid, filter = "all") {
  dishGrid.dataset.filter = filter.toLowerCase();

  if (filter !== "all") {
    for (const dish of dishGrid.childNodes) {
      dish.classList.add("hidden");

      if (dish.dataset.category === dishGrid.dataset.filter) {
        dish.classList.remove("hidden");
      }
    }
  }
}

function createDishContainer() {
  const container = document.createElement("div");
  container.className = "dish-container";

  const dishGrid = document.createElement("div");
  dishGrid.className = "dish-grid";

  // Replace this to selected menu tab
  dishGrid.appendChild(addDishCard("Dish title", "breakfast", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "breakfast", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "breakfast", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "breakfast", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "lunch", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "lunch", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "lunch", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "lunch", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "dinner", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "dinner", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "dinner", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "dessert", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "dessert", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "dessert", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "dessert", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "drinks", "$9.99"));
  dishGrid.appendChild(addDishCard("Dish title", "drinks", "$9.99"));

  filterMenu(dishGrid, "breakfast");

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

  return menu;
}
