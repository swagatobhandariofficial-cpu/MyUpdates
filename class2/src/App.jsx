import React, { useState } from 'react'

const App = () => {

  const [king, setking] = useState('Swagato')
  const [queen, setqueen] = useState('Jimmy')

  const cngKing = () => {
    setking('Tree')
  }

  const cngQueen = () => {
    setqueen('Butterfly')
  }

  return (
    <div className='p-6'>
      <h1 className='text-2xl'>{king} X {queen}</h1>
      <button onClick={cngKing} className='active:scale-97 bg-orange-700 text-white px-3 py-1.5 m-1 font-bold text-xl rounded-2xl'>Change King</button>
      <button onClick={cngQueen} className='active:scale-97 bg-pink-900 text-white px-3 py-1.5 m-1 font-bold text-xl rounded-2xl'>Change Queen</button>
    </div>
  )
}

export default App