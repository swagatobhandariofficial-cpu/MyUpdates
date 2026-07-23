import React, { useState } from 'react'

const App = () => {
  const [king, setking] = useState("Jack")
  const [Queen, setQueen] = useState("Rose")

  const cngKing = ()=>{
    setking('Swagato')
  }
  const cngQueen = ()=>{
    setQueen('Disha')
  }
  return (
    <div>
      <h1>{king} x {Queen}</h1>
      <button onClick={cngKing}>Change king</button>
      <button onClick={cngQueen}>Change Queen</button>
    </div>
  )
}

export default App
