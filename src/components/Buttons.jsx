import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

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
  const { calc, setCalc } = useContext(CalcContext);

  const commaClick = () => {
    setCalc({
      ...calc,
      number: !calc.number.toString().includes(".")
        ? calc.number + value
        : calc.number,
    });
  };

  const resetClick = () => {
    setCalc({
      sign: "",
      number: 0,
      response: 0,
    });
  };

  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calc.number === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.number + numberString);
    }
    setCalc({
      ...calc,
      number: numberValue,
    });
  };

  const signClick = () => {
    setCalc({
      sign: value,
      response: !calc.response && calc.number ? calc.number : calc.response,
      number: 0,
    });
  };

  const equalsClick = () => {
    if (calc.response && calc.number) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        sign: "value",
        response: math(calc.response, calc.number, calc.sign),
        number: 0,
      });
    }
  };

  const percentClick = () => {
    setCalc({
      number: calc.number / 100,
      response: calc.response / 100,
      sign: "",
    });
  };

  const invertClick = () => {
    setCalc({
      number: calc.number ? calc.number * -1 : 0,
      response: calc.number ? calc.number * -1 : 0,
      sign: "",
    });
  };

  const handleBtnClick = () => {
    const result = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "+": signClick,
      "-": signClick,
      "=": equalsClick,
      "%": percentClick,
      "+-": invertClick,
    };
    if (result[value]) {
      return result[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button
      className={`${getStyleName(value)} buttons`}
      onClick={handleBtnClick}
    >
      {value}
    </button>
  );
};

export default Buttons;
