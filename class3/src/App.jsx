import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [allUsers, setAllUsers] = useState([])

  const submitHand = (e) => {
    e.preventDefault()

    const oldUser = [...allUsers]
    oldUser.push({ name, email })

    console.log(oldUser);
    setAllUsers(oldUser)
    setName('')
    setEmail('')

  }
  return (
    <div className='bg-blue-300 p-5 flex flex-col gap-3'>
      <div>
        <form className='border-2-black-100 p-1.5 flex gap-2 text-black' onSubmit={(e) => {
          submitHand(e)
        }}>
          <input className='p-2 outline outline-offset-2 rounded' type="text"
            placeholder='Enter your name'
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }} />

          <input className='p-2 outline outline-offset-2 rounded' type="email"
            placeholder='Enter your Email'
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} />
          <button className='px-3 py-2.5 bg-emerald-500 rounded-2xl active:scale-95 transition'>Submit</button>
        </form>
      </div>

      <div className='bg-cyan-600 px-4 py-8 rounded-xl text-blue-50'>
        {allUsers.map(function (elm, idx) {
          return <div>
            <h4 key={idx}>Name is: {elm.name}</h4>
            <p key={idx}>Email is: {elm.email}</p>
            <br />
          </div>
        })}
      </div>

    </div>
  )
}

export default App