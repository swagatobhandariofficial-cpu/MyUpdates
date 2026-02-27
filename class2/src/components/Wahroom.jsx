import React from 'react'

const Wahroom = (props) => {
    return (
        <div className={`wash ${props.user}`}>{props.user} Washroom</div>
    )
}

export default Wahroom