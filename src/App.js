import "./App.css";
import CalculatorButtons from "./components/CalculatorButtons";

/* Calculator functions
- type in numbers in form
- do math operations + - * /
- type in +/- numbers
- do %
- clear all
- display numbers
- return result
 */

function App() {
  return (
    <div className="calculator">
      <h1>
        Cal<i>cool</i>ator
      </h1>

      <CalculatorButtons />
    </div>
  );
}

export default App;
