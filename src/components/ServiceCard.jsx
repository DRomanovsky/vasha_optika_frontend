import React from 'react'
import { useContext, useEffect } from 'react'

const ServiceCard = ({service}) => {
  return (
    <div>
        <div>{service.name}</div>
    </div>    
  )
}

export default ServiceCard