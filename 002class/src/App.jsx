import React, { useState } from 'react'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {
  const [gender, setGende] = useState('Male')
  function chngend() {
    if (gender == 'Male'){
      setGende('Female')
    }
    else{
      setGende('Male')
    }
  }
  return (
    <div className='parent'>
      <h1>{gender}</h1>
      <button onClick={chngend}>Change Gender</button>
      {gender=='Male'? <Men/> : <Women/> }
    </div>
  )
}

export default App
