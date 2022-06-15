// JS for product-list page

let productList = [
  // women dress
  {
    img_url:
      "https://m.media-amazon.com/images/I/71BgdgV+-jL._AC_SR255,340_.jpg",
    name: "Free People",
    sub_name: "Get To You Printed Maxi Dress. Color Black Combo",
    price: "94.99",
    mrp: "118.00",
    rating: "5",
    favorite: "102",
    gender: "Women",
    type: "Clothings",
    brand: "Angel Maternity",
    color: "Black",
    tag: "Best Seller",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71Lp0ifGgEL._AC_SR255,340_.jpg",
    name: "LAUREN Ralph Lauren",
    sub_name: "Foiled Jersey Cocktail Dress",
    price: "121.99",
    rating: "4",
    favorite: "14",
    gender: "Women",
    type: "Clothings",
    brand: "LAUREN",
    color: "Pink",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71-aZPklBqL._AC_SR255,340_.jpg",
    name: "adidas by Stella McCartney",
    sub_name: "Truepace Woven Trainingsuit Jacket HG2007",
    price: "290.00",
    mrp: "290.00",
    rating: "3",
    favorite: "1",
    gender: "Women",
    type: "Clothings",
    brand: "adidas",
    color: "Yellow",
    tag: "Style Room",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81xAAdEI1EL._AC_SR255,340_.jpg",
    name: "Lilly Pulitzer",
    sub_name: "Carrie Pullover",
    price: "118.00",
    mrp: "118.00",
    rating: "5",
    favorite: "0",
    gender: "Women",
    type: "Clothings",
    brand: "Lilly Pulitzer",
    color: "Blue",
    tag: "Style Room",
  },
  // men clothing
  {
    img_url:
      "https://m.media-amazon.com/images/I/91K4coUfddL._AC_SR255,340_.jpg",
    name: "Under Armour",
    sub_name: "Carrie Pullover",
    price: "17.50",
    rating: "4",
    favorite: "767",
    gender: "Men",
    type: "Clothings",
    brand: "Under Armour",
    color: "Black",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/61Q3NhpgL+S._AC_SR255,340_.jpg",
    name: "adidas Originals",
    sub_name: "Trefoil Tee",
    price: "13.84",
    mrp: "30.00",
    rating: "2",
    favorite: "74",
    gender: "Men",
    type: "Clothings",
    brand: "adidas",
    color: "Black",
    tag: "Style Room",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71iLknOpHWL._AC_SR255,340_.jpg",
    name: "Polo Ralph Lauren",
    sub_name: "Slim Fit w/ Wicking 3-Pack Crew Undershirts",
    price: "31.88",
    mrp: "42.50",
    rating: "4",
    favorite: "281",
    gender: "Men",
    type: "Clothings",
    brand: "Polo Ralph Lauren",
    color: "Black",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/61CfjLHDC8L._AC_SR255,340_.jpg",
    name: "Bulwark FR",
    sub_name: "Midweight FR Dress Uniform Shirt, CAT 2",
    price: "84.00",
    rating: "5",
    favorite: "79",
    gender: "Men",
    type: "Clothings",
    brand: "Bulwark FR",
    color: "Navy",
    tag: "Best Seller",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81KHxhoX1GL._AC_SR255,340_.jpg",
    name: "Lacoste",
    sub_name: "L1212 Classic Pique Polo Shirt",
    price: "57.99",
    mrp: "98.00",
    rating: "0",
    favorite: "270",
    gender: "Men",
    type: "Clothings",
    brand: "Lacoste",
    color: "Red",
    tag: "New",
  },
  // men shoes
  {
    img_url:
      "https://m.media-amazon.com/images/I/71MJdm1b5yL._AC_SR255,340_.jpg",
    name: "Alegria",
    sub_name: "Flexer",
    price: "149.95",
    mrp: "149.95",
    rating: "5",
    favorite: "44",
    gender: "Men",
    type: "Shoes",
    brand: "Alegria",
    color: "White",
    tag: "Low Stock",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81EDhlymhdL._AC_SR255,340_.jpg",
    name: "Bed Stu",
    sub_name: "Lordmind",
    price: "147.99",
    mrp: "185.00",
    rating: "0",
    favorite: "5",
    gender: "Men",
    type: "Shoes",
    brand: "Bed Stu",
    color: "Grey",
    tag: "Low Stock",
  },
  //women shoes
  {
    img_url:
      "https://m.media-amazon.com/images/I/71qExJbDYkL._AC_SR255,340_.jpg",
    name: "Crocs",
    sub_name: "Classic Flip-Flop",
    price: "29.9",
    mrp: "35.00",
    rating: "4",
    favorite: "5",
    gender: "Women",
    type: "Shoes",
    brand: "Crocs",
    color: "White",
    tag: "New",
  },
  //girls clothing
  {
    img_url:
      "https://m.media-amazon.com/images/I/812-6bagyqL._AC_SR255,340_.jpg",
    name: "Mad Engine Kids",
    sub_name: "Spider-Man Tee Shirt (Little Kids/Big Kids)",
    price: "11.95",
    mrp: "14.00",
    rating: "0",
    favorite: "57",
    gender: "Girls",
    type: "Clothings",
    brand: "Mad Engine Kids",
    color: "Red",
  },
  //boys clothing
  {
    img_url:
      "https://m.media-amazon.com/images/I/61YDUh3cLtL._AC_SR255,340_.jpg",
    name: "The North Face Kids",
    sub_name: "Short Sleeve Never Stop Tee (Little Kids/Big Kids)",
    price: "24.95",
    rating: "5",
    favorite: "0",
    gender: "Boys",
    type: "Clothings",
    brand: "The North Face Kids",
    color: "Green",
    tag: "New",
  },
  //bags
  {
    img_url:
      "https://m.media-amazon.com/images/I/71Kk7-+LUxL._AC_SR255,340_.jpg",
    name: "Fjällräven",
    sub_name: "Kanken 15",
    price: "119.95",
    rating: "4",
    favorite: "89",
    gender: "Boys",
    type: "Bags",
    brand: "Fjällräven",
    color: "Red",
  },
  // Accessories
  {
    img_url:
      "https://m.media-amazon.com/images/I/71wKQtIf+rS._AC_SR255,340_.jpg",
    name: "New Era",
    sub_name: "NFL Basic Snap 9FIFTY® Snapback Cap - Las Vegas Raiders",
    price: "29.99",
    mrp: "34.00",
    rating: "4",
    favorite: "26",
    gender: "Boys",
    type: "Accessories",
    brand: "New Era",
    color: "Black",
  },
];

