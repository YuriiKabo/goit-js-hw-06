const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");

const createItems = ingredients.map((ingredient) => {
  const createItem = document.createElement("li");
  createItem.classList.add("item");
  createItem.textContent = ingredient;
  return createItem;
});

ingredientList.append(...createItems);
