import { React, useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 7);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 7);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className='counter'>
      <h1>DogLife Counter🐶</h1>
      <h3>From a human perspective🙆🏿</h3>
      <span className='output'>{counter}</span>
      <div className='btn_container'>
        <button className='ctrl_btn' onClick={increase}>
          Increase 🐕
        </button>
        <button className='ctrl_btn' onClick={decrease}>
          Decrease 🐩
        </button>
        <button className='reset_btn' onClick={reset}>
          Reset 🐕‍🦺
        </button>
      </div>
    </div>
  );
}

export default App;