let table = document.querySelector(".product-table");

displayData(productList);
function displayData(data) {
  table.innerHTML = "";
  data.forEach(function (ele) {
    //a tag
    let link = document.createElement("a");
    link.setAttribute("href", "product-details.html");

    //card
    let card = document.createElement("div");
    card.setAttribute("class", "cards");

    //tag
    let tag = document.createElement("div");
    if (ele.tag) {
      tag.setAttribute("class", "tag");
      tag.innerText = ele.tag;
    }
    if (ele.tag == "Style Room") {
      tag.setAttribute("class", "style-room");
    } else if (ele.tag == "Low Stock") {
      tag.setAttribute("class", "low-stock");
    } else if (ele.tag == "Best Seller") {
      tag.setAttribute("class", "best-seller");
    }

    //fav
    let fav = document.createElement("div");
    fav.setAttribute("class", "fav");

    //image
    let main_img = document.createElement("img");
    main_img.setAttribute("class", "main-img");
    main_img.setAttribute("src", ele.img_url);
    main_img.setAttribute("alt", ele.name);

    //below all text
    let text_content = document.createElement("div");
    text_content.setAttribute("class", "text-content");

    //name
    let name = document.createElement("h4");
    name.innerText = ele.name;

    //sub name
    let sub_name = document.createElement("h5");
    sub_name.setAttribute("class", "sub-name");
    sub_name.innerText = ele.sub_name;

    //price-mrp
    let price_mrp = document.createElement("div");
    price_mrp.setAttribute("class", "price-mrp-line");
    let price = document.createElement("p");
    let mrp = document.createElement("p");
    if (ele.mrp) {
      price.setAttribute("class", "price-mrp");
      mrp.setAttribute("class", "mrp");
      price_mrp.append(price, mrp);
    } else {
      price.setAttribute("class", "price");
      price_mrp.append(price);
    }
    price.innerText = `$${ele.price}`;
    mrp.innerText = `MSRP: $${ele.mrp}`;

    //rating
    let rating = document.createElement("div");
    if (ele.rating == "5") {
      rating.setAttribute("class", "rating-5");
    } else if (ele.rating == "4") {
      rating.setAttribute("class", "rating-4");
    } else if (ele.rating == "3") {
      rating.setAttribute("class", "rating-3");
    } else if (ele.rating == "2") {
      rating.setAttribute("class", "rating-2");
    } else if (ele.rating == "1") {
      rating.setAttribute("class", "rating-1");
    }

    //append all
    text_content.append(name, sub_name, price_mrp, rating);
    card.append(tag, main_img, text_content);
    link.append(card);
    table.append(link);
  });
}

