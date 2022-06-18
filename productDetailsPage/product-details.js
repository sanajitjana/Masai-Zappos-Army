let recommendedArr = [
  {
    img: "https://m.media-amazon.com/images/I/71oH5zWceUL._AC_SX272_.jpg",
    itemBrand: "Hoka",
    itemName: "Bondi 7",
    itemPrice: "$159.95",
  },

  {
    img: "https://m.media-amazon.com/images/I/71shlRc-s2L._AC_SX272_.jpg",
    itemBrand: "Hoka",
    itemName: "Rincon 3",
    itemPrice: "$124.95",
  },

  {
    img: "https://m.media-amazon.com/images/I/714zH-abvsL._AC_SX272_.jpg",
    itemBrand: "Hoka",
    itemName: "Mach 4",
    itemPrice: "$103.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/71obJTJE8IL._AC_SX272_.jpg",
    itemBrand: "Hoka",
    itemName: "Arahi 6",
    itemPrice: "$139.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/71yXZq+cyAL._AC_SX272_.jpg",
    itemBrand: "Brooks",
    itemName: "Ghost 14",
    itemPrice: "$139.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/71Eh5ytEWVL._AC_SX272_.jpg",
    itemBrand: "Brooks",
    itemName: "Adrenaline GTS 22",
    itemPrice: "$139.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/71RNVpTkg9L._AC_SX272_.jpg",
    itemBrand: "Hoka",
    itemName: "Clifton Edge",
    itemPrice: "$124.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/7147gsUCMiL._AC_SX272_.jpg",
    itemBrand: "On",
    itemName: "Cloud 5",
    itemPrice: "$139.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/71FU9+fEmlL._AC_SX272_.jpg",
    itemBrand: "Brooks",
    itemName: "Glycerin 19",
    itemPrice: "$119.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/61JY4Wu-vTL._AC_SX272_.jpg",
    itemBrand: "Hoka",
    itemName: "Bondi SR",
    itemPrice: "$174.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/818CsDzZFnL._AC_SX272_.jpg",
    itemBrand: "Brooks",
    itemName: "Adrenaline GTS 21",
    itemPrice: "$109.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/81nj9uGDnTS._AC_SX272_.jpg",
    itemBrand: "ASICS",
    itemName: "GEL-Cumulus 23",
    itemPrice: "$109.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/81CuS4yV0WL._AC_SX272_.jpg",
    itemBrand: "Brooks",
    itemName: "Trace",
    itemPrice: "$79.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/71z5XGutr9L._AC_SX272_.jpg",
    itemBrand: "Hoka",
    itemName: "Gaviota 4",
    itemPrice: "$169.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/810llQt3PRL._AC_SX272_.jpg",
    itemBrand: "New Balance",
    itemName: "Fresh Foam 1080v11",
    itemPrice: "$149.95",
  },
];

customerviewed(recommendedArr);
function customerviewed(recommendedArr) {
  let id1 = document.getElementById("1");
  let id1a = id1.querySelector("a");
  let id2 = document.getElementById("2");
  let id3 = document.getElementById("3");

  for (let i = 0; i < 5; i++) {
    let parenttag = document.createElement("div");
    parenttag.setAttribute("class", "media-element");
    let image = document.createElement("img");
    image.setAttribute("src", recommendedArr[i].img);

    let brand = document.createElement("h1");
    brand.innerText = recommendedArr[i].itemBrand;
    let Name = document.createElement("h2");
    Name.innerText = recommendedArr[i].itemName;
    let price = document.createElement("p");
    price.innerText = recommendedArr[i].itemPrice;

    parenttag.append(image, brand, Name, price);
    id1.insertBefore(parenttag, id1.firstChild);
  }
  for (let i = 5; i < 10; i++) {
    let parenttag = document.createElement("div");
    parenttag.setAttribute("class", "media-element");
    let image = document.createElement("img");
    image.setAttribute("src", recommendedArr[i].img);

    let brand = document.createElement("h1");
    brand.innerText = recommendedArr[i].itemBrand;
    let Name = document.createElement("h2");
    Name.innerText = recommendedArr[i].itemName;
    let price = document.createElement("p");
    price.innerText = recommendedArr[i].itemPrice;

    parenttag.append(image, brand, Name, price);
    id2.insertBefore(parenttag, id2.firstChild);
  }
  for (let i = 10; i < recommendedArr.length; i++) {
    let parenttag = document.createElement("div");
    parenttag.setAttribute("class", "media-element");
    let image = document.createElement("img");
    image.setAttribute("src", recommendedArr[i].img);

    let brand = document.createElement("h1");
    brand.innerText = recommendedArr[i].itemBrand;
    let Name = document.createElement("h2");
    Name.innerText = recommendedArr[i].itemName;
    let price = document.createElement("p");
    price.innerText = recommendedArr[i].itemPrice;

    parenttag.append(image, brand, Name, price);
    id3.insertBefore(parenttag, id3.firstChild);
  }
}

