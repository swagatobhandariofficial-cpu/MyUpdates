import React from 'react'

const App = () => {
  return (
    <div>
      <div>
        <input type="radio" name="gender" id="male" />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input type="radio" name="gender" id="female" />
        <label htmlFor="female">Female</label>
      </div>
    </div>
  )
}

export default App