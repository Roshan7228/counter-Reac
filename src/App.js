
import { useState } from 'react';
import './App.css';

function App() {

  let [counter,setCounter]=useState(0);

  function Decrement(){
    setCounter(counter-1);
  }
  function Reset(){
    setCounter(counter=0);
  }
  function Increment(){
    setCounter(counter+1);
  }

  return (
    <div className="App">
        <div className='container'>
          <h1>COUNTER</h1>
          <h2>{counter}</h2>
          <button  className='dec' onClick={Decrement}>Decrement</button>
          <button className='res' onClick={Reset}>Reset</button>
          <button className='inc' onClick={Increment}>Increment</button>
        </div>
    </div>
  );
}

export default App;
