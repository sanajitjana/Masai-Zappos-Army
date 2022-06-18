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
    rating: "4",
    favorite: "102",
    gender: "Girls",
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
    favorite: "12",
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
  {
    img_url:
      "https://m.media-amazon.com/images/I/812RyUs5BbL._AC_SR768,1024_.jpg",
    name: "L.L.Bean",
    sub_name: "Graphic Tee Short Sleeve Jess Franks Artwork",
    price: "34.95",
    rating: "4",
    favorite: "0",
    gender: "Women",
    type: "Clothings",
    brand: "L.L.Bean",
    color: "Navy",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71Lp0ifGgEL._AC_SR768,1024_.jpg",
    name: "LAUREN Ralph Lauren ",
    sub_name: "- Foiled Jersey Cocktail Dress. Color Desert Rose. Low Stock.",
    price: "130.99",
    favorite: "120",
    gender: "Women",
    rating: "2",
    type: "Clothings",
    brand: "LAUREN Ralph Lauren",
    color: "Desert Rose",
    tag: "Low Stock",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81W5L+LCz3L._AC_SR768,1024_.jpg",
    name: "Levi's® Womens",
    sub_name: "Classic Straight Jeans. Color Lapis Dark Horse.",
    price: "59.99",
    favorite: "124",
    rating: "3",
    gender: "Women",
    type: "Clothings",
    brand: "Levi's® Womens",
    color: "Blue",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81jl3t+T4lL._AC_SR768,1024_.jpg",
    name: "Varley",
    sub_name: "Let's Go Walker Bra",
    price: "70.99",
    favorite: "330",
    rating: "4",
    gender: "Women",
    type: "Clothings",
    brand: "Varley",
    color: "Lead",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81n89r-9OtL._AC_SR768,1024_.jpg",
    name: "Under Armour",
    sub_name: "Cross-Back Mid Bra",
    price: "34.99",
    favorite: "334",
    rating: "3",
    gender: "Women",
    type: "Clothings",
    brand: "Under Armour",
    color: "Lime",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/712IDBic5ZL._AC_SR768,1024_.jpg",
    name: "BedHead Pajamas",
    sub_name: "Short Sleeve Cropped Pajama Set",
    price: "85.99",
    rating: "3",
    favorite: "335",
    gender: "Women",
    type: "Clothings",
    brand: "BedHead Pajamas",
    color: "Peach Blossom",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/61+azxK3yoL._AC_SR768,1024_.jpg",
    name: "Eileen Weat",
    sub_name: "Sleeveless Cotton Dobby Chemise",
    price: "45.99",
    favorite: "235",
    rating: "3",
    gender: "Women",
    type: "Clothings",
    brand: "Eileen Weat",
    color: "Solid Blue",
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
    brand: "adidas Originals",
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
    favorite: "270",
    gender: "Men",
    type: "Clothings",
    brand: "Lacoste",
    color: "Red",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81+bqeAGv-L._AC_SR768,1024_.jpg",
    name: "Calvin Klein",
    sub_name: "Terry Shorts",
    price: "79.99",
    rating: "2",
    favorite: "123",
    gender: "Men",
    type: "Clothings",
    brand: "Calvin Klein",
    color: "Blue",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/91q-B5wAayL._AC_SR768,1024_.jpg",
    name: "Selected Homme",
    sub_name: "Homme Flex Shorts",
    price: "65.99",
    mrp: "120",
    rating: "4",
    favorite: "123",
    gender: "Men",
    type: "Clothings",
    brand: "Selected Homme",
    color: "Blue",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/61T9PruBQmL._AC_SR768,1024_.jpg",
    name: "Tommy Hilfiger",
    sub_name: "Nial Short Sleeve Polo in Custom Fit",
    price: "69.99",
    rating: "4",
    favorite: "123",
    gender: "Men",
    type: "Clothings",
    brand: "Tommy Hilfiger",
    color: "White",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/917kofqaJcL._AC_SR768,1024_.jpg",
    name: "Nautica",
    sub_name: "Harbor Shirt",
    price: "74.99",
    rating: "3",
    favorite: "121",
    gender: "Men",
    type: "Clothings",
    brand: "Nautica",
    color: "Blue",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81YI5lq3hVL._AC_SR768,1024_.jpg",
    name: "Ted Braker",
    sub_name: "Byng",
    price: "95.99",
    rating: "2",
    favorite: "342",
    gender: "Men",
    type: "Clothings",
    brand: "Ted Braker",
    color: "Navy",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/917pIXHb7GL._AC_SR768,1024_.jpg",
    name: "Nautica",
    sub_name: "Plaid Shirt",
    price: "69.99",
    rating: "4",
    favorite: "",
    gender: "Men",
    type: "Clothings",
    brand: "Nautica",
    color: "Red",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71KDgL+ihBL._AC_SR768,1024_.jpg",
    name: "Mountain Hardwear",
    sub_name: "Basin™ Trek Convertible Pants",
    price: "89.99",
    rating: "4",
    favorite: "234",
    gender: "Men",
    type: "Clothings",
    brand: "Mountain Hardwear",
    color: "Black",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71iEFQkEjJL._AC_SR768,1024_.jpg",
    name: "adidas",
    sub_name: "Big & Tall Tiro '21 Pants",
    price: "44.99",
    rating: "2",
    favorite: "32",
    gender: "Men",
    type: "Clothings",
    brand: "adidas",
    color: "Red",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71OljXH7lrL._AC_SR768,1024_.jpg",
    name: "L.L.Bean",
    sub_name: "Everyday SunSmart Polo Short Sleeve",
    price: "49.99",
    rating: "3",
    favorite: "321",
    gender: "Men",
    type: "Clothings",
    brand: "L.L.Bean",
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
    favorite: "5",
    gender: "Men",
    type: "Shoes",
    brand: "Bed Stu",
    color: "Grey",
    tag: "Low Stock",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71CnXWi6E8L._AC_SR768,1024_.jpg",
    name: "Flatheads",
    sub_name: "Luft",
    price: "40.99",
    rating: "5",
    favorite: "432",
    gender: "Men",
    type: "Sneakers",
    brand: "Flatheads",
    color: "Azure",
    tag: "Low Stock",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71l-QgPta1L._AC_SR768,1024_.jpg",
    name: "Quiksilver",
    sub_name: "Molokai Print",
    price: "18.99",
    rating: "4",
    favorite: "432",
    gender: "Men",
    type: "Sandal",
    brand: "Quiksilver",
    color: "Black",
    tag: "Low Stock",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/716-DPJoOwL._AC_SR768,1024_.jpg",
    name: "Kappa",
    sub_name: "Authentic Solime 1",
    price: "40.99",
    rating: "3",
    favorite: "123",
    gender: "Men",
    type: "Sandal",
    brand: "Kappa",
    color: "Black",
    tag: "Low Stock",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/612CUkDPzuL._AC_SR768,1024_.jpg",
    name: "Cole Haan",
    sub_name: "Original Grand Canvas Penny",
    price: "70.99",
    rating: "5",
    favorite: "334",
    gender: "Men",
    type: "Loafers",
    brand: "Cole Haan",
    color: "Navy",
    tag: "New",
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
  {
    img_url:
      "https://m.media-amazon.com/images/I/71m+LruHcaL._AC_SR768,1024_.jpg",
    name: "Brooks",
    sub_name: "",
    price: "139.99",
    rating: "5",
    favorite: "321",
    gender: "Women",
    type: "Sneakers",
    brand: "Brooks",
    color: "Black",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/815Fh7mmFEL._AC_SR768,1024_.jpg",
    name: "Brooks",
    sub_name: "Glycerin 19",
    price: "119.99",
    rating: "2",
    favorite: "321",
    gender: "Women",
    type: "Sneakers",
    brand: "Brooks",
    color: "Black",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81Cx1QqvvUS._AC_SR768,1024_.jpg",
    name: "Brooks",
    sub_name: "Adrenaline GTS 21",
    price: "109.99",
    rating: "3",
    favorite: "121",
    gender: "Women",
    type: "Sneakers",
    brand: "Brooks",
    color: "White",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81nCUvGUumL._AC_SR768,1024_.jpg",
    name: "Steve Madden",
    sub_name: "Kimmie Espadrille Sandal",
    price: "49.99",
    rating: "5",
    favorite: "121",
    gender: "Women",
    type: "Sandal",
    brand: "Steve Madden",
    color: "Black",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71pE1qJJUZL._AC_SR768,1024_.jpg",
    name: "Dansko",
    sub_name: "kane",
    price: "53.99",
    mrp: "79.99",
    rating: "5",
    favorite: "31",
    gender: "Women",
    type: "Clogs",
    brand: "Dansko",
    color: "Pink",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81xM3lPpL+L._AC_SR768,1024_.jpg",
    name: "Dansko",
    sub_name: "Berry",
    price: "139.99",
    rating: "3",
    favorite: "314",
    gender: "Women",
    type: "Clogs",
    brand: "Dansko",
    color: "Grey",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81DS8ToKpBL._AC_SR768,1024_.jpg",
    name: "Dansko",
    sub_name: "Brenda",
    price: "134.99",
    rating: "5",
    favorite: "128",
    gender: "Women",
    type: "Clogs",
    brand: "Brenda",
    color: "Grey",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71snSEU29hL._AC_SR768,1024_.jpg",
    name: "Softs Style",
    sub_name: "Angel ||",
    price: "50.99",
    rating: "4",
    favorite: "1321",
    gender: "Women",
    type: "Heels",
    brand: "Softs Style",
    color: "Black",
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
    favorite: "57",
    gender: "Girls",
    type: "Clothings",
    brand: "Mad Engine Kids",
    color: "Red",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71Tc6wRiC5L._AC_SR768,1024_.jpg",
    name: "Adidas Golf Kids",
    sub_name: "Performance Short Sleeve Polo (Little Kids/Big Kids)",
    price: "24.99",
    mrp: "30.99",
    favorite: "23",
    gender: "Girls",
    type: "Clothings",
    brand: "Adidas Golf Kids",
    color: "White",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71aMOKWs5cL._AC_SR768,1024_.jpg",
    name: "The Original Retro Brand Kids",
    sub_name: "Cotton USA Crew Neck Tee (Big Kids)",
    price: "28.99",
    rating: "3",
    favorite: "21",
    gender: "Girls",
    type: "Clothings",
    brand: "The Original Retro Brand Kids",
    color: "Blue",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81rta8RrBGL._AC_SR768,1024_.jpg",
    name: "Joules Kids",
    sub_name: "Rosalee Short Sleeve (Toddler/Little Kids/Big Kids)",
    price: "39.99",
    rating: "5",
    favorite: "232",
    gender: "Girls",
    type: "Clothings",
    brand: "Joules Kids",
    color: "Yellow",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81Ys3a1JI9L._AC_SR768,1024_.jpg",
    name: "Lilly Pulitzer Kids",
    sub_name: "Brynn Dress (Toddler/Little Kids/Big Kids)",
    price: "68.99",
    rating: "1",
    favorite: "21",
    gender: "Girls",
    type: "Clothings",
    brand: "Lilly Pulitzer Kids",
    color: "Pink",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/61qNwt+sH5L._AC_SR768,1024_.jpg",
    name: "Polo Ralph Lauren Kids",
    sub_name: " Polo Bear Jersey Tee Dress (Big Kids)",
    price: "55.99",
    rating: "3",
    favorite: "321",
    gender: "Girls",
    type: "Clothings",
    brand: "Polo Ralph Lauren Kids",
    color: "Pink",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81ytOyIOQjL._AC_SR768,1024_.jpg",
    name: "Burberry Kids",
    sub_name: "Marilena (Little Kids/Big Kids",
    price: "480.99",
    rating: "3",
    favorite: "123",
    gender: "Girls",
    type: "Clothings",
    brand: "Burberry Kids",
    color: "Black",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/91k3suZ0hVL._AC_SR768,1024_.jpg",
    name: "Lilly Pulitzer Kids",
    sub_name: "Mini Kristen Dress (Toddler/Little Kids/Big Kids)",
    price: "64.99",
    rating: "3",
    favorite: "32",
    gender: "Girls",
    type: "Clothings",
    brand: "Lilly Pulitzer Kids",
    color: "Navy",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81CI9bUH0hL._AC_SR768,1024_.jpg",
    name: "adidas Kids",
    sub_name: "Entrada 18 Jersey (Little Kids/Big Kids",
    price: "20.99",
    rating: "5",
    favorite: "321",
    gender: "Girls",
    type: "Clothings",
    brand: "adidas Kids",
    color: "Blue",
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
  {
    img_url:
      "https://m.media-amazon.com/images/I/81CI9bUH0hL._AC_SR768,1024_.jpg",
    name: "Adidas Kids",
    sub_name: "Entrada 18 Jersey (Little Kids/Big Kids)",
    price: "20.95",
    rating: "5",
    favorite: "32",
    gender: "Boys",
    type: "Clothings",
    brand: "Adidas Kids",
    color: "Blue",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81Dr4PvTNPL._AC_SR768,1024_.jpg",
    name: "Adidas Kids",
    sub_name: "Classic 3-Stripes Shorts (Toddler/Little Kids)",
    price: "18.95",
    rating: "2",
    favorite: "122",
    gender: "Boys",
    type: "Clothings",
    brand: "Adidas Kids",
    color: "Black",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81ZDPQqtfzL._AC_SR768,1024_.jpg",
    name: "Lacoste Kids",
    sub_name:
      "Mini-Me Summer Pack Big Croc Logo Shorts (Toddler/Little Kids/Big Kids)",
    price: "70.95",
    rating: "1",
    favorite: "",
    gender: "Boys",
    type: "Clothings",
    brand: "Lacoste Kids",
    color: "White",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71+fFXX4twL._AC_SR768,1024_.jpg",
    name: "Under Armour ",
    sub_name: "KidsHeatGear® Armour Shorts (Big Kids)",
    price: "20.95",
    rating: "5",
    favorite: "43",
    gender: "Boys",
    type: "Clothings",
    brand: "Under Armour ",
    color: "Black",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81MkDJ1QSEL._AC_SR768,1024_.jpg",
    name: "adidas Originals",
    sub_name: " KidsLove Unites SST Track Top (Little Kids/Big Kids)",
    price: "55.95",
    rating: "2",
    favorite: "42",
    gender: "Boys",
    type: "Clothings",
    brand: "adidas Originals",
    color: "Multicolor",
    tag: "New",
  },

  {
    img_url:
      "https://m.media-amazon.com/images/I/71UD4iwynDL._AC_SR768,1024_.jpg",
    name: "adidas Originals Kids",
    sub_name: " Adicolor Superstar Track Jacket (Little Kids/Big Kids)",
    price: "37.95",
    rating: "4",
    favorite: "13",
    gender: "Boys",
    type: "Clothings",
    brand: "adidas Originals Kids",
    color: "Navy",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/61-uwtm7TnL._AC_SR768,1024_.jpg",
    name: "Burberry Kids",
    sub_name: "Liam (Little Kids/Big Kids",
    price: "620.95",
    rating: "4",
    favorite: "23",
    gender: "Boys",
    type: "Clothings",
    brand: "Burberry Kids",
    color: "Black",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/716aFEjPqIL._AC_SR768,1024_.jpg",
    name: "Quiksilver Kids",
    sub_name: "Surfsilk Five O 17Boardshorts(Big Kids)",
    price: "50.95",
    rating: "2",
    favorite: "5",
    gender: "Boys",
    type: "Clothings",
    brand: "Quiksilver Kids",
    color: "Black",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81xh1QQ1FNL._AC_SR768,1024_.jpg",
    name: "johnnie-O Kids",
    sub_name: "Jo Flag Performance Polo (Little Kids/Big Kids)",
    price: "64.95",
    rating: "3",
    favorite: "21",
    gender: "Boys",
    type: "Clothings",
    brand: "johnnie-O Kids",
    color: "Blue",
    tag: "New",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/91ixJWss7oL._AC_SR768,1024_.jpg",
    name: "Vilebrequin Kids ",
    sub_name: "Pique Changeant Pantin (Toddler/Little Kids/Big Kids)",
    price: "110.95",
    rating: "3",
    favorite: "54",
    gender: "Boys",
    type: "Clothings",
    brand: "Vilebrequin Kids ",
    color: "Blue",
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
  {
    img_url:
      "https://m.media-amazon.com/images/I/91OnIBYiDwL._AC_SR768,1024_.jpg",
    name: "L.L.Bean",
    sub_name: "Kids Deluxe Book Pack Print IV",
    price: "37.97",
    rating: "5",
    favorite: "89",
    gender: "Boys",
    type: "Bags",
    brand: "L.L.Bean",
    color: "White",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/911QCTP330L._AC_SR768,1024_.jpg",
    name: "Deuter",
    sub_name: "Kikki",
    price: "50.97",
    rating: "4",
    favorite: "89",
    gender: "Boys",
    type: "Bags",
    brand: "Deuter",
    color: "Green",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/814g5dHqZUS._AC_SR768,1024_.jpg",
    name: "adidas Kids",
    sub_name: "Young Creator Backpack (Little Kids/Big Kids",
    price: "40.97",
    rating: "4",
    favorite: "89",
    gender: "Boys",
    type: "Bags",
    brand: "adidas Kids",
    color: "Blue",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71pqr4C93CL._AC_SR768,1024_.jpg",
    name: "Fjällräven",
    sub_name: "Kanken 15",
    price: "119.97",
    rating: "4",
    favorite: "89",
    gender: "Boys",
    type: "Bags",
    brand: "Fjällräven",
    color: "Red",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81zejZC69xL._AC_SR768,1024_.jpg",
    name: "The North Face",
    sub_name: "Recon Squash Backpack (Youth)",
    price: "52.97",
    rating: "3",
    favorite: "89",
    gender: "Boys",
    type: "Bags",
    brand: "The North Face",
    color: "Pink",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/91LShnOl4mL._AC_SR768,1024_.jpg",
    name: "Stephen Joseph",
    sub_name: "Printed Beach Tote",
    price: "22.97",
    rating: "5",
    favorite: "89",
    gender: "Boys",
    type: "Bags",
    brand: "Stephen Joseph",
    color: "Blue",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/91iItz4sNXL._AC_SR768,1024_.jpg",
    name: "Herschel Supply Co. Kids",
    sub_name: "Heritage Backpack XL Youth (Big Kids)",
    price: "59.97",
    rating: "2",
    favorite: "89",
    gender: "Boys",
    type: "Bags",
    brand: "Herschel Supply Co. Kids",
    color: "Red",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/91Y6uCJ-IkL._AC_SR768,1024_.jpg",
    name: "L.L.Bean",
    sub_name: "Kids Deluxe Book Pack IV",
    price: "43.97",
    rating: "3",
    favorite: "89",
    gender: "Boys",
    type: "Bags",
    brand: "L.L.Bean",
    color: "Navy",
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

  {
    img_url:
      "https://m.media-amazon.com/images/I/41FER6TCeAL._AC_SR768,1024_.jpg",
    name: "ro.sham.bo baby",
    sub_name: "Pearlized Sunglasses (2-4 Years)",
    price: "16.95",
    rating: "4",
    favorite: "23",
    gender: "Boys",
    type: "Accessories",
    brand: "ro.sham.bo baby",
    color: "Multicolor",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/41jJKdzwSML._AC_SR768,1024_.jpg",
    name: "Janie and Jack",
    sub_name: "Clear Blue Sunnies (4 Years & Up)",
    price: "16.95",
    mrp: "25.95",
    rating: "4",
    favorite: "23",
    gender: "Boys",
    type: "Accessories",
    brand: "Janie and Jack",
    color: "White",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81B9UHWyMiL._AC_SR768,1024_.jpg",
    name: "Manhattan Toy",
    sub_name:
      "Manhattan Toy Moppettes Bea Bear Stuffed Animal Nurturing Playset with Bear Plush Toy",
    price: "30.95",
    mrp: "25.95",
    rating: "4",
    favorite: "23",
    gender: "Boys",
    type: "Accessories",
    brand: "Manhattan Toy",
    color: "Pink",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/619iawgdbTL._AC_SR768,1024_.jpg",
    name: "LEGO",
    sub_name: "LEGO City Rocket Stunt Bike 60298 Building Kit (14 Pieces)",
    price: "7.95",
    mrp: "25.95",
    rating: "4",
    favorite: "23",
    gender: "Boys",
    type: "Accessories",
    brand: "LEGO",
    color: "Multicolor",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/91kfRUu5KBL._AC_SR768,1024_.jpg",
    name: "NATIONAL GEOGRAPHIC",
    sub_name:
      "Kids 3-Pack Hyper-Realistic Super Soft Stuffed Animal, QR Code to Elephant, Cheetah, Zebra Facts, Recycled Material Packaging, by Just Play",
    price: "26.95",
    rating: "4",
    favorite: "23",
    gender: "Boys",
    type: "Accessories",
    brand: "NATIONAL GEOGRAPHIC",
    color: "Multi-Color",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/812pjfDOsRL._AC_SR768,1024_.jpg",
    name: "LEGO",
    sub_name:
      " LEGO City Chicken Stunt Bike 60310 Building Kit; Fun Cool Toy for Kids (10 Pieces)",
    price: "7.95",
    mrp: "25.95",
    rating: "2",
    favorite: "23",
    gender: "Boys",
    type: "Accessories",
    brand: "LEGO",
    color: "Blue",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71jMCiYhDeL._AC_SR768,1024_.jpg",
    name: "LEGO",
    sub_name: "LEGO City Stunt Competition 60299 Building Kit (73 Pieces)",
    price: "29.95",
    rating: "4",
    favorite: "43",
    gender: "Boys",
    type: "Accessories",
    brand: "LEGO",
    color: "Multicolor",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/71YeiNRHPQL._AC_SR768,1024_.jpg",
    name: "Columbia Kids",
    sub_name: "Snap Back Hat (Yout",
    price: "23.95",
    rating: "5",
    favorite: "34",
    gender: "Boys",
    type: "Accessories",
    brand: "Columbia Kids",
    color: "White",
  },
  {
    img_url:
      "https://m.media-amazon.com/images/I/81lnFSQTO5L._AC_SR768,1024_.jpg",
    name: "Roxy Kids",
    sub_name: "Aloha Sunshine Hat (Little Kids/Big Kids)",
    price: "30.95",
    rating: "5",
    favorite: "49",
    gender: "Boys",
    type: "Accessories",
    brand: "Roxy Kids",
    color: "Blue",
  },
];

let table = document.querySelector(".product-table");
let specialSortValue = "All";
let productDetailsItem = [];
displayData(productList);
function displayData(data) {
  table.innerHTML = "";
  data.forEach(function (ele, index) {
    //a tag
    let link = document.createElement("a");
    link.setAttribute("href", "../productDetailsPage/product-details.html");

    //store item for next page
    link.addEventListener("click", function (event) {
      productDetailsItem.push(ele);
      localStorage.setItem(
        "productDetailsItem",
        JSON.stringify(productDetailsItem)
      );
    });

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
      specialSortValueDisplay("All");
      return item;
    } else if (selectBox.value == "Customer Rating") {
      specialSortValueDisplay("Rating: High to Low");
      return sortByRating(newArray);
    } else if (selectBox.value == "Price:-Low-to-High") {
      specialSortValueDisplay("Price: Low to High");
      return sortByPriceLowToHight(newArray);
    } else if (selectBox.value == "Price:-High-to-Low") {
      specialSortValueDisplay("Price: High to Low");
      return sortByPriceHighToLow(newArray);
    } else if (selectBox.value == item.tag) {
      specialSortValueDisplay(item.tag);
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
      specialSortValueDisplay("All");
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
      specialSortValueDisplay(item.gender);
      return item.gender;
    }
  });
  displayData(newArr);
}

// leftside WomenGenderfilter
let sortBarwomenFilter = document.querySelector(".sort-bar-women");
sortBarwomenFilter.addEventListener("click", function (e) {
  sortBarwomenFilterFunction(productList);
});
function sortBarwomenFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortBarwomenFilter.innerText == item.gender) {
      specialSortValueDisplay(item.gender);
      return item.gender;
    }
  });
  sortBarwomenFilter.style.display = "none";
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
      specialSortValueDisplay(item.gender);
      return item.gender;
    }
  });
  displayData(newArr);
}

