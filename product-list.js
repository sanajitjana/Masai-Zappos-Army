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
    rating: "2",
    favorite: "102",
    gender: "Women",
    type: "Clothing",
    brand: "Angel Maternity",
    color: "Black",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71Lp0ifGgEL._AC_SR255,340_.jpg",
    name: "LAUREN Ralph Lauren",
    sub_name: "Foiled Jersey Cocktail Dress",
    price: "121.99",
    mrp: "175.00",
    rating: "0",
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
    rating: "0",
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
    rating: "0",
    favorite: "0",
    gender: "Women",
    type: "Clothing",
    brand: "Lilly Pulitzer",
    color: "Bondi Blue",
    tag: "Style New",
  },
  // men clothing
  {
    img_url:
      "https://m.media-amazon.com/images/I/91K4coUfddL._AC_SR255,340_.jpg",
    name: "Under Armour",
    sub_name: "Carrie Pullover",
    price: "17.50",
    mrp: "25.00",
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
    rating: "5",
    favorite: "74",
    gender: "Men",
    type: "Clothing",
    brand: "adidas",
    color: "Black/White",
    tag: "Style New",
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
    mrp: "84.00",
    rating: "5",
    favorite: "79",
    gender: "Men",
    type: "Clothing",
    brand: "Bulwark FR",
    color: "Navy",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81KHxhoX1GL._AC_SR255,340_.jpg",
    name: "Lacoste",
    sub_name: "L1212 Classic Pique Polo Shirt",
    price: "57.99",
    mrp: "98.00",
    rating: "4",
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
      "https://m.media-amazon.com/images/I/71MJdm1b5yL._AC_SR255,340_.jpg",
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
];

productList.forEach(function (ele) {
  console.log(ele.name);
});
