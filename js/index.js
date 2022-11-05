(() => {
  const refs = {
    toggleBtn: document.querySelector("[js-toggle__button]"),
    redCont: document.querySelector("[js-cont]"),
    body: document.querySelector("body"),
  };

  refs.toggleBtn.addEventListener("click", toggleStyleDiv);

  function toggleStyleDiv() {
    refs.redCont.classList.toggle("cont__green");
  }
})();
