const request = require('request');

// Function to fetch the breed information from the API
const fetchBreedDescription = function(breedName) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // Handle request errors
    if (error) {
      console.error('Request failed:', error);
      return;
    }

    // Parse the response body into an object
    const data = JSON.parse(body);

    // Check if the breed is found
    if (data.length === 0) {
      console.log(`Breed "${breedName}" not found.`);
      return;
    }

    // Get the description of the first breed in the response
    const description = data[0].description;
    console.log(`Description for breed "${breedName}": ${description}`);
  });
};

// Get the breed name from command-line arguments
const breedName = process.argv[2];

// Call the fetchBreedDescription function with the provided breed name
fetchBreedDescription(breedName);
