let form = document.querySelector("form");
let loginData = JSON.parse(localStorage.getItem("signupData")) || [];

//fetch signupData for validation
let loginObj = {};
let nameObj = {};
loginData.forEach(function (ele) {
  loginObj[ele.email] = ele.password;
  nameObj[ele.email] = ele.name;
});
form.addEventListener("submit", loginFunction);
function loginFunction(event) {
  event.preventDefault();
  if (form.email.value == "") {
    alert("Please enter a email");
  } else if (form.password.value == "") {
    alert("Please enter a password");
  } else if (!(form.email.value in loginObj)) {
    alert("You need to signup first");
  } else if (
    form.email.value in loginObj &&
    form.password.value == loginObj[form.email.value]
  ) {
    let userName = nameObj[form.email.value];
    alert("Welcome! Sign-In successful");
    window.location.href = "../index.html";

    //form clear after submit
    form.email.value = "";
    form.password.value = "";

    // store loginAuth to LocalStorage
    localStorage.setItem("currentLogin", "true");
    userName = userName.split(" ");
    let firstName = userName[0];
    localStorage.setItem("currentUserName", firstName);
  } else {
    alert("Please enter correct details");
  }
}

document.querySelector("#logo").addEventListener("click", function (event) {
  window.location.href = "../index.html";
});