//sort-by-filter -> right-side-top
let selectBox = document.querySelector("#top-right-filter");
selectBox.addEventListener("change", filterFunction);
function filterFunction() {
  let newArray = [...productList];
  let filteredArray = newArray.filter(function (item) {
    if (selectBox.value == "All") {
      return item;
    } else if (selectBox.value == "Customer Rating") {
      return sortByRating(newArray);
    } else if (selectBox.value == "Price:-Low-to-High") {
      return sortByPriceLowToHight(newArray);
    } else if (selectBox.value == "Price:-High-to-Low") {
      return sortByPriceHighToLow(newArray);
    } else if (selectBox.value == item.tag) {
      return item.tag;
    }
  });
  displayData(filteredArray);
}
function sortByRating(newArray) {
  let sortArray = newArray.sort(function (a, b) {
    return b.rating - a.rating;
  });
  return sortArray;
}
function sortByPriceLowToHight(newArray) {
  let lowToHigh = newArray.sort(function (a, b) {
    return +a.price - +b.price;
  });
  return lowToHigh;
}
function sortByPriceHighToLow(newArray) {
  let highToLow = newArray.sort(function (a, b) {
    return +b.price - +a.price;
  });
  return highToLow;
}

// leftside AllGenderfilter
let allFilter = document.querySelector("#GenderAll");
allFilter.addEventListener("click", function (e) {
  allFilterFunction(productList);
});
function allFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (allFilter.innerText == "All") {
      return item;
    }
  });
  displayData(newArr);
}

// leftside WomenGenderfilter
let womenFilter = document.querySelector("#Women");
womenFilter.addEventListener("click", function (e) {
  womenFilterFunction(productList);
});
function womenFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (womenFilter.innerText == item.gender) {
      return item.gender;
    }
  });
  displayData(newArr);
}

// leftside MenGenderfilter
let menFilter = document.querySelector("#Men");
menFilter.addEventListener("click", function (e) {
  menFilterFunction(productList);
});
function menFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (menFilter.innerText == item.gender) {
      return item.gender;
    }
  });
  displayData(newArr);
}

// leftside GirlsGenderfilter
let girlsFilter = document.querySelector("#Girls");
girlsFilter.addEventListener("click", function (e) {
  girlsFilterFunction(productList);
});
function girlsFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (girlsFilter.innerText == item.gender) {
      return item.gender;
    }
  });
  displayData(newArr);
}

// leftside BoysGenderfilter
let boysFilter = document.querySelector("#Boys");
boysFilter.addEventListener("click", function (e) {
  boysFilterFunction(productList);
});
function boysFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (boysFilter.innerText == item.gender) {
      return item.gender;
    }
  });
  displayData(newArr);
}

// leftside AllProductTypefilter
let clothingsAllFilter = document.querySelector("#ClothingsAll");
clothingsAllFilter.addEventListener("click", function (e) {
  clothingsAllFilterFunction(productList);
});
function clothingsAllFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (clothingsAllFilter.innerText == "All") {
      return item;
    }
  });
  displayData(newArr);
}

