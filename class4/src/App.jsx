import React, { useEffect, useState } from 'react'

const App = () => {


  const [firstNumber, setFirstNumber] = useState('00')
  const [secondNumber, setSecondNumber] = useState('00')
  const [thirdNumber, setThirdNumber] = useState('00')

  useEffect(() => {
    console.log("use effect running");

  }, [secondNumber])
  return (


    <div className='p-5 h-screen bg-black text-white'>
      <h1 className='p-0.5 text-5xl text-amber-200 m-0.5'>{firstNumber}</h1>
      <button className='px-2.5 py-3 bg-emerald-500 rounded-2xl text-xl active:scale-95' onClick={() => {
        setFirstNumber(Math.floor(Math.random() * 100))
      }}>Change Number1</button>
      <br />
      <br />
      <h1 className='p-0.5 text-5xl text-blue-300 m-0.5'>{secondNumber}</h1>
      <button className='px-2.5 py-3 bg-emerald-500 rounded-2xl text-xl active:scale-95' onClick={() => {
        setSecondNumber(Math.floor(Math.random() * 100))
      }}>Change Number2</button>
      <br />
      <br />
      <h1 className='p-0.5 text-5xl text-red-400 m-0.5'>{thirdNumber}</h1>
      <button className='px-2.5 py-3 bg-emerald-500 rounded-2xl text-xl active:scale-95' onClick={() => {
        setThirdNumber(Math.floor(Math.random() * 100))
      }}>Change Number3</button>
    </div>
  )
}

export default App
