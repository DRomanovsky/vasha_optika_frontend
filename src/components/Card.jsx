import React from 'react'
import img from '../assets/images/image 1.png'

const Card = ({goods}) => {
  return (
    <div className="itemCard">
      <div className="cardImage">
        <img src={process.env.REACT_APP_API_URL + '/' + goods.image} alt="cardImage"/>
      </div>
      <div className="cardName">
        {goods.name}
      </div>
      <div className="cardDesc">
        {goods.description}   
      </div>
      <div className="cardPrice">
        {goods.price + ' руб.'}
      </div>
      <div className="cardButton">
        <button>Подробнее</button>
      </div>
  </div>
  )
}

export default Card