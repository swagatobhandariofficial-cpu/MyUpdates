
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div >
      <Navbar title='Debanjan' color='pink' links={['Home','About','Accounts','Conatact']}/>
      <Navbar title='Swagato' color='red' links={['Home','Login','Orders','Support']}/>
      <Navbar title='Srija' color='purple' links={['Home','Info','Cart','Delivery']}/>
    </div>
  )
}

export default App