//fetch all data from LS
let totalItems = localStorage.getItem("totalQuantity") || "0";
let forsubtotal = localStorage.getItem("totalCartPrice");
let totalPrice =
  localStorage.getItem("totalCartPriceWithCupon") ||
  localStorage.getItem("totalCartPrice");
let discountamountLS = localStorage.getItem("discountAmount") || "0.00";

//display order summary
displayAll(totalItems, totalPrice);
function displayAll(totalItems, totalPrice) {
  let subtotalText = document.querySelector(".subtotalPrice");
  let orderTotal = document.querySelector(".order-total");
  let order_summary = document.querySelector(".order-summary");
  let cupon_discount = document.querySelector(".cupon-discount");
  order_summary.innerText = `Order Summary (${totalItems} Items)`;
  subtotalText.innerText = `$${forsubtotal}`;
  orderTotal.innerText = `$${totalPrice}`;
  cupon_discount.innerText = `$${discountamountLS}`;
}

//check cuponcode
let discountamount = 0;
let checkCupon = localStorage.getItem("cuponApply");
document.querySelector("#cupon-btn").addEventListener("click", function (e) {
  let cuponVal = document.querySelector("#cupon-code");
  if (checkCupon) {
    alert("Cupon already applied");
  } else if (cuponVal.value == "") {
    alert("Please enter the cupon");
  } else if (cuponVal.value == "masai30") {
    totalPrice = (totalPrice * 0.7).toFixed(2);
    discountamount = (forsubtotal - totalPrice).toFixed(2);
    localStorage.setItem("cuponApply", "true");
    localStorage.setItem("discountAmount", discountamount);
    localStorage.setItem("totalCartPriceWithCupon", totalPrice);
    window.location.reload();
  } else {
    alert("This is not correct cupon");
  }
});

if (checkCupon) {
  let value = document.querySelector(".discount");
  value.innerText = "Click on it remove cupon";
  value.style.color = "red";
  value.style.cursor = "pointer";
}
document.querySelector(".discount").addEventListener("click", function (e) {
  localStorage.removeItem("cuponApply");
  localStorage.removeItem("totalCartPriceWithCupon");
  localStorage.removeItem("discountAmount");
  window.location.reload();
});

let Orders = JSON.parse(localStorage.getItem("orders")) || [];
document.querySelector("#form-submit").addEventListener("click", function (e) {
  let username = document.querySelector("#name");
  let address = document.querySelector("#address");
  let phonenumber = document.querySelector("#phone");
  let cardname = document.querySelector("#nameoncard");
  let cardnumber = document.querySelector("#cardnumber");
  let expirydate = document.querySelector("#expirydate");
  let cvv = document.querySelector("#cvv");

  if (username.value == "") {
    alert("Please enter a name");
  } else if (address.value == "") {
    alert("Please enter a address");
  } else if (phonenumber.value == "") {
    alert("Please enter a phone number");
  } else if (cardname.value == "") {
    alert("Please enter name on card");
  } else if (cardnumber.value == "") {
    alert("Please enter card number");
  } else if (expirydate.value == "") {
    alert("Please enter expiry date");
  } else if (cvv.value == "") {
    alert("Please enter cvv");
  } else {
    let myObj = {
      username: username.value,
      address: address.value,
      phonenumber: phonenumber.value,
      cardname: cardname.value,
      cardnumber: cardnumber.value,
      expirydate: expirydate.value,
      cvv: cvv.value,
      totalItems: totalItems,
      totalPrice: totalPrice,
    };
    Orders.push(myObj);
    localStorage.setItem("orders", JSON.stringify(Orders));
    alert(
      username.value +
        ", your " +
        `$${totalPrice}` +
        " worth of order is received. You will send you the boxses soon!"
    );

    // clearform
    document.querySelector("#name").value = "";
    document.querySelector("#address").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#nameoncard").value = "";
    document.querySelector("#cardnumber").value = "";
    document.querySelector("#expirydate").value = "";
    document.querySelector("#cvv").value = "";

    // clear LS Data
    localStorage.removeItem("addToCartItems");
    localStorage.removeItem("totalCartPrice");
    localStorage.removeItem("cuponApply");
    localStorage.removeItem("totalCartPriceWithCupon");
    localStorage.removeItem("totalQuantity");
    localStorage.removeItem("discountAmount");
    window.location.href = "../index.html";
  }
});
