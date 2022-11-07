const refsAn = {
  inputText: document.querySelector("#name-input"),
  outputText: document.querySelector("#name-output"),
};

refsAn.inputText.addEventListener("input", (event) => {
  refsAn.inputText.value.length === 0
    ? (refsAn.outputText.textContent = "Anonymous")
    : (refsAn.outputText.textContent = event.currentTarget.value);
});
