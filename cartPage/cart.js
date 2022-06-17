let data = JSON.parse(localStorage.getItem("cdata")); //enter local storage array inside get item and go bellow
display(data);
let pr = 0;
count = 0;
displayr(data, pr, count);

function display(cdata) {
  let mdiv = document.querySelector("#mdiv");
  mdiv.innerHTML = "";
  // mdiv.createElement("p").innerText="item"
  // mdiv.createElement("p").innerText="price/quantity"
  cdata.forEach(function (el) {
    let mdiv = document.querySelector("#mdiv");
    let div = document.createElement("div");
    let ldiv = document.createElement("div");
    ldiv.setAttribute("id", "ldiv");
    let rdiv = document.createElement("div");
    rdiv.setAttribute("id", "rdiv");
    let img1 = document.createElement("img");
    img1.src = el.img_url;
    let bname = document.createElement("p");
    bname.innerText = el.brand;
    let subname = document.createElement("p");
    subname.innerText = el.sub_name;
    let color = document.createElement("p");
    color.innerText = "color= " + el.color;
    ldiv.append(bname, subname, color);
    let price = document.createElement("h2");
    price.innerText = "$" + el.price;
    price.style.color = "#035d59";
    let delet = document.createElement("button");
    delet.innerText = "REMOVE";
    delet.setAttribute("id", "removebutton");
    delet.addEventListener("click", function () {
      delcart(el);
    });
    let selct = document.createElement("select");
    selct.addEventListener("change", function () {
      selfunc(el);
    });
    // selct.setAttribute("id","dropdown")
    selct.style.marginLeft = "3.5em";
    selct.style.marginBottom = "1em";
    let op0 = document.createElement("option");
    op0.innerText = "REMOVE";
    op0.value = "del";
    let op1 = document.createElement("option");
    op1.innerText = 1;
    op1.value = 1;
    op1.selected = "selected";
    let op2 = document.createElement("option");
    op2.innerText = 2;
    op2.value = 2;
    let op3 = document.createElement("option");
    op3.innerText = 3;
    op3.value = 3;
    selct.append(op0, op1, op2, op3);
    selct.style.display = "block";
    rdiv.append(price, selct, delet);
    div.append(img1, ldiv, rdiv);
    mdiv.append(div);
  });
}

function delcart(el) {
  let filtered = data.filter(function (elem) {
    return elem.name != el.name;
  });
  localStorage.setItem("cdata", JSON.stringify(filtered)); // do same changes here
  window.location.reload();
  display(filtered);
}

function displayr(data, pr, count) {
  for (k = 0; k < data.length; k++) {
    pr = pr + Number(data[k].price);
    count++;
  }
  document.querySelector("#h1item").innerText =
    "Cart Summary " + count + " items";
  document.querySelector("#genitem").innerText =
    "Subtotal (" + count + " items)";
  document.querySelector("#genitm").innerText = "$" + pr;
  // console.log(pr)
}

function selfunc(el) {
  let x = event.target.value;
  if (x === "del") {
    delcart(el);
  } else {
    let count = +x;
    let pr = +el.price * (count - 1);
    displayr(data, pr, count);
  }
}
