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
