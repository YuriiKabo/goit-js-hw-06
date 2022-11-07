const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const body = document.querySelector("body");

const ingredientList = document.createElement("ul");
ingredientList.id = "ingredients";
body.firstElementChild.after(ingredientList);

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredients[i];
  ingredientItem.class = "item";
  ingredientList.append(ingredientItem);
}
