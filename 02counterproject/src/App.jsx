import { useState } from "react";

function App() {


  const [counter, setCounter] = useState(0);


  const addValue = () => {
    // console.log(`value added: ${Math.random()*10}`)
    // counter = counter + 1;
    setCounter(counter+1)
  }

  const removeValue = () => {
    // console.log(`value added: ${Math.random()*10}`)
    if(counter === 0){
      document.createElement('p').innerHTML = 'Action not allowed';
    }else{
      setCounter(counter-1)
    }   
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App

// Add method where value will not be zero.