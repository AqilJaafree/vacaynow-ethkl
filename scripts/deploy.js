const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying MyWEB contract with the account:", deployer.address);

  // Deploy the MyWEB contract with the deployer's address as the initial owner
  const MyWEB = await ethers.getContractFactory("MyWEB");
  const myWebContract = await MyWEB.deploy(deployer.address);

  await myWebContract.deployed();

  console.log("MyWEB contract deployed to:", myWebContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
