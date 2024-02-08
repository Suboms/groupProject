async function quote() {
  // const word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
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

async function displayQuote() {
  let max_card = 3;
  for (let i = 0; i < max_card; i++) {
    const quoteData = await quote(); // Assuming quote() is an asynchronous function that fetches quotes
    if (quoteData && quoteData.length > 0) {
      // Check if quotes array exists and is not empty
      const quote = quoteData[0]; // Get the first quote from the array
      const countryDiv = document.createElement("div");
      countryDiv.classList.add("card");
      countryDiv.innerHTML = `
          <h3 class="author">${quote.author}</h3>
          <h3 class="quote">${quote.quote}</h3>`;
      demo.appendChild(countryDiv); // Append each card to the demo element
    }
  }
}

displayQuote();
