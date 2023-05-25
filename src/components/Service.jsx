import React from 'react'
import ServiceCard from './ServiceCard'
import { useEffect, useContext } from 'react'
import { Context } from '../index'
import {fetchServiceCategory, fetchServices } from '../http/servicesAPI'

const Service = ({servicesCategory}) => {
  const {services} = useContext(Context)
  return (
    <div className="servic">
      <div className="serviceName">
        {servicesCategory.name}
      </div>
          {services.services.map(service =>
            {
              (service.servicesCategoryId === servicesCategory.id 
                ? <ServiceCard key={service.id} service={service}/>
                : <div>{servicesCategory.id }</div>
            )
          }
          )}
  </div>
  )
}

export default Service