// leftside MenGenderfilter
let sortBarmenFilter = document.querySelector(".sort-bar-men");
sortBarmenFilter.addEventListener("click", function (e) {
  sortBarmenFilterFunction(productList);
});
function sortBarmenFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortBarmenFilter.innerText == item.gender) {
      specialSortValueDisplay(item.gender);
      return item.gender;
    }
  });
  sortBarmenFilter.style.display = "none";
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
      specialSortValueDisplay(item.gender);
      return item.gender;
    }
  });
  displayData(newArr);
}

// leftside GirlsGenderfilter
let sortBargirlsFilter = document.querySelector(".sort-bar-girls");
sortBargirlsFilter.addEventListener("click", function (e) {
  sortBargirlsFilterFunction(productList);
});
function sortBargirlsFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortBargirlsFilter.innerText == item.gender) {
      specialSortValueDisplay(item.gender);
      return item.gender;
    }
  });
  sortBargirlsFilter.style.display = "none";
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
      specialSortValueDisplay(item.gender);
      return item.gender;
    }
  });
  displayData(newArr);
}

// sortBar BoysGenderfilter
let sortBarboysFilter = document.querySelector(".sort-bar-boyes");
sortBarboysFilter.addEventListener("click", function (e) {
  sortBarboysFilterFunction(productList);
});
function sortBarboysFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortBarboysFilter.innerText == item.gender) {
      specialSortValueDisplay(item.gender);
      return item.gender;
    }
  });
  sortBarboysFilter.style.display = "none";
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
      specialSortValueDisplay("All");
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
      specialSortValueDisplay(item.type);
      return item.type;
    }
  });
  displayData(newArr);
}

