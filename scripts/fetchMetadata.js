// In a new file, e.g., fetchMetadata.js
const axios = require("axios");

async function fetchMetadata(uri) {
  try {
    let response = await axios.get(uri);
    let metadata = response.data;
    console.log(metadata);
  } catch (error) {
    console.error(`Failed to fetch metadata: ${error}`);
  }
}

module.exports = fetchMetadata;
// Assume fetchTokenURIs is defined in the same file or imported from another file
fetchTokenURIs(1, 10).then(tokenUris => {
    tokenUris.forEach(uri => fetchMetadata(uri));
});