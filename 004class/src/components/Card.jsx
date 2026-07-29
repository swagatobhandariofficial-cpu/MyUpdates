import React from 'react'

const Card = () => {
    return (
        <div className='w-[20vw] h-80 rounded-xl text-center p-5 flex items-center flex-col bg-white text-taupe-950 '>
            <img className='h-22 w-22 rounded-full' src="https://images.unsplash.com/photo-1660730531500-30f2ef704442?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className='text-xl font-semibold m-0.5'>Swagato</h1>
            <h6 className='text-sm text-blue-400 font-semibold my-0.5'>Developer</h6>
            <p className='py-2.5 px-4 text-sm my-0.5 font-light leading-tight '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione, at esse velit atque iste praesentium minima a floral.</p>
            <button className='text-white my-2.5 px-3 py-1.5 rounded-[8px] text-sm bg-red-500 active:bg-red-400 active:scale-95 cursor-pointer transition-colors '>Remove</button>
        </div>
    )
}

export default Card
