import React, { useState } from 'react'

const App = () => {
  const name = ['Swagato', 'Disha', 'Debanjan', 'Srija', 'Subham', 'Badam']
  const [marks, setMarks] = useState([32, 34, 66, 90, 80, 99])
  

  function grace() {
    const newMarks = marks.map(function (elm) {
      if(elm>=95){
        return elm
      }
      else{
        return elm + 5
      }
    })
    setMarks(newMarks)
  }

  return (
    <div>
      {marks.map(function (elem, idx) {
        return  <h1 key={idx}>
                  {name[idx]} of student {idx + 1} is: {elem} ({elem>=35?'PASS':'FAIL'}) — Grade: {
                        elem >= 90 ? 'A+' :
                        elem >= 75 ? 'A' :
                        elem >= 60 ? 'B' :
                        elem >= 50 ? 'C' :
                        elem >= 35 ? 'D' :
                        'F'
  }
                </h1>

      })}
      <button onClick={grace}> Give them Grace</button>
    </div>
  )
}

export default App