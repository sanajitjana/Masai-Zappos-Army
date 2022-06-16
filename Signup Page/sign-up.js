let form = document.querySelector("form");
let loginArrayData = JSON.parse(localStorage.getItem("signupData")) || [];

//fetch previous email for checking it already exits or not
let emailObj = {};
loginArrayData.forEach(function (ele) {
  emailObj[ele.email] = 1;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   form validation
  if (form.name.value == "") {
    alert("Please enter a name");
  } else if (form.email.value == "") {
    alert("Please enter a email");
  } else if (form.password.value == "") {
    alert("Please enter a password");
  } else if (form.re_password.value == "") {
    alert("Please enter re_password");
  } else if (
    form.password.value.length < 6 ||
    form.re_password.value.length < 6
  ) {
    alert("Passwords must be at least 6 characters");
  } else if (form.password.value != form.re_password.value) {
    alert("Incorrect Re-enter password");
  } else if (form.email.value in emailObj) {
    alert("Email already exists");
  } else {
    let dataObj = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      re_password: form.re_password.value,
    };
    //store all signupData to LS
    loginArrayData.push(dataObj);
    localStorage.setItem("signupData", JSON.stringify(loginArrayData));

    //clear form after submit
    form.name.value = "";
    form.email.value = "";
    form.password.value = "";
    form.re_password.value = "";
    alert("Welcome! Signup successful");
  }
});
