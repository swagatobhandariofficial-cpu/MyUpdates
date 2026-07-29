import React from 'react'

const Card = (props) => {


    return (
        <div className='card'>
            <div className='upper'>
                <img src={props.cardData.url} alt="" />
            </div>
            <div className='lower'>
                <h2>{props.cardData.username}</h2>
                <h4>{props.cardData.email}</h4>
                <h3>{props.cardData.role}</h3>
            </div>
        </div>
    )
}

export default Card
