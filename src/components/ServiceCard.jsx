import React from 'react'
import { useContext, useEffect } from 'react'

const ServiceCard = ({service}) => {
  console.log(service)
  return (
    <div>
        <div>{service.name}</div>
        <div>{service.price + ' руб.'} </div>
    </div>    
  )
}

export default ServiceCard