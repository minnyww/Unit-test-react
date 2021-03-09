import logo from "./logo.svg";
import "./App.css";
import useCounter from "./useCounter";
import { useState } from "react";

function App() {
  const { increment, reset, count } = useCounter(0);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2 data-testid="count-result">result : {count}</h2>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => reset()}>reset</button>

      {show ? <h1>Content Show </h1> : <p>Content Hidden</p>}
      <button
        data-testid="hidden-button"
        onClick={() => setShow((prev) => !prev)}
      >
        Hidden
      </button>
      <h2 data-testid="input-result">{input}</h2>
      <input
        placeholder="test-input"
        onChange={({ target: { value } }) => setInput(value)}
      />
    </div>
  );
}

export default App;
