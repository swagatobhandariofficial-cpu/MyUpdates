import React from 'react'

const App = () => {
  const marks =[20,23,66,90,80,99]
  const name  =['Swagato','Disha','Debanjan','Srija','Subham','Badam']
  return (
    <div>
      {marks.map(function(elem,idx){
        return <h1>{name[idx]} of student {idx+1} is: {elem+100}</h1>
        
      })}
    </div>
  )
}

export default App