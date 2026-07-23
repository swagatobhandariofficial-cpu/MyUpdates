import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  return (
    <div>
      <div className='box'>
        {num}
      </div>
      <button onClick={()=>{
        const rndm = Math.floor(Math.random()*100)
        setNum(rndm)
      }}>Click </button>
    </div>
  )
}

export default App
