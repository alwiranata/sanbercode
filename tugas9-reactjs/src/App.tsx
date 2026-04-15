import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    console.log("Count:", count);
  }, [count]);

  return (
    <div className="container">
      <div className="card">
        <p className="title">Simple Counter</p>

        <h1 className="count">{count}</h1>

        <p className="desc">
          Klik tombol untuk menambah atau mengurangi angka
        </p>

        <div className="button-group">
          <button
            className="button"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>

          <button
            className="button plus"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;