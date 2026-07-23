import React, { useState } from 'react'

const App = () => {
  const [num, setnNum] = useState(0)


  return (
    <div>
      <h1>{num}</h1>
      <div>
        <button onClick={()=>{
        setnNum(num+1)
      }}>Increase</button>
      <button onClick={()=>{
        setnNum(num-1)
      }}>Decrease</button>
      </div>
    </div>
  )
}

export default App

