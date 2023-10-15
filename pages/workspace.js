import React, { useState } from "react";

const Workspace = () => {
    const [inputValue, setInputValue] = useState("");
    const [iframeSrc, setIframeSrc] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleGoButtonClick = () => {
        setIframeSrc(inputValue);
    }

    return (
        <div>
            <div className="flex">
                <form action="" className="overflow-hidden p-5 ml-28">
                    <input
                        type="text"
                        id="tokenId"
                        name="tokenId"
                        value={inputValue}
                        placeholder="Please paste your token ID here 😊"
                        onChange={handleInputChange}
                        className="w-[1152px] h-[50px] border-[5px] border-solid border-black bg-[#D9D9D9] rounded-[50px] p-3 font-mono"
                    />
                </form>
                <button
                    className="font-serif font-extrabold border-[5px] border-solid bg-[#D9D9D9] border-black w-[100px] h-[50px] rounded-[50px] mt-5"
                    onClick={handleGoButtonClick}
                >
                    GO
                </button>
            </div>
            {iframeSrc && (
                <iframe
                    src={iframeSrc}
                    width="800"
                    height="600"
                    frameborder="0"
                    title="My Laptop-sized Frame"
                    className="border-[5px] m-auto bg-black"
                ></iframe>
            )}
        </div>
    );
}

export default Workspace;
