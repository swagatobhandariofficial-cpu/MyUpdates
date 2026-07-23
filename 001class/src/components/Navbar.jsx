import React from 'react'

const Navbar = (props) => {
    return (
        <div style={{backgroundColor:props.color}} className='mb-1 text-black px-8 py-5 flex items-center justify-between'>
            <h2 className='text-2xl'>{props.title}</h2>
            <div className='flex gap-7'>
                {props.links.map(function (elm,idx) {
                    return <h4 key={idx} className='text-base '>{elm}</h4>
                })}
            </div>
        </div>
    )
}

export default Navbar
