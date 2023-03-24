import "./App.css";
import DisplayNumber from "./components/DisplayNumber";
import PlusMinusBtn from "./components/PlusMinusBtn";
import MathOperationsBtns from "./components/MathOperationsBtns";
import PercentageBtn from "./components/PercentageBtn";
import ClearAll from "./components/ClearAll";

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
    <div className="App">
      <table>
        <thead>
          {" "}
          <tr>
            <th colspan="4">
              {" "}
              <DisplayNumber />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <button>C</button>
              <ClearAll />
            </td>
            <td>
              {" "}
              <button>+-</button>
              <PlusMinusBtn />
            </td>
            <td>
              {" "}
              <button>%</button>
              <PercentageBtn />
            </td>
            <td>
              <button>
                / <MathOperationsBtns />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button>7 </button>
            </td>
            <td>
              <button>8</button>
            </td>
            <td>
              <button>9</button>
            </td>
            <td>
              <button>
                x <MathOperationsBtns />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button>4</button>
            </td>
            <td>
              <button>5</button>
            </td>
            <td>
              <button>6</button>
            </td>
            <td>
              <button>
                - <MathOperationsBtns />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button>1</button>
            </td>
            <td>
              <button>2</button>
            </td>
            <td>
              <button>3</button>
            </td>
            <td>
              <button>
                + <MathOperationsBtns />
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <button>0</button>
            </td>
            <td>
              <button>,</button>
            </td>
            <td>
              <button>=</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
