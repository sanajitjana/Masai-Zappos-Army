let list = document.querySelector("#a1");
let button = document.querySelectorAll("#curser>button");
let tagNum = 0;
let arrayofAtag = [
  "Introducing Afterpay! Buy now, pay later. No Interest, ever! Learn More",
  "FREE 365 Day Returns and Exchanges! ",
  "Be the first to shop the newest home styles—now on Zappos! Shop Home Now",
  "Father's Day is June 19! Shop Father's Day Gifts",
];
button[0].addEventListener("click", function () {
  if (tagNum === 0) {
    tagNum = arrayofAtag.length - 1;
  } else {
    tagNum--;
  }
  list.innerText = arrayofAtag[tagNum];
});
button[1].addEventListener("click", function () {
  if (tagNum === arrayofAtag.length - 1) {
    tagNum = 0;
  } else {
    tagNum++;
  }
  list.innerText = arrayofAtag[tagNum];
});

//check user login or not
let currentLogin = localStorage.getItem("currentLogin");
let firstName = localStorage.getItem("currentUserName");
if (currentLogin != null) {
  let word = document.querySelector("#lastlogo");
  word.innerText = `${firstName} (Logout)`;
}

let signin = document
  .querySelector("#lastlogo")
  .addEventListener("click", function () {
    window.location.href = "../signinPage/sign-in.html";
  });

//logout function
let cURL = window.location.href;
if (currentLogin) {
  document.querySelector("#lastlogo").addEventListener("click", function (e) {
    let text = "Are you sure you want to log out?";
    if (confirm(text) == true) {
      localStorage.removeItem("currentLogin");
      localStorage.removeItem("currentUserName");
      window.location.href = "../index.html";
    } else {
      window.location.href = cURL;
    }
  });
}

//cart item count
let cartItems = JSON.parse(localStorage.getItem("addToCartItems")) || [];
let cartCount = cartItems.length;

//cart button
let cartBtn = document
  .querySelector(".h-z")
  .addEventListener("click", function (e) {
    if (currentLogin) {
      if (cartCount < 1) {
        alert("You need minimum one item to go inside cart");
      } else {
        window.location.href = "../cartPage/cart.html";
      }
    } else {
      alert("You must be logged in to view the cart page");
    }
  });
