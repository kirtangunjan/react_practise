import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      hiii there
      <Counter></Counter>
    </div>
  )
}

function Counter(){
  const [count,setcount]=useState(0)


  function increaseCount(){
    setcount(count+1)
  }

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Counter Increase</button>
    </div>
  )
}

export default App
