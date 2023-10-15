import React from "react";

const NavigationBar = () => {
  return (
    <div className="flex justify-end">
      <a href="#" className="box l border border-solid border-black">
        Home
      </a>
      <a href="/workspace" className="box l">
        Workspace
      </a>
    </div>
  );
};

export default NavigationBar;
