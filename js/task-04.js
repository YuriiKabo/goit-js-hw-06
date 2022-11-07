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