// dortBar ClothingsProductTypefilter
let sortBarclothingsFilter = document.querySelector(".sort-bar-clothes");
sortBarclothingsFilter.addEventListener("click", function (e) {
  sortBarclothingsFilterFunction(productList);
});
function sortBarclothingsFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortBarclothingsFilter.innerText == item.type) {
      specialSortValueDisplay(item.type);
      return item.type;
    }
  });
  sortBarclothingsFilter.style.display = "none";
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
      specialSortValueDisplay(item.type);
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside ShoesProductTypefilter
let sortBarshoesFilter = document.querySelector(".sort-bar-shoes");
sortBarshoesFilter.addEventListener("click", function (e) {
  sortBarshoesFilterFunction(productList);
});
function sortBarshoesFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortBarshoesFilter.innerText == item.type) {
      specialSortValueDisplay(item.type);
      return item.type;
    }
  });
  sortBarshoesFilter.style.display = "none";
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
      specialSortValueDisplay(item.type);
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside BagsProductTypefilter
let sortBarbagsFilter = document.querySelector(".sort-bar-bags");
sortBarbagsFilter.addEventListener("click", function (e) {
  sortBarbagsFilterFunction(productList);
});
function sortBarbagsFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortBarbagsFilter.innerText == item.type) {
      specialSortValueDisplay(item.type);
      return item.type;
    }
  });
  sortBarbagsFilter.style.display = "none";
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
      specialSortValueDisplay(item.type);
      return item.type;
    }
  });
  displayData(newArr);
}

