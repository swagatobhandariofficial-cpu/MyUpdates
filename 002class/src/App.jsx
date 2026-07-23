import React, { useState } from 'react'

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
    </div>
  )
}

export default App
