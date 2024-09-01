import React from "react";
import loader from "../assets/loader.gif"

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img
          src={loader}
          alt=""
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
