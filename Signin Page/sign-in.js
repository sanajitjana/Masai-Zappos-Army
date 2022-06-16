let form = document.querySelector("form");
let loginData = JSON.parse(localStorage.getItem("signupData")) || [];

//fetch signupData for validation
let loginObj = {};
loginData.forEach(function (ele) {
  loginObj[ele.email] = ele.password;
});

form.addEventListener("submit", loginFunction);
function loginFunction(event) {
  event.preventDefault();
  if (form.email.value == "") {
    alert("Please enter a email");
  } else if (form.password.value == "") {
    alert("Please enter a password");
  } else if (
    form.email.value in loginObj &&
    form.password.value == loginObj[form.email.value]
  ) {
    alert("Welcome! Sign-In successful");
    window.location.href = "../index.html";

    //form clear after submit
    form.email.value = "";
    form.password.value = "";

    // store loginAuth to LocalStorage
    localStorage.setItem("currentLogin", "true");
  } else {
    alert("Please enter a correct details");
  }
}
