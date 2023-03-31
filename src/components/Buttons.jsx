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
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const resetClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }
    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.ers,
      num: 0,
    });
  };

  const equalsClick = () => {
    if (calc.res && calc.num) {
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
        res: math(calc.res, calc.num, calc.sign),
        num: 0,
      });
    }
  };

  const percentClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
    });
  };

  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.num ? calc.num * -1 : 0,
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
