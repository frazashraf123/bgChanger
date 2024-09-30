import "./App.css";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="cont" style={{ backgroundColor: color }}>
      <button
        onClick={() => setColor("red")}
        style={{ backgroundColor: "red" }}
      >
        Red
      </button>
      <button
        onClick={() => setColor("blue")}
        style={{ backgroundColor: "blue" }}
      >
        Blue
      </button>
      <button
        onClick={() => setColor("yellow")}
        style={{ backgroundColor: "yellow" }}
      >
        Yellow
      </button>
      <button
        onClick={() => setColor("pink")}
        style={{ backgroundColor: "pink" }}
      >
        Pink
      </button>
      <button
        onClick={() => setColor("green")}
        style={{ backgroundColor: "green" }}
      >
        Green
      </button>
    </div>
  );
}

export default App;
