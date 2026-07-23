import React from 'react'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {
  const user1 = {
    name: "Swagato",
    age:23,
    gender:"Male"
  }

  const user2 = {
    name: "Disha",
    age:22,
    gender:"Female"
  }

  const user3 = {
    name: "Sweety",
    age:9,
    gender:"Female"
  }


  return (
    <div>
      {user3.gender == 'Male' ? (user3.age >10 ? <Men/> : <Women/>) : <Women/>}
    </div>
  )
}

export default App
