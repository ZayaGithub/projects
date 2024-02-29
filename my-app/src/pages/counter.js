import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  const handleButton = () => {
    setNumber(number + 1);
  };

  const handleButtonTwo = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>Count:{number}</h1>
      {/* Argument damjuulsan */}
      <button onClick={() => handleButton()}>+</button>

      {/* Argument damjuulaagui */}
      <button onClick={handleButtonTwo}>-</button>
    </div>
  );
}
