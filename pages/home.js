import React, { useState } from "react";

const Home = () => {
  const [website, setWebsite] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log("Requesting Account...");

    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts && accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      alert("MetaMask not detected");
    }
  }

  return (
    <div>
      <div className="flex justify-end">
        <a href="#" className="box l border border-solid border-black">
          Home
        </a>
        <a href="#" className="box l">
          Showcase
        </a>
        <button className="box l" onClick={requestAccount}>
          Connect Wallet
        </button>
      </div>
      <div className="boxcenter">
        <form>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Enter your website"
          />
          <button type="submit">Submit</button>
        </form>
        <h3>Wallet Address: {walletAddress}</h3> {}
      </div>
    </div>
  );
};

export default Home;
