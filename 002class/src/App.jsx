import React, { useState } from 'react'

const App = () => {
  const arr = ['sarthak','harsh','swagato']
  const [num, setNum] = useState(0)
  return (
    <div>
      <h1>{arr[num]}</h1>
      <button onClick={()=>{
        if(num<arr.length-1){
          setNum(num+1)
        }
        else{
          setNum(0)
        }
      }}>Change user</button>
    </div>
  )
}

export default App
