import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  //use state
  // const [name, setName] = useState("Tanya");
  // const [flag, setFlag] = useState(false);
  // const [clicked, setClicked] = useState(0);
  // const [names, setNames] = useState([]);

  // const changeName = () => {
  //   console.log("button clicked");
  //   setClicked(clicked + 1);

  //   setFlag(true);
  //   setName("Yahvi");
  //   console.log(name);
  // };

  // const saveName = (e) => {
  //   e.preventDefault();
  //   setNames([...names, { id: names.length, name }]);
  //   setName("");
  // };

  // const margleft = {
  //   marginLeft: 42,
  // };

  // return (
  //   <div>
  //     <div className="App">
  //       <h2>hi, {flag ? name : ""}</h2>
  //       <button onClick={changeName}>Click me </button>
  //       <h3>Button is clicked: {clicked} times</h3>
  //     </div>
  //     <form onSubmit={saveName} style={margleft}>
  //       <input
  //         type="text"
  //         value={name}
  //         placeholder="Add name"
  //         onChange={(e) => setName(e.target.value)}
  //       ></input>
  //       <button>Submit</button>
  //     </form>
  //     <ul>
  //       {names.map((name) => (
  //         <li key={name.id}>{name.name}</li>
  //       ))}
  //     </ul>
  //   </div>

  // use ref
  /*
  useRef hook -  allows you to create a mutable reference to an element or a value. Unlike the useState hook, updating a useRef does not trigger a re-render of the component. It's commonly used for accessing and managing DOM elements directly, storing persistent values, or working with values that should not trigger a re-render.
  1. DOM Reference for dom manipulation
  2. useRef for storing Previous state
  */
  const [name, setName] = useState("");
  const [counter, setCounter] = useState();
  const previousCounterValue = useRef("");

  useEffect(() => {
    previousCounterValue.current = counter;
  }, [counter]);

  const inputEl = useRef();
  const resetTxt = () => {
    setName("");
    inputEl.current.focus();
  };

  return (
    <div style={{ marginLeft: 420 }}>
      <form>
        <input
          type="text"
          ref={inputEl}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={resetTxt}>Reset</button>
      </form>
      <h2>Name is {name}</h2>
      <div>
        <h2>Random counter: {counter}</h2>
        <button onClick={() => setCounter(Math.ceil(Math.random() * 100))}>
          Generate Number
        </button>
        <h3>
          {typeof previousCounterValue.current !== "undefined" && (
            <p>Previous value:{previousCounterValue.current}</p>
          )}
        </h3>
      </div>
    </div>
  );
}

export default App;