// leftside AccessoriesProductTypefilter
let sortBaraccessoriesFilter = document.querySelector(".sort-bar-accessories");
sortBaraccessoriesFilter.addEventListener("click", function (e) {
  sortBaraccessoriesFilterFunction(productList);
});
function sortBaraccessoriesFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortBaraccessoriesFilter.innerText == item.type) {
      specialSortValueDisplay(item.type);
      return item.type;
    }
  });
  sortBaraccessoriesFilter.style.display = "none";
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
      specialSortValueDisplay("All");
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
      specialSortValueDisplay(item.color);
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside RedColorProductTypefilter
let sortBarredColorFilter = document.querySelector(".sort-bar-red");
sortBarredColorFilter.addEventListener("click", function (e) {
  sortBarredColorFilterFunction(productList);
});
function sortBarredColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortBarredColorFilter.innerText == item.color) {
      specialSortValueDisplay(item.color);
      return item.color;
    }
  });
  sortBarredColorFilter.style.display = "none";
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
      specialSortValueDisplay(item.color);
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside WhiteColorProductTypefilter
let sortwhiteColorFilter = document.querySelector(".sort-bar-white");
sortwhiteColorFilter.addEventListener("click", function (e) {
  sortwhiteColorFilterFunction(productList);
});
function sortwhiteColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortwhiteColorFilter.innerText == item.color) {
      specialSortValueDisplay(item.color);
      return item.color;
    }
  });
  sortwhiteColorFilter.style.display = "none";
  displayData(newArr);
}

