import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form >
        <input className='m-3 px-5 py-2.5 border-1.5 rounded-xl' type="text" placeholder='Enter your name' />
        <input className='m-3 px-5 py-2.5 border-1.5 rounded-xl' type="text" placeholder='image url' />
        <input className='m-3 px-5 py-2.5 border-1.5 rounded-xl' type="text" placeholder='Enter Role' />
        <input className='m-3 px-5 py-2.5 border-1.5 rounded-xl' type="text" placeholder='Enter Description' />
        <button className='bg-white transition-all active:bg-blue-800 active:text-white active:scale-95 text-black px-2 py-1.5 rounded-xl'>Submit</button>
      </form>
    </div>
  )
}

export default App
