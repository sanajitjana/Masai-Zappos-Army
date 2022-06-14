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
    type: "Women",
    size: "XL",
    length: "Short",
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
    type: "Women",
    size: "LG",
    length: "Midi Length",
    brand: "LAUREN Ralph Lauren",
    color: "Desert Rose",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71Lp0ifGgEL._AC_SR255,340_.jpg",
    name: "LAUREN Ralph Lauren",
    sub_name: "Crepe Off-the-Shoulder Dress",
    price: "165.00",
    rating: "0",
    favorite: "37",
    type: "Women",
    size: "XS",
    length: "Midi Length",
    brand: "LAUREN Ralph Lauren",
    color: "Lighthouse Navy",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71hZy3aeyZL._AC_SR255,340_.jpg",
    name: "Betsy & Adam",
    sub_name: "Crepe Off-the-Shoulder Dress",
    price: "239.00",
    rating: "4",
    favorite: "124",
    type: "Women",
    size: "XXL",
    length: "Knee Length",
    brand: "Betsy & Adam",
    color: "Navy/Silver",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/51m-QQ3yieL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/713GSRnRpfL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/91kXwmHjJoL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/718CIto5XjL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71ur5Ef2+3L._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/51X+XsaX-eL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/812hdRPzguL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81ESnkOP1mL._AC_SR255,340_.jpg",
  },
  //Sneakers
  {
    img_url:
      "https://m.media-amazon.com/images/I/71ip9zuD9yL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71AnEFU5crL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/712ZyHv4zbL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/61IBu5oBZ5L._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71TYNPhTORL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/718+Q90UFvL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71jLUoo2wSL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71+7nhBeDzL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71y2vhy2CsL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/61mLQJ0b1TL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71ojddJCS3L._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/61imEXouapL._AC_SR255,340_.jpg",
  },
  //   Shirts & Tops
  {
    img_url:
      "https://m.media-amazon.com/images/I/91lroZiNJML._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81l87jK1sRL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/710AZWZ9a3L._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81A-nFQdXhL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/91vW81gEI8L._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/91SD5-Yb5+L._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/714wQoJLbcL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/710yzJ9etZL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71xQm0HJEML._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71ENg9fYKML._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81kzDzuL8iL._AC_SR255,340_.jpg",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81q1RAj4BSL._AC_SR255,340_.jpg",
  },
];