// leftside BlackColorProductTypefilter
let sortBarblackColorFilter = document.querySelector(".sort-bar-black");
sortBarblackColorFilter.addEventListener("click", function (e) {
  sortBarblackColorFilterFunction(productList);
});
function sortBarblackColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortBarblackColorFilter.innerText == item.color) {
      specialSortValueDisplay(item.color);
      return item.color;
    }
  });
  sortBarblackColorFilter.style.display = "none";
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
      specialSortValueDisplay(item.color);
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
      specialSortValueDisplay(item.color);
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside BlueColorProductTypefilter
let sortBarblueColorFilter = document.querySelector(".sort-bar-blue");
sortBarblueColorFilter.addEventListener("click", function (e) {
  sortBarblueColorFilterFunction(productList);
});
function sortBarblueColorFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (sortBarblueColorFilter.innerText == item.color) {
      specialSortValueDisplay(item.color);
      return item.color;
    }
  });
  sortBarblueColorFilter.style.display = "none";
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
      specialSortValueDisplay(item.color);
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
      specialSortValueDisplay(item.color);
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
      specialSortValueDisplay(item.color);
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
      specialSortValueDisplay(item.color);
      return item.color;
    }
  });
  displayData(newArr);
}

// leftside PriceAllfilter
let priceAllFilter = document.querySelector("#PriceAll");
priceAllFilter.addEventListener("click", function (e) {
  priceAllFilterFunction(productList);
});
function priceAllFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (priceAllFilter.innerText == "All") {
      specialSortValueDisplay("All");
      return item;
    }
  });
  displayData(newArr);
}

