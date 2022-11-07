const rangeInput = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

rangeInput.addEventListener("input", (event) => {
  textSize.style.fontSize = `${event.currentTarget.value}px`;
});
