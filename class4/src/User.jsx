import React from 'react'

const User = (props) => {

    const clr1 = Math.floor(Math.random()*256)
    const clr2 = Math.floor(Math.random()*256)
    const clr3 = Math.floor(Math.random()*256)

    return (
        <div style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}} className='h-60 w-55 rounded-xl m-4 p-6'> 

            <h2 className='text-3xl font-bold'>{props.elm.name}</h2>
            <p>{props.elm.website}</p>
        </div>
    )
}

export default User
