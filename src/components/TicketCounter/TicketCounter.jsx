import React, { useState } from "react";
import "./TicketCounter.scss";
import Button from "../Buttons/Buttons";

const TicketCounter = (props) => {
  const [counter, setCounter] = useState(Math.floor(Math.random() * 20 ));

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <>
      <div className="count-container">
        <p>{counter}</p>
      </div>

      <div className="button-container">
        <Button buttonType={true} handleClick={handleIncrement} />
        <Button buttonType={false} handleClick={handleDecrement} />
      </div>
    </>
  );
};

export default TicketCounter;
