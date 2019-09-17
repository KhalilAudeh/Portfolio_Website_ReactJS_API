import React from 'react'
import CardInfo from './CardInfo'

function Card(props) {
    return (
        <div onClick={(e) => {props.onClick(props.card)}}>
            <img className="design-img" src={props.card.img} alt={props.card.img}></img>
            {props.card.selected && <CardInfo title={props.card.title} subTitle={props.card.subTitle} Link={props.card.Link}/>}
        </div>
    )
}

export default Card
