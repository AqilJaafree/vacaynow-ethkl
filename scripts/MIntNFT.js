require("dotenv").config();
const { JsonRpcProvider, Signer } = require("@ethersproject/providers");
const ethers = require("ethers");


// Create a JsonRpcProvider instance
const rpcUrl =
  "https://eth-sepolia.g.alchemy.com/v2/3TD4Qp-ol2qGp69d3LBv3lBWlHrvaynY";
const chainId = 11155111;
const provider = new JsonRpcProvider(rpcUrl, chainId);

// Create a signer using the private key from the environment variable
const privateKey =
  "204f6979c3083840391002022cd1c2f2aa2046df67bad8428ad8180b787b9b38";
const signer = new ethers.Wallet(privateKey, provider);

// Get contract ABI and address
const abi = require("../artifacts/contracts/MyWEB.sol/MyWEB.json").abi;
const contractAddress = "0xA4819F71CfE21C0Fa22E6db99B736d4B811F6B0B";

// Create a contract instance
const myWebContract = new ethers.Contract(contractAddress, abi, signer);

// Get the NFT Metadata IPFS URL
const tokenUri =
  "https://gateway.pinata.cloud/ipfs/QmWyZxVyD4sZi2mYh7yJkcQD8ji4kTP36VmdXM22e8BDcE ";

// Call mintNFT function
async function mintNFT() {
let nftTxn = await myWebContract.safeMint(signer.address);
  await nftTxn.wait();
  console.log(
    `NFT Minted! Check it out at: https://sepolia.etherscan.io/tx/${nftTxn.hash}`
  );
}

mintNFT()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