// leftside ClothingsProductTypefilter
let clothingsFilter = document.querySelector("#Clothings");
clothingsFilter.addEventListener("click", function (e) {
  clothingsFilterFunction(productList);
});
function clothingsFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (clothingsFilter.innerText == item.type) {
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside ShoesProductTypefilter
let shoesFilter = document.querySelector("#Shoes");
shoesFilter.addEventListener("click", function (e) {
  shoesFilterFunction(productList);
});
function shoesFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (shoesFilter.innerText == item.type) {
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside BagsProductTypefilter
let bagsFilter = document.querySelector("#Bags");
bagsFilter.addEventListener("click", function (e) {
  bagsFilterFunction(productList);
});
function bagsFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (bagsFilter.innerText == item.type) {
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside AccessoriesProductTypefilter
let accessoriesFilter = document.querySelector("#Accessories");
accessoriesFilter.addEventListener("click", function (e) {
  accessoriesFilterFunction(productList);
});
function accessoriesFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (accessoriesFilter.innerText == item.type) {
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside JewelryProductTypefilter
let jewelryFilter = document.querySelector("#Jewelry");
jewelryFilter.addEventListener("click", function (e) {
  jewelryFilterFunction(productList);
});
function jewelryFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (jewelryFilter.innerText == item.type) {
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside EyewearProductTypefilter
let eyewearFilter = document.querySelector("#Eyewear");
eyewearFilter.addEventListener("click", function (e) {
  eyewearFilterFunction(productList);
});
function eyewearFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (eyewearFilter.innerText == item.type) {
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside HomeProductTypefilter
let homeFilter = document.querySelector("#Home");
homeFilter.addEventListener("click", function (e) {
  homeFilterFunction(productList);
});
function homeFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (homeFilter.innerText == item.type) {
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside WatchesProductTypefilter
let watchesFilter = document.querySelector("#Watches");
watchesFilter.addEventListener("click", function (e) {
  watchesFilterFunction(productList);
});
function watchesFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (watchesFilter.innerText == item.type) {
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside WatchesProductTypefilter
let petShopFilter = document.querySelector("#PetShop");
petShopFilter.addEventListener("click", function (e) {
  petShopFilterFunction(productList);
});
function petShopFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (petShopFilter.innerText == item.type) {
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside AllColorProductTypefilter
let allColorFilter = document.querySelector("#AllColor");
allColorFilter.addEventListener("click", function (e) {
  allColorFilterFunction(productList);
});
function allColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (allColorFilter.innerText == "All") {
      return item;
    }
  });
  displayData(newArr);
}

// leftside RedColorProductTypefilter
let redColorFilter = document.querySelector("#Red");
redColorFilter.addEventListener("click", function (e) {
  redColorFilterFunction(productList);
});
function redColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (redColorFilter.innerText == item.color) {
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside WhiteColorProductTypefilter
let whiteColorFilter = document.querySelector("#White");
whiteColorFilter.addEventListener("click", function (e) {
  whiteColorFilterFunction(productList);
});
function whiteColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (whiteColorFilter.innerText == item.color) {
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside BlackColorProductTypefilter
let blackColorFilter = document.querySelector("#Black");
blackColorFilter.addEventListener("click", function (e) {
  blackColorFilterFunction(productList);
});
function blackColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (blackColorFilter.innerText == item.color) {
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside GreyColorProductTypefilter
let greyColorFilter = document.querySelector("#Grey");
greyColorFilter.addEventListener("click", function (e) {
  greyColorFilterFunction(productList);
});
function greyColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (greyColorFilter.innerText == item.color) {
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside BlueColorProductTypefilter
let blueColorFilter = document.querySelector("#Blue");
blueColorFilter.addEventListener("click", function (e) {
  blueColorFilterFunction(productList);
});
function blueColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (blueColorFilter.innerText == item.color) {
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside GreenColorProductTypefilter
let greenColorFilter = document.querySelector("#Green");
greenColorFilter.addEventListener("click", function (e) {
  greenColorFilterFunction(productList);
});
function greenColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (greenColorFilter.innerText == item.color) {
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside PinkColorProductTypefilter
let pinkColorFilter = document.querySelector("#Pink");
pinkColorFilter.addEventListener("click", function (e) {
  pinkColorFilterFunction(productList);
});
function pinkColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (pinkColorFilter.innerText == item.color) {
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside NavyColorProductTypefilter
let navyColorFilter = document.querySelector("#Navy");
navyColorFilter.addEventListener("click", function (e) {
  navyColorFilterFunction(productList);
});
function navyColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (navyColorFilter.innerText == item.color) {
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside RedColorProductTypefilter
let yellowColorFilter = document.querySelector("#Yellow");
yellowColorFilter.addEventListener("click", function (e) {
  yellowColorFilterFunction(productList);
});
function yellowColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (yellowColorFilter.innerText == item.color) {
      return item.color;
    }
  });
  displayData(newArr);
}