// leftside FiftyAndUnderPriceAllfilter
let under50PriceFilter = document.querySelector("#FiftyAndUnder");
under50PriceFilter.addEventListener("click", function (e) {
  under50PriceFilterFunction(productList);
});
function under50PriceFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (
      under50PriceFilter.innerText == "$50.00 and Under" &&
      item.price <= 50.0
    ) {
      specialSortValueDisplay("$50.00 and Under");
      return item.price;
    }
  });
  displayData(newArr);
}

// leftside HundredAndUnderPriceAllfilter
let HundredAndUnderPriceFilter = document.querySelector("#HundredAndUnder");
HundredAndUnderPriceFilter.addEventListener("click", function (e) {
  HundredAndUnderPriceFilterFunction(productList);
});
function HundredAndUnderPriceFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (
      HundredAndUnderPriceFilter.innerText == "$100.00 and Under" &&
      item.price <= 100.0
    ) {
      specialSortValueDisplay("$100.00 and Under");
      return item.price;
    }
  });
  displayData(newArr);
}

// leftside TwoHundredAndUnderPriceAllfilter
let twoHundredAndUnderPriceFilter = document.querySelector(
  "#TwoHundredAndUnder"
);
twoHundredAndUnderPriceFilter.addEventListener("click", function (e) {
  twoHundredAndUnderPriceFilterFunction(productList);
});
function twoHundredAndUnderPriceFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (
      twoHundredAndUnderPriceFilter.innerText == "$200.00 and Under" &&
      item.price <= 200.0
    ) {
      specialSortValueDisplay("$200.00 and Under");
      return item.price;
    }
  });
  displayData(newArr);
}

