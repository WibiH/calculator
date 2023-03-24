import { useState } from "react";

function DisplayNumber() {
  const [number, setNumber] = useState(0);

  const typeNumber = () => {
    setNumber(number);
  };

  return <input type="text" value={number} onClick={typeNumber} />;
}

export default DisplayNumber;
