import React, { useState } from 'react'
import axios, { all } from "axios";
import User from './User';



const App = () => {

  const [allData, setAllData] = useState([])

  async function getData() {
    const promis = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(promis.data.name);
    setAllData(promis.data)
  }
  return (
    <div className='p-10 '>
      <button className='px-4 py-3 bg-emerald-400 hover:bg-emerald-300 poi rounded-2xl active:scale-95 cursor-pointer' onClick={getData}>Click Me🍒</button>

      <div className='flex flex-wrap justify-evenly'>
        {allData.map(function (elm, idx) {
          return <div key={idx}>
            <User elm={elm}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default App