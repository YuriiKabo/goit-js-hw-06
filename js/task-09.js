const bodyColor = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}
