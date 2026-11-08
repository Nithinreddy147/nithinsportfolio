import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="loader-ring" aria-label="Loading" role="status" />
    </div>
  );
};

export default LoadingScreen;
