import React from "react";

const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    x: "operators",
    "-": "operators",
    "+": "operators",
    "/": "operators",
  };
  return className[btn];
};

const Buttons = ({ value }) => {
  return <button className={`${getStyleName(value)} buttons`}>{value}</button>;
};

export default Buttons;
