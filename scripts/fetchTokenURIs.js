// fetchTokenURIs.js
async function fetchTokenURIs(startId, endId) {
  for (let i = startId; i <= endId; i++) {
    let uri = await myWebContract.tokenURI(i);
    console.log(`Token ID ${i}: ${uri}`);
  }
}

module.exports = fetchTokenURIs;
