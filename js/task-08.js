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

  const formDataObj = {};
  formDataObj.email = email.value;
  formDataObj.password = password.value;
  console.log(formDataObj);
  event.currentTarget.reset();
}
