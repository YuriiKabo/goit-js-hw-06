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
  const createLi = document.createElement("li");
  createLi.classList.add("item");
  createLi.textContent = ingredient;
  return createLi;
});

ingredientList.append(...createItems);
