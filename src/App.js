import { useState } from "react";
import "./App.css";

function App() {
  const [calculate, setCalculate] = useState("");
  const [result, setResult] = useState("");

  const operators = ["+", "-", "/", "*", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calculate === "") ||
      (operators.includes(value) && operators.includes(calculate.slice(-1)))
    ) {
      return;
    }
    setCalculate(calculate + value);

    if (!operators.includes(value)) {
      setResult(eval(calculate + value).toString());
    }
  };

  const createCiphers = () => {
    const ciphers = [];
    for (let i = 1; i < 10; i++) {
      ciphers.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }
    return ciphers;
  };
  const doTheMath = () => {
    setCalculate(eval(calculate).toString());
  };

  return (
    <div className="calculator">
      <h1>
        Cal<i>cool</i>ator
      </h1>

      <div>
        {" "}
        {result ? <span>({result})</span> : ""}
        {calculate || "0"}
      </div>

      <div className="operators">
        <button>C</button>
        <button name="/" onClick={() => updateCalc("/")}>
          /
        </button>
        <button name="x" onClick={() => updateCalc("*")}>
          x
        </button>
        <button name="-" onClick={() => updateCalc("-")}>
          -
        </button>
        <button name="+" onClick={() => updateCalc("+")}>
          +
        </button>
      </div>

      <div className="ciphers">
        {createCiphers()}
        <button name="0" onClick={() => updateCalc("0")}>
          0
        </button>
        <button name="." onClick={() => updateCalc(".")}>
          .
        </button>
        <button name="=" onClick={doTheMath}>
          =
        </button>
      </div>
      <div>
        <button name="+-">+-</button>
        <button name="%">%</button>
      </div>
    </div>
  );
}

export default App;
