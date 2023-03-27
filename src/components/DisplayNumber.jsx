import { useState } from "react";

function DisplayNumber(props) {
  const [number, setNumber] = useState(0);

  const typeNumber = () => {
    setNumber();
  };

  return (
    <input
      className="display"
      type="text"
      value={number}
      onClick={typeNumber}
    />
  );
}

export default DisplayNumber;
