// ---------- Завдання 1 -----------
// const catList = document.querySelectorAll(".item");
// console.log("Number of categories: ", catList.length);
// for (const catItem of catList) {
//   console.log("Category: ", catItem.firstElementChild.textContent);
//   const subCatList = catItem.lastElementChild;
//   console.log("Elements: ", subCatList.childElementCount);
// }

// ---------- Завдання 2 -----------

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const body = document.querySelector("body");

// const ingredientList = document.createElement("ul");
// ingredientList.id = "ingredients";
// body.firstElementChild.after(ingredientList);

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientItem = document.createElement("li");
//   ingredientItem.textContent = ingredients[i];
//   ingredientItem.class = "item";
//   ingredientList.append(ingredientItem);
// }

// ---------- Завдання 3 -----------

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
// const galleryList = document.querySelector(".gallery");
// const markup = images
//   .map(
//     (img) =>
//       `<li class="gallery__item"><img class="gallery__img" src = ${img.url} alt = ${img.ait}></li>`
//   )
//   .join("");
// galleryList.insertAdjacentHTML("beforeend", markup);

// ---------- Завдання 4 -----------

// const refs = {
//   valueNumber: document.querySelector("#value"),
//   decrementBtn: document.querySelector('button[data-action="decrement"]'),
//   incrementBtn: document.querySelector('button[data-action="increment"]'),
//   counterValue: 0,
// };

// const removeNum = () => {
//   refs.counterValue -= 1;
//   return (refs.valueNumber.textContent = refs.counterValue);
// };
// const addNum = () => {
//   refs.counterValue += 1;
//   return (refs.valueNumber.textContent = refs.counterValue);
// };
// refs.decrementBtn.addEventListener("click", removeNum);
// refs.incrementBtn.addEventListener("click", addNum);

// ---------- Завдання 5 -----------
