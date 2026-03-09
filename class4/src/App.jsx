import React, { useEffect } from 'react'
import axios from "axios";

const App = () => {
  const getData = async function () {
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon')
    console.log(pokemon);
  }

  useEffect(function () {
    getData()
  })

  return (
    <div>
      hiioi
    </div>
  )
}

export default App
