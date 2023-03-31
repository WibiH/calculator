import "./App.css";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Buttons from "./components/Buttons";
import CalcProvider from "./context/CalcContext";

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <div className="calculator">
      <div className="h1">
        {" "}
        <h1>
          Cal
          <br />
          cool
          <br />
          ator
        </h1>{" "}
      </div>
      <CalcProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {buttonValues.flat().map((btn, i) => (
              <Buttons value={btn} key={i} />
            ))}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </div>
  );
}

export default App;
