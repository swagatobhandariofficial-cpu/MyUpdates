import React from 'react'

const Navbar = (props) => {
    console.log();

    return (
        <div style={{backgroundColor:props.color}} className='bg-pink-950 text-2xl text-white px-8 py-3 flex items-center justify-between mb-0.5 mt-0.5'>
            <h1>{props.title}</h1>

            <div className='flex items-center justify-between w-2/5'>
                {props.links.map(function (elem,idx) {
                    return <h4 key={idx}>{elem}</h4>
                })}
            </div>
        </div>
    )
}

export default Navbar