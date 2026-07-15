import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {
  const [randomuser, setRandomuser] = useState('')
  const [num, setNum] = useState(0)
  const getData = async function () {

    const users = await axios.get('https://randomuser.me/api/')
    setRandomuser(users.data.results[0].name.first + " " + users.data.results[0].name.last);
  }
  useEffect(function () {
    getData()
  }, [num])

  return (
    <div className='p-5'>
      <h1>{num}</h1>
      <button className='px-3.5 py-3 active:scale-95 bg-emerald-500 rounded-xl' onClick={()=>{
        setNum(num+1)
      }}>Show User</button>
      <h1>{randomuser}</h1>

    </div>
  )
}

export default App
