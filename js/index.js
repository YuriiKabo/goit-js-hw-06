// ---------- Завдання 1 -----------
const catList = document.querySelectorAll(".item");
console.log("Number of categories: ", catList.length);
console.log("");
for (const catItem of catList) {
  console.log("Category: ", catItem.firstElementChild.textContent);

  const subCatList = catItem.lastElementChild;
  console.log("Elements: ", subCatList.childElementCount);
  console.log("");
}

// ---------- Завдання 2 -----------

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

// ---------- Завдання 3 -----------

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryList = document.querySelector(".gallery");
const markup = images
  .map(
    (img) =>
      `<li class="gallery__item"><img class="gallery__img" src = ${img.url} alt = ${img.ait}></li>`
  )
  .join("");
galleryList.insertAdjacentHTML("beforeend", markup);

// ---------- Завдання 4 -----------

const refs = {
  valueNumber: document.querySelector("#value"),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  counterValue: 0,
};

const removeNum = () => {
  refs.counterValue -= 1;
  return (refs.valueNumber.textContent = refs.counterValue);
};
const addNum = () => {
  refs.counterValue += 1;
  return (refs.valueNumber.textContent = refs.counterValue);
};
refs.decrementBtn.addEventListener("click", removeNum);
refs.incrementBtn.addEventListener("click", addNum);

// ---------- Завдання 5 -----------
const refsAn = {
  inputText: document.querySelector("#name-input"),
  outputText: document.querySelector("#name-output"),
};

refsAn.inputText.addEventListener("input", (event) => {
  refsAn.inputText.value.length === 0
    ? (refsAn.outputText.textContent = "Anonymous")
    : (refsAn.outputText.textContent = event.currentTarget.value);
});

// ---------- Завдання 6 -----------
const validInput = document.querySelector("#validation-input");
const dataValue = Number(validInput.dataset.length);

validInput.addEventListener("blur", changeClass);

function changeClass(event) {
  if (event.currentTarget.value.length === 0) {
    validInput.classList.remove("invalid");
    validInput.classList.remove("valid");
  } else if (event.currentTarget.value.length === dataValue) {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
  } else if (event.currentTarget.value.length !== dataValue) {
    validInput.classList.add("invalid");
    validInput.classList.remove("valid");
  }
}

// ---------- Завдання 7 -----------

const rangeInput = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

rangeInput.addEventListener("input", (event) => {
  textSize.style.fontSize = `${event.currentTarget.value}px`;
});

// ---------- Завдання 8 -----------

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля мають бути заповнени!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

// ---------- Завдання 9 -----------

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const colorValue = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}
