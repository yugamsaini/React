import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//hooks help in update the data at different places
//because ui update ko react handle krta hai
function App() {
  // const [count, setCount] = useState(0)
      //  let counter = 15;
    const [counter, setCount] = useState(15);
  
  const addValue = () =>{
    console.log("value added", counter);
    // counter = counter + 1;
    setCount(counter + 1);
    
  }
  return (
    <>
      
        <h1>CHAI OR REACT</h1>
        <h2>Counter Value : {counter}</h2>
        <button
          onClick = {addValue}
        >Add Value</button>
        <button>Decrease Value</button>

    </>
  )
}

export default App
