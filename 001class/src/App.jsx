import React from 'react'

const App = () => {

  function btnclik() {
    console.log("Button is clicked");
  }

  
  return (
    <div>
      <button
      onClick={btnclik}
      className='active:scale-95 bg-emerald-600 text-2xl text-white m-2 px-6.5 py-5 rounded-2xl font-bold'>
        Click To Download 
      </button>
    </div>
  )
}

export default App
