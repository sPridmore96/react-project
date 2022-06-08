import React from "react";
import "./Buttons.scss";

const Buttons = (props) => {
  const { handleClick, buttonType } = props;

  let buttonStyle = "button"
    let buttonText = "+"

if (buttonType) {
    buttonStyle += " button--positive"
    buttonText = "+"
} else {
    buttonStyle += " button--negative"
    buttonText = "-"
}

  return (
 
      <button
        className={buttonStyle}
        onClick={handleClick}
      >
        {buttonText}
      </button>

  );
};

export default Buttons;
