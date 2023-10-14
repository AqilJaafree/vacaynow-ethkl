async function fetchMetadata(ipfsUri) {
  const response = await fetch(ipfsUri);
  const metadata = await response.json();
  return metadata;
}

const ipfsUri = "ipfs://QmXW3nSVgFSv2pPNWAS6xfEpz5y8Jc8KGNmwE99ytLiMfB/1.jpg";

fetchMetadata(ipfsUri)
  .then((metadata) => {
    console.log(metadata); // Metadata object from IPFS
    // Display metadata attributes (name, description, image, attributes, etc.) in your UI
  })
  .catch((error) => console.error(error));
