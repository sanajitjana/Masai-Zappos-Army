//fetch cartData from LS
let cartData = JSON.parse(localStorage.getItem("addToCartItems")) || [];
let tbody = document.querySelector(".tbody");

dataDisplay(cartData);
function dataDisplay(data) {
  data.forEach(function (item) {
    let row = document.createElement("div");
    row.className = "trow";

    let leftside = document.createElement("div");
    leftside.className = "leftside";

    let img = document.createElement("img");
    img.setAttribute("src", item.img_url);

    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.innerText = item.name;

    let h3 = document.createElement("h3");
    h3.innerText = item.sub_name;

    let color = document.createElement("p");
    color.innerText = item.color;

    let size = document.createElement("p");
    size.innerText = "item.size";

    div.append(h4, h3, color), size;
    leftside.append(img, div);

    let rightside = document.createElement("div");
    rightside.className = "rightside";
    let table_acc = document.createElement("div");
    table_acc.className = "table-action";

    let h1 = document.createElement("h1");
    h1.innerText = item.price;

    let mrp = document.createElement("h3");
    mrp.innerText = item.mrp;

    let selectTag = document.createElement("select");

    let option2 = document.createElement("option");
    option2.innerText = "1";
    option2.value = "1";

    let option3 = document.createElement("option");
    option3.innerText = "2";
    option3.value = "2";

    let option4 = document.createElement("option");
    option4.innerText = "3";
    option4.value = "3";

    let option5 = document.createElement("option");
    option5.innerText = "4";
    option5.value = "4";

    let option6 = document.createElement("option");
    option6.innerText = "5";
    option6.value = "5";

    let option7 = document.createElement("option");
    option7.innerText = "6";
    option7.value = "6";

    let option8 = document.createElement("option");
    option8.innerText = "7";
    option8.value = "7";
    selectTag.append(
      option2,
      option3,
      option4,
      option5,
      option6,
      option7,
      option8
    );
    let anqarTarg = document.createElement("a");
    anqarTarg.innerText = "Remove";
    table_acc.append(h1, mrp, selectTag, anqarTarg);
    rightside.append(table_acc);
    row.append(leftside, rightside);
    tbody.append(row);

    console.log(row);
  });
}

//check out button click
document.querySelector(".chek-btn").addEventListener("click", goToCheckout);
function goToCheckout() {
  window.location.href = "../checkoutPage/checkout.html";
}
