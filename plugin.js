function run() {
  // Get the token symbol from the input
  const tokenSymbol = Host.inputString();

  // Construct the URL for the API request
  const apiUrl = `https://cex.io/api/last_price/${tokenSymbol}/USD`;

  // Define the request object
  const request = {
    method: "GET",
    url: apiUrl,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  };


  // Make the HTTP request using Http.request
  const response = Http.request(request); // Use httpFetch for consistency

  // Check if the response status is not 200
  if (response.status !== 200) {
    const errorMessage = `Error ${response.status}: ${response.statusText}`;
    Host.outputString(errorMessage);
    throw new Error(errorMessage);
  }

  // Parse response JSON
  const data = JSON.parse(response.body);

  // Extract the last price
  const lastPrice = data.lprice;

  // Prepare the result object
  const result = {
    "Token": tokenSymbol,
    "Price (USD)": lastPrice
  };

  // Convert the result object to a JSON string and output
  const resultString = JSON.stringify(result);
  Host.outputString(resultString);
}

module.exports = { run }