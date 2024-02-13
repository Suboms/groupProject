let hero = document.querySelector(".hero");
hero.style.display = "none";
let loader = document.querySelector(".loader");

async function quote() {
  let url = `https://api.api-ninjas.com/v1/quotes`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "VT6Z7rKdInt3F8kOrNmuKA==dhTFCZac9OjS5d8Z",
    },
  });
  const data = await response.json();
  return data;
}

let btn = document.querySelector("button");

async function changeBg() {
  let countdown = 3;
  const quoteData = await quote();

  if (quoteData[0] != undefined) {
    setInterval(function () {
      countdown -= 1;
      if (countdown <= 0) {
        clearInterval();

        loader.style.display = "none";
        hero.style.display = "flex";
      }
    }, 1000);
  }

  setInterval(async function () {
    let words = quoteData[0].quote.split(" ");

    if (words.length > 15) {
      let newQuoteData = await quote();
      let newWords = newQuoteData[0].quote.split(" ");
      while (newWords.length > 15) {
        newQuoteData = await quote();
        newWords = newQuoteData[0].quote.split(" ");
      }
      document.getElementById("quote").textContent = newQuoteData[0].quote;
      document.getElementById(
        "quoter"
      ).textContent = `- ${newQuoteData[0].author}`;
      console.log(newWords.length);
    } else {
      document.getElementById("quote").textContent = quoteData[0].quote;
      document.getElementById(
        "quoter"
      ).textContent = `- ${quoteData[0].author}`;
    }
  }, 10000);
}

btn.addEventListener("click", changeBg);
window.onload = changeBg();
