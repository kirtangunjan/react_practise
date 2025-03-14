import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[visible,setvisible]=useState(true)

  useEffect(function(){
    setInterval(function(){
      setvisible(c=>!c)
    },5000)
  },[])



  return (
    <div>
      hiii there
      {visible && <Counter></Counter>}
    </div>
  )
}

function Counter(){
  const [count,setcount]=useState(0)

   
  useEffect(function(){
    console.log('mount')
    let clock=setInterval(function(){
      console.log('from inside interval')
      setcount(count=>count+1)
    },1000);

    return function(){
      console.log("unmount")
      clearInterval(clock)
    }
  },[])


  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default App
