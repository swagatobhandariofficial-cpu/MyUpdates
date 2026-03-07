import React from 'react'
import axios from 'axios'

const App = () => {
  async function getData(){
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    console.log(response.data);
    
  }
  return (
    <div className='p-20'>
      <button className='px-4 py-3 bg-emerald-400 rounded-2xl active:scale-105' onClick={getData}>Data</button>
    </div>
  )
}

export default App
