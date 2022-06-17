

let list = document.querySelector("#a1");
  let button = document.querySelectorAll("#curser>button");
  let tagNum = 0;
  let arrayofAtag = [
    "Introducing Afterpay! Buy now, pay later. No Interest, ever! Learn More",
    "FREE 365 Day Returns and Exchanges! ",
    "Be the first to shop the newest home styles—now on Zappos! Shop Home Now",
    "Father's Day is June 19! Shop Father's Day Gifts",
  ];
  button[0].addEventListener("click", function () {
    if (tagNum === 0) {
      tagNum = arrayofAtag.length - 1;
    } else {
      tagNum--;
    }
    list.innerText = arrayofAtag[tagNum];
  });
  button[1].addEventListener("click", function () {
    if (tagNum === arrayofAtag.length - 1) {
      tagNum = 0;
    } else {
      tagNum++;
    }
    list.innerText = arrayofAtag[tagNum];
  });