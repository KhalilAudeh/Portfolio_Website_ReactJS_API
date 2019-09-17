import React from 'react'
import {useSpring, animated} from 'react-spring'

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}})
    return (
        <animated.div className="card-info" style={style}>
            <p style={{fontSize:"25px"}}>{props.title}</p>
            <p style={{fontSize:"15px", marginTop:"-15px", fontStyle:"italic"}}>{props.subTitle}</p>
            <a href={props.Link}>Visit..</a>
        </animated.div>
    )
}

export default CardInfo
