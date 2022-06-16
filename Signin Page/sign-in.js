let form = document.querySelector("form");
let datafromLS = JSON.parse(localStorage.getItem("zapposData")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = {
    email: form.email.value,
    password: form.password.value,
  };
  if (checkSignIn(data.email, data.password) === true) {
    localStorage.setItem("signIn", JSON.stringify(data));
    alert("Sign In Successfull");
  } else {
    alert("wrong Username Or password");
  }
});

function checkSignIn(email, password) {
  let filtered = datafromLS.filter(function (element) {
    return element.email === email && element.password == password;
  });
  if (filtered.length > 0) {
    return true;
  } else {
    return false;
  }
}
