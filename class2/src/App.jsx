import React from 'react'

const App = () => {
  function btnClick(val) {
    console.log('Puuchhuk', val);
  }
  return (
    <div className='p-6'>
      <button
        // onClick={btnClick} //or
        onClick={function () {
          btnClick("done")
        }}
        className='active:scale-95 cursor-pointer px-3 py-2.5 bg-blue-600 rounded-xl text-2xl font-semibold'>Click to Download</button>
    </div>
  )
}

export default App