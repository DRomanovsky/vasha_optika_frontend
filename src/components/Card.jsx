import React from 'react'
import img from '../assets/images/image 1.png'

const Card = ({goods}) => {
  return (
    <div class="itemCard">
      <div class="cardImage">
        <img src={process.env.REACT_APP_API_URL + goods.image} alt="cardImage"/>
      </div>
      <div class="cardName">
        {goods.name}
      </div>
      <div class="cardDesc">
        {goods.description}   
      </div>
      <div class="cardPrice">
        {goods.price + ' руб.'}
      </div>
      <div class="cardButton">
        <button>Подробнее</button>
      </div>
  </div>
  )
}

export default Card