// leftside TwoHundredAndOverPriceAllfilter
let twoHundredAndOverPriceFilter = document.querySelector("#TwoHundredAndOver");
twoHundredAndOverPriceFilter.addEventListener("click", function (e) {
  twoHundredAndOverPriceFilterFunction(productList);
});
function twoHundredAndOverPriceFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (
      twoHundredAndOverPriceFilter.innerText == "$200.00 and Over" &&
      item.price >= 200.0
    ) {
      specialSortValueDisplay("$200.00 and Over");
      return item.price;
    }
  });
  displayData(newArr);
}

// leftside AllBrandfilter
let allBrandFilter = document.querySelector("#AllBrand");
allBrandFilter.addEventListener("click", function (e) {
  allBrandFilterFunction(productList);
});
function allBrandFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (allBrandFilter.innerText == "All") {
      specialSortValueDisplay("All");
      return item.price;
    }
  });
  displayData(newArr);
}

// leftside UnderArmourBrandfilter
let underArmourBrandFilter = document.querySelector("#UnderArmour");
underArmourBrandFilter.addEventListener("click", function (e) {
  underArmourBrandFilterFunction(productList);
});
function underArmourBrandFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (underArmourBrandFilter.innerText == item.brand) {
      specialSortValueDisplay(item.brand);
      return item.brand;
    }
  });
  displayData(newArr);
}

