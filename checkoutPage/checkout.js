let totalItems = localStorage.getItem("totalQuantity") || "0";
let totalPrice = localStorage.getItem("totalCartPrice") || "0";

displayAll(totalItems, totalPrice);
function displayAll(totalItems, totalPrice) {
  let subtotalText = document.querySelector(".subtotalPrice");
  let orderTotal = document.querySelector(".order-total");
  let order_summary = document.querySelector(".order-summary");
  order_summary.innerText = `Order Summary (${totalItems} Items)`;
  subtotalText.innerText = `$${totalPrice}`;
  orderTotal.innerText = `$${totalPrice}`;
}

let checkCupon = localStorage.getItem("cuponApply");
document.querySelector("#cupon-btn").addEventListener("click", function (e) {
  if (checkCupon) {
    alert("Cupon already applied");
  } else {
    totalPrice = (totalPrice * 0.7).toFixed(2);
    displayAll(totalItems, totalPrice);
    localStorage.setItem("cuponApply", "true");
    window.location.reload();
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
  window.location.reload();
});
