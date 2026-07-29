import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [role, setRole] = useState('')
  const [description, setDescription] = useState('')

  const [allUsers, setAllUsers] = useState([])


  const submthndl = (e) => {
    e.preventDefault()
    const oldUsers = [...allUsers]
    oldUsers.push({ name, url, role, description })
    setAllUsers(oldUsers)
    console.log(oldUsers);



    console.log(name, url, role, description);

    setName('')
    setRole('')
    setUrl('')
    setDescription('')
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e) => {
        submthndl(e)
      }}>
        <input value={name} onChange={(e) => {
          setName(e.target.value)

        }} className='m-3 px-5 py-2.5 border-1.5 rounded-xl' type="text" placeholder='Enter your name' />

        <input value={url} onChange={(e) => {
          setUrl(e.target.value)

        }} className='m-3 px-5 py-2.5 border-1.5 rounded-xl' type="text" placeholder='image url' />

        <input value={role} onChange={(e) => {
          setRole(e.target.value)

        }} className='m-3 px-5 py-2.5 border-1.5 rounded-xl' type="text" placeholder='Enter Role' />

        <input value={description} onChange={(e) => {
          setDescription(e.target.value)

        }} className='m-3 px-5 py-2.5 border-1.5 rounded-xl' type="text" placeholder='Enter Description' />

        <button className='bg-white m-2 transition-all active:bg-blue-800 active:text-white active:scale-95 cursor-pointer text-black px-2 py-1.5 rounded-xl '>Submit</button>
      </form>

      <div className='m-4 px-5 py-4 border-1.5 rounded-xl flex flex-wrap gap-3' >
        {allUsers.map((elm,idx) => {
          return <div key={idx} className='lg:w-[20vw] lg:h-80 md:w-[30vw] md:h-90 sm:w-[40vw] rounded-xl text-center p-5 flex items-center flex-col bg-white text-taupe-950 '>
            <img className='h-22 w-22 rounded-full object-center object-cover' src={elm.url} alt="" />
            <h1 className='text-xl font-semibold m-0.5'>{elm.name}</h1>
            <h6 className='text-sm text-blue-400 font-semibold my-0.5'>{elm.role}</h6>
            <p className='py-2.5 px-4 text-sm my-0.5 font-light leading-tight '>{elm.description}</p>
            <button onClick={()=>{

            }} className='text-white my-2.5 px-3 py-1.5 rounded-[8px] text-sm bg-red-500 active:bg-red-400 active:scale-95 cursor-pointer transition-colors '>Remove</button>
          </div>
        })}

      </div>
    </div>
  )
}

export default App
