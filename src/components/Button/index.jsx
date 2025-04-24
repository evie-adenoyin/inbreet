import React from "react";

const Button = ({ text, handleOnClick, className, variation = false }) => {
  const darkButton = {
    color: "white",
    background: "#0A2640",
  };
  const lightButton = {
    color: "#0A2640",
    background: "none",
    border: "2px solid #0a2640",
  };
  return (
    <button
      style={variation ? darkButton : lightButton}
      className={className}
      onClick={() => handleOnClick()}
    >
      {text}
    </button>
  );
};

export default Button;