function myfun() {
  let x = document.querySelector("div>.clickimg");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.backgroundColor = "#f4f4f4";
    document.querySelector(".highlight").style.marginBottom = "10em";
  } else {
    x.style.display = "none";
    document.querySelector(".highlight").style.marginBottom = "4em";
  }
}

function myfun1() {
  let x = document.querySelector("div>.clickimg1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

customerviewed1(recommendedArr);
function customerviewed1(recommendedArr) {
  let id11 = document.getElementById("11");

  let id21 = document.getElementById("21");
  let id31 = document.getElementById("31");

  for (let i = 0; i < 5; i++) {
    let parenttag1 = document.createElement("div");
    parenttag1.setAttribute("class", "media-element1");
    let image1 = document.createElement("img");
    image1.setAttribute("src", recommendedArr[i].img);

    let brand1 = document.createElement("h1");
    brand1.innerText = recommendedArr[i].itemBrand;
    let Name1 = document.createElement("h2");
    Name1.innerText = recommendedArr[i].itemName;
    let price1 = document.createElement("p");
    price1.innerText = recommendedArr[i].itemPrice;

    parenttag1.append(image1, brand1, Name1, price1);
    id11.insertBefore(parenttag1, id11.firstChild);
  }
  for (let i = 5; i < 10; i++) {
    let parenttag1 = document.createElement("div");
    parenttag1.setAttribute("class", "media-element1");
    let image1 = document.createElement("img");
    image1.setAttribute("src", recommendedArr[i].img);

    let brand1 = document.createElement("h1");
    brand1.innerText = recommendedArr[i].itemBrand;
    let Name1 = document.createElement("h2");
    Name1.innerText = recommendedArr[i].itemName;
    let price1 = document.createElement("p");
    price1.innerText = recommendedArr[i].itemPrice;

    parenttag1.append(image1, brand1, Name1, price1);
    id21.insertBefore(parenttag1, id21.firstChild);
  }
  for (let i = 10; i < recommendedArr.length; i++) {
    let parenttag1 = document.createElement("div");
    parenttag1.setAttribute("class", "media-element1");
    let image1 = document.createElement("img");
    image1.setAttribute("src", recommendedArr[i].img);

    let brand1 = document.createElement("h1");
    brand1.innerText = recommendedArr[i].itemBrand;
    let Name1 = document.createElement("h2");
    Name1.innerText = recommendedArr[i].itemName;
    let price1 = document.createElement("p");
    price1.innerText = recommendedArr[i].itemPrice;

    parenttag1.append(image1, brand1, Name1, price1);
    id31.insertBefore(parenttag1, id31.firstChild);
  }
}

customerviewed2(recommendedArr);
function customerviewed2(recommendedArr) {
  let id12 = document.getElementById("12");

  let id22 = document.getElementById("22");
  let id32 = document.getElementById("32");

  for (let i = recommendedArr.length - 1; i >= 10; i--) {
    let parenttag2 = document.createElement("div");
    parenttag2.setAttribute("class", "media-element2");
    let image2 = document.createElement("img");
    image2.setAttribute("src", recommendedArr[i].img);

    let brand2 = document.createElement("h1");
    brand2.innerText = recommendedArr[i].itemBrand;
    let Name2 = document.createElement("h2");
    Name2.innerText = recommendedArr[i].itemName;
    let price2 = document.createElement("p");
    price2.innerText = recommendedArr[i].itemPrice;

    parenttag2.append(image2, brand2, Name2, price2);
    id12.insertBefore(parenttag2, id12.firstChild);
  }
  for (let i = 9; i >= 5; i--) {
    let parenttag2 = document.createElement("div");
    parenttag2.setAttribute("class", "media-element2");
    let image2 = document.createElement("img");
    image2.setAttribute("src", recommendedArr[i].img);

    let brand2 = document.createElement("h1");
    brand2.innerText = recommendedArr[i].itemBrand;
    let Name2 = document.createElement("h2");
    Name2.innerText = recommendedArr[i].itemName;
    let price2 = document.createElement("p");
    price2.innerText = recommendedArr[i].itemPrice;

    parenttag2.append(image2, brand2, Name2, price2);
    id22.insertBefore(parenttag2, id22.firstChild);
  }
  for (let i = 4; i >= 0; i--) {
    let parenttag2 = document.createElement("div");
    parenttag2.setAttribute("class", "media-element2");
    let image2 = document.createElement("img");
    image2.setAttribute("src", recommendedArr[i].img);

    let brand2 = document.createElement("h1");
    brand2.innerText = recommendedArr[i].itemBrand;
    let Name2 = document.createElement("h2");
    Name2.innerText = recommendedArr[i].itemName;
    let price2 = document.createElement("p");
    price2.innerText = recommendedArr[i].itemPrice;

    parenttag2.append(image2, brand2, Name2, price2);
    id32.insertBefore(parenttag2, id32.firstChild);
  }
}

customerviewed3(recommendedArr);
function customerviewed3(recommendedArr) {
  let id13 = document.getElementById("13");

  let id23 = document.getElementById("23");
  let id33 = document.getElementById("33");

  for (let i = recommendedArr.length - 1; i >= 10; i--) {
    let parenttag3 = document.createElement("div");
    parenttag3.setAttribute("class", "media-element3");
    let image3 = document.createElement("img");
    image3.setAttribute("src", recommendedArr[i].img);

    let brand3 = document.createElement("h1");
    brand3.innerText = recommendedArr[i].itemBrand;
    let Name3 = document.createElement("h2");
    Name3.innerText = recommendedArr[i].itemName;
    let price3 = document.createElement("p");
    price3.innerText = recommendedArr[i].itemPrice;
    parenttag3.append(image3, brand3, Name3, price3);
  }
  for (let i = 9; i >= 5; i--) {
    let parenttag3 = document.createElement("div");
    parenttag3.setAttribute("class", "media-element3");
    let image3 = document.createElement("img");
    image3.setAttribute("src", recommendedArr[i].img);

    let brand3 = document.createElement("h1");
    brand3.innerText = recommendedArr[i].itemBrand;
    let Name3 = document.createElement("h2");
    Name3.innerText = recommendedArr[i].itemName;
    let price3 = document.createElement("p");
    price3.innerText = recommendedArr[i].itemPrice;
    parenttag3.append(image3, brand3, Name3, price3);
  }
  for (let i = 4; i >= 0; i--) {
    let parenttag3 = document.createElement("div");
    parenttag3.setAttribute("class", "media-element2");
    let image3 = document.createElement("img");
    image3.setAttribute("src", recommendedArr[i].img);

    let brand3 = document.createElement("h1");
    brand3.innerText = recommendedArr[i].itemBrand;
    let Name3 = document.createElement("h2");
    Name3.innerText = recommendedArr[i].itemName;
    let price3 = document.createElement("p");
    price3.innerText = recommendedArr[i].itemPrice;
    parenttag3.append(image3, brand3, Name3, price3);
  }
}

let itemFromLS = JSON.parse(localStorage.getItem("productDetailsItem")) || [];

//Add to Cart button click
let addToBtn = document.querySelector(".cart");
addToBtn.addEventListener("click", goToCart);
function goToCart() {
  addToCart(itemFromLS);
  window.location.href = "../cartPage/cart.html";
}

// add to cart function
function addToCart(itemFromLS) {
  let preItems = [...itemFromLS];
  console.log(preItems);
  let addToCartItems = JSON.parse(localStorage.getItem("addToCartItems")) || [];
  let totalItems = preItems.concat(addToCartItems);
  localStorage.setItem("addToCartItems", JSON.stringify(totalItems));
}

//product display
productDisplay(itemFromLS);
function productDisplay(itemFromLS) {
  // display main img
  let main_img = document.querySelector("#main-img");
  main_img.setAttribute("src", itemFromLS[0].img_url);
  main_img.setAttribute("alt", itemFromLS[0].name);

  // display name
  let name = document.querySelector(".pro-name");
  name.innerText = itemFromLS[0].name;

  //display subname
  let sub_name = document.querySelector(".sub-name");
  sub_name.innerText = itemFromLS[0].sub_name;

  //display price
  let price = document.querySelector(".price");
  let dataPrice = itemFromLS[0].price;
  dataPrice = dataPrice.split(".");
  let fst = dataPrice[0];
  let snd = dataPrice[1];
  price.innerHTML = `<span>$</span>${fst}<span>.${snd}</span>`;

  //display color
  let color = document.querySelector(".pro-color");
  let dataColor = itemFromLS[0].color;
  color.innerHTML = `<span>Color:</span> ${dataColor}`;
}
