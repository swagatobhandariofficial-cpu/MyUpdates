import React from 'react'

const Card = (props) => {
    return (
        <div className='lg:w-[20vw] lg:h-80 md:w-[30vw] md:h-90 sm:w-[40vw] rounded-xl text-center p-5 flex items-center flex-col bg-white text-taupe-950 '>
            <img className='h-22 w-22 rounded-full object-center object-cover' src={props.elm.url} alt="" />
            <h1 className='text-xl font-semibold m-0.5'>{props.elm.name}</h1>
            <h6 className='text-sm text-blue-400 font-semibold my-0.5'>{props.elm.role}</h6>
            <p className='py-2.5 px-4 text-sm my-0.5 font-light leading-tight '>{props.elm.description}</p>
            <button onClick={() => {
                props.dltuser(props.idx)
            }} className='text-white my-2.5 px-3 py-1.5 rounded-[8px] text-sm bg-red-500 active:bg-red-400 active:scale-95 cursor-pointer transition-colors '>Remove</button>
        </div>
    )
}

export default Card
