import React, { useState } from 'react'

const App = () => {

  const [marks, setMarks] = useState([88, 78, 96, 35, 34])

  function grace() {
    const newMa = marks.map(function (elm) {
      return elm + 5
    })
    setMarks(newMa)
  }

  return (
    <div>
      {marks.map(function (elm, idx) {
        return <h1 key={idx}> Marks of students {idx + 1} is {elm}</h1>
      })}

      <button onClick={grace}>Give them grace of 5 marks</button>
    </div>
  )
}

export default App