// leftside adidasOriginalsBrandfilter
let adidasOriginalsBrandFilter = document.querySelector("#adidasOriginals");
adidasOriginalsBrandFilter.addEventListener("click", function (e) {
  adidasOriginalsBrandFilterFunction(productList);
});
function adidasOriginalsBrandFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (adidasOriginalsBrandFilter.innerText == item.brand) {
      specialSortValueDisplay(item.brand);
      return item.brand;
    }
  });
  displayData(newArr);
}

// leftside poloRalphLaurenBrandFilter
let poloRalphLaurenBrandFilter = document.querySelector("#PoloRalphLauren");
poloRalphLaurenBrandFilter.addEventListener("click", function (e) {
  poloRalphLaurenBrandFilterFunction(productList);
});
function poloRalphLaurenBrandFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (poloRalphLaurenBrandFilter.innerText == item.brand) {
      specialSortValueDisplay(item.brand);
      return item.brand;
    }
  });
  displayData(newArr);
}

// leftside bulwarkFRBrandFilter
let bulwarkFRBrandFilter = document.querySelector("#BulwarkFR");
bulwarkFRBrandFilter.addEventListener("click", function (e) {
  bulwarkFRBrandFilterFunction(productList);
});
function bulwarkFRBrandFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (bulwarkFRBrandFilter.innerText == item.brand) {
      specialSortValueDisplay(item.brand);
      return item.brand;
    }
  });
  displayData(newArr);
}

// leftside lacosteBrandFilter
let lacosteBrandFilter = document.querySelector("#Lacoste");
lacosteBrandFilter.addEventListener("click", function (e) {
  lacosteBrandFilterFunction(productList);
});
function lacosteBrandFilterFunction(data) {
  let newArr = data.filter(function (item) {
    if (lacosteBrandFilter.innerText == item.brand) {
      specialSortValueDisplay(item.brand);
      return item.brand;
    }
  });
  displayData(newArr);
}

//specialSortValueCancelFunc
let cancleSpecialSortVal = document.querySelector(".select");
cancleSpecialSortVal.addEventListener("click", specialSortValueDisplayFunc);
function specialSortValueDisplayFunc() {
  specialSortValueDisplay("All");
  displayData(productList);
  window.location.reload();
}

//specialSortValueDisplayFunc
specialSortValueDisplay(specialSortValue);
function specialSortValueDisplay(data) {
  let specialSelect = document.querySelector(".select");
  specialSelect.innerText = data;
}
