const content = document.querySelector("#content");

const menu = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Crispy Calamari",
        description: "Fried calamari with marinara sauce",
        price: "$9.99",
      },
      {
        name: "Garlic Bread",
        description: "Toasted Italian bread with garlic butter",
        price: "$4.99",
      },
      {
        name: "Bruschetta",
        description:
          "Toasted bread topped with diced tomatoes, garlic, and basil",
        price: "$6.99",
      },
    ],
  },
  {
    category: "Entrees",
    items: [
      {
        name: "Spaghetti Carbonara",
        description: "Spaghetti with bacon, egg, and Parmesan cheese",
        price: "$12.99",
      },
      {
        name: "Chicken Alfredo",
        description: "Grilled chicken with fettuccine and Alfredo sauce",
        price: "$14.99",
      },
      {
        name: "Lasagna",
        description:
          "Layers of pasta with ground beef, ricotta, and mozzarella",
        price: "$13.99",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Tiramisu",
        description: "Layers of coffee-soaked ladyfingers and mascarpone cream",
        price: "$7.99",
      },
      {
        name: "Cheesecake",
        description:
          "Classic New York-style cheesecake with graham cracker crust",
        price: "$6.99",
      },
      {
        name: "Chocolate Cake",
        description:
          "Rich chocolate cake with layers of chocolate ganache and whipped cream",
        price: "$8.99",
      },
    ],
  },
];

export default function createMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menu.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryHeader = document.createElement("h3");
    categoryHeader.textContent = category.category;

    const itemList = document.createElement("ul");
    itemList.classList.add("item-list");

    category.items.forEach((item) => {
      const itemContainer = document.createElement("li");
      itemContainer.classList.add("item-container");

      const itemName = document.createElement("div");
      itemName.classList.add("dish-name");
      itemName.textContent = item.name;

      const itemDescription = document.createElement("div");
      itemDescription.classList.add("dish-description");
      itemDescription.textContent = item.description;

      const itemPrice = document.createElement("div");
      itemPrice.classList.add("dish-price");
      itemPrice.textContent = item.price;

      itemContainer.appendChild(itemName);
      itemContainer.appendChild(itemDescription);
      itemContainer.appendChild(itemPrice);
      itemList.appendChild(itemContainer);
    });

    categoryContainer.appendChild(categoryHeader);
    categoryContainer.appendChild(itemList);
    menuContainer.appendChild(categoryContainer);
  });

  content.appendChild(menuContainer);
}
