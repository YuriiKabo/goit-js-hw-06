function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const colorValue = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}
