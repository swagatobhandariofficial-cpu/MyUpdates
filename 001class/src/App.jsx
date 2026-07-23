import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <h1>
        <Navbar title='Swagato' color='red' links={['Home' ,'About' , 'Men' , 'Woman']} />
        <Navbar title='Tomy' color='blue' links={['Home' ,'Info' , 'Contact' , 'Report' , 'Nehi']}/>
        <Navbar title='nice' color='green' links={['Order' ,'Info' , 'Order again' , 'Console']}/>
      </h1>
    </div>
  )
}

export default App
