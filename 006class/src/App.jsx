import React from 'react'
import Card from './components/Card'

const App = () => {

  const cardData = {
    username: 'Swagato',
    role: 'Developer',
    email: 'swag@gmail.com',
    url: "https://images.unsplash.com/photo-1645241151400-b15f80c5f5b2?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  return (
    <div>
      <Card cardData={cardData} />
    </div>
  )
}

export default App
