import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {
  const [pokemon, setPokemon] = useState([])
  const getData = async function () {
    const pkmn = await axios.get('https://pokeapi.co/api/v2/pokemon')
    setPokemon(pkmn.data.results);
  }
  useEffect(function(){
    getData()
  },[])

  return (
    <div className='p-5'>
      <button className='px-3.5 py-3 active:scale-95 bg-emerald-500 rounded-xl' onClick={getData}>Show Pokemon</button>

      {pokemon.map(function(elm,idx){
        return <h1 key={idx}>{elm.name}</h1>
      })}
    </div>
  )
}

export default App
