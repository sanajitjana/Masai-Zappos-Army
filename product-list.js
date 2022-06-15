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
    type: "Clothing",
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
    type: "Clothing",
    brand: "LAUREN",
    color: "Desert Rose",
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
    type: "Clothing",
    brand: "adidas",
    color: "Shock Yellow",
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
    type: "Clothing",
    brand: "Lilly Pulitzer",
    color: "Bondi Blue",
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
    type: "Clothing",
    brand: "Under Armour",
    color: "Black/Graphite",
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
    type: "Clothing",
    brand: "adidas",
    color: "Black/White",
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
    type: "Clothing",
    brand: "Polo Ralph Lauren",
    color: "Black/RL2000 Red Pony Print",
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
    type: "Clothing",
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
    type: "Clothing",
    brand: "Lacoste",
    color: "Bordeaux",
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
    color: "Teak Lux",
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
