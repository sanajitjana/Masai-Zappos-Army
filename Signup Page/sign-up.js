let form = document.querySelector("form");
let loginArrayData = JSON.parse(localStorage.getItem("loginData")) || [];

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
  } else if (form.password.value != form.re_password.value) {
    alert("Incorrect Re-enter password");
  } else {
    //data store in object
    let dataObj = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      re_password: form.re_password.value,
    };
    //store all loginData to LS
    loginArrayData.push(dataObj);
    localStorage.setItem("loginData", JSON.stringify(loginArrayData));

    //clear form after submit
    form.name.value = "";
    form.email.value = "";
    form.password.value = "";
    form.re_password.value = "";
    alert("Welcome! Signup successful");

    // store loginAuth to LocalStorage
    localStorage.setItem("currentLogin", "true");
  }
});
